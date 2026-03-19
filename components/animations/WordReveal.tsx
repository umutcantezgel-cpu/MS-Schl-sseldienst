"use client";

import { useEffect, useRef, useState } from"react";
import { useReducedMotion } from"framer-motion";

interface WordRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function WordReveal({ text, delay = 0, className ="" }: WordRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const words = text.split("");

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
        >
          <span
            className="inline-block transition-transform duration-[400ms]"
            style={{
              transitionDelay: `${delay + i * 50}ms`,
              transitionTimingFunction:"cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: (isVisible || prefersReducedMotion) ?"translateY(0)" :"translateY(100%)",
              opacity: (isVisible || prefersReducedMotion) ? 1 : 0,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && <span className="inline-block w-[0.3em]" />}
        </span>
      ))}
    </span>
  );
}
