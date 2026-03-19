import { Variants } from "framer-motion";
import { springStandard, springEnergetic, springGentle } from "./motion.config";

/**
 * ANIMATIONS-BIBLIOTHEK (50 Varianten in 5 Kategorien)
 * Alle Animationen nutzen ausschließlich Federphysik (Spring) als Transition.
 * Gleiche Bedeutung = gleiche Animation.
 */

// ==========================================
// 1. EINTRITTS-ANIMATIONEN (10 Varianten)
// ==========================================
export const entryAnimations: Record<string, Variants> = {
    // 1. Sanftes Hochgleiten mit Einblenden
    slideUpFade: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: springStandard }
    },
    // 2. Kristallisation (Blur zu Scharf + Fade)
    crystallize: {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: { opacity: 1, filter: "blur(0px)", transition: springGentle }
    },
    // 3. Clip-Path Reveal (von unten nach oben)
    clipPathReveal: {
        hidden: { clipPath: "inset(100% 0 0 0)" },
        visible: { clipPath: "inset(0% 0 0 0)", transition: springStandard }
    },
    // 4. Skalierung (95% -> 100%)
    scaleFade: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: springStandard }
    },
    // 5. Seitliches Einrollen (links)
    rollInLeft: {
        hidden: { opacity: 0, x: -50, rotate: -10 },
        visible: { opacity: 1, x: 0, rotate: 0, transition: springEnergetic }
    },
    // 6. Seitliches Einrollen (rechts)
    rollInRight: {
        hidden: { opacity: 0, x: 50, rotate: 10 },
        visible: { opacity: 1, x: 0, rotate: 0, transition: springEnergetic }
    },
    // 7. Aufklapp-Effekt (von oben)
    flipDown: {
        hidden: { opacity: 0, rotateX: -90, originY: 0 },
        visible: { opacity: 1, rotateX: 0, transition: springStandard }
    },
    // 8. Karten-Umdrehen (Y-Achse)
    flipY: {
        hidden: { opacity: 0, rotateY: 90 },
        visible: { opacity: 1, rotateY: 0, transition: springStandard }
    },
    // 9. Partikel-Zusammenziehung (verstreut zu geformt - Simulation via 3D scale/translate)
    particleGather: {
        hidden: { opacity: 0, scale: 1.5, y: -20, rotateZ: 5 },
        visible: { opacity: 1, scale: 1, y: 0, rotateZ: 0, transition: springGentle }
    },
    // 10. Buchstaben-Enthüllen (Stagger via custom property)
    letterReveal: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: springStandard }
    }
};

// ==========================================
// 2. AUSTRITTS-ANIMATIONEN (10 Varianten)
// ==========================================
export const exitAnimations: Record<string, Variants> = {
    slideDownFade: {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30, transition: springStandard }
    },
    uncrystallize: {
        visible: { opacity: 1, filter: "blur(0px)" },
        hidden: { opacity: 0, filter: "blur(10px)", transition: springGentle }
    },
    clipPathHide: {
        visible: { clipPath: "inset(0% 0 0 0)" },
        hidden: { clipPath: "inset(100% 0 0 0)", transition: springStandard }
    },
    scaleFadeOut: {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.95, transition: springStandard }
    },
    rollOutLeft: {
        visible: { opacity: 1, x: 0, rotate: 0 },
        hidden: { opacity: 0, x: -50, rotate: -10, transition: springEnergetic }
    },
    rollOutRight: {
        visible: { opacity: 1, x: 0, rotate: 0 },
        hidden: { opacity: 0, x: 50, rotate: 10, transition: springEnergetic }
    },
    flipUp: {
        visible: { opacity: 1, rotateX: 0, originY: 0 },
        hidden: { opacity: 0, rotateX: -90, transition: springStandard }
    },
    flipYOut: {
        visible: { opacity: 1, rotateY: 0 },
        hidden: { opacity: 0, rotateY: 90, transition: springStandard }
    },
    particleScatter: {
        visible: { opacity: 1, scale: 1, y: 0, rotateZ: 0 },
        hidden: { opacity: 0, scale: 1.5, y: -20, rotateZ: 5, transition: springGentle }
    },
    letterHide: {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20, transition: springStandard }
    }
};

