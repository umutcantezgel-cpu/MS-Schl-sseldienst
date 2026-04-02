"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useVisitorSegment } from "@/hooks/useVisitorSegment";
import { getPersonalizedContent } from "@/lib/personalization";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

/**
 * Phase 18 — Personalized CTA Block
 * A segment-aware call-to-action that adapts text based on visitor segment.
 * Use anywhere a contextual CTA is needed.
 */
export default function PersonalizedCTA() {
  const segment = useVisitorSegment();
  const content = getPersonalizedContent(segment);

  return (
    <section className="px-[var(--section-px)] py-12 md:py-16 bg-gradient-to-r from-[var(--color-charcoal-900)] to-[var(--color-charcoal-800)]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {content.heroHeadline}
        </h2>
        <p className="text-sm sm:text-base text-white/70 mb-6 max-w-xl mx-auto">
          {content.heroSubline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:+4964418056279"
            onClick={() =>
              trackEvent("hero_cta_click", {
                label: `personalized_cta_${segment}`,
                category: "personalized_cta",
              })
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold rounded-xl transition-colors shadow-lg"
          >
            <Phone className="h-4 w-4" />
            {content.ctaText}
          </a>
          <Link
            href="/preise"
            onClick={() =>
              trackEvent("service_detail_click", {
                label: `personalized_secondary_${segment}`,
              })
            }
            className="inline-flex items-center gap-1.5 px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl transition-colors border border-white/20"
          >
            {content.ctaSecondary}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
