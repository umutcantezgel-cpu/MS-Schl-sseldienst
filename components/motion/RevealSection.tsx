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
  delay = 0,
  "data-nosnippet": dataNosnippet
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  "data-nosnippet"?: string | boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} data-nosnippet={dataNosnippet}>
        {children}
      </div>
    );
  }

  return (
    <m.div
      initial={{ opacity: 1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      data-nosnippet={dataNosnippet}
    >
      {children}
    </m.div>
  );
}

