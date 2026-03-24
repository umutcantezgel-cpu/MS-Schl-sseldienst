/**
 * Zentrale CTA-Text-Bibliothek
 *
 * Alle Button- und Link-Texte an einem Ort.
 * Konsistenz über alle Routen hinweg.
 */

// ─── Primäre CTAs (Handlungsversprechen) ─────────────────────────────────────

export const CTA_PRIMARY = {
  /** Notdienst-Anruf — der wichtigste CTA der gesamten Website */
  PHONE_CALL: "06441 8056544 anrufen",
  /** Mobil-Alternative */
  PHONE_MOBILE: "0178 2471037 anrufen",
  /** Festpreis erfragen */
  GET_QUOTE: "Jetzt Festpreis erfahren",
  /** Beratung anfragen */
  REQUEST_CONSULTATION: "Kostenlose Beratung anfordern",
} as const;

// ─── Sekundäre CTAs (niedrigschwellig) ───────────────────────────────────────

export const CTA_SECONDARY = {
  LEARN_MORE: "Mehr erfahren",
  VIEW_DETAILS: "Details ansehen",
  HOW_IT_WORKS: "So funktioniert's",
  VIEW_ALL_FAQ: "Alle Fragen & Antworten anzeigen",
  VIEW_ALL_REVIEWS: "Alle Bewertungen ansehen",
  OPEN_PRICE_CALCULATOR: "Interaktiven Preisrechner öffnen",
  BACK_TO_HOME: "Zurück zur Startseite",
  CONTACT_US: "Kontakt aufnehmen",
} as const;

// ─── Trust-Mikro-Copy (unter CTAs) ──────────────────────────────────────────

export const TRUST_MICRO_COPY = {
  FREE_AND_NON_BINDING: "Kostenlos & unverbindlich",
  FIXED_PRICE: "Festpreis — keine versteckten Kosten",
  ARRIVAL_TIME: "In 20–30 Min. vor Ort",
  AVAILABLE_24_7: "24/7 — auch an Feiertagen",
  NO_DAMAGE: "99% zerstörungsfreie Öffnung",
  TRAINED_BY_EXPERT: "Ausgebildet von Uwe Sarfeld (TV-Experte)",
} as const;

// ─── Formular-Mikro-Copy (aria-describedby) ─────────────────────────────────

export const FORM_HINTS = {
  PHONE: "Für schnelle Rückmeldung — Pflichtfeld.",
  NAME: "Damit wir Sie persönlich ansprechen können.",
  MESSAGE: "Beschreiben Sie kurz Ihr Anliegen.",
  EMAIL: "Wir verwenden Ihre E-Mail ausschließlich für die Antwort.",
  LOCATION: "Für die Berechnung der Anfahrtszeit.",
} as const;

// ─── Error- & Empty-State-Texte ─────────────────────────────────────────────

export const ERROR_MESSAGES = {
  GENERIC: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  NETWORK: "Ihre Nachricht konnte nicht gesendet werden. Bitte prüfen Sie Ihre Internetverbindung.",
  RATE_LIMIT: "Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.",
  FORM_INVALID: "Bitte überprüfen Sie Ihre Eingaben.",
  NOT_FOUND: "Diese Seite existiert nicht — aber wir können Ihnen trotzdem helfen.",
} as const;

export const EMPTY_STATES = {
  NO_RESULTS: "Keine Ergebnisse gefunden. Kontaktieren Sie uns direkt — wir helfen gerne persönlich.",
  NO_REVIEWS: "Noch keine Bewertungen — aber wir arbeiten dran!",
} as const;

// ─── Type Exports ───────────────────────────────────────────────────────────

export type PrimaryCTA = typeof CTA_PRIMARY[keyof typeof CTA_PRIMARY];
export type SecondaryCTA = typeof CTA_SECONDARY[keyof typeof CTA_SECONDARY];
export type TrustMicroCopy = typeof TRUST_MICRO_COPY[keyof typeof TRUST_MICRO_COPY];
