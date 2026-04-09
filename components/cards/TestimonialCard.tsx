import { Testimonial } from "@/lib/types";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: 'standard' | 'kompakt' | 'featured';
}

export function TestimonialCard({ 
  testimonial, 
  className = "", 
  variant = 'standard' 
}: TestimonialCardProps) {
  const rating = testimonial.rating || 5;

  if (variant === 'kompakt') {
    return (
      <div className={cn("flex flex-col bg-white border border-slate-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow", className)}>
        <StarRating rating={rating} className="mb-3" />
        <p className="text-slate-700 text-sm flex-grow mb-4 leading-relaxed italic line-clamp-4">
          &quot;{testimonial.shortQuote || testimonial.quote}&quot;
        </p>
        <div>
          <div className="font-bold text-slate-900 text-sm leading-tight">{testimonial.clientName}</div>
          {(testimonial.company || testimonial.clientRole) && (
            <div className="text-xs text-slate-500 mt-0.5 leading-tight">{testimonial.company || testimonial.clientRole}</div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={cn("relative flex flex-col md:flex-row bg-[#0A1A2F] text-white p-8 md:p-12 rounded-3xl overflow-hidden shadow-xl", className)}>
        <Quote className="absolute right-4 top-4 md:right-12 md:top-12 h-24 w-24 text-white/5 rotate-180" />
        <div className="relative z-10 max-w-3xl">
          <StarRating rating={rating} className="mb-8" />
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-slate-100">
            &quot;{testimonial.quote}&quot;
          </blockquote>
          <div className="flex items-center gap-4">
            {testimonial.photoUrl && (
              <div className="relative h-14 w-14 rounded-full overflow-hidden bg-white/20 shrink-0">
                <Image src={testimonial.photoUrl} alt={testimonial.clientName} fill className="object-cover" sizes="56px" />
              </div>
            )}
            {!testimonial.photoUrl && (
              <div className="h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xl select-none">
                {testimonial.clientName.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <div className="font-bold text-white text-lg leading-tight">{testimonial.clientName}</div>
              {(testimonial.company || testimonial.clientRole) && (
                <div className="text-slate-300 text-sm mt-1 leading-tight">{testimonial.company || testimonial.clientRole}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard (Legacy-compatible but refreshed towards modern UI)
  return (
    <div className={cn("relative flex flex-col h-full bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all", className)}>
      <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-200 rotate-180 pointer-events-none" />
      <StarRating rating={rating} className="mb-6" />

      <blockquote className="flex-grow z-10 relative">
        <p className="text-slate-700 text-base leading-relaxed">
          &quot;{testimonial.shortQuote || testimonial.quote}&quot;
        </p>
      </blockquote>

      <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
        {testimonial.photoUrl && (
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
            <Image src={testimonial.photoUrl} alt={testimonial.clientName} fill className="object-cover" sizes="48px" />
          </div>
        )}
        {!testimonial.photoUrl && (
          <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-600 text-lg select-none">
            {testimonial.clientName.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <div className="font-bold text-slate-900 leading-tight">{testimonial.clientName}</div>
          {(testimonial.company || testimonial.clientRole) && (
            <div className="text-sm text-slate-500 mt-1 leading-tight">{testimonial.company || testimonial.clientRole}</div>
          )}
        </div>
      </div>
    </div>
  );
}
