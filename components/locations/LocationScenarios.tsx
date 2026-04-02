import { LocationData } from "@/lib/data/locations";
import * as Icons from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

interface LocationScenariosProps {
    city: LocationData;
}

export default function LocationScenarios({ city }: LocationScenariosProps) {
    if (!city.scenarios || city.scenarios.length === 0) return null;

    return (
        <RevealSection className="py-24 md:py-32 bg-[var(--background-secondary)] border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="typo-section-heading text-[color:var(--text-primary)] mb-6 text-balance tracking-tight font-extrabold leading-[1.1]">
                        Typische Einsatz-Szenarien in <span className="text-[color:var(--value-primary)]">{city.name}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed text-balance">
                        Als lokaler Schlüsseldienst kennen wir die häufigsten Notsituationen in Ihrer Nachbarschaft genau.
                    </p>
                </div>

                <StaggerReveal className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto" animation={entryAnimations.slideUpFade}>
                    {city.scenarios.map((scenario, idx) => {
                        const IconComponent = (Icons as Record<string, any>)[scenario.icon] || Icons.Key;

                        return (
                            <StaggerItem key={idx} animation={entryAnimations.slideUpFade} className="flex flex-col">
                                <div className="mb-8 inline-flex">
                                    <div className="w-16 h-16 rounded-full bg-[var(--color-ember-50)] flex items-center justify-center border border-[var(--color-ember-200)] shadow-sm">
                                        <IconComponent className="w-8 h-8 text-[var(--value-icon-color)] stroke-[1.5]" />
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-[color:var(--text-primary)] mb-4 tracking-tight leading-snug">
                                    {scenario.title}
                                </h4>
                                <p className="text-[color:var(--text-secondary)] text-lg leading-relaxed mb-8 flex-grow">
                                    {scenario.description}
                                </p>
                                <div className="mt-auto pt-6 border-t border-[var(--border-subtle)]">
                                    <p className="font-medium text-[color:var(--text-primary)] mb-3 tracking-wide text-sm uppercase">Lösung: Rufen Sie uns an</p>
                                    <a href="tel:+4964418056279" className="inline-flex items-center gap-2 text-[color:var(--color-red-600)] font-bold hover:underline group text-lg">
                                        <Icons.Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                        In ca. {city.logistics.drivingTimeMinutes} Min. in {city.name}
                                    </a>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerReveal>
            </div>
        </RevealSection>
    );
}
