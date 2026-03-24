"use client";

import { m, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface AnimatedNumberProps {
  value: number;
  className?: string;
}

export default function AnimatedNumber({ value, className = "" }: AnimatedNumberProps) {
  // We use a spring for a highly premium, smooth counting effect
  const springValue = useSpring(value, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  // Whenever the value prop changes, we animate the spring to the new target
  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  // Transform the floating point spring value into a formatted string (no decimals for full euros)
  const displayValue = useTransform(springValue, (current) =>
    Math.round(current).toString()
  );

  return <m.span className={className}>{displayValue}</m.span>;
}
