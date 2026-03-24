"use client";

import { useRef, useState, useEffect, useCallback, Children } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { m, useMotionValue, animate } from "framer-motion";
import { triggerHaptic } from "@/lib/haptics";

export default function ReviewCarousel({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const x = useMotionValue(0);
  const childCount = Children.count(children);

  // Calculate total slides
  const calculateSlides = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const cardsVisible = containerWidth >= 1024 ? 3 : containerWidth >= 768 ? 2 : 1;
    setTotalSlides(Math.max(1, childCount - cardsVisible + 1));
  }, [childCount]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    calculateSlides();
    window.addEventListener("resize", calculateSlides);
    return () => window.removeEventListener("resize", calculateSlides);
  }, [calculateSlides]);

  const scrollToIndex = useCallback((index: number) => {
    if (!innerRef.current || !containerRef.current) return;
    const innerW = innerRef.current.scrollWidth;
    const outerW = containerRef.current.clientWidth;
    const maxScroll = Math.max(0, innerW - outerW);
    
    // Fallback falls Breite 0 ist
    const targetX = maxScroll === 0 ? 0 : -(index / Math.max(1, totalSlides - 1)) * maxScroll;
    
    setActiveIndex(index);
    animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
  }, [totalSlides, x]);

  // Recalculate offset on resize or activeIndex change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    scrollToIndex(activeIndex);
  }, [totalSlides, activeIndex, scrollToIndex]);

  const scroll = useCallback((direction: "left" | "right") => {
    triggerHaptic('light');
    const newIndex = direction === "left"
      ? Math.max(0, activeIndex - 1)
      : Math.min(totalSlides - 1, activeIndex + 1);
    scrollToIndex(newIndex);
  }, [activeIndex, totalSlides, scrollToIndex]);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipeConfidenceThreshold = 10000;
    const swipePower = Math.abs(offset.x) * velocity.x;

    let targetIndex = activeIndex;

    // Fast swipe skips cards
    if (swipePower < -swipeConfidenceThreshold) {
      targetIndex = Math.min(totalSlides - 1, activeIndex + 1);
    } else if (swipePower > swipeConfidenceThreshold) {
      targetIndex = Math.max(0, activeIndex - 1);
    } else {
      // Slow drag snaps to nearest
      if (!innerRef.current || !containerRef.current) return;
      const currentX = x.get();
      const innerW = innerRef.current.scrollWidth;
      const outerW = containerRef.current.clientWidth;
      const maxScroll = Math.max(0, innerW - outerW);
      
      if (maxScroll > 0) {
        const progress = Math.abs(currentX) / maxScroll;
        targetIndex = Math.round(progress * (totalSlides - 1));
        targetIndex = Math.max(0, Math.min(totalSlides - 1, targetIndex));
      }
    }

    scrollToIndex(targetIndex);
  };

  // Autoplay (respect reduced-motion)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isPaused) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return;
    }

    autoplayRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const next = prev >= totalSlides - 1 ? 0 : prev + 1;
        return next;
      });
    }, 5000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, totalSlides]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scroll('left');
      setIsPaused(true);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scroll('right');
      setIsPaused(true);
    }
  };

  return (
    <div
      className="relative group mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
    >
      <div 
        ref={containerRef} 
        className="overflow-hidden pb-8 cursor-grab active:cursor-grabbing touch-pan-y focus:outline-none focus:ring-2 focus:ring-[var(--focus-color,var(--color-red-500))] focus:ring-offset-2 rounded-xl"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Kundenbewertungen Karussell. Nutzen Sie die Pfeiltasten links und rechts zur Navigation."
        role="region"
      >
        <m.div
          ref={innerRef}
          className="flex gap-6 w-max items-stretch"
          drag="x"
          style={{ x }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          onDragEnd={handleDragEnd}
        >
          {children}
        </m.div>
      </div>

      {/* Arrow Navigation (Desktop) */}
      <button
        onClick={() => scroll("left")}
        aria-label="Vorherige Bewertungen"
        className="absolute left-[-20px] top-[40%] -translate-y-1/2 bg-[var(--surface-primary)] text-[color:var(--text-secondary)] ring-1 ring-[var(--border-subtle)] rounded-full p-2.5 hover:text-[var(--color-red-500)] hover:shadow-[var(--elevation-3)] transition-all md:flex hidden z-[var(--z-elevated)] opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-[var(--elevation-2)]"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={() => scroll("right")}
        aria-label="Weitere Bewertungen"
        className="absolute right-[-20px] top-[40%] -translate-y-1/2 bg-[var(--surface-primary)] text-[color:var(--text-secondary)] ring-1 ring-[var(--border-subtle)] rounded-full p-2.5 hover:text-[var(--color-red-500)] hover:shadow-[var(--elevation-3)] transition-all md:flex hidden z-[var(--z-elevated)] opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-[var(--elevation-2)]"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot Indicators */}
      {totalSlides > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-1 mt-4" role="tablist" aria-label="Bewertungs-Karussell Navigation">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Bewertungen Seite ${i + 1}`}
              onClick={() => {
                triggerHaptic('light');
                scrollToIndex(i);
              }}
              className="relative flex items-center justify-center min-w-[44px] min-h-[44px]"
            >
              <span className={`block rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 h-3 bg-[var(--color-red-500)]"
                  : "w-3 h-3 bg-slate-300 group-hover:bg-slate-400"
              }`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
