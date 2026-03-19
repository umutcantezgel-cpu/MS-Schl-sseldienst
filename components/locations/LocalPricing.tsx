"use client";

import { LocationData } from "@/lib/data/locations";
import PriceCard from "@/components/pricing/PriceCard";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { Phone } from "lucide-react";

export default function LocalPricing({ city }: { city: LocationData }) {
    return (
        <section id="preise" aria-labelledby="preise-heading" className="bg-transparent relative px-[var(--section-px)] py-[var(--section-py)] border-y border-[var(--border-subtle)]">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-lg z-[-1]"></div>
            <StaggerReveal className="mx-auto max-w-7xl relative z-10" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <div className="text-center mb-16">
                        <h2 id="preise-heading" className="typo-h2 text-[var(--text-primary)]">
                            Transparente <span className="text-[var(--value-primary)]">Festpreise</span> für {city.name}
                        </h2>
                        <p className="mt-4 text-[18px] text-[var(--text-secondary)] max-w-2xl mx-auto font-medium bg-[var(--value-primary)]/10 text-[var(--value-primary)] py-3 px-6 rounded-lg border border-[var(--value-primary)]/20">
                            Anfahrtskosten: {city.pricing.travelCostText}
                        </p>
                    </div>
                </StaggerItem>
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        <PriceCard
                            title="Tür zugefallen"
                            price={city.pricing.basePrice}
                            description="Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen."
                            features={["Werktags 06-20 Uhr", "Zerstörungsfreie Öffnung (>99%)", "Festpreis am Telefon genannt",
                                ...(city.pricing.travelCost === 0 ? ["Inkl. Anfahrt in diesem Bezirk"] : [`Zzgl. lokale Anfahrt`])
                            ]}
                            isPopular={true}
                        />
                        <PriceCard
                            title="Abends & Nachts"
                            price={city.pricing.basePriceNight || 119}
                            description="Einsätze in den späten Abend- oder tiefen Nachtstunden."
                            features={["20:00 bis 05:59 Uhr", "Gleiche Pünktlichkeit", "Gleiche Zerstörungsfreiheit",
                                ...(city.pricing.travelCost === 0 ? ["Inkl. Anfahrt in diesem Bezirk"] : [`Zzgl. lokale Anfahrt`])
                            ]}
                        />
                        <PriceCard
                            title="Wochenende/Feiertag"
                            price={city.pricing.basePriceWeekend || 179}
                            description="Notdienst an allen Samstagen, Sonntagen und Feiertagen."
                            features={["Rund um die Uhr am Wochenende", "Priorisierter Service in Notlagen", "Defekte Schlösser öffnen",
                                ...(city.pricing.travelCost === 0 ? ["Inkl. Anfahrt in diesem Bezirk"] : [`Zzgl. lokale Anfahrt`])
                            ]}
                        />
                    </div>
                </StaggerItem>
            </StaggerReveal>

            <div className="mx-auto max-w-4xl mt-16 p-6 md:p-8 bg-amber-50 rounded-2xl border border-amber-200 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 shrink-0 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">Vorsicht vor unseriösen Anbietern in {city.name}!</h3>
                    <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                        Ein seriöser Schlüsseldienst nennt Ihnen <strong>IMMER</strong> den Festpreis am Telefon, <strong>BEVOR</strong> der Monteur zu Ihnen nach {city.name} losfährt. Zahlen Sie keine wuchernden Fantasiepreise an Callcenter-Vermittler. Wir garantieren lokale Transparenz.
                    </p>
                </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-2">
                <a href="tel:+4964418056544" className="text-[var(--color-red-500)] typo-cta-button hover:underline flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" /> 06441-8056544 anrufen zur Preisauskunft
                </a>
                <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Festpreis wird vor Anfahrt genannt</span>
            </div>
        </section>
    );
}
