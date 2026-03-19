import { springStandard, springEnergetic, springGentle } from "./motion.config";

/**
 * MOTION DNA — Single Source of Truth
 * Alle Animationen referenzieren die Profile aus motion.config.ts.
 * Keine Duplikate. Keine abweichenden Werte.
 */
export const MOTION_DNA = {
    springs: {
        standard: springStandard,
        attention: springEnergetic,
        content: springGentle,
    },
    durations: {
        fast: 0.2,    // 200ms
        normal: 0.45, // 450ms
        slow: 0.8,    // 800ms
        verySlow: 1.8 // 1800ms
    }
};

export const revealSectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: MOTION_DNA.durations.normal,
            ...MOTION_DNA.springs.standard
        }
    },
};

export const staggerGridContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // 100ms per card (up from 80ms)
            delayChildren: 0.1,
        },
    },
};

export const staggerGridItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ...MOTION_DNA.springs.standard
        }
    }
};

export const featureCardStagger = {
    hidden: { opacity: 0, x: 20 },
    visible: (customIndex: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.4 + (customIndex * 0.12),
            duration: 0.5,
            ...MOTION_DNA.springs.standard
        }
    })
};
