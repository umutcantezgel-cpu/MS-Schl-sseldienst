"use client";

import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


/**
 * PageTransition — Sanfte Route-Transitions
 * 
 * Wraps the page content and animates route changes with a subtle
 * opacity + translateY transition. Navigation/Footer bleiben stabil.
 * 
 * Bei prefers-reduced-motion: Keine Animation.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.2, // Phase 5: 200ms
          ease: [0.25, 0.46, 0.45, 0.94], // --ease-smooth
        }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
