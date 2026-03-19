"use client";

import { ReactNode, useState } from"react";
import { motion, useReducedMotion } from"framer-motion";
import { springStandard } from"@/lib/motion.config";

interface WaveListProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
}

/**
 * WaveList Komponente (Hover-Wellen-Kaskade)
 * Erzeugt eine Reaktionswelle durch die Liste, wenn ein Element gehovert wird.
 * Direkte Nachbarn: 50% der Transformation
 * Zweite Reihe: 25% der Transformation
 */
export default function WaveList({ children, className ="", itemClassName ="" }: WaveListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <ul className={className}>
        {children.map((child, i) => (
          <li key={i} className={itemClassName}>{child}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={className} onMouseLeave={() => setHoveredIndex(null)}>
      {children.map((child, index) => {
        // Berechne Distanz zum gehoverten Element
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - index) : Infinity;

        // Transformationen basierend auf Distanz
        let scale = 1;
        let x = 0;
        let delay = 0;

        if (hoveredIndex !== null) {
          if (distance === 0) {
            scale = 1.05; // Geovertes Element 100% Transform
            x = 10;
          } else if (distance === 1) {
            scale = 1.025; // Direkte Nachbarn 50%
            x = 5;
            delay = 0.03; // 30ms Delay
          } else if (distance === 2) {
            scale = 1.0125; // Zweite Reihe 25%
            x = 2.5;
            delay = 0.06; // 60ms Delay
          }
        }

        return (
          <motion.li
            key={index}
            className={itemClassName}
            onMouseEnter={() => setHoveredIndex(index)}
            animate={{ scale, x }}
            transition={{ ...springStandard, delay }}
          >
            {child}
          </motion.li>
        );
      })}
    </ul>
  );
}
