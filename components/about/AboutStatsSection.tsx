"use client";

import { ShieldCheck, Quote } from"lucide-react";
import AnimatedCounter from"../animations/AnimatedCounter";
import HeartbeatCTA from"@/components/animations/HeartbeatCTA";
import Link from "next/link";

export default function AboutStatsSection() {
  return (
    <section aria-labelledby="about-stats-heading" className="bg-transparent px-[var(--section-px)] py-[var(--section-py)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10 grid gap-[var(--space-12)] lg:grid-cols-2 lg:items-center">

        {/* Linke Spalte: Text & Autorität */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[var(--value-primary)]/10 text-[color:var(--value-primary)] text-sm font-bold tracking-wide uppercase border border-[var(--value-primary)]/20">
            <ShieldCheck className="w-4 h-4" />
            <span>IHK Geprüfter Betrieb</span>
          </div>

          <h2 id="about-stats-heading" className="typo-h2 text-[color:var(--text-primary)]">
            Ihr Wetzlarer <span className="text-[var(--color-red-500)]">Schlüsseldienst</span> des Vertrauens
          </h2>

          <p className="text-lg text-[color:var(--text-secondary)] mb-[var(--space-6)] leading-relaxed">
            Wir sind kein anonymes Callcenter, sondern echte Handwerker aus der Region. Seit über 15 Jahren stehen
            wir für schnelle Hilfe, faire Preise und professionelle Arbeit direkt hier in Wetzlar und dem Lahn-Dill-Kreis.
            Unser Ziel ist es, Ihnen in Notsituationen sicher, schnell und zu 100% transparent zur Seite zu stehen.
          </p>

          {/* Sarfeld Authority Badge */}
          <blockquote className="relative bg-white rounded-2xl px-7 py-6 mb-[var(--space-8)] w-full overflow-hidden border border-[var(--color-charcoal-100)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] transition-shadow duration-300">
            <Quote className="absolute top-4 left-4 w-10 h-10 text-[var(--atmosphere-glow)] opacity-[0.15]" aria-hidden="true" />
            <p className="relative z-10 text-lg font-semibold text-[color:var(--text-primary)] leading-relaxed">
              Zertifiziertes Mentoring: Gezieltes Training durch <span className="text-[color:var(--value-primary)] font-bold">TV-Sicherheitsprofi Uwe Sarfeld</span> garantiert unser hohes technisches Niveau.
            </p>
            <p className="relative z-10 mt-2 text-sm text-[color:var(--text-secondary)] leading-relaxed">
              Unsere Techniker arbeiten mit den modernsten Methoden und dem höchsten Qualitätsstandard.
            </p>
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <div className="flex flex-col items-start gap-1">
              <HeartbeatCTA>
                <a href="tel:+4964418056279" className="inline-flex items-center justify-center h-[52px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white typo-cta-button rounded-xl transition-all shadow-[var(--shadow-brand-1)] hover:shadow-[var(--shadow-brand-2)] hover:-translate-y-[2px]">
                  Jetzt kontaktieren
                </a>
              </HeartbeatCTA>
              <span className="typo-tiny text-[color:var(--text-tertiary)] ml-1">Kostenlos & unverbindlich</span>
            </div>
            <Link href="/ueber-uns" className="text-[var(--color-red-500)] font-bold hover:text-[color:var(--color-red-600)] hover:underline flex items-center gap-2 transition-colors">
              Mehr über uns erfahren
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* Rechte Spalte: Grid mit animierten Statistiken */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {/* Stat 1 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300 border border-[var(--color-charcoal-100)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] hover:border-[var(--value-primary)]/30">
            <AnimatedCounter target={15} suffix="+" className="font-black text-5xl leading-tight text-[color:var(--value-primary)] tracking-tight" />
            <span className="text-base font-bold text-[color:var(--text-primary)] mt-2">Jahre Erfahrung</span>
            <span className="text-sm text-[color:var(--text-secondary)] mt-1">Im Lahn-Dill-Kreis</span>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300 border border-[var(--color-charcoal-100)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] hover:border-[var(--value-primary)]/30">
            <span className="font-black text-5xl leading-tight text-[color:var(--value-primary)] tracking-tight">20<span className="text-[28px]">-30</span></span>
            <span className="text-base font-bold text-[color:var(--text-primary)] mt-2">Min. Anfahrt</span>
            <span className="text-sm text-[color:var(--text-secondary)] mt-1">Wetzlar & Umgebung</span>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300 border border-[var(--color-charcoal-100)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] hover:border-[var(--value-primary)]/30">
            <AnimatedCounter target={50} suffix="+" className="font-black text-5xl leading-tight text-[color:var(--value-primary)] tracking-tight" />
            <span className="text-base font-bold text-[color:var(--text-primary)] mt-2">Geöffnete Türen</span>
            <span className="text-sm text-[color:var(--text-secondary)] mt-1">Nahezu immer beschädigungsfrei</span>
          </div>

          {/* Stat 4 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300 border border-[var(--color-charcoal-100)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] hover:border-[var(--value-primary)]/30">
            <AnimatedCounter target={100} suffix="%" className="font-black text-5xl leading-tight text-[color:var(--value-primary)] tracking-tight" />
            <span className="text-base font-bold text-[color:var(--text-primary)] mt-2">Festpreis-Garantie</span>
            <span className="text-sm text-[color:var(--text-secondary)] mt-1">Ohne Wenn und Aber</span>
          </div>
        </div>

      </div>
    </section>
  );
}
