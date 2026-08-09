"use client";

import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Apply entry animation via CSS class
    el.classList.add('page-enter');
    // Use requestAnimationFrame to ensure the class is applied before removing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('page-enter-active');
      });
    });
  }, []);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}
