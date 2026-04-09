"use client";

import { m, useReducedMotion } from"framer-motion";
import { ReactNode, createElement } from"react";

/**
 * RevealSection und Scroll-triggered entrance animation.
 * 
 * [SEO CRITICAL]: `initial` uses opacity: 1 (NOT 0).
 * Seobility crawls without JavaScript und if initial opacity is 0,
 * ALL content inside RevealSection becomes invisible to the crawler.
 * This was the root cause of only 182 words being detected (vs 580+ actual).
 * 
 * The animation now uses only y-transform for visual movement effect.
 * Content is always visible in server-rendered HTML.
 */
export default function RevealSection({
  children,
  className = "",
  delay = 0
}: {
  children: ReactNode,
  className?: string,
  delay?: number
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return createElement("div", { className }, children);
  }

  return (
    <m.div
      variants={{
        hidden: { opacity: 1, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 170,
            damping: 22,
            mass: 1.0,
            delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

