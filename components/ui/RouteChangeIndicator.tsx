"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Thin progress bar at the top of the screen during client-side route changes.
 * Only visible if navigation takes >300ms (no flicker on fast transitions).
 */
export default function RouteChangeIndicator() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPathname = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // Route changed — stop loading
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsNavigating(false);
      setProgress(100);

      // Reset after animation completes
      const hideTimer = setTimeout(() => {
        setProgress(0);
      }, 400);

      prevPathname.current = pathname;

      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);

      return () => clearTimeout(hideTimer);
    }
    return undefined;
  }, [pathname]);

  // Listen for link clicks to start the indicator
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || target.target === "_blank") {
        return;
      }

      // Only show after 300ms delay (avoid flicker on fast nav)
      timerRef.current = setTimeout(() => {
        setIsNavigating(true);
        setProgress(20);

        // Simulate gradual progress
        progressRef.current = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) return prev;
            return prev + Math.random() * 15;
          });
        }, 500);
      }, 300);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  if (progress === 0) return null;

  return (
    <div
      role="progressbar"
      aria-label="Seite wird geladen"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #DC2626, #F87171)",
          transition: isNavigating
            ? "width 500ms ease-out"
            : "width 200ms ease-out",
          boxShadow: "0 0 8px rgba(220, 38, 38, 0.4)",
        }}
      />
    </div>
  );
}
