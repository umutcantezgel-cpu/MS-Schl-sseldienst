import { LocationData } from "@/lib/data/locations";
import { Check, Phone } from "lucide-react";
import { pickVariant } from "@/lib/textRotation";

export default function LocationFinalCTA({ city }: { city: LocationData }) {
    const subtitle = pickVariant([
        `Wir sind in ca. ${city.logistics.drivingTimeMinutes} Minuten da.`,
        `Unser Notdienst erreicht Sie meist unter ${city.logistics.drivingTimeMinutes} Minuten.`,
        `Schnelle Hilfe vor Ort in ca. ${city.logistics.drivingTimeMinutes} Minuten.`
    ], city.slug, 6);

    const trustLine2 = pickVariant([
        "Festpreis vor Anfahrt",
        "Verbindlicher Preis am Telefon",
        "Garantierter Festpreis vorab"
    ], city.slug, 7);

    const trustLine3 = pickVariant([
        "Keine versteckten Kosten",
        "Null versteckte Gebühren",
        "Transparent ohne Nachberechnung"
    ], city.slug, 8);

    return (
        <section aria-labelledby="cta-heading" className="bg-[var(--action-primary)] relative py-[var(--section-py)] overflow-hidden">
            {/* Radial Rosé-Pattern Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-blush-500)] opacity-20 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-[var(--section-px)] relative z-10 text-center text-white">
                <h2 id="cta-heading" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-balance leading-[1.1] sm:leading-[1.05] mb-8 sm:mb-12">
                    Vor verschlossener Tür in {city.name}? <br className="hidden md:block" />
                    {subtitle}
                </h2>

                {/* Drei Bestätigungszeilen mit Check-Icons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 mb-10 sm:mb-16">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Check className="w-6 h-6 text-white stroke-[3]" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">Techniker in {city.logistics.drivingTimeMinutes} Min.</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Check className="w-6 h-6 text-white stroke-[3]" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">{trustLine2}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Check className="w-6 h-6 text-white stroke-[3]" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">{trustLine3}</span>
                    </div>
                </div>

                {/* Invertierter Button */}
                <div className="flex justify-center flex-col items-center">
                    <a 
                        href="tel:+4964418056279" 
                        className="group flex flex-col items-center justify-center gap-2 bg-white px-6 sm:px-14 py-4 sm:py-6 rounded-3xl sm:rounded-full text-[var(--action-primary)] hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] shadow-[var(--elevation-4)] w-full sm:w-auto max-w-[90vw]"
                    >
                        <div className="flex items-center gap-2 sm:gap-4 font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
                            <Phone className="w-6 h-6 sm:w-8 sm:h-8 fill-current shrink-0" />
                            <span>06441 - 805 65 44</span>
                        </div>
                        <span className="text-base font-bold opacity-80 uppercase tracking-widest text-[var(--color-charcoal-500)]">Jetzt Techniker rufen</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
