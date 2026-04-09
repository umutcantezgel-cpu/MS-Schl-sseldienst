"use client";

import { useVisitorSegment } from "@/hooks/useVisitorSegment";
import { getPersonalizedContent } from "@/lib/personalization";
import { trackEvent } from "@/lib/analytics";
import { useEffect, useRef } from "react";

/**
 * Phase 18 und Personalized Hero Overlay
 * Renders segment-specific trust signal below the hero section.
 * Does NOT replace the hero und it enhances it with a contextual trust bar.
 */
export default function PersonalizedHero() {
  const segment = useVisitorSegment();
  const content = getPersonalizedContent(segment);
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    if (segment !== "new-visitor") {
      trackEvent("personalization_view", {
        label: segment,
        category: "hero_trust_signal",
      });
    }
  }, [segment]);

  // Don't show for default segment (avoids flash)
  if (segment === "new-visitor") return null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 -mt-4 mb-8 relative z-20">
      <div className="bg-white/80 backdrop-blur-xl border border-[var(--color-charcoal-100)] rounded-xl px-5 py-3 flex items-center justify-between gap-4 shadow-sm">
        <p className="text-sm sm:text-sm font-medium text-[var(--color-charcoal-700)]">
          {content.trustSignal}
        </p>
        <a
          href="tel:+4964418056279"
          onClick={() =>
            trackEvent("hero_cta_click", {
              label: `personalized_${segment}`,
              category: "trust_signal_cta",
            })
          }
          className="shrink-0 text-xs sm:text-sm font-bold text-[var(--color-red-500)] hover:text-[var(--color-red-600)] transition-colors whitespace-nowrap"
        >
          {content.ctaText} →
        </a>
      </div>
    </div>
  );
}
