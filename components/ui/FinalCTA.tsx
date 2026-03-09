import { Phone, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FinalCTA({ className }: { className?: string }) {
    return (
        <section className={cn("w-full bg-[var(--color-brand-dark)] py-[var(--spacing-section)] overflow-hidden relative", className)}>
            {/* Background Pattern for depth */}
            <div className="absolute inset-0 opacity-[0.03] hero-bg-layer-4 pointer-events-none" />

            <div className="container mx-auto px-[var(--space-4)] md:px-[var(--space-8)] max-w-4xl relative z-10 flex flex-col items-center text-center">

                <h2 className="text-[var(--font-size-32)] font-bold text-white mb-[var(--space-6)] tracking-tight">
                    Vor verschlossener Tür? Wir sind sofort für Sie da.
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-[var(--space-3)] md:gap-[var(--space-6)] mb-[var(--space-8)]">
                    {[
                        "Techniker in 20-30 Minuten",
                        "Festpreis vor Anfahrt genannt",
                        "Keine versteckten Kosten"
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-[var(--space-2)] text-[var(--font-size-14)] text-white/80">
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-white/10 shrink-0">
                                <Check className="h-3 w-3 text-white" />
                            </div>
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-[var(--space-6)] w-full max-w-sm mx-auto">
                    <a
                        href="tel:+4964418056544"
                        className="text-[var(--font-size-40)] font-bold text-white hover:text-[var(--color-brand-light)] transition-colors tracking-tight"
                    >
                        06441 8056544
                    </a>

                    <a
                        href="tel:+4964418056544"
                        className="flex items-center justify-center gap-[var(--space-2)] w-full md:w-[200px] h-[56px] bg-white text-[var(--color-brand-dark)] text-[var(--font-size-18)] font-bold rounded-[var(--radius-button)] shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:shadow-[var(--shadow-xl)] transition-all duration-[var(--duration-250)] ease-out"
                    >
                        <Phone className="h-5 w-5 animate-heartbeat-cta" />
                        Jetzt Anrufen
                    </a>

                    <span className="text-[var(--font-size-13)] text-white/60">
                        Kostenlos anrufen — kein Risiko — Festpreis wird sofort genannt
                    </span>
                </div>
            </div>
        </section>
    );
}
