/**
 * ══════════════════════════════════════════════════════════════
 * Phase 18 — Conversion Benchmarks
 * ══════════════════════════════════════════════════════════════
 * Baseline metrics and targets for Schlüsseldienst conversion paths.
 * Review monthly against GA4 data.
 * ══════════════════════════════════════════════════════════════
 */

export interface ConversionPath {
  id: string;
  name: string;
  description: string;
  baseline: number;
  target: number;
  alertThreshold: number;
  events: string[];
}

export const CONVERSION_PATHS: ConversionPath[] = [
  {
    id: "homepage_to_service",
    name: "Homepage → Service-Seite",
    description: "Klick auf eine Leistungsseite von der Homepage",
    baseline: 0.06,
    target: 0.10,
    alertThreshold: 0.04,
    events: ["hero_cta_click", "service_detail_click"],
  },
  {
    id: "service_to_contact",
    name: "Service-Seite → Kontaktseite",
    description: "Navigation von Leistungsseite zu Kontaktformular",
    baseline: 0.35,
    target: 0.50,
    alertThreshold: 0.25,
    events: ["service_detail_click", "contact_form_view"],
  },
  {
    id: "contact_form_funnel",
    name: "Formular-Ansicht → Absenden",
    description: "Kontaktformular ausgefüllt und abgesendet",
    baseline: 0.22,
    target: 0.30,
    alertThreshold: 0.18,
    events: ["contact_form_view", "contact_form_start", "contact_form_submit"],
  },
  {
    id: "phone_click_rate",
    name: "Anruf-Button-Klickrate",
    description: "Klick auf Telefonlink (alle Positionen)",
    baseline: 0.08,
    target: 0.12,
    alertThreshold: 0.05,
    events: ["phone_click", "sticky_cta_click"],
  },
  {
    id: "exit_intent_recovery",
    name: "Exit-Intent → CTA-Klick",
    description: "Exit-Intent-Banner gesehen → CTA geklickt",
    baseline: 0.15,
    target: 0.22,
    alertThreshold: 0.10,
    events: ["exit_intent_shown", "exit_intent_cta_click"],
  },
];

/**
 * Check if a conversion path is below alert threshold.
 */
export function isAlertTriggered(
  pathId: string,
  currentRate: number
): boolean {
  const path = CONVERSION_PATHS.find((p) => p.id === pathId);
  if (!path) return false;
  return currentRate < path.alertThreshold;
}
