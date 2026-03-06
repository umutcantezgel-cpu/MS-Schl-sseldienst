"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type MotionElement = "div" | "section" | "ul" | "ol" | "li" | "span" | "p" | "article";

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
 */
export default function StaggerReveal({
    children,
    className = "",
    staggerDelay = 0.05, // 50ms default as per requirements
    maxDelay = 0.6, // 600ms max total delay
    as = "div",
    animation,
    viewportMargin = "-50px"
}: StaggerRevealProps) {

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                // Framer Motion automatically distributes this delay to children
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            }
        }
    };

    const isClient = typeof window !== 'undefined';
    const prefersReducedMotion = isClient ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

    // Wenn Reduced Motion an ist, oder wir keine Animationen spezifiziert haben
    if (prefersReducedMotion || !animation) {
        const StandardComponent = as as any;
        return <StandardComponent className={className}>{children}</StandardComponent>;
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
            {/* 
              Es wird erwartet, dass die {children} als motion.divs oder motion.lis 
              übergeben werden und ihre eigenen variants (hidden/visible) haben.
              Framer Motion propagiert den "visible" state iterativ basierend auf staggerChildren.
            */}
            {children}
        </MotionComponent>
    );
}

/**
 * StaggerItem Komponente
 * Ein Wrapper für einzelne Elemente innerhalb eines StaggerReveal Containers.
 */
export function StaggerItem({ children, className = "", animation, as = "div" }: { children: ReactNode, className?: string, animation: Variants, as?: MotionElement }) {
    const isClient = typeof window !== 'undefined';
    const prefersReducedMotion = isClient ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

    if (prefersReducedMotion) {
        const StandardComponent = as as any;
        return <StandardComponent className={className}>{children}</StandardComponent>;
    }

    const MotionComponent = motionMap[as] || motion.div;

    return (
        <MotionComponent variants={animation} className={className}>
            {children}
        </MotionComponent>
    );
}
