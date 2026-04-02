"use client";

import { Phone } from"lucide-react";
import { buttonVariants } from"@/components/ui/button";
import { cn } from"@/lib/utils";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";
import { triggerHaptic } from "@/lib/haptics";

export default function EmergencyCTA() {
 return (
  <section className="bg-[var(--color-cta-bg)] px-[var(--section-px)] py-[var(--section-py)]">
   <div className="mx-auto max-w-4xl text-center">
    <h2 className="typo-h2 text-white">
     Ausgesperrt? Wir sind sofort für Sie da!
    </h2>
    <p className="typo-lead text-[var(--color-red-50)] mx-auto mb-[var(--space-7)]">
     Rund um die Uhr erreichbar – 365 Tage im Jahr.
    </p>
    <div className="mt-[var(--space-8)] flex flex-col items-center gap-[var(--space-4)]">
     <HeartbeatCTA>
      <a
       href="tel:+4964418056279"
       onClick={() => triggerHaptic('light')}
       className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "min-h-[56px] min-w-[56px] px-8")}
      >
       <Phone className="h-5 w-5 text-[var(--color-red-500)]" aria-hidden="true" />
       <div className="flex flex-col items-start">
        <span
         className="font-[700] text-[var(--color-red-500)] leading-none mb-[var(--space-1)]"
         style={{ fontSize: 'var(--text-lead)', letterSpacing: 'var(--tracking-cta)' }}
        >
         Jetzt anrufen
        </span>
        <span
         className="font-[600] text-[var(--color-red-500)] leading-none"
         style={{ fontSize: 'var(--text-body)', letterSpacing: 'var(--tracking-cta)' }}
        >
         06441 8056279
        </span>
       </div>
      </a>
     </HeartbeatCTA>
     <p className="text-[var(--color-red-100)] text-[13px] font-medium">
      Festpreis vor Anfahrt — Kostenlos & unverbindlich
     </p>
    </div>
   </div>
  </section>
 );
}
