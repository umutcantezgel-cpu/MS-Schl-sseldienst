"use client";

import { Phone, Check, ArrowRight, Users } from"lucide-react";
import { cn } from"@/lib/utils";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";
import { triggerHaptic } from "@/lib/haptics";

export default function FinalCTA({ className }: { className?: string }) {
  return (
    <section aria-labelledby="final-cta-heading" className={cn("w-full bg-[var(--color-red-500)] py-[var(--section-py)] overflow-hidden relative", className)}>
      {/* Background Pattern for depth */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,var(--color-blush-900)_0%,transparent_80%)] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

      <div className="container mx-auto px-[var(--space-6)] md:px-[var(--space-8)] max-w-4xl relative z-10 flex flex-col items-center text-center">

        <h2 id="final-cta-heading" className="typo-h2 text-balance text-white">
          Vor verschlossener Tür? <br className="hidden md:block" /> Wir sind sofort für Sie da.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[var(--space-4)] md:gap-[var(--space-8)] mb-[var(--space-12)]">
          {["Techniker in 20-30 Minuten vor Ort","Festpreis wird sofort am Telefon genannt","0% Versteckte Kosten garantiert"
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-[var(--space-3)] text-[16px] md:text-[18px] font-medium text-white shadow-sm">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-[var(--space-6)] w-full max-w-md mx-auto">
          <a
            href="tel:+4964418056544"
            className="text-[48px] md:text-[56px] font-black text-white hover:text-white/90 transition-colors tracking-tighter"
          >
            06441 8056544
          </a>

          <HeartbeatCTA className="w-full">
            <a
               href="tel:+4964418056544"
              onClick={() => triggerHaptic('light')}
              className="group flex items-center justify-center gap-3 w-full h-[72px] bg-white text-[var(--color-red-500)] hover:bg-slate-50 text-[20px] font-black rounded-[var(--radius-16)] shadow-[var(--elevation-2)] hover:-translate-y-2 hover:shadow-[var(--elevation-3)] transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              <Phone className="h-6 w-6" />
              Jetzt Notdienst Rufen
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </HeartbeatCTA>

          <div className="flex flex-col items-center gap-2 mt-2">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              <Users className="w-4 h-4 text-white" />
              <span className="text-[14px] text-white font-medium">
                Von über 500+ zufriedenen Kunden gewählt
              </span>
            </div>
            <span className="text-[13px] text-white/70 font-medium text-center max-w-sm">
              In 20-30 Min. vor Ort • Festpreis vor Anfahrt • 24/7 Notdienst
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
