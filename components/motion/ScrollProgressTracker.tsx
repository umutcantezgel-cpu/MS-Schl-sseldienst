"use client";

import { useRef, useEffect, useState } from"react";
import { m, useScroll, useTransform, useSpring, useReducedMotion } from"framer-motion";
import { springStandard } from"@/lib/motion.config";

interface ScrollProgressTrackerProps {
  children: React.ReactNode;
  className?: string;
  // Wenn true, verblasst das Element von 1 auf 0 auf den ersten 300px
  fadeOnScroll?: boolean;
  // Wenn true, bewegt sich das Element leicht nach unten (Parallax)
  parallaxOnScroll?: boolean;
}

/**
 * ScrollProgressTracker (Teil 3 - Scroll-Choreographie)
 * Koppelt Animationen (Opacity, Transform) direkt an die globale Scroll-Position.
 */
export default function ScrollProgressTracker({
  children,
  className ="",
  fadeOnScroll = false,
  parallaxOnScroll = false
}: ScrollProgressTrackerProps) {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  // Transformationen: 0px bis 300px gescrollt
  // Opacity: 1 -> 0
  const rawOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  // Parallax Y: 0 -> 100px
  const rawY = useTransform(scrollY, [0, 300], [0, 100]);

  // Glättung der Transform-Werte mit Federphysik (Standard Profil)
  const smoothOpacity = useSpring(rawOpacity, { stiffness: 180, damping: 22, mass: 1.0 });
  const smoothY = useSpring(rawY, { stiffness: 180, damping: 22, mass: 1.0 });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      style={{
        opacity: fadeOnScroll ? smoothOpacity : 1,
        y: parallaxOnScroll ? smoothY : 0
      }}
    >
      {children}
    </m.div>
  );
}
