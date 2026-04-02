"use client";

import { m, useReducedMotion } from"framer-motion";
import { entryAnimations } from"@/lib/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <m.div
      initial={{ opacity: 0.95, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.95, y: -8 }}
      transition={{ duration: 0.25, ease: [0.0, 0.0, 0.2, 1] }} // Phase 5 tokens: --duration-normal, --ease-out
      suppressHydrationWarning
    >
      {children}
    </m.div>
  );
}
