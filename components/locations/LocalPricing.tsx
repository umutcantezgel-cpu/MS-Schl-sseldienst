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
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 id="preise-heading" className="text-3xl md:text-4xl lg:text-5xl text-[color:var(--text-primary)] font-extrabold tracking-tight text-balance leading-[1.1] mb-8">
                            Transparente <span className="text-[color:var(--value-primary)]">Festpreise</span> für {city.name}
                        </h2>
                        <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed text-balance mx-auto">
                            Wir garantieren absolute Preistransparenz. Die Berechnung erfolgt immer nach Aufwand und Tageszeit, absolut ohne versteckte Gebühren.
                        </p>
                        <div className="mt-8 inline-block font-bold text-[18px] text-[color:var(--value-primary)] bg-[var(--value-primary)]/10 py-3 px-8 rounded-full border border-[var(--value-primary)]/20 shadow-sm tracking-wide">
                            {city.pricing.travelCostText}
                        </div>
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

            <div className="mx-auto max-w-4xl mt-24 p-8 md:p-12 bg-status-warning/10 backdrop-blur-sm rounded-3xl border border-status-warning/30 shadow-lg flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-20 h-20 shrink-0 bg-status-warning/20 text-status-warning rounded-full flex items-center justify-center border border-status-warning/40 shadow-sm">
                    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                </div>
                <div className="flex-1">
                    <div className="text-2xl font-extrabold text-[color:var(--text-primary)] mb-4 tracking-tight">Vorsicht vor unseriösen Vermittlern in {city.name}!</div>
                    <p className="text-[color:var(--text-secondary)] text-lg leading-relaxed max-w-prose">
                        Ein seriöser lokaler Schlüsseldienst nennt Ihnen <strong className="font-bold text-[color:var(--text-primary)]">IMMER</strong> den verbindlichen Festpreis am Telefon, <strong className="font-bold text-[color:var(--text-primary)]">BEVOR</strong> der Monteur zu Ihnen nach {city.name} aufbricht. Wir garantieren absolute Transparenz ohne Callcenter-Fantasiepreise.
                    </p>
                </div>
            </div>

            <div className="mt-20 flex flex-col items-center gap-4">
                <a href="tel:+4964418056279" className="text-[color:var(--color-red-600)] bg-[var(--color-red-50)] px-10 py-5 rounded-full font-bold shadow-sm border border-[var(--color-red-100)] hover:bg-[var(--color-red-600)] hover:text-white transition-all flex items-center justify-center gap-3 text-lg tracking-wide group">
                    <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" /> 06441-8056279 – Preisauskunft
                </a>
                <span className="text-sm text-[color:var(--text-tertiary)] text-center font-medium tracking-widest uppercase">Festpreis wird vor Abfahrt garantiert</span>
            </div>
        </section>
    );
}
