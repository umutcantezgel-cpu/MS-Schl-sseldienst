export const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
};

export const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const MOTION_CONFIG = {
    spring: {
        gentle: { type: 'spring', stiffness: 200, damping: 20 },
        snappy: { type: 'spring', stiffness: 400, damping: 25 },
        bouncy: { type: 'spring', stiffness: 300, damping: 15 }
    }
};
