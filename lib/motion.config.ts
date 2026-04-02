import { Transition, Variants } from "framer-motion";

/**
 * ═══════════════════════════════════════════════════════════════
 * MOTION CONFIG — Single Source of Truth (Phase 4)
 * ═══════════════════════════════════════════════════════════════
 *
 * Dieses Modul definiert ALLE Animations-Primitiven der Website:
 * - Spring-Profile (Framer Motion)
 * - CSS Easing-Kurven (für CSS-Transitions)
 * - Duration-Token
 * - Stagger-Token
 *
 * REGEL: Keine Animation auf der Website darf Werte verwenden,
 * die hier nicht definiert sind.
 */

// ═══════════════════════════════════════════════
// 1. SPRING-PROFILE (Framer Motion)
// ═══════════════════════════════════════════════

/** Ruhig, kontrolliert — Inhaltsenthüllungen, Sektions-Einblendungen, Navigation */
export const springStandard: Transition = {
    type: "spring",
    stiffness: 170,
    damping: 22,
    mass: 1.0,
};

/** Schnell, knackig — Button-Hover, Card-Press, UI-Feedback */
export const springSnappy: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.8,
};

/** Schnappend, lebendig — CTA-Buttons, Aufmerksamkeitselemente, Benachrichtigungen */
export const springEnergetic: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
    mass: 0.7,
};

/** Langsam, elegant — Testimonials, Hintergrund-Elemente, Trust-Sektionen */
export const springGentle: Transition = {
    type: "spring",
    stiffness: 90,
    damping: 27,
    mass: 1.1,
};

/** Deutliches Überschwingen — Erfolgs-Animationen, Badge-Erscheinungen, spielerische Momente */
export const springBouncy: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
    mass: 0.5,
};

// ═══════════════════════════════════════════════
// 2. CSS EASING-KURVEN
// ═══════════════════════════════════════════════
// Spiegeln die CSS Custom Properties in globals.css

export const cssEasings = {
    /** Elemente, die IN den Viewport kommen — Ball landet auf Kissen */
    out: "cubic-bezier(0.0, 0.0, 0.2, 1)",
    /** Elemente, die den Viewport VERLASSEN — Stein der fällt */
    in: "cubic-bezier(0.4, 0.0, 1, 1)",
    /** Elemente, die ihre Position wechseln — sanfter Start und Ende */
    inOut: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    /** Leichtes Überschwingen — Hover-Lifts, Button-Presses */
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    /** Stärkeres Überschwingen — spielerische Mikro-Interaktionen */
    bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
} as const;

// ═══════════════════════════════════════════════
// 3. DURATION-TOKEN
// ═══════════════════════════════════════════════
// REGEL: Keine Animation darf > 1000ms dauern.

export const durations = {
    /** 100ms — Checkbox-Toggle, Button-Active, Input-Toggle */
    instant: 0.1,
    /** 150ms — Hover-States, Tooltip-Appear, Input-Focus */
    fast: 0.15,
    /** 250ms — Standard: Card-Hover, Dropdown, Tab-Switch */
    normal: 0.25,
    /** 400ms — Modal-Open, Seiten-Transition, Akkordeon */
    slow: 0.4,
    /** 600ms — Hero-Entrance, Sektion-Reveal */
    dramatic: 0.6,
    /** 1000ms — Erster Seitenaufruf, einmalige epische Momente */
    cinematic: 1.0,
} as const;

// ═══════════════════════════════════════════════
// 4. STAGGER-TOKEN
// ═══════════════════════════════════════════════
// Maximal 8 Elemente in einer Stagger-Sequenz.

export const staggers = {
    /** 50ms pro Element — schnelle Listen */
    fast: 0.05,
    /** 80ms pro Element — Standard */
    normal: 0.08,
    /** 120ms pro Element — dramatische Reveals */
    slow: 0.12,
    /** Maximale Anzahl gestaggerter Elemente */
    maxItems: 8,
} as const;

// ═══════════════════════════════════════════════
// 5. VORGEFERTIGTE VARIANTS (migriert aus motion.ts)
// ═══════════════════════════════════════════════

/** Standard Scroll-Reveal für Sektionen */
export const revealSectionVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ...springStandard,
        },
    },
};

/** Stagger-Container für Card-Grids */
export const staggerGridContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggers.normal,
            delayChildren: staggers.normal,
        },
    },
};

/** Stagger-Item für Card-Grid-Kinder */
export const staggerGridItem: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: durations.slow,
            ...springStandard,
        },
    },
};

/** Feature-Card Stagger mit Custom-Index-Delay */
export const featureCardStagger: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (customIndex: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: durations.slow + customIndex * staggers.slow,
            duration: durations.slow,
            ...springStandard,
        },
    }),
};
