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
       className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl font-extrabold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-red-500)] focus-visible:ring-offset-2 transition-all duration-150 ease-out bg-white hover:bg-gray-50 hover:scale-[1.02] active:scale-100 h-16 px-8 shadow-xl text-lg text-red-600"
      >
       <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
       <span className="tabular-nums tracking-tight">06441 8056279</span>
      </a>
     </HeartbeatCTA>
     <p className="text-white/80 text-sm font-medium mt-3">
      Festpreis vor Anfahrt und Kostenlos &amp; unverbindlich
     </p>
    </div>
   </div>
  </section>
 );
}
