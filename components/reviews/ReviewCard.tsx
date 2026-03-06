import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Review } from "@/components/reviews/reviews.data";

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <Card
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
            className="flex flex-col p-[var(--space-7)] hover-lift hover:border-[var(--color-card-border-hover)] h-full snap-center min-w-[85vw] sm:min-w-[340px] max-w-[400px] shrink-0"
        >
            <div className="flex items-center justify-between gap-[var(--space-4)]">
                <div className="flex gap-[var(--space-1)] text-[var(--color-red-500)]" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={review.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < review.rating ? "fill-current" : "fill-transparent"}`} aria-hidden="true" />
                    ))}
                </div>
                <div
                    className="font-[600] text-[var(--color-text-muted)] bg-[var(--color-surface-divider)] px-[var(--space-3)] py-[var(--space-1)] rounded-full border border-[var(--color-border)]"
                    style={{ fontSize: 'var(--text-tiny)', letterSpacing: 'var(--tracking-loose)' }}
                >
                    {review.source}
                </div>
            </div>
            <p
                className="mt-[var(--space-6)] text-[var(--color-text-body)] flex-1 italic relative before:content-['\201C'] before:absolute before:-ml-4 before:text-3xl before:text-[var(--color-stone-400)] before:-mt-2 font-[400]"
                itemProp="reviewBody"
                style={{
                    fontSize: 'var(--text-body)',
                    lineHeight: 'var(--leading-body)',
                }}
            >
                {review.text}
            </p>
            <div className="mt-[var(--space-6)] flex items-center justify-between pt-[var(--space-6)] border-t border-[var(--color-border-subtle)]">
                <div className="font-[600] text-[var(--color-text-primary)]" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name" style={{ fontSize: 'var(--text-body)' }}>{review.authorName}</span>
                    <span
                        className="block font-[400] text-[var(--color-text-muted)] mt-[var(--space-1)]"
                        style={{ fontSize: 'var(--text-tiny)' }}
                    >
                        {review.location}
                    </span>
                </div>
                <div
                    className="font-[600] text-[var(--color-text-muted)]"
                    style={{ fontSize: 'var(--text-small)' }}
                >
                    {review.date}
                </div>
            </div>
        </Card>
    );
}
