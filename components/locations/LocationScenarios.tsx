"use client";

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
        <RevealSection className="py-16 md:py-24 bg-white border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="typo-section-heading text-[var(--text-primary)] mb-4">
                        Typische Einsatz-Szenarien in <span className="text-[var(--value-primary)]">{city.name}</span>
                    </h2>
                    <p className="typo-body-large text-[var(--text-secondary)]">
                        Als lokaler Schlüsseldienst kennen wir die häufigsten Notsituationen in Ihrer Nachbarschaft genau.
                    </p>
                </div>

                <StaggerReveal className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto" animation={entryAnimations.slideUpFade}>
                    {city.scenarios.map((scenario, idx) => {
                        const IconComponent = (Icons as any)[scenario.icon] || Icons.Key;

                        return (
                            <StaggerItem key={idx} animation={entryAnimations.slideUpFade} className="flex flex-col">
                                <div className="mb-6 inline-flex">
                                    <div className="w-16 h-16 rounded-full bg-[var(--color-ember-50)] flex items-center justify-center border border-[var(--color-ember-200)] shadow-sm">
                                        <IconComponent className="w-8 h-8 text-[var(--value-icon-color)] stroke-[1.5]" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                                    {scenario.title}
                                </h4>
                                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                                    {scenario.description}
                                </p>
                                <div className="mt-auto pt-4 border-t border-[var(--border-subtle)]">
                                    <p className="font-medium text-[var(--text-primary)] mb-2">Lösung: Rufen Sie uns an.</p>
                                    <a href="tel:+4964418056544" className="inline-flex items-center gap-2 text-[var(--color-red-600)] font-bold hover:underline group">
                                        <Icons.Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
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
