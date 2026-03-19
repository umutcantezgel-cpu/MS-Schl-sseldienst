"use client";

import { ReactNode, createElement } from"react";
import { motion, Variants, useReducedMotion } from"framer-motion";

type MotionElement ="div" |"section" |"ul" |"ol" |"li" |"span" |"p" |"article";

const motionMap = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  article: motion.article,
};

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  maxDelay?: number;
  as?: MotionElement;
  animation?: Variants;
  viewportMargin?: string;
}

/**
 * StaggerReveal Komponente (Teil 3 - Gestaffeltes Enthüllen)
 * Hüllt eine Liste von Elementen ein und triggert deren Animationen nacheinander
 * (wie eine Welle), wenn der Container in den sichtbaren Bereich scrollt.
 * 
 * Timing: 100ms Versatz pro Element, max 500ms Gesamtdauer.
 * Trigger: Bei ~20% Sichtbarkeit.
 */
export default function StaggerReveal({
  children,
  className ="",
  staggerDelay = 0.1, // 100ms per element
  maxDelay = 0.5, // 500ms max total delay
  as ="div",
  animation,
  viewportMargin ="-20%"
}: StaggerRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  };

  // Reduced-Motion: Render ohne Animation
  if (prefersReducedMotion || !animation) {
    return createElement(as, { className }, children);
  }

  const MotionComponent = motionMap[as] || motion.div;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * StaggerItem Komponente
 * Ein Wrapper für einzelne Elemente innerhalb eines StaggerReveal Containers.
 */
export function StaggerItem({ children, className ="", animation, as ="div" }: { children: ReactNode, className?: string, animation: Variants, as?: MotionElement }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return createElement(as, { className }, children);
  }

  const MotionComponent = motionMap[as] || motion.div;

  return (
    <MotionComponent variants={animation} className={className}>
      {children}
    </MotionComponent>
  );
}
