/**
 * ══════════════════════════════════════════════════════════════
 * Phase 5 und CTA-Copy-System
 * ══════════════════════════════════════════════════════════════
 * REGEL: Kein CTA-Text beschreibt eine Aktion ("Senden").
 * Jeder CTA-Text beschreibt das ERGEBNIS ("Kostenlose Beratung erhalten").
 * ══════════════════════════════════════════════════════════════
 */

export const CTA_COPY = {
  // ─── Primäre CTAs (Conversion-kritisch) ───
  formSubmit: "Kostenlose Beratung anfordern",
  phoneEmergency: "Jetzt Notdienst rufen",
  phonePricing: "Jetzt für Festpreis anrufen",
  phoneGeneral: "Persönlich beraten lassen",

  // ─── Sekundäre CTAs (Exploration) ───
  learnMore: "Details ansehen",
  allServices: "Alle Leistungen entdecken",
  allPrices: "Interaktiven Preisrechner öffnen",
  allReviews: "Alle Bewertungen lesen",
  allFaqs: "Alle Fragen & Antworten anzeigen",

  // ─── Notfall-CTAs (Urgency) ───
  emergencyCall: "Sofort anrufen und 24/7 erreichbar",
  emergencyShort: "Notdienst anfordern",

  // ─── Formular-Loading-States ───
  submitting: "Wird gesendet…",

  // ─── Trust-Mikro-Copy unter CTAs ───
  trustMicroCopy: "Kostenlos & unverbindlich · Antwort in 24h · DSGVO-konform",
  priceTrustMicro: "Festpreis wird vor Anfahrt genannt",
  emergencyTrustMicro: "Festpreis wird am Telefon bestätigt",
  noRiskMicro: "Kein Risiko · Festpreis vor Anfahrt · 24/7 erreichbar",
} as const;

type CTACopyKey = keyof typeof CTA_COPY;
