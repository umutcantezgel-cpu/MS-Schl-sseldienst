"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function AnimatedCounter({
    target,
    duration = 2000,
    prefix = "",
    suffix = "",
    className = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target, hasStarted, prefersReducedMotion]);

    useEffect(() => {
        if (!hasStarted || prefersReducedMotion) return;

        let startTimestamp: number | null = null;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out: fast start, gentle end
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(easedProgress * target);

            setCount(currentValue);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };

        animationFrame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrame);
    }, [hasStarted, target, duration, prefersReducedMotion]);

    return (
        <span ref={ref} className={className}>
            {prefix}{prefersReducedMotion ? target : count}{suffix}
        </span>
    );
}
