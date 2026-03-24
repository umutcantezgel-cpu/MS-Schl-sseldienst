"use client";

import { reviewsData, aggregateRating } from"@/components/reviews/reviews.data";
import ReviewCard from"./ReviewCard";
import ReviewCarousel from"./ReviewCarousel";
import StaggerReveal, { StaggerItem } from"../motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { Star } from"lucide-react";
import GoogleIcon from"@/components/ui/GoogleIcon";
import { m, useInView } from"framer-motion";
import { useRef } from"react";

function AnimatedBar({ pct, delay = 0 }: { pct: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex-1 h-[8px] bg-[var(--color-charcoal-100)] rounded-full overflow-hidden">
      <m.div
        className="h-full bg-[var(--value-primary)] rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${pct}%` } : { width: 0 }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </div>
  );
}

export default function ReviewsSection() {
  const distribution = [
    { stars: 5, pct: 93, count: 123 },
    { stars: 4, pct: 5, count: 7 },
    { stars: 3, pct: 2, count: 2 },
    { stars: 2, pct: 0, count: 0 },
    { stars: 1, pct: 0, count: 0 },
  ];

  return (
    <section id="bewertungen" className="bg-transparent px-[var(--section-px)] py-[var(--section-py)] overflow-hidden relative" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl relative z-10">

        <div className="text-center mb-[var(--space-12)]">
          <h2 id="reviews-heading" className="typo-h2 text-[color:var(--text-primary)]">
            Das sagen unsere <span className="text-[var(--color-red-500)]">Kunden</span>
          </h2>
          <div className="mx-auto h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)]" />
        </div>

        {/* Aggregate Rating Summary */}
        <div className="grid lg:grid-cols-2 gap-[var(--space-8)] lg:gap-[var(--space-12)] items-center mb-[var(--space-12)] max-w-5xl mx-auto bg-white border border-[var(--color-charcoal-100)] p-[var(--space-6)] lg:p-[var(--space-8)] rounded-2xl shadow-[var(--elevation-1)]">

          {/* Left: Google Logo + Rating */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[var(--space-6)] text-center sm:text-left">
            <div className="shrink-0 bg-[var(--color-charcoal-50)] border border-[var(--color-charcoal-100)] p-4 rounded-2xl flex items-center justify-center w-20 h-20">
              <GoogleIcon size={40} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[24px] text-[color:var(--text-primary)] leading-tight">Ausgezeichnet</span>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                <span className="font-black text-[36px] text-[color:var(--value-primary)] leading-none tracking-tight">{aggregateRating.ratingValue.toFixed(1)}</span>
                <div className="flex gap-0.5 text-google-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-[14px] text-[color:var(--text-secondary)] font-medium mt-2">Basierend auf {aggregateRating.reviewCount} Google Rezensionen</span>
            </div>
          </div>

          {/* Right: Animated Distribution Bars */}
          <div className="flex-1 flex flex-col gap-[var(--space-3)] sm:pl-[var(--space-8)]">
            {distribution.map((row, idx) => (
              <div key={row.stars} className="flex items-center gap-[var(--space-4)] text-[14px] text-[color:var(--text-secondary)] font-bold">
                <span className="w-[60px] shrink-0 text-[color:var(--text-primary)]">{row.stars} Sterne</span>
                <AnimatedBar pct={row.pct} delay={idx * 0.12} />
                <span className="w-10 shrink-0 text-right text-[color:var(--text-tertiary)]">{row.count}</span>
              </div>
            ))}
          </div>
        </div>

        <StaggerReveal animation={entryAnimations.slideUpFade}>
          <ReviewCarousel>
            {reviewsData.map((review) => (
              <StaggerItem key={review.id} animation={entryAnimations.slideUpFade} className="shrink-0 h-full">
                <ReviewCard review={review} />
              </StaggerItem>
            ))}
          </ReviewCarousel>
        </StaggerReveal>
      </div>
    </section>
  );
}
