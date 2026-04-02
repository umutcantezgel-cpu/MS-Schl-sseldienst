"use client";

import { m, useReducedMotion } from"framer-motion";
import { revealSectionVariants } from"@/lib/motion.config";
import { ReactNode, createElement } from"react";

export default function RevealSection({
  children,
  className ="",
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

  const visible = revealSectionVariants.visible as Record<string, unknown>;
  const visibleTransition = (visible?.transition ?? {}) as Record<string, unknown>;

  return (
    <m.div
      variants={{
        ...revealSectionVariants,
        visible: {
          ...visible,
          transition: {
            ...visibleTransition,
            delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin:"-15%" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

