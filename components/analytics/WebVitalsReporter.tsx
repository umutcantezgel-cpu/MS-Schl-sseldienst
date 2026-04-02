"use client";

import { useReportWebVitals } from "next/web-vitals";
import { trackEvent } from "@/lib/analytics";

/**
 * Phase 19 — Enhanced Web Vitals Reporter
 * Sends CWV to GA4 and checks performance budgets.
 * Budget violations logged via ErrorLogger as warnings.
 */

const BUDGETS: Record<string, number> = {
  LCP: 2500,  // ms
  CLS: 0.1,
  INP: 200,   // ms
  FCP: 1800,  // ms
  TTFB: 800,  // ms
};

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    // Only track Core Web Vitals
    if (!['LCP', 'CLS', 'INP', 'FCP', 'TTFB'].includes(metric.name)) return;

    // Send to GA4
    trackEvent('web_vital', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
    });

    // Performance budget check (SKIP in dev — Turbopack inflates all metrics)
    if (process.env.NODE_ENV === 'development') return;

    const budget = BUDGETS[metric.name];
    if (budget !== undefined && metric.value > budget) {
      console.warn(
        `[PerfBudget] ${metric.name} exceeded: ${metric.value.toFixed(2)} > ${budget} (rating: ${metric.rating})`
      );

      // Log as warning via ErrorLogger (lazy import to avoid circular deps)
      import("@/lib/monitoring/error-logger").then(({ errorLogger }) => {
        errorLogger.warn(
          `Performance budget exceeded: ${metric.name} = ${metric.value.toFixed(2)} (limit: ${budget})`,
          { page: typeof window !== "undefined" ? window.location.pathname : "/" }
        );
      });
    }
  });

  return null;
}
