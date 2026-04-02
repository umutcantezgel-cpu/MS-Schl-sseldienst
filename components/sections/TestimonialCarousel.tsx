"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Testimonial } from "@/lib/types";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function TestimonialCarousel({ 
  testimonials, 
  title = "Was unsere Kunden sagen", 
  subtitle = "Echte Bewertungen aus Wetzlar",
  className 
}: TestimonialCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
      
      const cardWidth = scrollWidth / testimonials.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  }, [testimonials.length]);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / testimonials.length;
      scrollContainerRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

  if (!testimonials || testimonials.length === 0) return null;

  if (testimonials.length <= 2) {
    return (
      <section className={cn("py-16 md:py-24 bg-slate-50", className)}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            {subtitle && <span className="text-[var(--color-red-500)] font-bold tracking-wider uppercase text-sm">{subtitle}</span>}
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">{title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-16 md:py-24 bg-slate-50 overflow-hidden", className)}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            {subtitle && <span className="text-[var(--color-red-500)] font-bold tracking-wider uppercase text-sm">{subtitle}</span>}
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">{title}</h2>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={scrollLeft} 
              disabled={!canScrollLeft}
              className="p-3 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[var(--color-red-500)] hover:border-[var(--color-red-500)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight} 
              disabled={!canScrollRight}
              className="p-3 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[var(--color-red-500)] hover:border-[var(--color-red-500)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 md:px-0 md:mx-0">
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id} 
                className="w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex-none snap-center md:snap-start"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination (Mobile & Tablet) */}
        <div className="flex justify-center gap-2 mt-2 lg:hidden">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === index 
                  ? "w-8 bg-[var(--color-red-500)]" 
                  : "w-2 bg-slate-300"
              )}
              aria-label={`Gehe zu Bewertung ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
