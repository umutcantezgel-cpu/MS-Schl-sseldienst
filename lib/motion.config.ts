import { Transition } from "framer-motion";

/**
 * Universelle Federphysik-Profile (Spring Physics) für die gesamte Website.
 * Alle Animationen basieren auf diesen drei Profilen, um ein konsistentes, 
 * physikalisch plausibles Verhalten ("digitaler Organismus") zu gewährleisten.
 */

// 1. STANDARD-PROFIL
// Für: Allgemeine Übergänge, Inhaltsenthüllungen, Sektions-Einblendungen, Navigation.
// Charakter: Ruhig, kontrolliert, souverän ohne Hektik.
export const springStandard: Transition = {
    type: "spring",
    stiffness: 170,
    damping: 22,
    mass: 1.0,
};

// 2. ENERGETISCHES PROFIL
// Für: Call-to-Action-Buttons, Aufmerksamkeitselemente, Benachrichtigungen, Interaktionen.
// Charakter: Schnappend, lebendig, leichtes Überschwingen, bestimmt.
export const springEnergetic: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
    mass: 0.7,
};

// 3. SANFTES PROFIL
// Für: Testimonials, Hintergrund-Elemente, Trust-Sektionen, emotionale Inhalte.
// Charakter: Langsam, elegant, weich, vertrauensbildend.
export const springGentle: Transition = {
    type: "spring",
    stiffness: 90,
    damping: 27,
    mass: 1.1,
};
