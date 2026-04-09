"use client";

import { Phone, Check, ArrowRight, Users } from"lucide-react";
import { cn } from"@/lib/utils";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";
import { triggerHaptic } from "@/lib/haptics";

/**
 * [SEO-FIX: Seobility Duplicate Text Blocks]
 * Each page MUST pass unique headline/benefits/buttonText/socialProof
 * to prevent Seobility from flagging identical text across 165 pages.
 */
interface FinalCTAProps {
  className?: string;
  headline?: string;
  benefits?: string[];
  buttonText?: string;
  socialProof?: string;
  subtitle?: string;
}

const defaultBenefits = [
  "Techniker in 20-30 Minuten vor Ort",
  "Festpreis wird sofort am Telefon genannt",
  "0% Versteckte Kosten garantiert",
];

export default function FinalCTA({
  className,
  headline = "Vor verschlossener Tür? Wir sind sofort für Sie da.",
  benefits = defaultBenefits,
  buttonText = "Jetzt Notdienst Rufen",
  socialProof = "Von über 500+ zufriedenen Kunden gewählt",
  subtitle = "In 20-30 Min. vor Ort • Festpreis vor Anfahrt • 24/7 Notdienst",
}: FinalCTAProps) {
  return (
    <section aria-labelledby="final-cta-heading" className={cn("w-full bg-[var(--color-red-500)] py-[var(--section-py)] overflow-hidden relative", className)}>
      {/* Background Pattern for depth */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,var(--color-blush-900)_0%,transparent_80%)] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-[var(--space-6)] md:px-[var(--space-8)] max-w-4xl relative z-10 flex flex-col items-center text-center">

        <h2 id="final-cta-heading" className="typo-h2 text-balance text-white">
          {headline}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[var(--space-4)] md:gap-[var(--space-8)] mb-[var(--space-12)]">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-[var(--space-3)] text-base md:text-lg font-medium text-white shadow-sm">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-[var(--space-6)] w-full max-w-md mx-auto">
          <a
            href="tel:+4964418056279"
            className="text-[48px] md:text-[56px] font-black text-white hover:text-white/90 transition-colors tracking-tighter"
          >
            06441 8056279
          </a>

          <HeartbeatCTA className="w-full">
            <a
               href="tel:+4964418056279"
              onClick={() => triggerHaptic('light')}
              className="group flex items-center justify-center gap-3 w-full h-[72px] bg-white text-[var(--color-red-500)] hover:bg-slate-50 text-xl font-black rounded-[var(--radius-16)] shadow-[var(--elevation-2)] hover:-translate-y-2 hover:shadow-[var(--elevation-3)] transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              <Phone className="h-6 w-6" />
              {buttonText}
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </HeartbeatCTA>

          <div className="flex flex-col items-center gap-2 mt-2">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                {socialProof}
              </span>
            </div>
            <span className="text-sm text-white/70 font-medium text-center max-w-sm">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