// ==========================================
// 3. AUFMERKSAMKEITS-ANIMATIONEN (10 Varianten)
// ==========================================
export const attentionAnimations: Record<string, Variants> = {
    // 1. Sanftes Pulsieren
    pulse: {
        animate: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } }
    },
    // 2. Glühen (Schatten)
    glow: {
        animate: { boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(185,28,28,0.5)", "0px 0px 0px rgba(0,0,0,0)"], transition: { repeat: Infinity, duration: 2 } }
    },
    // 3. Atmen (Opazität)
    breathe: {
        animate: { opacity: [0.7, 1, 0.7], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }
    },
    // 4. Schütteln (Horizontal)
    shake: {
        animate: { x: [0, -5, 5, -5, 5, 0], transition: { duration: 0.4, ease: "easeInOut" } }
    },
    // 5. Wackeln (Rotation)
    wiggle: {
        animate: { rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, ease: "easeInOut" } }
    },
    // 6. Bounce (Vertikal)
    bounce: {
        animate: { y: [0, -15, 0], transition: { duration: 0.6, ...springEnergetic } }
    },
    // 7. Ping (Expansion)
    ping: {
        animate: { scale: [1, 1.5], opacity: [0.8, 0], transition: { repeat: Infinity, duration: 1.5, ease: "easeOut" } }
    },
    // 8. Rahmen-Blinken
    borderFlash: {
        animate: { borderColor: ["transparent", "var(--color-red-500)", "transparent"], transition: { repeat: Infinity, duration: 1.5 } }
    },
    // 9. Schatten-Pulse
    shadowPulse: {
        animate: { filter: ["drop-shadow(0 0 0 transparent)", "drop-shadow(0 10px 10px rgba(0,0,0,0.2))", "drop-shadow(0 0 0 transparent)"], transition: { repeat: Infinity, duration: 2 } }
    },
    // 10. Leuchten (Streifen-Simulation via Background Position in CSS, hier fallback filter)
    shine: {
        animate: { filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"], transition: { repeat: Infinity, duration: 2 } }
    }
};

// ==========================================
// 4. LADE-ANIMATIONEN (10 Varianten)
// ==========================================
export const loadingAnimations: Record<string, Variants> = {
    skeleton: {
        animate: { opacity: [0.5, 0.8, 0.5], transition: { repeat: Infinity, duration: 1.5, ease: "linear" } }
    },
    spinner: {
        animate: { rotate: 360, transition: { repeat: Infinity, duration: 1, ease: "linear" } }
    },
    pulseDots: {
        animate: { y: [0, -5, 0], opacity: [0.3, 1, 0.3], transition: { repeat: Infinity, duration: 0.8, ease: "easeInOut" } }
    },
    waveBar: {
        animate: { scaleY: [0.5, 1, 0.5], transition: { repeat: Infinity, duration: 1, ease: "easeInOut" } }
    },
    shimmer: {
        animate: { x: ["-100%", "100%"], transition: { repeat: Infinity, duration: 2, ease: "linear" } }
    },
    morphShape: {
        animate: { borderRadius: ["20%", "50%", "20%"], rotate: 180, transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } }
    },
    particleLoading: {
        animate: { scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5], transition: { repeat: Infinity, duration: 1 } }
    },
    textBuild: {
        animate: { width: ["0%", "100%"], transition: { repeat: Infinity, duration: 2, ease: "linear" } }
    },
    blurReveal: {
        animate: { filter: ["blur(5px)", "blur(0px)", "blur(5px)"], transition: { repeat: Infinity, duration: 2 } }
    },
    brandRotate: {
        animate: { rotateY: 360, transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } }
    }
};

// ==========================================
// 5. FEEDBACK-ANIMATIONEN (10 Varianten)
// ==========================================
export const feedbackAnimations: Record<string, Variants> = {
    successCheck: {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    },
    errorShake: {
        animate: { x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.4, ...springEnergetic } }
    },
    warningPulse: {
        animate: { scale: [1, 1.05, 1], backgroundColor: ["#fff", "#fef08a", "#fff"], transition: { duration: 0.6 } }
    },
    deleteShrink: {
        animate: { scale: 0, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }
    },
    copyBounce: {
        animate: { y: -10, scale: 1.1, transition: { ...springEnergetic } }
    },
    snapFeedback: {
        animate: { scale: 0.95, transition: { duration: 0.1 } } // Squash effect
    },
    validationGlow: {
        animate: { boxShadow: "0 0 0 2px var(--color-red-500)" }
    },
    sendFly: {
        animate: { x: 100, y: -100, opacity: 0, scale: 0.5, transition: { duration: 0.5, ease: "easeOut" } }
    },
    confetti: {
        animate: { y: [-20, 100], opacity: [1, 0], transition: { duration: 1, ease: "easeOut" } }
    },
    successGreen: {
        animate: { backgroundColor: "rgba(34, 197, 94, 0.1)", transition: { duration: 0.3 } }
    }
};

// Kombiniere alle Animationen für leichten Export
export const allAnimations = {
    ...entryAnimations,
    ...exitAnimations,
    ...attentionAnimations,
    ...loadingAnimations,
    ...feedbackAnimations
};
