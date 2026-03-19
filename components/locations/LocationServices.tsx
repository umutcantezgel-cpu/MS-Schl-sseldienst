"use client";

import { LocationData } from "@/lib/data/locations";
import { KeyRound, ShieldCheck, Clock, ShieldAlert } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

interface LocationServicesProps {
    city: LocationData;
}

export default function LocationServices({ city }: LocationServicesProps) {
    const isRural = city.demographicsFocus === "rural";
    const isUrban = city.demographicsFocus === "urban" || city.demographicsFocus === "business";

    // Dynamic sentences based on city name and character
    const service1 = isUrban 
        ? `In den Geschäfts- und Wohnanlagen von ${city.name} öffnen wir jede Tür schonend und absolut beschädigungsfrei.`
        : `Egal ob Eigenheim oder Scheunentor: In ${city.name} öffnen wir jede Tür zu 99% komplett beschädigungsfrei.`;

    const service2 = isUrban
        ? `Wenn in ${city.name} nach einem Defekt oder Einbruch ein neues Schloss benötigt wird, bauen wir Qualitäts-Zylinder direkt vor Ort ein.`
        : `Wir ersetzen defekte oder veraltete Schlösser in ${city.name} sofort gegen moderne, einbruchhemmende Marken-BKS.`;

    const service3 = `Auch um 3 Uhr morgens sind wir in ca. ${city.logistics.drivingTimeMinutes} Minuten bei Ihnen in ${city.name}. Garantiert.`;

    const service4 = isRural
        ? `Wir beraten Sie direkt an Ihrem Haus in ${city.name} zum optimalen Einbruchschutz für abgelegene Gebäude.`
        : `Wir optimieren den Einbruchschutz Ihrer Wohnung oder Ihres Gewerbes in ${city.name} auf den neuesten Stand der Technik.`;

    const services = [
        {
            title: `Türöffnung in ${city.name}`,
            description: service1,
            icon: KeyRound,
        },
        {
            title: `Schloss austauschen in ${city.name}`,
            description: service2,
            icon: ShieldCheck,
        },
        {
            title: `24/7 Notdienst für ${city.name}`,
            description: service3,
            icon: Clock,
        },
        {
            title: `Sicherheitsberatung in ${city.name}`,
            description: service4,
            icon: ShieldAlert,
        },
    ];

    return (
        <RevealSection className="py-16 md:py-24 bg-[var(--color-slate-50)] border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="typo-section-heading text-[var(--text-primary)] mb-4">
                        Unsere Leistungen in <span className="text-[var(--value-primary)]">{city.name}</span>
                    </h2>
                    <p className="typo-body-large text-[var(--text-secondary)]">
                        Wir sind Ihr direkter Ansprechpartner vor Ort. Ohne Vermittler, mit voller lokaler Kompetenz.
                    </p>
                </div>

                <StaggerReveal className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto" animation={entryAnimations.slideUpFade}>
                    {services.map((service, idx) => (
                        <StaggerItem key={idx} animation={entryAnimations.slideUpFade} className="flex gap-6">
                            <div className="shrink-0 w-16 h-16 rounded-full bg-[var(--color-ember-50)] text-[var(--value-icon-color)] flex items-center justify-center border border-[var(--color-ember-100)] shadow-sm">
                                <service.icon className="w-8 h-8 stroke-[1.5]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerReveal>
            </div>
        </RevealSection>
    );
}
