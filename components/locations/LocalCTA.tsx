import { Phone } from "lucide-react";

export default function LocalCTA({ cityName }: { cityName: string }) {
    return (
        <section aria-labelledby="cta-heading" className="bg-[var(--color-red-600)] px-[var(--section-px)] py-[var(--space-32)] text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
            <div className="container relative z-10 mx-auto max-w-4xl">
                <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold mb-6">
                    Vor verschlossener Tür in {cityName}? Wir sind sofort da.
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto text-balance">
                    Keine Callcenter, keine Wucherpreise. Rufen Sie Ihren regionalen Experten direkt an und wir machen uns auf den Weg zu Ihnen.
                </p>
                <div className="flex flex-col items-center gap-3">
                    <a href="tel:+4964418056544" className="inline-flex items-center justify-center gap-4 bg-white text-[var(--color-red-600)] px-10 py-5 rounded-full typo-cta-button text-2xl md:text-3xl shadow-xl hover:scale-105 hover:bg-white/90 transition-all hover:shadow-2xl">
                        <Phone className="w-8 h-8 md:w-9 md:h-9 animate-pulse" />
                        06441-8056544
                    </a>
                    <span className="typo-small text-white/80 text-center uppercase tracking-wider">Antwort innerhalb von 30 Minuten</span>
                </div>
            </div>
        </section>
    );
}
