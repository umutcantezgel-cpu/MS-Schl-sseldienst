"use server";

import { z } from "zod";
import { logger } from "@/lib/logger";

// ─── Zod Schema (shared with client) ───
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Bitte geben Sie Ihren Namen ein.")
    .max(100, "Name ist zu lang."),
  email: z
    .string()
    .email("Bitte prüfen Sie Ihre E-Mail-Adresse.")
    .max(255, "E-Mail ist zu lang."),
  phone: z
    .string()
    .max(30, "Telefonnummer ist zu lang.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(5, "Bitte beschreiben Sie kurz Ihr Anliegen.")
    .max(5000, "Nachricht ist zu lang."),
  // Honeypot — bots fill this, humans don't see it
  website: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  submittedName?: string;
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
  // 1. Extract data
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || "",
    message: formData.get("message") as string,
    website: (formData.get("website") as string) || "",
  };

  // 2. Honeypot check (bots fill the hidden "website" field)
  if (rawData.website && rawData.website.length > 0) {
    // Pretend success to not tip off bots
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

  // 4. Rate limiting (use a fallback IP)
  // In production, get the real IP from headers
  const ip = "unknown"; // headers().get("x-forwarded-for") || "unknown"
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message:
        "Zu viele Anfragen. Bitte versuchen Sie es in einer Stunde erneut, oder rufen Sie uns direkt an: 06441 8056279.",
    };
  }

  // 5. Submit to Formspree
  try {
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

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
        const errBody = await formspreeResponse.json().catch(() => ({}));
        throw new Error(errBody.error || `Formspree HTTP ${formspreeResponse.status}`);
      }
    } else {
      // ─── Demo-Mode: Log only ───
      logger.info(
        {
          action: "contact_submit_demo",
          data: {
            name: parsed.data.name,
            email: parsed.data.email,
          },
        },
        "Demo-Modus: Kontaktanfrage wurde nicht an Formspree gesendet (kein NEXT_PUBLIC_FORMSPREE_ID konfiguriert)"
      );
    }

    logger.info(
      {
        action: "contact_submit",
        success: true,
        data: {
          name: parsed.data.name,
          email: parsed.data.email,
          hasPhone: !!parsed.data.phone,
          messageLength: parsed.data.message.length,
        },
      },
      "Neue Kontaktanfrage erfolgreich verarbeitet"
    );

    return {
      success: true,
      message: `Vielen Dank, ${parsed.data.name}! Wir melden uns innerhalb von 24 Stunden bei Ihnen.`,
      submittedName: parsed.data.name,
    };
  } catch (error) {
    logger.error(
      {
        action: "contact_submit",
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      "Contact form error"
    );
    return {
      success: false,
      message:
        "Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an: 06441 8056279.",
    };
  }
}
