import { Star } from"lucide-react";
import GoogleIcon from"@/components/ui/GoogleIcon";

export default function GoogleReviewsBadge({ rating, count }: { rating: number, count: number }) {
  return (
    <a 
      href="https://www.google.com/search?q=Schl%C3%BCssel+Schmiede+Wetzlar+Rezensionen" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Zu den Google Bewertungen"
      className="inline-flex items-center gap-[var(--space-4)] rounded-full bg-[var(--surface-primary)] px-[var(--space-6)] py-[var(--space-3)] elevation-2 ring-1 ring-[var(--border-subtle)] hover:ring-[var(--border-medium)] hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-[var(--border-subtle)] rounded-full">
        <GoogleIcon size={20} />
      </div>
      <div>
        <div className="flex items-center gap-[var(--space-1)]">
          <span className="font-bold text-[color:var(--text-primary)]">{rating}</span>
          <div className="flex text-[var(--color-google-gold)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
            ))}
          </div>
        </div>
        <div className="text-xs font-medium text-[color:var(--text-tertiary)] mt-[var(--space-1)]">
          Basierend auf {count} Bewertungen
        </div>
      </div>
    </a>
  );
}
