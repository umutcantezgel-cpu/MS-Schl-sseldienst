import { reviewsData, aggregateRating } from "@/components/reviews/reviews.data";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";
import StaggerReveal, { StaggerItem } from "../motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { Star } from "lucide-react";

export default function ReviewsSection() {
    return (
        <section id="bewertungen" className="bg-[var(--color-surface-subtle)] px-[var(--space-4)] md:px-[var(--space-8)] py-[var(--space-16)] overflow-hidden" aria-label="Kundenbewertungen">
            <div className="mx-auto max-w-7xl">

                {/* Aggregierte Bewertungs-Zusammenfassung (Prompt 2.4) */}
                <div className="grid lg:grid-cols-12 gap-[var(--space-8)] lg:gap-[var(--space-12)] items-center mb-[var(--space-12)]">
                    <div className="lg:col-span-6 flex flex-col">
                        <h2 className="font-[700] text-[var(--color-text-primary)] text-[var(--font-size-36)] lg:text-[var(--font-size-48)] leading-tight tracking-tight">
                            Das sagen unsere Kunden aus Wetzlar
                        </h2>
                        <p className="mt-[var(--space-4)] text-[var(--color-text-body)] font-[400] text-[var(--font-size-18)] leading-relaxed max-w-xl">
                            Lesen Sie, warum hunderte Kunden unserem Service vertrauen. Echte Notsituationen, echte Bewertungen.
                        </p>
                    </div>

                    <div className="lg:col-span-5 lg:col-start-8 bg-[var(--color-surface-default)] p-[var(--space-6)] rounded-[var(--radius-16)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
                        <div className="flex items-center gap-[var(--space-6)]">
                            <div className="flex flex-col items-center justify-center shrink-0">
                                <span className="text-[var(--font-size-48)] font-bold text-[var(--color-text-primary)] leading-none">{aggregateRating.ratingValue.toFixed(1)}</span>
                                <div className="flex gap-1 text-yellow-400 mt-[var(--space-2)]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-[var(--font-size-13)] text-[var(--color-text-muted)] mt-[var(--space-1)]">{aggregateRating.reviewCount} Bewertungen</span>
                            </div>

                            <div className="flex-1 flex flex-col gap-[var(--space-2)] border-l border-[var(--color-border)] pl-[var(--space-6)]">
                                {[
                                    { stars: 5, pct: 93 },
                                    { stars: 4, pct: 7 },
                                    { stars: 3, pct: 0 },
                                    { stars: 2, pct: 0 },
                                    { stars: 1, pct: 0 },
                                ].map((row) => (
                                    <div key={row.stars} className="flex items-center gap-[var(--space-3)] text-[var(--font-size-14)] text-[var(--color-text-muted)] font-medium">
                                        <span className="w-12 shrink-0">{row.stars} Sterne</span>
                                        <div className="flex-1 h-2 bg-[var(--color-surface-subtle)] rounded-full overflow-hidden">
                                            <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${row.pct}%` }} />
                                        </div>
                                        <span className="w-8 shrink-0 text-right">{row.pct}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
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
