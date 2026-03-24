"use client";

import { ReactNode, useRef, useState } from"react";
import { m, useMotionValue, useSpring } from"framer-motion";
import { springEnergetic } from"@/lib/motion.config";

/**
 * Magnetischer Wrapper für Buttons und CTAs.
 * Zieht das Element an den Cursor, wenn dieser innerhalb eines Radius ist.
 */
export default function MagneticWrapper({
  children,
  pullRadius = 80,
  maxPullStringency = 0.5, // 0-1 wo 1 = Cursorposition = Elementposition (maximale Anziehung)
  className =""
}: {
  children: ReactNode,
  pullRadius?: number,
  maxPullStringency?: number,
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMagnetic, setIsMagnetic] = useState(false);

  // Target positions
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  // Animated positions utilizing the energetic spring pattern for snappy return
  const x = useSpring(targetX, { stiffness: 350, damping: 15, mass: 0.6 });
  const y = useSpring(targetY, { stiffness: 350, damping: 15, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < pullRadius) {
      setIsMagnetic(true);
      // Je näher dran, desto stärker der pull. Mit max pull begrenzt.
      // Der Pull ist proportional zur Distanz, aber wir cappen das bei maxPullStringency.
      const force = Math.max(0, 1 - distance / pullRadius);

      targetX.set(distanceX * force * maxPullStringency);
      targetY.set(distanceY * force * maxPullStringency);
    } else {
      if (isMagnetic) {
        setIsMagnetic(false);
        targetX.set(0);
        targetY.set(0);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsMagnetic(false);
    targetX.set(0);
    targetY.set(0);
  };

  // Reduced motion check (no need for hook if we just read it once, 
  // but typically best done via matchMedia in effects if dynamic.
  // For simplicity, we disable the target setting if reduced motion.)
  const prefersReducedMotion = typeof window !=="undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{ x, y }}
      // Apply squash & stretch on click (Disney principle)
      whileTap={{ scale: 0.96, transition: springEnergetic }}
    >
      {children}
      {/* Optional: Spotlight effect could be added here as a pseudo element driven by x/y */}
    </m.div>
  );
}
