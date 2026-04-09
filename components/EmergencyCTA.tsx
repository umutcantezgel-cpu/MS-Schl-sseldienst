"use client";

import { Phone } from "lucide-react";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";
import { triggerHaptic } from "@/lib/haptics";

export default function EmergencyCTA() {
 return (
  <section className="bg-[var(--color-cta-bg)] px-[var(--section-px)] py-[var(--section-py)]">
   <div className="mx-auto max-w-4xl text-center">
    <h2 className="typo-h2 text-white drop-shadow-sm">
     Ausgesperrt? Wir sind sofort für Sie da!
    </h2>
    <p className="typo-lead text-white/90 mx-auto mb-[var(--space-7)] mt-[var(--space-2)]">
     Rund um die Uhr erreichbar, 365 Tage im Jahr.
    </p>
    <div className="mt-[var(--space-8)] flex flex-col items-center gap-[var(--space-4)]">
     <HeartbeatCTA>
      <a
       href="tel:+4964418056279"
       onClick={() => triggerHaptic('light')}
       className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md,6px)] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-red-500)] focus-visible:ring-offset-2 transition-all duration-[var(--duration-fast,150ms)] ease-out bg-white hover:bg-gray-50 hover:scale-[1.02] hover:-translate-y-px active:scale-100 active:translate-y-px h-14 min-h-[56px] min-w-[56px] px-8 shadow-xl text-base"
      >
       <Phone className="h-5 w-5 text-red-600" aria-hidden="true" />
       <div className="flex flex-col items-start ml-2">
        <span
         className="font-[800] text-red-600 leading-none mb-[var(--space-1)]"
         style={{ fontSize: 'var(--text-lead)', letterSpacing: 'var(--tracking-cta)' }}
        >
         Jetzt anrufen
        </span>
        <span
         className="font-[700] text-red-600 leading-none"
         style={{ fontSize: 'var(--text-body)', letterSpacing: 'var(--tracking-cta)' }}
        >
         06441 8056279
        </span>
       </div>
      </a>
     </HeartbeatCTA>
     <p className="text-white/80 text-sm font-medium mt-3">
      Festpreis vor Anfahrt und Kostenlos & unverbindlich
     </p>
    </div>
   </div>
  </section>
 );
}
