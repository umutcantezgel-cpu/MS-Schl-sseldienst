export const MOTION_DNA = {
    springs: {
        // Standard-Feder: Für allgemeine Übergänge. Mittlere Steifheit, hohe Dämpfung. Ruhig und kontrolliert.
        standard: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            restDelta: 0.001
        },
        // Aufmerksamkeits-Feder: Für CTAs und wichtige Elemente. Höhere Steifheit, weniger Dämpfung. Energisch.
        attention: {
            type: "spring",
            stiffness: 400,
            damping: 20,
            restDelta: 0.001
        },
        // Inhalts-Feder: Für große Sektionen. Niedrige Steifheit, sehr hohe Dämpfung. Vertrauensvoll, kein Nachschwingen.
        content: {
            type: "spring",
            stiffness: 200,
            damping: 40,
            restDelta: 0.001
        }
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
            staggerChildren: 0.08, // 80ms per card
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
            delay: 0.4 + (customIndex * 0.12), // 400ms, 520ms, 640ms
            duration: 0.5,
            ...MOTION_DNA.springs.standard
        }
    })
};
