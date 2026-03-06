import { reviewsData } from "@/components/reviews/reviews.data";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";
import StaggerReveal from "../motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function ReviewsSection() {
    return (
        <section className="bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)] overflow-hidden" aria-label="Kundenbewertungen">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col text-center">
                    <h2
                        className="font-[700] text-[var(--color-text-primary)]"
                        style={{
                            fontSize: 'var(--text-h2)',
                            lineHeight: 'var(--leading-h)',
                            letterSpacing: 'var(--tracking-heading)',
                        }}
                    >
                        Das sagen unsere Kunden aus Wetzlar
                    </h2>
                    <p
                        className="mt-[var(--space-4)] text-[var(--color-text-body)] mx-auto font-[400]"
                        style={{
                            fontSize: 'var(--text-lead)',
                            lineHeight: 'var(--leading-lead)',
                            maxWidth: 'var(--prose-width)',
                        }}
                    >
                        Lesen Sie, warum hunderte Kunden unserem Service vertrauen. Echte Notsituationen, echte Bewertungen.
                    </p>
                </div>

                <StaggerReveal animation={entryAnimations.slideUpFade}>
                    <ReviewCarousel>
                        {reviewsData.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </ReviewCarousel>
                </StaggerReveal>
            </div>
        </section>
    );
}
