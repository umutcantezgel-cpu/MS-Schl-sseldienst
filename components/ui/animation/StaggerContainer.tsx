'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StaggerContainerProps {
  children: React.ReactNode;
  stagger?: 'fast' | 'normal' | 'slow';
  once?: boolean;
  className?: string;
}

const staggerMap = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

export function StaggerContainer({
  children,
  stagger = 'normal',
  once = true,
  className,
}: StaggerContainerProps) {
  const reducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Framer Motion automatically handles children stagger if children have variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerMap[stagger],
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Helper block for Stagger child elements
export const StaggerItem = motion.div;
