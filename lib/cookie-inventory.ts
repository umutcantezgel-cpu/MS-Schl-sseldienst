/**
 * ══════════════════════════════════════════════════════════════
 * Phase 16 und Cookie & Data Processing Inventory (SSOT)
 * ══════════════════════════════════════════════════════════════
 * Single Source of Truth für alle Cookies und Datenverarbeitungen.
 * Wird von CookieConsent-Banner UND Datenschutzerklärung konsumiert.
 * ══════════════════════════════════════════════════════════════
 */

// ─── Types ───

export type ConsentCategory = "essential" | "analytics" | "marketing";

interface CookieEntry {
  /** Cookie-Name (oder Pattern wie `_ga_*`) */
  name: string;
  /** Consent-Kategorie */
  category: ConsentCategory;
  /** Menschenlesbare Speicherdauer */
  duration: string;
  /** Zweck des Cookies */
  purpose: string;
  /** Anbieter / Setzer */
  provider: string;
}

interface DataProcessingEntry {
  /** Bezeichnung der Verarbeitung */
  name: string;
  /** Welche Daten werden erhoben */
  dataCollected: string[];
  /** DSGVO-Rechtsgrundlage */
  legalBasis: string;
  /** Empfänger / Auftragsverarbeiter */
  recipient: string;
  /** Speicherdauer */
  retentionPeriod: string;
  /** Consent-Kategorie (null = kein Consent erforderlich) */
  consentCategory: ConsentCategory | null;
  /** Drittlandtransfer */
  thirdCountryTransfer: string | null;
}

export interface ConsentState {
  /** Immer true und technisch notwendig, nicht deaktivierbar */
  essential: true;
  /** GA4, Scroll-Tracking, Web Vitals an GA4 */
  analytics: boolean;
  /** Calendly-Cookies, UTM-Tracking */
  marketing: boolean;
  /** ISO-Timestamp der Einwilligung */
  timestamp: string;
  /** Consent-Konfigurationsversion (bei Änderung → Re-Consent) */
  version: string;
}

// ─── Current Consent Version ───
// Bump this when cookie categories change → triggers re-consent
export const CONSENT_VERSION = "1.0.0";

// ─── Cookie Consent Cookie Config ───
export const CONSENT_COOKIE_NAME = "consent_status";
export const CONSENT_COOKIE_MAX_AGE_DAYS = 365;

// ─── Cookie Inventory (SSOT) ───

export const COOKIE_INVENTORY: readonly CookieEntry[] = [
  {
    name: "consent_status",
    category: "essential",
    duration: "365 Tage",
    purpose: "Speichert Ihre Cookie-Einwilligung (Kategorien, Zeitstempel, Version)",
    provider: "Eigen (Schlüssel Schmiede)",
  },
  {
    name: "visitor_type",
    category: "essential",
    duration: "365 Tage",
    purpose: "Unterscheidet Erstbesucher von wiederkehrenden Besuchern für UX-Anpassungen",
    provider: "Eigen (Schlüssel Schmiede)",
  },
  {
    name: "font_size_pref",
    category: "essential",
    duration: "365 Tage",
    purpose: "Speichert die vom Nutzer gewählte Schriftgröße (Barrierefreiheit)",
    provider: "Eigen (Schlüssel Schmiede)",
  },
] as const;

// ─── Data Processing Inventory (DSGVO Art. 30) ───

export const DATA_PROCESSING_INVENTORY: readonly DataProcessingEntry[] = [
  {
    name: "Kontaktformular (Formspree)",
    dataCollected: ["Name", "E-Mail-Adresse", "Telefonnummer (optional)", "Nachricht"],
    legalBasis: "Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) / Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Anfragebearbeitung)",
    recipient: "Formspree Inc., USA (Auftragsverarbeiter)",
    retentionPeriod: "Bis zur manuellen Löschung im Formspree-Dashboard oder bis Zweckerfüllung",
    consentCategory: null, // Kein Consent nötig und Vertragsanbahnung
    thirdCountryTransfer: "USA und EU-US Data Privacy Framework (DPF). Zusätzlich Standardvertragsklauseln (SCCs) als Absicherung.",
  },
  {
    name: "Vercel Analytics (cookieless)",
    dataCollected: ["Aggregierte Seitenaufrufe", "Web Vitals (LCP, CLS, INP, FCP, TTFB)"],
    legalBasis: "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Website-Optimierung und cookieless, aggregiert, keine PII)",
    recipient: "Vercel Inc., USA",
    retentionPeriod: "Aggregierte Daten, keine personenbezogenen Daten",
    consentCategory: null, // Kein Consent nötig und cookieless
    thirdCountryTransfer: "USA und Vercel DPA vorhanden. Keine personenbezogenen Daten übertragen.",
  },
  {
    name: "Google Maps (Servicegebiet-Karte)",
    dataCollected: ["IP-Adresse", "Browser-Typ", "Standortdaten (wenn freigegeben)"],
    legalBasis: "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Two-Click-Lösung auf der Impressumsseite)",
    recipient: "Google Ireland Limited",
    retentionPeriod: "Gemäß Google-Datenschutzrichtlinie",
    consentCategory: null, // Wird nur auf Servicegebiet-Seite geladen
    thirdCountryTransfer: "USA und Google im EU-US Data Privacy Framework gelistet.",
  },
  {
    name: "Technisch notwendige Cookies",
    dataCollected: ["Consent-Status", "Besuchertyp", "Schriftgröße-Präferenz"],
    legalBasis: "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Funktionsfähigkeit der Website)",
    recipient: "Eigen (keine Weitergabe)",
    retentionPeriod: "365 Tage",
    consentCategory: null, // Essentiell und kein Consent nötig
    thirdCountryTransfer: null,
  },
  {
    name: "Hosting (Vercel / Netlify)",
    dataCollected: ["IP-Adresse", "Zugriffszeitpunkt", "Referrer-URL", "Browser-Typ", "Betriebssystem"],
    legalBasis: "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Bereitstellung der Website)",
    recipient: "Vercel Inc. / Netlify Inc., USA (Hosting-Provider)",
    retentionPeriod: "Server-Logfiles: max. 30 Tage",
    consentCategory: null,
    thirdCountryTransfer: "USA und Vercel/Netlify DPA vorhanden. EU-US Data Privacy Framework.",
  },
] as const;

// ─── Consent Category Descriptions (for Banner UI) ───

export const CONSENT_CATEGORY_INFO: Record<ConsentCategory, { label: string; description: string; required: boolean }> = {
  essential: {
    label: "Technisch notwendig",
    description: "Diese Cookies sind für die Grundfunktionen der Website erforderlich. Sie können nicht deaktiviert werden.",
    required: true,
  },
  analytics: {
    label: "Analyse & Statistiken",
    description: "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. Alle Daten werden anonymisiert erhoben.",
    required: false,
  },
  marketing: {
    label: "Marketing & externe Medien",
    description: "Diese Cookies ermöglichen die Einbindung externer Dienste wie Terminbuchungs-Widgets und personalisierte Inhalte.",
    required: false,
  },
};
