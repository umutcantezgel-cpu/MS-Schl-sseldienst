import { LocationData } from "@/lib/data/locations";
import { KeyRound, ShieldCheck, Clock, ShieldAlert } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { getLocationImageSet, localizeAltText } from "@/lib/imageRotation";
import { pickVariant } from "@/lib/textRotation";

interface LocationServicesProps {
    city: LocationData;
}

export default function LocationServices({ city }: LocationServicesProps) {
    const imageSet = getLocationImageSet(city.slug);
    const isRural = city.demographicsFocus === "rural";
    const isUrban = city.demographicsFocus === "urban" || city.demographicsFocus === "business";

    // Dynamic sentences based on city name and character
    const service1 = isUrban 
        ? `In den Geschäfts- und Wohnanlagen von ${city.name} öffnen wir jede Tür schonend und absolut beschädigungsfrei.`
        : `Egal ob Eigenheim oder Scheunentor: In ${city.name} öffnen wir jede Tür nahezu immer komplett beschädigungsfrei.`;

    const service2 = isUrban
        ? `Wenn in ${city.name} nach einem Defekt oder Einbruch ein neues Schloss benötigt wird, bauen wir Qualitäts-Zylinder direkt vor Ort ein.`
        : `Wir ersetzen defekte oder veraltete Schlösser in ${city.name} sofort gegen moderne, einbruchhemmende Marken-BKS.`;

    const service3 = `Auch um 3 Uhr morgens sind wir in ca. ${city.logistics.drivingTimeMinutes} Minuten bei Ihnen in ${city.name}. Garantiert.`;

    const service4 = isRural
        ? `Wir beraten Sie direkt an Ihrem Haus in ${city.name} zum optimalen Einbruchschutz für abgelegene Gebäude.`
        : `Wir optimieren den Einbruchschutz Ihrer Wohnung oder Ihres Gewerbes in ${city.name} auf den neuesten Stand der Technik.`;

    const introText = pickVariant([
        "Wir sind Ihr direkter Ansprechpartner vor Ort. Ohne Vermittler, mit voller lokaler Kompetenz und dem richtigen Werkzeug im Wagen.",
        "Setzen Sie auf lokales Handwerk direkt aus der Nähe. Wir verzichten auf Vermittlungszentralen und helfen sofort mit Expertise.",
        "Lokaler Service bedeutet für uns: Kurze Wege, ehrliche Beratung und professionelle Hilfe, die direkt bei Ihnen in der Nachbarschaft sitzt."
    ], city.slug, 5);

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
        <RevealSection className="py-[var(--section-py)] bg-[var(--color-slate-50)] border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[color:var(--text-primary)] font-extrabold tracking-tight text-balance leading-[1.1] mb-6">
                        Unsere Leistungen in <span className="text-[color:var(--value-primary)]">{city.name}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed text-balance">
                        {introText}
                    </p>
                </div>

                <StaggerReveal className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto" animation={entryAnimations.slideUpFade}>
                    {services.map((service, idx) => (
                        <StaggerItem key={idx} animation={entryAnimations.slideUpFade} className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start">
                            <div className="shrink-0 w-16 h-16 rounded-full bg-[var(--color-ember-50)] text-[var(--value-icon-color)] flex items-center justify-center border border-[var(--color-ember-100)] shadow-sm">
                                <service.icon className="w-8 h-8 stroke-[1.5]" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[color:var(--text-primary)] mb-3 tracking-tight">
                                    {service.title}
                                </div>
                                <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed max-w-prose">
                                    {service.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerReveal>

                {/* Rotated Trust-Image (unique per city via hash-based rotation) */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
                        <SeoContentImage
                            image={imageSet.services}
                            cityName={city.name}
                            className="w-full h-auto rounded-[var(--radius-24)]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                        />
                    </div>
                </div>
            </div>
        </RevealSection>
    );
}
