"use client";

import { Phone, Euro, DoorOpen, CreditCard } from "lucide-react";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

const steps = [
  {
    id: 1,
    num: "01",
    title: "Anrufen & Situation schildern",
    description: "Kontaktieren Sie uns 24/7 unter 06441 8056279. Schildern Sie uns kurz Ihr Anliegen (z.B. Tür zugefallen oder abgeschlossen).",
    icon: Phone,
  },
  {
    id: 2,
    num: "02",
    title: "Festpreis & Dauer erfahren",
    description: "Wir nennen Ihnen noch am Telefon einen verbindlichen Festpreis und die exakte Anfahrtszeit (meist unter 25 Minuten).",
    icon: Euro,
  },
  {
    id: 3,
    num: "03",
    title: "Zerstörungsfreie Öffnung",
    description: "Unser Monteur ist pünktlich vor Ort und öffnet Ihre Tür dank Spezialwerkzeug in 99% der Fälle völlig beschädigungsfrei.",
    icon: DoorOpen,
  },
  {
    id: 4,
    num: "04",
    title: "Transparente Bezahlung",
    description: "Kein Risiko: Sie zahlen erst, wenn die Tür offen ist. Bar, per EC- oder Kreditkarte. Keine versteckten Zusatzkosten.",
    icon: CreditCard,
  },
];

export default function ProcessSteps() {
  return (
    <section aria-labelledby="process-heading" className="bg-[var(--color-charcoal-50)]/40 px-[var(--section-px)] py-[var(--section-py)] overflow-hidden relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          {/* Pill Badge */}
          <span className="inline-flex items-center rounded-full bg-red-50 text-[var(--color-red-600)] text-xs font-bold uppercase tracking-[0.15em] px-4 py-1.5 mb-4 border border-red-100/60">
            SO EINFACH GEHT&apos;S
          </span>

          <h2 id="process-heading" className="typo-h2 text-[color:var(--text-primary)]">
            So einfach funktioniert unser <span className="text-[var(--color-red-500)]">Service</span>
          </h2>
          <div className="mx-auto h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)]" />
          <p className="mt-[var(--space-6)] text-[color:var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            Keine Überraschungen, keine endlosen Wartezeiten. Ein transparenter 4-Schritte-Ablauf für Ihre maximale Sicherheit.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connecting Line (Desktop) — upgraded to dashed style */}
          <div className="hidden lg:block absolute top-[4.25rem] left-[12%] right-[12%] h-[2px] z-0">
            <div className="w-full h-full border-t-2 border-dashed border-[var(--color-red-500)]/25" />
          </div>

          <StaggerReveal className="relative z-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4" animation={entryAnimations.slideUpFade}>
            {steps.map((step) => (
              <StaggerItem key={step.id} animation={entryAnimations.slideUpFade} className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Step Number — now shows as a small numbered badge on the icon */}
                  <span className="font-black text-xs tracking-[0.2em] uppercase text-[var(--color-red-500)] mb-4">
                    Schritt {step.num}
                  </span>

                  {/* Icon Circle — upgraded to larger, more prominent style */}
                  <div className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-white border-2 border-red-100 text-[var(--color-red-500)] shadow-[0_4px_20px_rgba(220,38,38,0.08)] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)] group-hover:border-[var(--color-red-500)]/40">
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                    {/* Step number badge on top-right */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[var(--color-red-500)] text-white text-xs font-black flex items-center justify-center shadow-md">
                      {step.id}
                    </span>
                  </div>

                  <div
                    className="font-bold text-[color:var(--text-primary)] mb-3"
                    style={{
                      fontSize: 'var(--text-h4)',
                      lineHeight: 'var(--leading-subh)',
                      letterSpacing: 'var(--tracking-tight)',
                    }}
                  >
                    {step.title}
                  </div>
                  <p
                    className="text-[color:var(--text-secondary)] font-normal"
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
