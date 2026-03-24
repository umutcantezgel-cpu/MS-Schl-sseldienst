/**
 * ══════════════════════════════════════════════════════════════
 * Phase 19 — Conversion Anomaly Detection
 * ══════════════════════════════════════════════════════════════
 * Utility for detecting conversion rate anomalies.
 * Integrates with Phase 18 conversion-benchmarks.ts.
 * ══════════════════════════════════════════════════════════════
 */

import { CONVERSION_PATHS } from "@/lib/conversion-benchmarks";

export interface AnomalyResult {
  pathId: string;
  pathName: string;
  baseline: number;
  current: number;
  dropPercent: number;
  isAnomaly: boolean;
  severity: "critical" | "warning" | "ok";
}

/**
 * Check if a conversion rate has dropped beyond threshold.
 * @param currentRate - Current observed conversion rate (0-1)
 * @param baselineRate - Historical baseline rate (0-1)
 * @param threshold - Drop percentage to trigger anomaly (default 30%)
 */
export function checkAnomaly(
  currentRate: number,
  baselineRate: number,
  threshold = 0.3
): boolean {
  if (baselineRate <= 0) return false;
  const dropPercent = (baselineRate - currentRate) / baselineRate;
  return dropPercent >= threshold;
}

/**
 * Run anomaly check across all conversion benchmarks.
 * @param currentRates - Map of pathId → current rate
 */
export function runAnomalyCheck(
  currentRates: Record<string, number>
): AnomalyResult[] {
  return CONVERSION_PATHS.map((benchmark) => {
    const current = currentRates[benchmark.id] ?? benchmark.baseline;
    const dropPercent =
      benchmark.baseline > 0
        ? (benchmark.baseline - current) / benchmark.baseline
        : 0;

    const isAnomaly = checkAnomaly(current, benchmark.baseline);
    const isCritical = current <= benchmark.alertThreshold;

    return {
      pathId: benchmark.id,
      pathName: benchmark.name,
      baseline: benchmark.baseline,
      current,
      dropPercent: Math.round(dropPercent * 100),
      isAnomaly,
      severity: isCritical ? "critical" : isAnomaly ? "warning" : "ok",
    };
  });
}
