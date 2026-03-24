/**
 * ══════════════════════════════════════════════════════════════
 * Phase 18 — Optimization Log
 * ══════════════════════════════════════════════════════════════
 * Typed optimization entries for monthly optimization cycles.
 * ICE Score: (Impact × Confidence) / Effort
 * ══════════════════════════════════════════════════════════════
 */

export interface OptimizationEntry {
  month: string;
  hypothesis: string;
  metric: string;
  baselineValue: number;
  targetValue: number;
  actualValue?: number;
  improvement?: string;
  iceScore: number;
  effort: "low" | "medium" | "high";
  status: "proposed" | "testing" | "implemented" | "rejected";
  notes?: string;
}

/**
 * ICE Score Calculator
 * Impact: estimated % improvement (1-100)
 * Confidence: data quality (0-1)
 * Effort: dev effort in days (1-21)
 */
export function calculateICE(
  impact: number,
  confidence: number,
  effortDays: number
): number {
  if (effortDays === 0) return 0;
  return Math.round(((impact * confidence) / effortDays) * 10) / 10;
}

/**
 * Optimization Log — Template entries
 */
export const optimizationLog: OptimizationEntry[] = [
  {
    month: "2026-03",
    hypothesis: "Preis-Schätzer auf Homepage erhöht Form-Funnel-Starts um 20%",
    metric: "contact_form_start",
    baselineValue: 0.06,
    targetValue: 0.072,
    iceScore: calculateICE(20, 0.7, 3),
    effort: "medium",
    status: "implemented",
    notes: "PriceEstimator mit 3-Step-Flow implementiert (Phase 18)",
  },
  {
    month: "2026-03",
    hypothesis: "Return-Visitor-Banner steigert Kontakt-Rate bei Rückkehrern um 15%",
    metric: "hero_cta_click",
    baselineValue: 0.08,
    targetValue: 0.092,
    iceScore: calculateICE(15, 0.6, 2),
    effort: "low",
    status: "implemented",
    notes: "ReturnVisitorBanner mit CTA zu /kontakt (Phase 18)",
  },
  {
    month: "2026-03",
    hypothesis: "Segment-basierte Hero-Texte erhöhen Scroll-Depth-75 um 10%",
    metric: "scroll_depth_75",
    baselineValue: 0.35,
    targetValue: 0.385,
    iceScore: calculateICE(10, 0.5, 4),
    effort: "medium",
    status: "proposed",
    notes: "PersonalizedHero Integration in Hero-Section ausstehend",
  },
];
