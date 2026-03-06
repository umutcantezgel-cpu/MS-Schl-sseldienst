"use client";

import { Phone, Euro, DoorOpen, CreditCard } from "lucide-react";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

const steps = [
    {
        id: 1,
        title: "1. Anrufen & Situation schildern",
        description: "Kontaktieren Sie uns 24/7 unter 06441 / 123 456. Schildern Sie uns kurz Ihr Anliegen (z.B. Tür zugefallen oder abgeschlossen).",
        icon: Phone,
    },
    {
        id: 2,
        title: "2. Festpreis & Dauer erfahren",
        description: "Wir nennen Ihnen noch am Telefon einen verbindlichen Festpreis und die exakte Anfahrtszeit (meist unter 25 Minuten).",
        icon: Euro,
    },
    {
        id: 3,
        title: "3. Zerstörungsfreie Öffnung",
        description: "Unser Monteur ist pünktlich vor Ort und öffnet Ihre Tür dank Spezialwerkzeug in 99% der Fälle völlig beschädigungsfrei.",
        icon: DoorOpen,
    },
    {
        id: 4,
        title: "4. Transparente Bezahlung",
        description: "Kein Risiko: Sie zahlen erst, wenn die Tür offen ist. Bar, per EC- oder Kreditkarte. Keine versteckten Zusatzkosten.",
        icon: CreditCard,
    },
];

export default function ProcessSteps() {
    return (
        <section aria-label="Ablauf in 4 Schritten" className="bg-white px-[var(--section-px)] py-[var(--section-py)] overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-[var(--space-10)]">
                    <h2
                        className="font-[700] text-[var(--color-text-primary)] mb-[var(--space-2)]"
                        style={{
                            fontSize: 'var(--text-h2)',
                            lineHeight: 'var(--leading-h)',
                            letterSpacing: 'var(--tracking-heading)',
                        }}
                    >
                        So einfach funktioniert unser <span className="text-[var(--color-brand)]">Service</span>
                    </h2>
                    <div className="mx-auto mt-[var(--space-2)] h-[3px] w-[80px] rounded-[2px] bg-[var(--color-brand)]"></div>
                    <p
                        className="mt-[var(--space-6)] text-[var(--color-text-body)] font-[400] mx-auto"
                        style={{
                            fontSize: 'var(--text-lead)',
                            lineHeight: 'var(--leading-lead)',
                            maxWidth: 'var(--prose-width)',
                        }}
                    >
                        Keine Überraschungen, keine endlosen Wartezeiten. Ein transparenter 4-Schritte-Ablauf für Ihre maximale Sicherheit.
                    </p>
                </div>

                <div className="relative mt-[var(--space-9)]">
                    {/* Connecting Line for desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-[var(--color-surface-divider)] -translate-y-1/2 hidden lg:block rounded-full z-0" aria-hidden="true" />

                    <StaggerReveal className="relative z-10 grid gap-[var(--space-6)] sm:gap-[var(--space-8)] sm:grid-cols-2 lg:grid-cols-4" animation={entryAnimations.slideLeftFade}>
                        {steps.map((step) => (
                            <StaggerItem key={step.id} animation={entryAnimations.slideLeftFade} className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-white border-2 border-[var(--color-brand)] text-[var(--color-brand)] shadow-[0_10px_25px_-5px_rgba(var(--color-brand-rgb),0.3)] mb-[var(--space-5)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                        <step.icon className="h-7 w-7" aria-hidden="true" />
                                    </div>
                                    <h3
                                        className="font-[700] text-[var(--color-text-primary)] mb-[var(--space-3)]"
                                        style={{
                                            fontSize: 'var(--text-h4)',
                                            lineHeight: 'var(--leading-subh)',
                                            letterSpacing: 'var(--tracking-tight)',
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className="text-[var(--color-text-body)] font-[400]"
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
