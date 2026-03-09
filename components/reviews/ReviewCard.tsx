import { Star } from "lucide-react";
import { Review } from "@/components/reviews/reviews.data";

export default function ReviewCard({ review }: { review: Review }) {
    // Generiere eine Hintergrundfarbe basierend auf dem Namen für den Avatar
    const colors = ["bg-blue-100 text-blue-700", "bg-green-100 text-green-700", "bg-yellow-100 text-yellow-700", "bg-purple-100 text-purple-700", "bg-red-100 text-red-700"];
    const colorIndex = review.authorName.length % colors.length;
    const avatarColor = colors[colorIndex];
    const initial = review.authorName.charAt(0).toUpperCase();

    return (
        <article
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
            className="flex flex-col bg-[var(--color-surface-default)] p-[var(--space-6)] rounded-[var(--radius-16)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] hover:border-[var(--color-brand-muted)] transition-all duration-[var(--duration-300)] ease-out shrink-0 min-w-[85vw] sm:min-w-[340px] max-w-[400px] snap-center h-full relative"
        >
            <div className="flex items-start justify-between gap-[var(--space-4)] mb-[var(--space-4)]">
                <div className="flex items-center gap-[var(--space-3)]">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-[var(--font-size-16)] shrink-0 ${avatarColor}`}>
                        {initial}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-[var(--font-size-15)] text-[var(--color-text-primary)]" itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">{review.authorName}</span>
                        </span>
                        <span className="text-[var(--font-size-13)] text-[var(--color-text-muted)]">
                            {review.date}
                        </span>
                    </div>
                </div>

                {review.source === "Google" && (
                    <div className="shrink-0" title="Google Bewertung">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                    </div>
                )}
            </div>

            <div className="flex gap-[var(--space-1)] text-yellow-400 mb-[var(--space-4)]" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={review.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "fill-transparent text-[var(--color-border)]"}`} aria-hidden="true" />
                ))}
            </div>

            <div className="relative flex-1 mt-[var(--space-2)]">
                {/* Zitatzeichen Background */}
                <span className="absolute -top-4 -left-2 text-[60px] leading-none text-[var(--color-surface-muted)] font-serif z-0 select-none">"</span>

                <p
                    className="relative z-10 text-[var(--font-size-15)] text-[var(--color-text-body)] font-normal italic leading-relaxed"
                    itemProp="reviewBody"
                >
                    {review.text}
                </p>
            </div>

            {review.location && (
                <div className="mt-[var(--space-4)] pt-[var(--space-3)] border-t border-[var(--color-border)] text-[var(--font-size-13)] font-medium text-[var(--color-text-muted)]">
                    Aus {review.location}
                </div>
            )}
        </article>
    );
}
