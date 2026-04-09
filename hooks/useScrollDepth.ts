"use client";

import { useEffect, useRef, useCallback } from "react";

type ScrollDepth = 25 | 50 | 75 | 100;

interface UseScrollDepthOptions {
  onDepthReached: (depth: ScrollDepth) => void;
}

/**
 * Phase 5 und Scroll-Depth-Tracking via Intersection Observer
 * Fires callback at 25%, 50%, 75%, 100% scroll depth.
 * Each marker fires only ONCE per page view.
 */
export function useScrollDepth({ onDepthReached }: UseScrollDepthOptions) {
  const firedRef = useRef<Set<ScrollDepth>>(new Set());
  const markersRef = useRef<HTMLDivElement[]>([]);
  const callbackRef = useRef(onDepthReached);
  
  useEffect(() => {
    callbackRef.current = onDepthReached;
  }, [onDepthReached]);

  const cleanup = useCallback(() => {
    markersRef.current.forEach((el) => el.remove());
    markersRef.current = [];
  }, []);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;

    // Reset on route change
    firedRef.current = new Set();
    cleanup();

    const depths: ScrollDepth[] = [25, 50, 75, 100];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const depth = Number(entry.target.getAttribute("data-depth")) as ScrollDepth;
          if (depth && !firedRef.current.has(depth)) {
            firedRef.current.add(depth);
            callbackRef.current(depth);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    // Create invisible marker elements at each depth
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const docHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      depths.forEach((depth) => {
        const marker = document.createElement("div");
        marker.setAttribute("data-depth", String(depth));
        marker.style.cssText =
          "position:absolute;left:0;width:1px;height:1px;pointer-events:none;opacity:0;";
        // Position at the scroll depth percentage of the scrollable area
        const position = (docHeight - viewportHeight) * (depth / 100) + viewportHeight;
        marker.style.top = `${Math.min(position, docHeight - 1)}px`;
        document.body.appendChild(marker);
        markersRef.current.push(marker);
        observer.observe(marker);
      });
    });

    return () => {
      observer.disconnect();
      cleanup();
    };
  }, [cleanup]);
}
