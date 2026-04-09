"use client";

import { Phone, ShieldCheck, Clock, Key, ArrowRight } from "lucide-react";
import Link from "next/link";

import { useEffect, useState, useMemo } from "react";

import { m, useScroll, useTransform } from "framer-motion";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";
import { Typography } from "@/components/ui/typography/Typography";
import TrustSignals from "@/components/trust/TrustSignals";

/* ============================================================
  HERO SECTION und Award-Level Design
  
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
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    if (window.innerWidth < 768) {
      setIsDesktop(false);
    }
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
        /* Deterministic duration per path index und no Math.random() */
        duration: 20 + ((i * 7 + 3) % 10),
      })),
    [position]
  );

  // Performance-Fix: Unmount the entire SVG on mobile AND on the server.
  // Returning null before isMounted guarantees 0 bytes of SVG are sent to the client initially,
  // completely bypassing hydration costs. It will fade in gently on Desktop after hydration.
  if (!isMounted || !isDesktop) return null;

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
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
            style={{ stroke: "var(--color-blush-600)" }}
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

function DesktopParallax() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], ["0%","25%"]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <m.div 
      className="absolute inset-0 z-0 pointer-events-none hidden md:block"
      style={{ y: backgroundY, opacity: opacityFade }}
    >
      <div className="absolute inset-0" />
      <FloatingPaths position={1} />
    </m.div>
  );
}

