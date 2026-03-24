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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      suppressHydrationWarning
    >
      {children}
    </m.div>
  );
}
