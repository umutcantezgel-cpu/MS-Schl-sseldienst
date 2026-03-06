import { useEffect, useState, useRef } from 'react';

type Threshold = 0 | 0.1 | 0.25 | 0.5 | 0.75 | 1.0;

/**
 * useScrollObserver Hook (Teil 3 - Scroll-Choreographie)
 * Bietet granulare Schwellenwert-Kontrolle für Elemente, die in den Viewport scrollen.
 * Nutzt den IntersectionObserver (performanter als Scroll-Events).
 */
export function useScrollObserver(thresholds: Threshold[] = [0, 0.1, 0.25, 0.5, 0.75, 1.0]) {
    const ref = useRef<HTMLElement | null>(null);
    const [visibility, setVisibility] = useState<number>(0);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setVisibility(entry.intersectionRatio);
                } else {
                    setVisibility(0);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: thresholds,
            }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [thresholds]);

    return { ref, visibility, isIntersecting };
}