// Remove static featureCards array as we are building a bespoke Bento Grid
export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    if (window.innerWidth < 768) {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section
      id="hero-section"
      aria-labelledby="hero-heading"
      className="relative w-full flex items-center overflow-hidden pt-[90px] sm:pt-[100px] lg:pt-[110px] xl:pt-[140px] pb-12 sm:pb-8 lg:pb-[20px] bg-gradient-to-b from-[var(--color-off-white)] to-white"
    >
      {/* ── Static Background Layer (Mobile Performance) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden block">
         <div className="absolute inset-0" />
      </div>

      {/* ── Parallax Background Layer (Desktop only) ── */}
      {isMounted && isDesktop && <DesktopParallax />}

      {/* Content wird über dem global fixierten Hintergrund gerendert */}
      <div className="container relative z-[10] mx-auto px-5 sm:px-8 lg:px-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-2 sm:gap-6 lg:gap-10 w-full py-2 sm:py-4 items-center">

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
                <span className="text-[color:var(--value-primary)] text-xs sm:text-sm md:text-sm font-semibold tracking-wide">
                  24h geöffnet für persönliche Beratung vor Ort
                </span>
              </div>
            </div>

            {/* 2. Headline und Visual heading (H2 since server-rendered H1 exists in page.tsx) */}
            <div className="hero-entrance" style={{ animationDelay: "100ms" }}>
            <h1
              id="hero-heading"
              itemProp="headline"
              className="text-[color:var(--text-primary)] !mt-0 !mb-0 text-balance text-[32px] sm:text-4xl md:text-[52px] lg:text-5xl xl:text-[52px] font-extrabold tracking-tight leading-[1.1]"
            >
              Schlüssel Schmiede Wetzlar
              {' '}
              <span className="relative inline-flex items-center align-middle bg-[var(--color-red-600)] text-white px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-lg sm:rounded-xl shadow-md -rotate-2 ml-2 sm:ml-3 -translate-y-1">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.05em] sm:tracking-[0.1em] m-0">24h Notdienst</span>
              </span>
              {' '}
              <span className="block w-full text-[color:var(--text-secondary)] mt-1.5 sm:mt-2 font-semibold text-xl sm:text-[24px]">
                Ihr 24 Stunden Notdienst für Schlüssel, Schlösser & Sicherheit
              </span>
            </h1>
            </div>

            {/* 3. Subheadline */}
            <p
              className="text-sm sm:text-base md:text-lead font-normal text-pretty text-[color:var(--text-secondary)] max-w-[520px] hero-entrance leading-snug sm:leading-relaxed -mt-1 sm:mt-0"
              style={{ animationDelay: "150ms" }}
            >
              Persönliche Beratung, handwerkliche Präzision und Zeit für jeden Kunden.
              Schlüssel nachmachen, Schließanlagen planen, Sicherheitstechnik einbauen und natürlich auch Schlüsseldienst.
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
                <span className="text-status-success font-semibold text-sm">Montag bis Samstag 10 bis 18 Uhr und 24/7 Schlüsselnotdienst</span>
              </div>

              {/* Phone display */}
              <a
                href="tel:+4964418056279"
                className="group flex items-center gap-2.5 sm:gap-4 bg-white/80 border border-[var(--border-subtle)] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-4 w-full backdrop-blur-xl shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="bg-[var(--color-red-500)]/10 group-hover:bg-[var(--color-red-500)]/20 p-2 sm:p-3.5 rounded-lg sm:rounded-xl shrink-0 transition-all duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[var(--color-red-500)] group-hover:animate-ring transition-all duration-300" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xl sm:text-[length:40px] font-bold text-[color:var(--text-primary)] tabular-nums tracking-tighter m-0 leading-none">
                    06441 8056279
                  </span>
                  <span className="text-[10px] sm:text-sm font-medium text-[color:var(--text-secondary)] leading-tight sm:leading-snug max-w-[200px] sm:max-w-none">
                    Kostenlose Beratung und Festpreise für alle Leistungen
                  </span>
                </div>
              </a>

              {/* CTA Button Row */}
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <HeartbeatCTA className="flex-1 min-w-0 sm:min-w-[200px]">
                    <a
                      href="tel:+4964418056279"
                      className="group relative bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white flex items-center justify-center typo-cta-button min-h-[44px] sm:min-h-[52px] px-3 sm:px-6 rounded-lg sm:rounded-xl shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[2px] transition-all duration-300 w-full overflow-hidden text-sm sm:text-base"
                    >
                      {/* Shimmer effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5 mr-1.5 sm:mr-3 relative z-10 shrink-0" />
                      <span className="relative z-10 font-bold whitespace-nowrap">Jetzt Anrufen</span>
                      <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 ml-1.5 sm:ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                    </a>
                  </HeartbeatCTA>
                  <Link
                    href="/termin-buchen"
                    className="ghost-button-fill bg-white/60 border border-[var(--border-subtle)] hover:bg-white/90 text-[color:var(--text-primary)] shadow-sm flex items-center justify-center gap-2 typo-cta-button min-h-[44px] sm:min-h-[52px] px-3 sm:px-6 rounded-lg sm:rounded-xl backdrop-blur-md transition-all duration-300 flex-1 hover:-translate-y-[1px] text-sm sm:text-base whitespace-nowrap"
                  >
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-blue-600)]" />
                    Beratung buchen
                  </Link>
                </div>
                <div className="flex justify-start px-2 mt-3">
                  <TrustSignals preset="default" />
                </div>
              </div>
            </div>

          </div>

          {/* ── Rechtes Panel (5 Spalten) und Auto Form (Geometrische Fahrzeug-Silhouette) ── */}
          <div className="lg:col-span-5 relative w-full mt-6 sm:mt-8 lg:mt-0 z-[10] px-2 sm:px-0 flex flex-col items-center justify-center">
            
            {/* Speed Lines Background (Motion Illusion) */}
            <div className="absolute inset-x-0 bottom-12 h-px bg-gradient-to-r from-transparent via-[var(--color-red-500)]/30 to-transparent w-full z-0 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-8 h-px bg-gradient-to-r from-transparent via-[var(--color-charcoal-400)]/20 to-transparent w-[120%] -ml-[10%] z-0 pointer-events-none animate-speed-line-fast" />

            {/* THE CAR BODY CONTAINER */}
            <div className="w-full max-w-[500px] flex flex-col items-center relative z-10 hero-entrance group" style={{ animationDelay: '250ms' }}>
              
              {/* === ROOF / CABIN (24/7 Notdienst) === */}
              {/* Geometrisch: Abgerundete aerodynamische Kuppel */}
              <div className="w-[85%] sm:w-[75%] bg-white/70 backdrop-blur-2xl ring-1 ring-white/80 rounded-t-[30px] sm:rounded-t-[60px] px-4 sm:px-6 py-2 sm:py-6 shadow-[0_-15px_30px_rgba(185,28,28,0.08)] relative overflow-hidden transition-all duration-500 z-20 group-hover:-translate-y-1">
                {/* Internal Dome Glow */}
                <div className="absolute top-0 right-10 w-40 h-40 bg-[var(--color-red-500)]/10 rounded-full blur-[40px]" />
                
                <div className="flex flex-col items-center text-center gap-1 sm:gap-2 relative z-10">
                  <div className="flex items-center gap-2 mb-0 sm:mb-1 bg-white/70 px-3 py-1 rounded-full shadow-sm ring-1 ring-black/5">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-red-500)] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-red-500)]" />
                    </div>
                    <span className="text-[var(--color-red-600)] font-bold text-[9px] sm:text-xs uppercase tracking-[0.1em]">
                      Ladengeschäft
                    </span>
                  </div>
                  <div className="text-[clamp(15px,4vw,22px)] sm:text-xl font-extrabold text-[color:var(--text-primary)] leading-tight sm:leading-[1.15]">
                    Mehr als ein Laden
                  </div>
                  <p className="text-[clamp(10px,3vw,13px)] sm:text-sm text-[color:var(--text-secondary)] leading-tight sm:leading-relaxed max-w-[280px]">
                    Ein Ort für <strong className="text-[color:var(--text-primary)] font-semibold">Vertrauen, Handwerk & Beratung</strong>.
                  </p>
                </div>
              </div>

              {/* === CHASSIS / BODY (Front & Rear splits) === */}
              {/* Breite Basis des Autos mit aerodynamischer Curve */}
              <div className="w-[110%] -ml-[5%] sm:w-full sm:ml-0 flex flex-row bg-[var(--color-off-white)]/60 backdrop-blur-xl ring-1 ring-white/60 rounded-b-[20px] sm:rounded-b-[30px] rounded-tl-[24px] sm:rounded-tl-[50px] rounded-tr-[24px] sm:rounded-tr-[30px] p-1.5 sm:p-2 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] mb-8 sm:mb-10">
                
                {/* HOOD / FRONT (Ohne Schäden) - Left Side */}
                <div className="flex-1 bg-white/95 ring-1 ring-black/5 rounded-[14px] sm:rounded-tl-[40px] sm:rounded-bl-[20px] p-2.5 sm:p-5 relative overflow-hidden group/front mr-0.5 sm:mr-1 transition-all duration-500 hover:ring-[var(--color-red-500)]/30 hover:shadow-lg flex flex-col justify-center sm:block">
                  {/* Headlight Flow Glow */}
                  <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[var(--color-red-500)]/15 blur-[20px] group-hover/front:bg-[var(--color-red-500)]/30 group-hover/front:translate-x-12 transition-all duration-700 ease-out" />
                  
                  <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mx-0 rounded-[10px] sm:rounded-[12px] bg-[var(--color-red-500)]/10 flex items-center justify-center mb-1 sm:mb-3 relative z-10 transition-transform duration-500 group-hover/front:scale-110">
                    <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-red-600)]" />
                  </div>
                  <div className="text-[clamp(11px,3.5vw,17px)] text-center sm:text-left leading-tight font-extrabold text-[color:var(--text-primary)] mb-0 sm:mb-1 relative z-10">
                    Ohne Schäden
                  </div>
                  <p className="hidden sm:block text-sm text-[color:var(--text-secondary)] leading-snug relative z-10">
                    Zerstörungsfreie Öffnung von Haus- & Wohnungstüren in 99% der Fälle.
                  </p>
                </div>

                {/* TRUNK / REAR (Spezialwerkzeug) - Right Side */}
                {/* Dark Theme for contrast/mechanical feel */}
                <div className="flex-1 bg-[var(--color-charcoal-900)] ring-1 ring-[var(--color-charcoal-800)] rounded-[14px] sm:rounded-tr-[20px] sm:rounded-br-[20px] p-2.5 sm:p-5 relative overflow-hidden group/rear ml-0.5 sm:ml-1 transition-all duration-500 hover:shadow-lg flex flex-col justify-center sm:block">
                  {/* Taillight Glow */}
                  <div className="absolute top-1/2 -right-8 w-20 h-20 bg-[var(--color-red-600)]/30 blur-[20px] group-hover/rear:bg-[var(--color-red-500)]/50 group-hover/rear:-translate-x-4 transition-all duration-500" />
                  {/* Tech Grip Pattern */}
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '8px 8px' }} />

                  <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mx-0 rounded-[10px] sm:rounded-[12px] bg-white/10 flex items-center justify-center mb-1 sm:mb-3 relative z-10 transition-transform duration-500 group-hover/rear:scale-110">
                    <Key className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-[clamp(11px,3.5vw,17px)] text-center sm:text-left leading-tight font-extrabold text-white mb-0 sm:mb-1 relative z-10">
                    Spezialwerkzeug
                  </div>
                  <p className="hidden sm:block text-sm text-zinc-400 leading-snug relative z-10">
                    Präzisionsgeräte ermöglichen Öffnungen selbst bei schweren Verriegelungen.
                  </p>
                </div>

                {/* === WHEELS / HOVER RINGS === */}
                {/* Positioned absolute to the chassis bounds */}
                <div className="absolute -bottom-6 sm:-bottom-8 left-[10%] sm:left-10 z-20 pointer-events-none">
                  {/* Front Wheel */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-[4px] sm:border-[6px] border-[var(--color-charcoal-900)] shadow-[0_15px_25px_rgba(0,0,0,0.35)] bg-[var(--color-charcoal-800)] flex items-center justify-center relative spin-wheel">
                    <div className="absolute inset-1.5 rounded-full border-[2px] border-dashed border-[var(--color-red-500)]/60" />
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[var(--color-red-500)] rounded-full shadow-[0_0_15px_rgba(185,28,28,0.9)]" />
                  </div>
                </div>
                <div className="absolute -bottom-6 sm:-bottom-8 right-[10%] sm:right-10 z-20 pointer-events-none">
                  {/* Rear Wheel */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-[4px] sm:border-[6px] border-[var(--color-charcoal-900)] shadow-[0_15px_25px_rgba(0,0,0,0.35)] bg-[var(--color-charcoal-800)] flex items-center justify-center relative spin-wheel">
                    <div className="absolute inset-1.5 rounded-full border-[2px] border-dashed border-[var(--color-red-500)]/60" />
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[var(--color-red-500)] rounded-full shadow-[0_0_15px_rgba(185,28,28,0.9)]" />
                  </div>
                </div>
              </div>

            </div>

            {/* Car/Wheel Animations */}
            <style jsx global>{`
              @keyframes spinWheel {
                from { transform: rotate(0deg) translateZ(0); }
                to { transform: rotate(360deg) translateZ(0); }
              }
              .spin-wheel {
                animation: spinWheel 4s linear infinite;
                will-change: transform;
              }
              @keyframes speedLine {
                0% { transform: translateX(-100%) translateZ(0); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(100%) translateZ(0); opacity: 0; }
              }
              .animate-speed-line-fast {
                animation: speedLine 2s ease-in-out infinite;
                will-change: transform, opacity;
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
