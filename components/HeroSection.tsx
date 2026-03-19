"use client";

import { Phone, CheckCircle2, ShieldCheck, Clock, Star, Key, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { aggregateRating } from "@/components/reviews/reviews.data";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";
import { springStandard } from "@/lib/motion.config";

/* ============================================================
  HERO SECTION — Award-Level Design
  
  6-Schicht-Hintergrund:
   1. Charcoal-900 Base
   2. Noise-Textur (CSS-only, kein Asset)
   3. Warm Center-Glow (Red Radial)
   3.5 Animated Flowing Paths (SVG, subtle)
   4. Dot-Grid (subtil, 3% Opacity)
   5. Bottom-Gradient (nahtloser Übergang)
  
  Staggered Entrance-Animation per CSS-only (kein framer-motion).
  Reduced-motion respektiert.
  ============================================================ */

/* --- Animated Flowing Background Paths --- */
function FloatingPaths({ position }: { position: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const paths = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
        /* Deterministic duration per path index — no Math.random() */
        duration: 20 + ((i * 7 + 3) % 10),
      })),
    [position]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            style={{ stroke: "var(--color-blush-600)" }} /* Rosé-Elegant für atmosphärische Pfade */
            strokeWidth={path.width * 1.5}
            strokeOpacity={0.05 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={
              isMounted
                ? {
                   pathLength: 1,
                   opacity: [0.2, 0.6, 0.2],
                   pathOffset: [0, 1, 0],
                 }
                : undefined
            }
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease:"linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const featureCards = [
  {
    icon: ShieldCheck,
    title:"Ohne Schäden",
    desc:"Zerstörungsfreie Öffnung von zugefallenen Haus- und Wohnungstüren.",
  },
  {
    icon: Key,
    title:"Ohne Bohren",
    desc:"Spezialwerkzeuge ermöglichen Öffnungen selbst bei schweren Sicherheitsverriegelungen.",
  },
  {
    icon: Clock,
    title:"24/7 Notdienst",
    desc:"Unsere regionalen Experten in Wetzlar sind an Wochenenden und Feiertagen einsatzbereit.",
  },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Parallax Setup
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], ["0%","25%"]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero-section"
      aria-label="Notfall-Schlüsseldienst Wetzlar — Sofort anrufen"
      className="relative min-h-[560px] md:min-h-[70vh] lg:min-h-[85vh] w-full flex items-center overflow-hidden pt-[88px] lg:pt-[104px] pb-[80px] lg:pb-[100px] dark-focus"
    >
      {/* Content wird über dem global fixierten Hintergrund gerendert */}
      <div className="container relative z-[10] mx-auto px-5 sm:px-8 lg:px-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 w-full py-4 lg:py-6 items-center">

          {/* ── Linkes Panel (7 Spalten) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8 lg:gap-10">

            {/* 1. Verfügbarkeits-Badge */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { ...springStandard } }
              }}
              className="flex"
            >
              <div className="flex items-center gap-2.5 bg-[var(--value-primary)]/10 border border-[var(--value-primary)]/20 px-4 py-2.5 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-[var(--value-primary)] text-[13px] sm:text-[14px] font-semibold tracking-wide">
                  Jetzt erreichbar — Techniker in 20-30 Min. bei Ihnen
                </span>
              </div>
            </motion.div>

            {/* 2. Headline (Kinetische Typografie: Wortweise) */}
            <motion.h1
              className="text-[var(--text-primary)] typo-hero-display text-balance flex flex-wrap gap-x-3 gap-y-2"
              initial="hidden"
              animate={isVisible ?"visible" :"hidden"}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 }
                }
              }}
            >
              {["Ihr","Schlüsseldienst","in","Wetzlar"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease:"easeOut" } }
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
              
              <motion.span
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease:"easeOut" } }
                }}
                className="relative inline-block bg-[var(--color-red-600)] text-white px-4 py-1.5 rounded-xl shadow-md -rotate-2 ml-1"
              >
                <span className="typo-label-caps">24/7 Notdienst</span>
              </motion.span>
              
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease:"easeOut" } }
                }}
                className="w-full text-[var(--text-secondary)] mt-2"
              >
                für Türöffnung
              </motion.span>
            </motion.h1>

            {/* 3. Subheadline */}
            <motion.p
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { ...springStandard, delay: 0.15 } }
              }}
              className="typo-lead text-[var(--text-secondary)] max-w-[520px]"
            >
              Ihr Schlüsseldienst in Wetzlar – 24h Notdienst für
              Türöffnungen. Verlässlich, schnell und immer für Sie da!
            </motion.p>

            {/* 4. Phone Number Block + CTA Buttons */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { ...springStandard, delay: 0.25 } }
              }}
              className="flex flex-col gap-4 w-full max-w-[540px] mt-2 lg:mt-4"
            >
              {/* Verfügbarkeits-Indikator */}
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-emerald-700 font-semibold text-[13px]">Jetzt erreichbar — Techniker verfügbar</span>
              </div>

              {/* Phone display */}
              <a
                href="tel:+4964418056544"
                className="group flex items-center gap-4 bg-white/80 border border-[var(--border-subtle)] rounded-2xl p-4 md:p-5 w-full backdrop-blur-xl shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="bg-[var(--color-red-500)]/10 group-hover:bg-[var(--color-red-500)]/20 p-3.5 rounded-xl shrink-0 transition-all duration-300">
                  <Phone className="w-6 h-6 lg:w-7 lg:h-7 text-[var(--color-red-500)] group-hover:animate-ring transition-all duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="typo-phone-display text-[var(--text-primary)] tabular-nums">
                    06441 8056544
                  </span>
                  <span className="typo-small text-[var(--text-secondary)]">
                    Kostenlose Beratung — Festpreis ab 99€ vor Anfahrt genannt
                  </span>
                </div>
              </a>

              {/* CTA Button Row */}
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <HeartbeatCTA className="flex-1 min-w-[200px]">
                    <a
                      href="tel:+4964418056544"
                      className="group relative bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white flex items-center justify-center typo-cta-button min-h-[56px] px-6 rounded-xl shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[2px] transition-all duration-300 w-full overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <Phone className="h-5 w-5 mr-3 relative z-10" />
                      <span className="relative z-10">Jetzt Anrufen</span>
                    </a>
                  </HeartbeatCTA>
                  <a
                    href="#preise"
                    className="ghost-button-fill bg-white/60 border border-[var(--border-subtle)] hover:bg-white/90 text-[var(--text-primary)] shadow-sm flex items-center justify-center typo-cta-button min-h-[56px] px-6 rounded-xl backdrop-blur-md transition-all duration-300 flex-1 hover:-translate-y-[1px]"
                  >
                    Preisliste ansehen
                  </a>
                </div>
                <div className="flex justify-start px-2 mt-1">
                  <span className="typo-tiny text-[var(--text-tertiary)]">Kostenlos & unverbindlich • Festpreis wird vor Anfahrt genannt • Antwort in 30 Min</span>
                </div>
              </div>
            </motion.div>






          </div>

          {/* ── Rechtes Panel (5 Spalten) — Feature Cards ── */}
          <div className="lg:col-span-5 flex flex-col gap-4 mt-4 lg:mt-0 z-[10] w-full max-w-[500px] lg:max-w-none mx-auto lg:ml-auto">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group bg-white/[0.04] border border-white/[0.06] backdrop-blur-md rounded-2xl p-6 flex items-start gap-5 hover:bg-white/[0.09] hover:border-[var(--value-primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(184,67,42,0.15)] shadow-[inset_0_1px_0_rgba(255,200,214,0.12)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ?"translateY(0) translateX(0)" :"translateY(16px) translateX(12px)",
                    transitionDelay: `${300 + idx * 120}ms`,
                    transitionDuration:"700ms",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--value-primary)]/15 flex items-center justify-center shrink-0 group-hover:bg-[var(--value-primary)]/25 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[var(--value-icon-color)]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="typo-h4-card text-[var(--text-primary)]">
                      {card.title}
                    </h3>
                    <p className="typo-body text-[var(--text-secondary)] !mb-0">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS-only animations (embedded for self-containment) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #hero-section *,
          #hero-section *::before,
          #hero-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
