import { Star, User, CheckCircle2 } from"lucide-react";
import { Review } from"@/components/reviews/reviews.data";
import GoogleIcon from"@/components/ui/GoogleIcon";
import Image from "next/image";

// Premium color palette harmonized with design system
const AVATAR_COLORS = [
  "bg-[var(--value-primary)]/10 text-[color:var(--value-primary)]",
  "bg-[var(--color-charcoal-100)] text-[color:var(--color-charcoal-900)]",
  "bg-[var(--color-red-50)] text-[color:var(--color-red-700)]",
  "bg-[var(--color-charcoal-50)] text-[color:var(--text-secondary)]",
  "bg-[var(--color-red-100)] text-[color:var(--color-red-900)]",
  "bg-status-success/10 text-status-success",
  "bg-status-info/10 text-status-info",
  "bg-status-warning/10 text-status-warning",
];

function getAvatarColor(name: string): string {
  // Deterministic color from first character code
  const charCode = name.charCodeAt(0);
  return AVATAR_COLORS[charCode % AVATAR_COLORS.length];
}

export default function ReviewCard({ review }: { review: Review }) {
  const avatarColor = getAvatarColor(review.authorName);
  const initial = review.authorName.charAt(0).toUpperCase();

  return (
    <article
      itemProp="review"
      itemScope
      itemType="https://schema.org/Review"
      className="group flex flex-col bg-surface-elevated p-8 rounded-[var(--radius-16)] shadow-[var(--elevation-1)] border border-[var(--color-charcoal-100)] hover:border-[var(--value-primary)]/40 hover:shadow-[0_20px_60px_-15px_rgba(185,28,28,0.15)] hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-[var(--duration-300)] ease-out shrink-0 min-w-[85vw] sm:min-w-[380px] max-w-[420px] snap-center h-full relative overflow-hidden"
    >
      {/* Primary Accent Line Top */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--value-primary)] via-[var(--color-red-500)] to-[var(--color-red-600)] group-hover:h-[4px] transition-all duration-300" />

      {/* Subtle hover glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-red-500)]/0 group-hover:bg-[var(--color-red-500)]/5 rounded-full blur-[40px] transition-all duration-500 pointer-events-none" />

      {/* Header: Avatar + Name + Stars */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className={`relative flex items-center justify-center w-14 h-14 rounded-full font-bold text-[20px] shrink-0 bg-surface-secondary overflow-hidden ring-2 ring-white shadow-sm ${!review.avatarUrl ? avatarColor : ''}`}>
            {review.avatarUrl ? (
              <Image 
                src={review.avatarUrl} 
                alt={`${review.authorName} Profilbild`}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            ) : (
              initial
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[17px] text-[color:var(--text-primary)] flex items-center gap-1.5" itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{review.authorName}</span>
              <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" aria-label="Verifizierter Kunde" />
            </span>
            <div className="flex items-center gap-1.5 text-[13px] text-[color:var(--text-tertiary)] mt-0.5">
              {review.location && <span className="font-medium text-[color:var(--text-secondary)]">{review.location}</span>}
              {review.location && <span className="opacity-50">•</span>}
              <span>{review.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex flex-col mt-2">
        {/* Star Rating Above Quote */}
        <div className="flex gap-1 mb-4 text-[var(--color-google-gold)]" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
          <meta itemProp="ratingValue" content={review.rating.toString()} />
          <meta itemProp="bestRating" content="5" />
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "fill-transparent text-[var(--border-subtle)]"}`} aria-hidden="true" />
          ))}
        </div>

        {/* Decorative Quote Mark */}
        <span className="absolute -top-4 -left-3 text-[80px] leading-none text-[var(--color-red-500)]/10 font-serif z-0 select-none transition-transform duration-300 group-hover:-translate-y-2">&quot;</span>

        <p
          className="relative z-10 text-[16px] text-[color:var(--text-secondary)] font-medium leading-relaxed italic line-clamp-4"
          itemProp="reviewBody"
        >
          &quot;{review.text}&quot;
        </p>
      </div>

      {/* Google Logo Source Indicator */}
      <div className="mt-[var(--space-6)] pt-[var(--space-4)] border-t border-[var(--color-charcoal-100)] flex items-center justify-between relative z-10">
        <span className="text-[12px] font-medium text-[color:var(--text-tertiary)] uppercase tracking-wider">
          {review.source} Rezension
        </span>
        {review.source ==="Google" ? (
          <GoogleIcon size={18} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        ) : (
          <span className="text-[12px] font-bold text-status-success opacity-60 group-hover:opacity-100 transition-opacity duration-300">PE</span>
        )}
      </div>
    </article>
  );
}

