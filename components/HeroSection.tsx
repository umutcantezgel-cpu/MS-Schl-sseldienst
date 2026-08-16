import { Phone, ShieldCheck, Clock, Key, ArrowRight, Hammer, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";
import { HeroParallax } from "@/components/animations/HeroParallax";

/* ============================================================
  HERO SECTION
  ============================================================ */

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-labelledby="hero-heading"
      className="relative w-full flex items-center overflow-hidden pt-[90px] sm:pt-[100px] lg:pt-[90px] xl:pt-[100px] pb-16 sm:pb-14 lg:pb-[24px] bg-gradient-to-b from-[var(--color-off-white)] to-white"
    >
      {/* ── Static Background Layer (Mobile Performance) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden block" />

      {/* ── Parallax Background Layer (Desktop only) ── */}
      <HeroParallax />

      {/* Content wird über dem global fixierten Hintergrund gerendert */}
      <div className="container relative z-[10] mx-auto px-5 sm:px-8 lg:px-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-2 sm:gap-6 lg:gap-10 w-full py-2 sm:py-4 items-center">

          {/* ── Linkes Panel (7 Spalten) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-3 sm:gap-4 lg:gap-5">

            {/* 1. Verfügbarkeits-Badge */}
            <div className="flex items-center gap-2 sm:gap-2.5 bg-[var(--value-primary)]/10 border border-[var(--value-primary)]/20 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full backdrop-blur-sm w-fit">
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-status-success" />
              </span>
              <span className="text-[color:var(--value-primary)] text-xs sm:text-sm md:text-sm font-semibold tracking-wide">
                Fachgeschäft & 24h Schlüsselnotdienst
              </span>
            </div>

            {/* 2. Headline und Visual heading */}
            <h1
              id="hero-heading"
              itemProp="headline"
              className="text-[color:var(--text-primary)] !mt-0 !mb-0 text-balance text-[clamp(26px,7vw,32px)] sm:text-4xl md:text-[52px] lg:text-5xl xl:text-[52px] font-extrabold tracking-tight leading-[1.1]"
            >
              Schlüsseldienst Wetzlar
              {' '}
              <span className="relative inline-flex items-center align-middle bg-[var(--color-red-600)] text-white px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-lg sm:rounded-xl shadow-md -rotate-2 ml-1 sm:ml-3 -translate-y-1">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.05em] sm:tracking-[0.1em] m-0">24h Notdienst ab 99€</span>
              </span>
              {' '}
              <span className="block w-full text-[color:var(--text-secondary)] mt-2 font-semibold text-[18px] sm:text-[24px]">
                Schlüssel Schmiede: Ladenlokal & Mobiler Notdienst
              </span>
            </h1>

            {/* 3. Subheadline */}
            <p
              className="text-sm sm:text-base md:text-lead font-normal text-pretty text-[color:var(--text-secondary)] max-w-[520px] leading-snug sm:leading-relaxed -mt-1 sm:mt-0"
            >
              Persönliche Beratung, handwerkliche Präzision und Zeit für jeden Kunden.
              Schlüssel nachmachen, Schließanlagen planen, Sicherheitstechnik einbauen und natürlich als Schlüsseldienst Wetzlar jederzeit für Sie da.
            </p>

            {/* 4. Phone Number Block + CTA Buttons */}
            <div
              className="flex flex-col gap-2.5 sm:gap-4 w-full max-w-[540px] mt-0 lg:mt-1"
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
            </div>

          </div>

          {/* ── Rechtes Panel (5 Spalten) - Dual Image Composition (Ladenlokal & Notdienst) ── */}
          <div className="lg:col-span-5 relative w-full mt-10 sm:mt-16 lg:mt-0 z-[10] px-2 sm:px-4 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[540px]">
            
            {/* Speed Lines Background for dynamic feel */}
            <div className="absolute inset-x-0 bottom-12 h-px bg-gradient-to-r from-transparent via-[var(--color-red-500)]/20 to-transparent w-full z-0 pointer-events-none" />
            
            {/* --- Image 1: Ladenlokal (Shop Exterior/Interior) --- */}
            <div className="absolute top-[5%] md:top-0 right-[15%] lg:right-[5%] w-[70%] max-w-[340px] aspect-[4/3] bg-[var(--color-charcoal-100)] rounded-[1.5rem] overflow-hidden ring-[6px] ring-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] z-10 transform-gpu rotate-2 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 ease-out group">
              <Image
                src="/images/schluessel-schmiede-wetzlar-aussenansicht-ladengeschaeft.webp"
                alt="Das Ladengeschäft der Schlüssel Schmiede Wetzlar in der Langgasse 70"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 260px"
                priority
                fetchPriority="high"
              />
              {/* Gradient overlay for bottom text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 border border-white/50 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success" />
                </span>
                <span className="text-[var(--text-primary)] text-[10px] sm:text-xs font-bold uppercase tracking-wider">Ladenlokal</span>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col">
                <span className="text-white font-bold text-[clamp(14px,3vw,18px)] drop-shadow-md leading-tight">Fachgeschäft Wetzlar</span>
                <span className="text-white/90 text-[10px] sm:text-xs font-medium">Langgasse 70 · Persönliche Beratung</span>
              </div>
            </div>

            {/* --- Image 2: Notdienst (Einsatzfahrzeug) --- */}
            <div className="absolute bottom-[5%] md:bottom-2 left-[5%] lg:left-0 w-[75%] max-w-[360px] aspect-[4/3] bg-[var(--color-charcoal-900)] rounded-[1.5rem] overflow-hidden ring-[6px] ring-[var(--color-off-white)] shadow-[0_30px_60px_-15px_rgba(185,28,28,0.25)] z-20 transform-gpu -rotate-3 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 ease-out group">
              <Image
                src="/images/mina-saad-schluesseldienst-wetzlar-einsatzfahrzeug.webp"
                alt="Einsatzfahrzeug des Schlüsselnotdienstes Wetzlar"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 260px"
                priority
                fetchPriority="high"
              />
              
              {/* Gradient overlay for modern look */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-red-600)]/90 via-black/30 to-transparent" />
              
              {/* 24h Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-[var(--color-red-500)] text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg shadow-[0_4px_12px_rgba(185,28,28,0.5)] flex items-center gap-1.5 border border-white/20">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  24/7 Bereit
                </div>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-bold text-[clamp(15px,3.5vw,20px)] drop-shadow-md flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> Mobiler Notdienst
                </span>
                <span className="text-white/90 text-[11px] sm:text-xs font-medium flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3" /> In ~20 Min. vor Ort
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
