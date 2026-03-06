import { Star } from "lucide-react";

export default function GoogleReviewsBadge({ rating, count }: { rating: number, count: number }) {
    return (
        <div className="inline-flex items-center gap-[var(--space-4)] rounded-full bg-white px-[var(--space-6)] py-[var(--space-3)] elevation-2 ring-1 ring-[var(--color-border)]">
            <div className="flex items-center justify-center w-10 h-10 bg-[var(--color-surface-divider)] rounded-full">
                <span className="font-extrabold text-xl text-blue-600">G</span>
            </div>
            <div>
                <div className="flex items-center gap-[var(--space-1)]">
                    <span className="font-bold text-[var(--color-text-primary)]">{rating}</span>
                    <div className="flex text-[var(--color-red-500)]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                        ))}
                    </div>
                </div>
                <div className="text-xs font-medium text-[var(--color-text-muted)] mt-[var(--space-1)]">
                    Basierend auf {count} Bewertungen
                </div>
            </div>
        </div>
    );
}
