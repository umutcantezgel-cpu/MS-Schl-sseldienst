"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the "Conversion Distance" (distance to the next visible CTA).
 * This hook uses IntersectionObserver to check if any element with 
 * the data-attribute `data-conversion="cta"` is currently visible in the viewport.
 * 
 * Returns { hasVisibleCta: boolean, nearestCtaDistance: number }
 */
export function useConversionDistance() {
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateDistance = () => {
      const ctas = document.querySelectorAll('[data-conversion="cta"]');
      if (ctas.length === 0) {
        setDistance(null);
        return;
      }

      let minDistance = Infinity;

      ctas.forEach((cta) => {
        const rect = cta.getBoundingClientRect();
        // Fall 1: Im sichtbaren Viewport = 0
        if (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
        ) {
          minDistance = 0;
        } else if (rect.top > (window.innerHeight || document.documentElement.clientHeight)) {
          // Fall 2: Unterhalb des Viewports
          const dist = rect.top - (window.innerHeight || document.documentElement.clientHeight);
          minDistance = Math.min(minDistance, dist);
        } else {
          // Fall 3: Oberhalb des Viewports
          const dist = Math.abs(rect.bottom);
          minDistance = Math.min(minDistance, dist);
        }
      });

      setDistance(minDistance === Infinity ? null : minDistance);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateDistance();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial check
    updateDistance();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { 
    distance, 
    needsStickyCta: distance !== null && distance > 800 
  };
}

