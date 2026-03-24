/**
 * ══════════════════════════════════════════════════════════════
 * Phase 18 — Business Metrics
 * ══════════════════════════════════════════════════════════════
 * Static metrics for the Schlüsseldienst business.
 * Update these values periodically as the business grows.
 * ══════════════════════════════════════════════════════════════
 */

export interface Metric {
  key: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const METRICS: Metric[] = [
  {
    key: "projects_completed",
    value: 500,
    suffix: "+",
    label: "Einsätze",
    description: "Erfolgreich abgeschlossene Türöffnungen und Service-Einsätze",
  },
  {
    key: "satisfaction_rate",
    value: 96,
    suffix: "%",
    label: "Zufriedenheit",
    description: "Kundenzufriedenheitsrate basierend auf Google-Bewertungen",
  },
  {
    key: "response_time",
    value: 30,
    suffix: " Min",
    label: "Ø Anfahrt",
    description: "Durchschnittliche Anfahrtszeit in Wetzlar und Umgebung",
  },
  {
    key: "years_experience",
    value: 10,
    suffix: "+",
    label: "Jahre Erfahrung",
    description: "Jahre Berufserfahrung und Ausbildung als Schlüsseldienst",
  },
];

/**
 * Get a specific metric by key.
 */
export function getMetric(key: string): Metric | undefined {
  return METRICS.find((m) => m.key === key);
}
