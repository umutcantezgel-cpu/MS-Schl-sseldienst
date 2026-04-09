"use server";

import { z } from "zod";
import { logger } from "@/lib/logger";
import { headers } from "next/headers";

// ─── Sanitization Helpers ───
const sanitizeText = (text: string) => text.trim().replace(/<[^>]*>?/gm, "");

// ─── Zod Schema (shared with client) ───
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte geben Sie Ihren Namen ein.")
    .max(100, "Name ist zu lang.")
    .transform(sanitizeText),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Bitte prüfen Sie Ihre E-Mail-Adresse.")
    .max(255, "E-Mail ist zu lang."),
  phone: z
    .string()
    .trim()
    .max(30, "Telefonnummer ist zu lang.")
    // Allow empty or mostly valid phone number characters
    .regex(/^(\+?[0-9\s\-\/\(\)]+)?$/, "Ungültige Telefonnummer.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(5, "Bitte beschreiben Sie kurz Ihr Anliegen.")
    .max(5000, "Nachricht ist zu lang.")
    .transform(sanitizeText),
  // Honeypot und bots fill this, humans don't see it
  website: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  submittedName?: string;
  fallbackToClient?: boolean; // Signalisiert dem Frontend, dass Server Fetch fehlschlug
};

// ─── Rate-limit (in-memory, resets on server restart) ───
const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (recent.length >= RATE_LIMIT_MAX) {
    return false; // Rate limited
  }

  recent.push(now);
  rateLimit.set(ip, recent);
  return true;
}

// ─── Server Action ───
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Extract and format data
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || "",
    message: formData.get("message") as string,
    website: (formData.get("website") as string) || "",
    startTime: (formData.get("startTime") as string) || "0",
  };

  // 2. Honeypot check (bots fill the hidden "website" field)
  if (rawData.website && rawData.website.trim().length > 0) {
    logger.warn({ action: "contact_bot_blocked", name: rawData.name }, "Honeypot filled");
    // Pretend success to not tip off bots
    return {
      success: true,
      message: "Vielen Dank! Wir melden uns in Kürze bei Ihnen.",
      submittedName: rawData.name,
    };
  }

  // 2.5 Time-to-Submit Verification (Phase 4.2)
  const submitTime = parseInt(rawData.startTime, 10);
  const timeDiff = Date.now() - submitTime;
  
  if (submitTime > 0 && timeDiff < 2000) {
    logger.warn({ action: "contact_bot_blocked", timeDiff }, "Form filled too fast (bot behavior)");
    // Silent reject for bots
    return {
      success: true,
      message: "Vielen Dank! Wir melden uns in Kürze bei Ihnen.",
      submittedName: rawData.name,
    };
  }

  // 3. Validate with Zod
  const parsed = contactSchema.safeParse(rawData);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [key, value] of Object.entries(
      parsed.error.flatten().fieldErrors
    )) {
      fieldErrors[key] = value ?? [];
    }
    return {
      success: false,
      message: "Bitte überprüfen Sie Ihre Eingaben.",
      errors: fieldErrors,
    };
  }

  // 4. Rate limiting (Basic implementation using headers)
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";
  
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: "Zu viele Anfragen (Rate Limit). Bitte versuchen Sie es in einer Stunde erneut.",
    };
  }

  // 5. Submit to Formspree
  try {
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "mgopyayb";

    if (formspreeId && formspreeId !== "demo-form" && !formspreeId.includes("your_")) {
      // ─── Production: Submit to Formspree ───
      const formspreeResponse = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || "Nicht angegeben",
          message: parsed.data.message,
          _subject: `Neue Kontaktanfrage von ${parsed.data.name}`,
          _replyto: parsed.data.email,
        }),
      });

      if (!formspreeResponse.ok) {
        // Fallback or explicit error code handling (Phase 4.4)
        if (formspreeResponse.status === 429) {
          return {
            success: false,
            message: "Zu viele Anfragen. Bitte warten Sie 5 Minuten und versuchen Sie es erneut.",
          };
        }
        if (formspreeResponse.status >= 500) {
          throw new Error("Formspree Serverfehler (500)");
        }
        
        const errBody = await formspreeResponse.json().catch(() => ({}));
        throw new Error(errBody.error || `Formspree HTTP ${formspreeResponse.status}`);
      }
    } else {
      // ─── Demo-Mode: Log only ───
      logger.info(
        { action: "contact_submit_demo", data: { email: parsed.data.email } },
        "Demo-Modus: Kein formspree Token vorhanden"
      );
    }

    logger.info(
      { action: "contact_submit", success: true, email: parsed.data.email },
      "Neue Kontaktanfrage erfolgreich verarbeitet"
    );

    return {
      success: true,
      message: `Vielen Dank, ${parsed.data.name}! Wir melden uns innerhalb von 24 Stunden bei Ihnen.`,
      submittedName: parsed.data.name,
    };
  } catch (error) {
    logger.error(
      { action: "contact_submit", success: false, error: String(error) },
      "Contact form server action failed"
    );
    // Explicit Fallback Signal to Client
    return {
      success: false,
      message: "Serverfehler beim Versenden. Ein interner Fallback-Versuch wird nun unternommen...",
      fallbackToClient: true, // Signals ContactForm to use client-side AJAX fetch
    };
  }
}
