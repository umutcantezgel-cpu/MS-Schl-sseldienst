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

          {/* ── Rechtes Panel (5 Spalten) — Premium Trust & Performance Bento Grid ── */}
          <div className="lg:col-span-5 relative w-full mt-10 lg:mt-0 z-[10] px-3 sm:px-0">
            
            {/* Glowing Circuit Lines (visible sm+) */}
            <div className="hidden sm:block absolute -inset-6 z-0 pointer-events-none" aria-hidden="true">
              <svg width="100%" height="100%" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="bentoGlow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="40%" stopColor="#B91C1C" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#ef4444" stopOpacity="1" />
                    <stop offset="80%" stopColor="#B91C1C" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                  <filter id="bentoBlur">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Abstract Path wrapping the grid */}
                <path 
                  d="M 20 10 L 20 150 Q 20 170 40 170 L 400 170 Q 420 170 420 190 L 420 380" 
                  stroke="#B91C1C" strokeOpacity="0.08" strokeWidth="2" fill="none" strokeLinecap="round" 
                />
                <path 
                  d="M 20 10 L 20 150 Q 20 170 40 170 L 400 170 Q 420 170 420 190 L 420 380" 
                  stroke="url(#bentoGlow)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                  filter="url(#bentoBlur)"
                  strokeDasharray="80 300"
                  className="animate-bento-circuit"
                />
              </svg>
            </div>

            {/* Bento Grid Container */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10 w-full max-w-[500px] lg:max-w-none mx-auto lg:ml-auto">
              
              {/* Box A: 24/7 Notdienst (Full Width) */}
              <div 
                className="col-span-2 relative overflow-hidden group bg-white/70 backdrop-blur-xl border border-white/80 hover:border-[var(--color-red-500)]/30 rounded-2xl p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(185,28,28,0.12)] transition-all duration-500 hero-entrance"
                style={{ animationDelay: '250ms' }}
              >
                {/* Red Atmospheric Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-red-500)]/5 rounded-full blur-[40px] group-hover:bg-[var(--color-red-500)]/15 transition-colors duration-700" />
                
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className="flex flex-col gap-2">
                    {/* Live Indicator */}
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-red-500)] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-red-500)]" />
                      </div>
                      <span className="text-[var(--color-red-600)] font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.1em]">
                        Live Status
                      </span>
                    </div>
                    
                    <h3 className="text-[20px] sm:text-[24px] font-extrabold text-[color:var(--text-primary)] leading-[1.15] transform group-hover:translate-x-1 transition-transform duration-300">
                      24/7 Notdienst in Wetzlar
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-[color:var(--text-secondary)] leading-relaxed max-w-[280px] mt-1">
                      Unsere lokalen Experten sind auch an <strong className="text-[color:var(--text-primary)] font-semibold">Wochenenden & Feiertagen</strong> einsatzbereit.
                    </p>
                  </div>
                  
                  {/* Premium Icon Container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-[var(--color-off-white)] border border-[var(--border-subtle)] flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-red-500)] drop-shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Box B: Ohne Schäden */}
              <div 
                className="col-span-1 flex flex-col justify-between gap-4 bg-white/70 backdrop-blur-xl border border-white/80 hover:border-[var(--color-red-500)]/30 rounded-2xl p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(185,28,28,0.12)] transition-all duration-500 hover:-translate-y-1 hero-entrance group"
                style={{ animationDelay: '300ms' }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--color-red-500)]/10 flex items-center justify-center group-hover:bg-[var(--color-red-500)]/20 transition-colors duration-300 relative overflow-hidden">
                  {/* Metal Sweep Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-red-600)] relative z-10" />
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[17px] font-extrabold text-[color:var(--text-primary)] mb-1">
                    Ohne Schäden
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-[color:var(--text-secondary)] leading-snug">
                    Zerstörungsfreie Öffnung von Haus- & Wohnungstüren in 99% der Fälle.
                  </p>
                </div>
              </div>

              {/* Box C: Spezialwerkzeug (Inverted Dark Theme) */}
              <div 
                className="col-span-1 flex flex-col justify-between gap-4 bg-[var(--color-charcoal-900)] border border-[var(--color-charcoal-800)] hover:border-[var(--color-charcoal-600)] rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hero-entrance group relative overflow-hidden"
                style={{ animationDelay: '350ms' }}
              >
                 {/* Tech Background Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 relative z-10 shadow-inner">
                  <Key className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-[15px] sm:text-[17px] font-extrabold text-white mb-1">
                    Spezialwerkzeug
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-zinc-400 leading-snug">
                    Präzisionsgeräte ermöglichen Öffnungen selbst bei schweren Verriegelungen.
                  </p>
                </div>
              </div>

            </div>

            {/* Custom Animations */}
            <style jsx global>{`
              @keyframes bentoCircuitFlow {
                0% { stroke-dashoffset: 380; }
                100% { stroke-dashoffset: 0; }
              }
              .animate-bento-circuit {
                animation: bentoCircuitFlow 3s linear infinite;
              }
              @media (prefers-reduced-motion: reduce) {
                .animate-bento-circuit { animation: none; }
              }
            `}</style>
          </div>
        </div>
      </div>


    </section>
  );
}
