import { Star } from"lucide-react";
import { Review } from"@/components/reviews/reviews.data";
import GoogleIcon from"@/components/ui/GoogleIcon";

// Premium color palette harmonized with design system
const AVATAR_COLORS = ["bg-[var(--value-primary)]/10 text-[var(--value-primary)]","bg-emerald-50 text-emerald-700","bg-amber-50 text-amber-700","bg-violet-50 text-violet-700","bg-sky-50 text-sky-700","bg-rose-50 text-rose-700","bg-teal-50 text-teal-700","bg-orange-50 text-orange-700",
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
      className="flex flex-col bg-white p-[32px] rounded-[var(--radius-16)] border-t-[3px] border-t-[var(--value-primary)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] hover:-translate-y-1 transition-all duration-[var(--duration-300)] shrink-0 min-w-[85vw] sm:min-w-[380px] max-w-[420px] snap-center h-full relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-[var(--space-6)] relative z-10">
        <div className="flex items-center gap-[var(--space-4)]">
          <div className={`flex items-center justify-center w-[48px] h-[48px] rounded-full font-bold text-[18px] shrink-0 ${avatarColor}`}>
            {initial}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[16px] text-black" itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{review.authorName}</span>
            </span>
            <div className="flex items-center gap-2 text-[13px] text-[var(--text-tertiary)]">
              {review.location && <span>{review.location}</span>}
              {review.location && <span className="text-slate-300">•</span>}
              <span>{review.date}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-0.5 text-[var(--color-google-gold)]" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
          <meta itemProp="ratingValue" content={review.rating.toString()} />
          <meta itemProp="bestRating" content="5" />
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < review.rating ?"fill-current" :"fill-transparent text-[var(--border-subtle)]"}`} aria-hidden="true" />
          ))}
        </div>
      </div>

      <div className="relative flex-1 mt-[var(--space-2)]">
        {/* Decorative Quote Mark */}
        <span className="absolute -top-6 -left-4 text-[80px] leading-none text-[var(--atmosphere-glow)]/15 font-serif z-0 select-none">&quot;</span>

        <p
          className="relative z-10 text-[15px] text-[var(--text-secondary)] font-normal leading-relaxed"
          itemProp="reviewBody"
        >
          {review.text}
        </p>
      </div>

      {/* Google Logo Source Indicator */}
      <div className="mt-[var(--space-6)] pt-[var(--space-4)] border-t border-slate-100 flex items-center justify-between relative z-10">
        <span className="text-[12px] font-medium text-[var(--text-tertiary)] uppercase tracking-wider">
          {review.source} Rezension
        </span>
        {review.source ==="Google" ? (
          <GoogleIcon size={18} className="opacity-60" />
        ) : (
          <span className="text-[12px] font-bold text-emerald-600 opacity-60">PE</span>
        )}
      </div>
    </article>
  );
}
