import { NextResponse } from "next/server";
import { companyInfo } from "@/lib/data/company";
import { siteUrl } from "@/lib/schema";

/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 5: Parasite SEO — Video Syndication Pipeline
 * ══════════════════════════════════════════════════════════════════
 * Webhook endpoint that transforms MDX article content into a
 * structured JSON payload for YouTube Shorts / Reels production.
 *
 * FLOW:
 *  1. Receive POST with { slug, rawText } (extracted from .mdx)
 *  2. Compress text into a 30-second voiceover script via LLM
 *  3. Inject SSOT data (phone, price) as unremovable CTA
 *  4. Return JSON payload for Remotion/Shotstack/n8n rendering
 *
 * SSOT-INJECTION: Phone number and price are hardwired into the
 * script template so they survive any LLM compression/paraphrasing.
 *
 * SECURITY: Protected by CRON_SECRET env var.
 * ══════════════════════════════════════════════════════════════════
 */

interface VideoSyndicationRequest {
  /** Slug of the source MDX article */
  slug: string;
  /** Raw text content extracted from the MDX file */
  rawText: string;
  /** Optional: Target video duration in seconds (default: 30) */
  durationSeconds?: number;
}

interface VideoPayload {
  /** Video title optimized for YouTube SEO */
  title: string;
  /** YouTube-optimized description with SSOT data */
  description: string;
  /** Voiceover script (compressed to target duration) */
  voiceoverScript: string;
  /** SEO tags for YouTube */
  tags: string[];
  /** CTA watermark text (burned into video) */
  ctaWatermark: string;
  /** Call-to-action end screen data */
  endScreenCTA: {
    phone: string;
    price: string;
    url: string;
  };
  /** Source article URL for attribution */
  sourceUrl: string;
  /** Metadata */
  meta: {
    generatedAt: string;
    sourceDuration: number;
    wordCount: number;
  };
}

// [SSOT] All business data derived from companyInfo
const PHONE = companyInfo.phone.formatted;
const PHONE_LINK = companyInfo.phone.link;
const PRICE = `${companyInfo.financial.startingPriceValue}€`;
const NAME = companyInfo.localStore.name;
const ADDR = `${companyInfo.localStore.street}, ${companyInfo.localStore.postalCode} ${companyInfo.localStore.city}`;

/**
 * System prompt for LLM-based script compression.
 * The phone number and price are injected as non-negotiable constants.
 */
function buildSystemPrompt(durationSeconds: number): string {
  return `Du bist ein professioneller Video-Script-Autor für YouTube Shorts.
Deine Aufgabe: Komprimiere den folgenden Ratgeber-Text in ein ${durationSeconds}-Sekunden Voiceover-Script (ca. ${Math.round(durationSeconds * 2.5)} Wörter).

REGELN:
1. Sprich den Zuschauer direkt an ("Du", "Ihr").
2. Beginne mit einem Hook (Frage oder schockierende Statistik).
3. Liefere 2-3 konkrete Tipps aus dem Artikel.
4. PFLICHT-CTA am Ende (WÖRTLICH, NICHT VERÄNDERN):
   "Schlüsseldienst Wetzlar — ${NAME}. Festpreis ab ${PRICE}. Jetzt anrufen: ${PHONE}."
5. Kein Callcenter, kein Vermittler — betone "lokaler Fachbetrieb".
6. Ton: Kompetent, nahbar, leicht dringlich.
7. Format: Nur das Script als plain text, keine Regieanweisungen.`;
}

/**
 * Generates SEO-optimized YouTube tags from the article slug.
 */
function generateTags(slug: string): string[] {
  const baseTags = [
    "Schlüsseldienst Wetzlar",
    "Schlüsseldienst Gießen",
    "Schlüsseldienst Marburg",
    NAME,
    "Türöffnung",
    "24h Notdienst",
    "Schlüsseldienst Festpreis",
    "Schlüsseldienst seriös",
    "Schlüssel Schmiede",
    "Lahn-Dill-Kreis",
    "Mittelhessen",
  ];
  // Add slug-derived tags
  const slugTags = slug
    .split("-")
    .filter((w) => w.length > 3)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1));

  return [...new Set([...baseTags, ...slugTags])];
}

/**
 * Fallback script compression (no LLM needed).
 * Extracts first ~75 words and appends the mandatory CTA.
 */
function fallbackCompress(rawText: string, durationSeconds: number): string {
  const targetWords = Math.round(durationSeconds * 2.5);
  const words = rawText.replace(/[#*_\[\]()]/g, "").split(/\s+/).filter(Boolean);
  const bodyWords = words.slice(0, targetWords - 20); // Reserve 20 words for CTA

  const body = bodyWords.join(" ");
  const cta = `${NAME} — Ihr lokaler Schlüsseldienst in Wetzlar. Festpreis ab ${PRICE}. Jetzt anrufen: ${PHONE}.`;

  return `${body}\n\n${cta}`;
}

export async function POST(request: Request) {
  // [SECURITY] Validate cron secret
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as VideoSyndicationRequest;
    const { slug, rawText, durationSeconds = 30 } = body;

    if (!slug || !rawText) {
      return NextResponse.json(
        { error: "Missing required fields: slug, rawText" },
        { status: 400 }
      );
    }

    let voiceoverScript: string;

    // Try LLM compression if API key is available
    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      try {
        const llmResponse = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: buildSystemPrompt(durationSeconds) },
              { role: "user", content: rawText.slice(0, 4000) },
            ],
            max_tokens: 300,
            temperature: 0.7,
          }),
        });

        const llmData = await llmResponse.json();
        voiceoverScript = llmData.choices?.[0]?.message?.content || fallbackCompress(rawText, durationSeconds);
      } catch {
        // LLM failed — use fallback
        voiceoverScript = fallbackCompress(rawText, durationSeconds);
      }
    } else {
      // No API key — use deterministic fallback
      voiceoverScript = fallbackCompress(rawText, durationSeconds);
    }

    // [SSOT-INJECTION] Ensure phone and price are ALWAYS in the script
    if (!voiceoverScript.includes(PHONE)) {
      voiceoverScript += `\n\n${NAME}. Festpreis ab ${PRICE}. Tel: ${PHONE}.`;
    }

    const payload: VideoPayload = {
      title: `${slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} | ${NAME}`,
      description: `${NAME} — ${ADDR}\n📞 ${PHONE}\n💰 Festpreis ab ${PRICE}\n🌐 ${siteUrl}\n\n#Schlüsseldienst #Wetzlar #Notdienst #Festpreis`,
      voiceoverScript,
      tags: generateTags(slug),
      ctaWatermark: `${PHONE} | ab ${PRICE} | ${NAME}`,
      endScreenCTA: {
        phone: PHONE_LINK,
        price: PRICE,
        url: siteUrl,
      },
      sourceUrl: `${siteUrl}/ratgeber/${slug}`,
      meta: {
        generatedAt: new Date().toISOString(),
        sourceDuration: durationSeconds,
        wordCount: voiceoverScript.split(/\s+/).length,
      },
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
