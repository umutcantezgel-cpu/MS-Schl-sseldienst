/**
 * ══════════════════════════════════════════════════════════════
 * Phase 18 — Personalization Content Mapping
 * ══════════════════════════════════════════════════════════════
 * Maps visitor segments to Schlüsseldienst-specific content.
 * Single Source of Truth for all personalized text.
 * ══════════════════════════════════════════════════════════════
 */

import type { VisitorSegment } from "@/hooks/useVisitorSegment";

interface PersonalizedContent {
  heroHeadline: string;
  heroSubline: string;
  ctaText: string;
  ctaSecondary: string;
  trustSignal: string;
}

const CONTENT_MAP: Record<VisitorSegment, PersonalizedContent> = {
  "new-visitor": {
    heroHeadline: "Schlüsseldienst Wetzlar — Türöffnung ab 99€ Festpreis",
    heroSubline: "24/7 Notdienst · In 15-30 Min vor Ort · Keine versteckten Kosten",
    ctaText: "Jetzt kostenlos anrufen",
    ctaSecondary: "Preisliste ansehen",
    trustSignal: "Über 500 zufriedene Kunden in Wetzlar & Umgebung",
  },
  returning: {
    heroHeadline: "Willkommen zurück! Festpreise ohne Überraschungen",
    heroSubline: "Schön, dass Sie uns wieder besuchen · Alle Preise transparent & fair",
    ctaText: "Direkt anrufen",
    ctaSecondary: "Leistungen entdecken",
    trustSignal: "96% Kundenzufriedenheit — auch beim zweiten Einsatz",
  },
  "service-interested": {
    heroHeadline: "Professionell & zum Festpreis — Garantiert",
    heroSubline: "Ausgebildet von Uwe Sarfeld · Beschädigungsfreie Türöffnung · TÜV-geprüft",
    ctaText: "Kostenlose Beratung anfordern",
    ctaSecondary: "Alle Leistungen ansehen",
    trustSignal: "Jede Leistung zum garantierten Festpreis — vor Anfahrt genannt",
  },
  "high-intent": {
    heroHeadline: "Ausgesperrt? Wir sind in 30 Minuten bei Ihnen!",
    heroSubline: "Festpreis ab 99€ · Keine Anfahrtskosten · Sofort verfügbar",
    ctaText: "Jetzt anrufen — 06441 8056544",
    ctaSecondary: "Festpreis berechnen",
    trustSignal: "Letzte erfolgreiche Türöffnung vor wenigen Stunden",
  },
};

/**
 * Get personalized content for a visitor segment.
 * Falls back to new-visitor content if segment is unknown.
 */
export function getPersonalizedContent(
  segment: VisitorSegment
): PersonalizedContent {
  return CONTENT_MAP[segment] || CONTENT_MAP["new-visitor"];
}

/**
 * Get a specific field from personalized content.
 */
function getPersonalizedField(
  segment: VisitorSegment,
  field: keyof PersonalizedContent
): string {
  const content = getPersonalizedContent(segment);
  return content[field];
}
