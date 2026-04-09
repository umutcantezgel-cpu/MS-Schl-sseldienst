"use client";

import { m, useReducedMotion } from"framer-motion";
import { springEnergetic } from"@/lib/motion.config";
import { ReactNode } from"react";

/**
 * HeartbeatCTA und Wrapper für Call-to-Action Buttons
 * 
 * Doppelpuls-Animation (3s Zyklus): 
 *   scale(1) → scale(1.02) → scale(1) → scale(1.04) → scale(1)
 * 
 * Bei Hover: Puls stoppt, Anheben, tieferer roter Schatten
 * Bei Klick: Kompression + Zurückfedern
 * Reduced-Motion: Statischer roter Schatten-Glow
 */
interface HeartbeatCTAProps {
  children: ReactNode;
  className?: string;
}

export default function HeartbeatCTA({ children, className = "" }: HeartbeatCTAProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`heartbeat-static-glow ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <m.div
      className={`heartbeat-pulse ${className}`}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 32px rgba(185, 28, 28, 0.4), 0 0 0 1px rgba(185, 28, 28, 0.1)",
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.95,
        transition: springEnergetic
      }}
    >
      {children}
    </m.div>
  );
}
