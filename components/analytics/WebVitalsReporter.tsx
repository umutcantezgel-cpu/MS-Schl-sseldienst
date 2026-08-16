"use client";

import { useReportWebVitals } from "next/web-vitals";
import { trackEvent } from "@/lib/analytics";

/**
 * Phase 19 und Enhanced Web Vitals Reporter
 * Sends CWV to GA4.
 */
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
  });

  return null;
}
