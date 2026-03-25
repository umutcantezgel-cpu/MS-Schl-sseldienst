"use client";

import { Phone, ShieldCheck, Clock, Key, ArrowRight } from "lucide-react";

import { useEffect, useState, useMemo } from "react";

import { m, useScroll, useTransform } from "framer-motion";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";
import { Typography } from "@/components/ui/typography/Typography";

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
          <m.path
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

// Remove static featureCards array as we are building a bespoke Bento Grid
export default function HeroSection() {
  // Parallax Setup
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], ["0%","25%"]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section
      id="hero-section"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] lg:min-h-0 lg:h-auto w-full flex items-center overflow-hidden pt-[100px] sm:pt-[120px] lg:pt-[110px] xl:pt-[140px] pb-8 sm:pb-12 lg:pb-[20px] bg-gradient-to-b from-[var(--color-off-white)] to-white"
    >
      {/* ── Parallax Background Layer ── */}
      <m.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY, opacity: opacityFade }}
      >
        <div className="absolute inset-0" />
        <FloatingPaths position={1} />
      </m.div>

      {/* Content wird über dem global fixierten Hintergrund gerendert */}
      <div className="container relative z-[10] mx-auto px-5 sm:px-8 lg:px-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 w-full py-4 items-center">

          {/* ── Linkes Panel (7 Spalten) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-3 sm:gap-4 lg:gap-5">

            {/* 1. Verfügbarkeits-Badge */}
            <div
              className="flex hero-entrance"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center gap-2 sm:gap-2.5 bg-[var(--value-primary)]/10 border border-[var(--value-primary)]/20 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full backdrop-blur-sm w-fit">
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-status-success" />
                </span>
                <span className="text-[color:var(--value-primary)] text-[11px] sm:text-[13px] md:text-[14px] font-semibold tracking-wide">
                  Jetzt erreichbar — in 20-30 Min. bei Ihnen
                </span>
              </div>
            </div>

            {/* 2. Headline */}
            <h1
              id="hero-heading"
              className="text-[color:var(--text-primary)] !mt-0 !mb-0 text-balance hero-entrance text-[32px] sm:text-[40px] md:text-[52px] lg:text-[44px] xl:text-[52px] font-extrabold tracking-tight leading-[1.1]"
              style={{ animationDelay: "100ms" }}
            >
              Ihr Schlüsseldienst in Wetzlar
              
              <span className="relative inline-flex items-center align-middle bg-[var(--color-red-600)] text-white px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-lg sm:rounded-xl shadow-md -rotate-2 ml-2 sm:ml-3 -translate-y-1">
                <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.05em] sm:tracking-[0.1em] m-0">24/7 Notdienst</span>
              </span>
              
              <span className="block w-full text-[color:var(--text-secondary)] mt-1.5 sm:mt-2 font-semibold text-[20px] sm:text-[24px]">
                für Türöffnung
              </span>
            </h1>

            {/* 3. Subheadline */}
            <p
              className="text-[14px] sm:text-[16px] md:text-lead font-normal text-pretty text-[color:var(--text-secondary)] max-w-[520px] hero-entrance leading-snug sm:leading-relaxed -mt-1 sm:mt-0"
              style={{ animationDelay: "150ms" }}
            >
              Ihr Schlüsseldienst in Wetzlar – 24h Notdienst für
              Türöffnungen. Verlässlich, schnell und immer für Sie da!
            </p>

            {/* 4. Phone Number Block + CTA Buttons */}
            <div
              className="flex flex-col gap-2.5 sm:gap-4 w-full max-w-[540px] mt-0 lg:mt-1 hero-entrance"
              style={{ animationDelay: "200ms" }}
            >
              {/* Verfügbarkeits-Indikator */}
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-success" />
                </span>
                <span className="text-status-success font-semibold text-[13px]">Jetzt erreichbar — Techniker verfügbar</span>
              </div>

              {/* Phone display */}
              <a
                href="tel:+4964418056544"
                className="group flex items-center gap-2.5 sm:gap-4 bg-white/80 border border-[var(--border-subtle)] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-4 w-full backdrop-blur-xl shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="bg-[var(--color-red-500)]/10 group-hover:bg-[var(--color-red-500)]/20 p-2 sm:p-3.5 rounded-lg sm:rounded-xl shrink-0 transition-all duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[var(--color-red-500)] group-hover:animate-ring transition-all duration-300" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[22px] sm:text-[length:40px] font-bold text-[color:var(--text-primary)] tabular-nums tracking-tighter m-0 leading-none">
                    06441 8056544
                  </span>
                  <span className="text-[10px] sm:text-[13px] font-medium text-[color:var(--text-secondary)] leading-tight sm:leading-snug max-w-[200px] sm:max-w-none">
                    Kostenlose Beratung — Festpreis ab 89€ vor Anfahrt genannt
                  </span>
                </div>
              </a>

              {/* CTA Button Row */}
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <HeartbeatCTA className="flex-1 min-w-0 sm:min-w-[200px]">
                    <a
                      href="tel:+4964418056544"
                      className="group relative bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white flex items-center justify-center typo-cta-button min-h-[44px] sm:min-h-[52px] px-3 sm:px-6 rounded-lg sm:rounded-xl shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[2px] transition-all duration-300 w-full overflow-hidden text-[13px] sm:text-[16px]"
                    >
                      {/* Shimmer effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5 mr-1.5 sm:mr-3 relative z-10 shrink-0" />
                      <span className="relative z-10 font-bold whitespace-nowrap">Jetzt Anrufen</span>
                      <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 ml-1.5 sm:ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                    </a>
                  </HeartbeatCTA>
                  <a
                    href="#preise"
                    className="ghost-button-fill bg-white/60 border border-[var(--border-subtle)] hover:bg-white/90 text-[color:var(--text-primary)] shadow-sm flex items-center justify-center typo-cta-button min-h-[44px] sm:min-h-[52px] px-3 sm:px-6 rounded-lg sm:rounded-xl backdrop-blur-md transition-all duration-300 flex-1 hover:-translate-y-[1px] text-[13px] sm:text-[16px] whitespace-nowrap"
                  >
                    Preisliste ansehen
                  </a>
                </div>
                <div className="flex justify-start px-2 mt-2">
                  <Typography variant="tiny" className="text-[color:var(--text-tertiary)]">Kostenlos & unverbindlich • Festpreis wird vor Anfahrt genannt • Antwort in 30 Min</Typography>
                </div>
              </div>
            </div>

          </div>

          {/* ── Rechtes Panel (5 Spalten) — Auto Form (Geometrische Fahrzeug-Silhouette) ── */}
          <div className="lg:col-span-5 relative w-full mt-10 lg:mt-0 z-[10] px-2 sm:px-0 flex flex-col items-center justify-center">
            
            {/* Speed Lines Background (Motion Illusion) */}
            <div className="absolute inset-x-0 bottom-12 h-px bg-gradient-to-r from-transparent via-[var(--color-red-500)]/30 to-transparent w-full z-0 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-8 h-px bg-gradient-to-r from-transparent via-[var(--color-charcoal-400)]/20 to-transparent w-[120%] -ml-[10%] z-0 pointer-events-none animate-speed-line-fast" />

            {/* THE CAR BODY CONTAINER */}
            <div className="w-full max-w-[500px] flex flex-col items-center relative z-10 hero-entrance group" style={{ animationDelay: '250ms' }}>
              
              {/* === ROOF / CABIN (24/7 Notdienst) === */}
              {/* Geometrisch: Abgerundete aerodynamische Kuppel */}
              <div className="w-[85%] sm:w-[75%] bg-white/70 backdrop-blur-2xl ring-1 ring-white/80 rounded-t-[40px] sm:rounded-t-[60px] px-6 py-5 sm:py-6 shadow-[0_-15px_30px_rgba(185,28,28,0.08)] relative overflow-hidden transition-all duration-500 z-20 group-hover:-translate-y-1">
                {/* Internal Dome Glow */}
                <div className="absolute top-0 right-10 w-40 h-40 bg-[var(--color-red-500)]/10 rounded-full blur-[40px]" />
                
                <div className="flex flex-col items-center text-center gap-2 relative z-10">
                  <div className="flex items-center gap-2 mb-1 bg-white/70 px-3 py-1 rounded-full shadow-sm ring-1 ring-black/5">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-red-500)] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red-500)]" />
                    </div>
                    <span className="text-[var(--color-red-600)] font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.1em]">
                      Live Status
                    </span>
                  </div>
                  <h3 className="text-[18px] sm:text-[22px] font-extrabold text-[color:var(--text-primary)] leading-[1.15]">
                    24/7 Notdienst in Wetzlar
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-[color:var(--text-secondary)] leading-relaxed max-w-[280px]">
                    Unsere lokalen Experten sind auch an <strong className="text-[color:var(--text-primary)] font-semibold">Wochenenden & Feiertagen</strong> einsatzbereit.
                  </p>
                </div>
              </div>

              {/* === CHASSIS / BODY (Front & Rear splits) === */}
              {/* Breite Basis des Autos mit aerodynamischer Curve */}
              <div className="w-full flex flex-col sm:flex-row bg-[var(--color-off-white)]/60 backdrop-blur-xl ring-1 ring-white/60 rounded-b-[30px] rounded-tl-[20px] rounded-tr-[20px] sm:rounded-tl-[50px] sm:rounded-tr-[30px] p-2 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                
                {/* HOOD / FRONT (Ohne Schäden) - Left Side */}
                <div className="flex-1 bg-white/95 ring-1 ring-black/5 rounded-[20px] sm:rounded-tl-[40px] sm:rounded-bl-[20px] p-5 relative overflow-hidden group/front mb-2 sm:mb-0 sm:mr-1 transition-all duration-500 hover:ring-[var(--color-red-500)]/30 hover:shadow-lg">
                  {/* Headlight Flow Glow */}
                  <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[var(--color-red-500)]/15 blur-[20px] group-hover/front:bg-[var(--color-red-500)]/30 group-hover/front:translate-x-12 transition-all duration-700 ease-out" />
                  
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] bg-[var(--color-red-500)]/10 flex items-center justify-center mb-3 relative z-10 transition-transform duration-500 group-hover/front:scale-110">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-red-600)]" />
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-extrabold text-[color:var(--text-primary)] mb-1 relative z-10">
                    Ohne Schäden
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-[color:var(--text-secondary)] leading-snug relative z-10">
                    Zerstörungsfreie Öffnung von Haus- & Wohnungstüren in 99% der Fälle.
                  </p>
                </div>

                {/* TRUNK / REAR (Spezialwerkzeug) - Right Side */}
                {/* Dark Theme for contrast/mechanical feel */}
                <div className="flex-1 bg-[var(--color-charcoal-900)] ring-1 ring-[var(--color-charcoal-800)] rounded-[20px] sm:rounded-tr-[20px] sm:rounded-br-[20px] p-5 relative overflow-hidden group/rear sm:ml-1 transition-all duration-500 hover:shadow-lg">
                  {/* Taillight Glow */}
                  <div className="absolute top-1/2 -right-8 w-20 h-20 bg-[var(--color-red-600)]/30 blur-[20px] group-hover/rear:bg-[var(--color-red-500)]/50 group-hover/rear:-translate-x-4 transition-all duration-500" />
                  {/* Tech Grip Pattern */}
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '8px 8px' }} />

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] bg-white/10 flex items-center justify-center mb-3 relative z-10 transition-transform duration-500 group-hover/rear:scale-110">
                    <Key className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-extrabold text-white mb-1 relative z-10">
                    Spezialwerkzeug
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-zinc-400 leading-snug relative z-10">
                    Präzisionsgeräte ermöglichen Öffnungen selbst bei schweren Verriegelungen.
                  </p>
                </div>
              </div>

              {/* === WHEELS / HOVER RINGS === */}
              {/* Positioned on the bottom-left and bottom-right of the chassis */}
              <div className="w-[88%] flex justify-between px-6 sm:px-10 -mt-6 sm:-mt-8 relative z-20 pointer-events-none">
                {/* Front Wheel */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-[5px] sm:border-[6px] border-[var(--color-charcoal-900)] shadow-[0_15px_25px_rgba(0,0,0,0.35)] bg-[var(--color-charcoal-800)] flex items-center justify-center relative spin-wheel">
                  <div className="absolute inset-1.5 rounded-full border-[2px] border-dashed border-[var(--color-red-500)]/60" />
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[var(--color-red-500)] rounded-full shadow-[0_0_15px_rgba(185,28,28,0.9)]" />
                </div>
                {/* Rear Wheel */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-[5px] sm:border-[6px] border-[var(--color-charcoal-900)] shadow-[0_15px_25px_rgba(0,0,0,0.35)] bg-[var(--color-charcoal-800)] flex items-center justify-center relative spin-wheel">
                  <div className="absolute inset-1.5 rounded-full border-[2px] border-dashed border-[var(--color-red-500)]/60" />
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[var(--color-red-500)] rounded-full shadow-[0_0_15px_rgba(185,28,28,0.9)]" />
                </div>
              </div>

            </div>

            {/* Car/Wheel Animations */}
            <style jsx global>{`
              @keyframes spinWheel {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .spin-wheel {
                animation: spinWheel 4s linear infinite;
              }
              @keyframes speedLine {
                0% { transform: translateX(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(100%); opacity: 0; }
              }
              .animate-speed-line-fast {
                animation: speedLine 2s ease-in-out infinite;
              }
              @media (prefers-reduced-motion: reduce) {
                .spin-wheel, .animate-speed-line-fast { animation: none; }
              }
            `}</style>
          </div>
        </div>
      </div>


    </section>
  );
}
