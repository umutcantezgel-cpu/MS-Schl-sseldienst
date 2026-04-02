import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ 
  rating, 
  maxRating = 5, 
  className,
  starClassName 
}: StarRatingProps) {
  // Normalize rating to be between 0 and maxRating
  const validRating = Math.max(0, Math.min(rating, maxRating));
  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${validRating} von ${maxRating} Sternen`}>
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <svg 
          key={`full-${i}`} 
          className={cn("h-4 w-4 fill-[#F59E0B] text-[#F59E0B]", starClassName)} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <svg 
          key="half" 
          className={cn("h-4 w-4 text-[#F59E0B]", starClassName)} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
        >
          <defs>
            <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon 
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
            fill="url(#halfStarGradient)" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <svg 
          key={`empty-${i}`} 
          className={cn("h-4 w-4 fill-transparent text-gray-300", starClassName)} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}
