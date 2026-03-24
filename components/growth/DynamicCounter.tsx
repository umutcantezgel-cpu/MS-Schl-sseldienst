"use client";

import { useEffect, useRef, useState, useCallback } from "react";

import { ReactNode } from "react";

interface DynamicCounterProps {
  /** Target number to count up to */
  value: number;
  /** Suffix to display after number (e.g. "+", "%", " Min") */
  suffix?: string;
  /** Label displayed below the number */
  label: string;
  /** Animation duration in ms. Default: 1200 */
  duration?: number;
  /** CSS class for the number */
  className?: string;
  /** Optional ReactNode Icon to display above the counter */
  icon?: ReactNode;
}

/**
 * Phase 18 — Animated Counter with IntersectionObserver
 * Counts up from 0 to target value when element enters viewport.
 * Respects prefers-reduced-motion → shows final value immediately.
 */
export default function DynamicCounter({
  value,
  suffix = "",
  label,
  duration = 1200,
  className = "",
  icon,
}: DynamicCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, duration, hasAnimated]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div ref={ref} className={`flex flex-col items-center text-center ${className}`}>
      {icon && (
        <div className="w-12 h-12 mb-4 rounded-xl bg-[var(--color-red-500)]/10 flex items-center justify-center">
          {icon}
        </div>
      )}
      <span className="text-4xl lg:text-5xl font-black text-[color:var(--text-primary)] tabular-nums tracking-tighter leading-none mb-2">
        {displayValue}
        <span className="text-[color:var(--color-red-500)]">{suffix}</span>
      </span>
      <p className="text-sm lg:text-base text-[color:var(--text-secondary)] font-medium">
        {label}
      </p>
    </div>
  );
}
