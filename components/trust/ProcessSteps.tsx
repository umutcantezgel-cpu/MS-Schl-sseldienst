"use client";

import { Phone, Euro, DoorOpen, CreditCard } from"lucide-react";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";

const steps = [
  {
    id: 1,
    num:"01",
    title:"Anrufen & Situation schildern",
    description:"Kontaktieren Sie uns 24/7 unter 06441 8056544. Schildern Sie uns kurz Ihr Anliegen (z.B. Tür zugefallen oder abgeschlossen).",
    icon: Phone,
  },
  {
    id: 2,
    num:"02",
    title:"Festpreis & Dauer erfahren",
    description:"Wir nennen Ihnen noch am Telefon einen verbindlichen Festpreis und die exakte Anfahrtszeit (meist unter 25 Minuten).",
    icon: Euro,
  },
  {
    id: 3,
    num:"03",
    title:"Zerstörungsfreie Öffnung",
    description:"Unser Monteur ist pünktlich vor Ort und öffnet Ihre Tür dank Spezialwerkzeug in 99% der Fälle völlig beschädigungsfrei.",
    icon: DoorOpen,
  },
  {
    id: 4,
    num:"04",
    title:"Transparente Bezahlung",
    description:"Kein Risiko: Sie zahlen erst, wenn die Tür offen ist. Bar, per EC- oder Kreditkarte. Keine versteckten Zusatzkosten.",
    icon: CreditCard,
  },
];

export default function ProcessSteps() {
  return (
    <section aria-labelledby="process-heading" className="bg-transparent px-[var(--space-6)] py-[var(--space-16)] lg:py-[var(--space-20)] overflow-hidden relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 id="process-heading" className="typo-h2 text-[var(--text-primary)]">
            So einfach funktioniert unser <span className="text-[var(--color-red-500)]">Service</span>
          </h2>
          <div className="mx-auto h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)]" />
          <p className="mt-[var(--space-6)] text-[var(--text-secondary)] text-[17px] max-w-2xl mx-auto leading-relaxed">
            Keine Überraschungen, keine endlosen Wartezeiten. Ein transparenter 4-Schritte-Ablauf für Ihre maximale Sicherheit.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[3rem] left-[12%] right-[12%] h-[2px] z-0">
            <div className="w-full h-full bg-gradient-to-r from-[var(--color-red-500)]/20 via-[var(--color-red-500)]/40 to-[var(--color-red-500)]/20" />
          </div>

          <StaggerReveal className="relative z-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4" animation={entryAnimations.slideUpFade}>
            {steps.map((step) => (
              <StaggerItem key={step.id} animation={entryAnimations.slideUpFade} className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <span className="font-black text-[12px] tracking-[0.2em] uppercase text-[var(--color-red-500)] mb-4">
                    Schritt {step.num}
                  </span>

                  <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-2xl bg-white border border-[var(--color-charcoal-100)] text-[var(--color-red-500)] shadow-[0_2px_12px_rgba(0,0,0,0.06)] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(185,28,28,0.12)] group-hover:border-[var(--color-red-500)]/30">
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3
                    className="font-bold text-[var(--text-primary)] mb-3"
                    style={{
                      fontSize: 'var(--text-h4)',
                      lineHeight: 'var(--leading-subh)',
                      letterSpacing: 'var(--tracking-tight)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[var(--text-secondary)] font-normal"
                    style={{
                      fontSize: 'var(--text-body)',
                      lineHeight: 'var(--leading-body)',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
