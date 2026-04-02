'use client';

import * as React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimateInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number; // ms
  duration?: number; // ms, usually mapped to tokens but framer motion uses raw numbers
  once?: boolean;
  className?: string;
  distance?: number; // px, how far to move
}

const getVariants = (direction: Direction, distance: number): Variants => {
  if (direction === 'none') {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };
};

export function AnimateIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6, // mapping to --duration-slower equivalent in SECONDS for framer
  once = true,
  className,
  distance = 24,
}: AnimateInProps) {
  const reducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = getVariants(direction, distance);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.0, 0.0, 0.2, 1], // --ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
