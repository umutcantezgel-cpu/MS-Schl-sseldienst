import { LocationData } from "@/lib/data/locations";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { pickVariant, shuffleArray } from "@/lib/textRotation";

const subtitleVariants = [
    (name: string) => `Als lokaler Schlüsseldienst in ${name} kennen wir die häufigsten Notsituationen in Ihrer Nachbarschaft genau.`,
    (name: string) => `Diese typischen Situationen erleben unsere Kunden in ${name} am häufigsten, und wir lösen jede davon professionell.`,
    (name: string) => `Ob nachts, am Wochenende oder an Feiertagen: In ${name} sind wir für genau diese Szenarien ausgerüstet.`,
    (name: string) => `Unser Schlüsseldienst-Team kennt ${name} und weiß, welche Probleme hier besonders oft auftreten.`,
    (name: string) => `Von zugefallenen Türen bis zum Schlüsselverlust: In ${name} helfen wir Ihnen bei jedem Szenario schnell weiter.`,
];

const ctaLabelVariants = [
    (name: string) => `Lösung für ${name}: Rufen Sie uns an`,
    (name: string) => `Ihre Soforthilfe in ${name} per Anruf`,
    (name: string) => `Schnelle Hilfe in ${name} per Telefon`,
    (name: string) => `Direkt zum Techniker für ${name}`,
];

function getDefaultScenarios(city: LocationData) {
    const isDense = city.demographicsFocus === "urban" || city.demographicsFocus === "business";
    const isRural = city.demographicsFocus === "rural" || (!city.demographicsFocus && (city.logistics.distanceFromHQ > 10));
    
    // Dynamic text for scenario 1
    const s1_1 = shuffleArray([
        "In den Mehrfamilienhäusern von",
        "Bei den Wohnanlagen in",
        "Rund um",
        "Besonders in",
        "Im gesamten Gebiet von"
    ], city.slug + "1_1")[0] || "";
    const s1_2 = shuffleArray([
        "fallen Wohnungstüren häufig ins Schloss.",
        "kommen zugefallene Türen oft vor.",
        "passiert es schnell, dass die Tür zufällt.",
        "werden wir oft für Türöffnungen gerufen.",
        "ist der Schlüssel schnell mal vergessen."
    ], city.slug + "1_2")[0] || "";
    const s1_3 = shuffleArray([
        "Wir öffnen sie absolut zerstörungsfrei.",
        "Mit unserem Spezialwerkzeug bleibt alles intakt.",
        "Unsere Experten arbeiten zu 100% ohne Schäden.",
        "Dank moderner Technik öffnen wir schonend.",
        "Ihre Kaution und das Schloss bleiben sicher."
    ], city.slug + "1_3")[0] || "";

    // Dynamic text for scenario 2
    const s2_1 = shuffleArray([
        "Schlüssel verloren oder im Büro vergessen?",
        "Sie finden Ihren Haus- oder Wohnungsschlüssel nicht mehr?",
        "Ist der Schlüssel unauffindbar oder abgebrochen?",
        "Haben Sie Ihren Schlüssel auf dem Weg verloren?",
        "Schlüssel verlegt und stehen vor verschlossener Tür?"
    ], city.slug + "2_1")[0] || "";
    const s2_2 = shuffleArray([
        `In ${city.name} sind wir in ca. ${city.logistics.drivingTimeMinutes} Minuten bei Ihnen.`,
        `Unser Notdienst erreicht ${city.name} in nur ${city.logistics.drivingTimeMinutes} Minuten.`,
        `Wir machen uns sofort auf den Weg nach ${city.name} (Anfahrt ca. ${city.logistics.drivingTimeMinutes} Min).`,
        `Ein Anruf genügt, und in ${city.logistics.drivingTimeMinutes} Minuten ist Hilfe in ${city.name}.`,
        `Wir sind lokal verankert und in ${city.logistics.drivingTimeMinutes} Minuten in ${city.name} vor Ort.`
    ], city.slug + "2_2")[0] || "";
    const s2_3 = shuffleArray([
        "Wir öffnen ohne Beschädigung und tauschen auf Wunsch den Zylinder.",
        "Dabei bleibt das Türschloss intakt. Bei Bedarf bauen wir ein neues ein.",
        "Die Öffnung erfolgt schonend. Neue Schlüssel gibt es auf Wunsch sofort.",
        "Unsere Monteure helfen schnell und bieten bei Verlust einen Schlosswechsel an.",
        "Ihre Tür wird sicher geöffnet, ohne den Rahmen zu zerkratzen."
    ], city.slug + "2_3")[0] || "";

    // Dynamic text for scenario 3
    const s3_1 = shuffleArray([
        "Ausgesperrt am Wochenende oder mitten in der Nacht in",
        "Ein Notfall zu ungewöhnlicher Stunde in",
        "Sie benötigen Hilfe an einem Feiertag in",
        "Mitten in der Nacht vor verschlossener Tür in",
        "Am Wochenende den Schlüssel drinnen gelassen in"
    ], city.slug + "3_1")[0] || "";
    const s3_2 = shuffleArray([
        "Unser 24/7-Notdienst ist jederzeit erreichbar.",
        "Wir stehen Ihnen rund um die Uhr zur Verfügung.",
        "Auf unseren Schlüsselnotdienst ist immer Verlass.",
        "Unsere Leitungen sind 24 Stunden am Tag besetzt.",
        "Wir helfen Ihnen an 365 Tagen im Jahr."
    ], city.slug + "3_2")[0] || "";
    const s3_3 = shuffleArray([
        "Den Nacht- oder Wochenendzuschlag nennen wir vorab am Telefon.",
        "Alle Preise und Zuschläge werden transparent vor Anfahrt mitgeteilt.",
        "Wir informieren Sie über die Gesamtkosten direkt am Telefon.",
        "Keine versteckten Gebühren – klare Preise beim ersten Anruf.",
        "Faire Festpreise inklusive Zuschlag erfahren Sie sofort am Telefon."
    ], city.slug + "3_3")[0] || "";

    return [
        {
            icon: "home",
            title: isDense 
                ? `Zugefallene Wohnungstür in ${city.name}` 
                : `Haustür zugefallen in ${city.name}`,
            description: `${s1_1} ${city.name} ${s1_2} ${s1_3}`
        },
        {
            icon: "shield-alert",
            title: isRural
                ? `Einbruchschaden in ${city.name}`
                : `Schlüssel verloren in ${city.name}`,
            description: `${s2_1} ${s2_2} ${s2_3}`
        },
        {
            icon: "briefcase",
            title: `Nacht- & Wochenendeinsatz ${city.name}`,
            description: `${s3_1} ${city.name}? ${s3_2} ${s3_3}`
        }
    ];
}

interface LocationScenariosProps {
    city: LocationData;
}

export default function LocationScenarios({ city }: LocationScenariosProps) {
    const scenarios = (city.scenarios && city.scenarios.length > 0) 
        ? city.scenarios 
        : getDefaultScenarios(city);

    const subtitle = pickVariant(subtitleVariants, city.slug)(city.name);

    return (
        <RevealSection className="py-12 sm:py-24 md:py-32 bg-[var(--background-secondary)] border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-20">
                    <h2 className="typo-section-heading text-[color:var(--text-primary)] mb-6 text-balance tracking-tight font-extrabold leading-[1.1]">
                        Typische Einsatz-Szenarien in <span className="text-[color:var(--value-primary)]">{city.name}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed text-balance">
                        {subtitle}
                    </p>
                </div>

                <StaggerReveal className="grid md:grid-cols-3 gap-6 sm:gap-12 lg:gap-16 max-w-7xl mx-auto" animation={entryAnimations.slideUpFade}>
                    {scenarios.map((scenario, idx) => {
                        const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[scenario.icon] || Icons.Key;
                        const ctaLabel = pickVariant(ctaLabelVariants, city.slug, idx + 2)(city.name);
                        const driveTimeText = pickVariant([
                            `In ca. ${city.logistics.drivingTimeMinutes} Min. in ${city.name}`,
                            `Schnell vor Ort in ${city.logistics.drivingTimeMinutes} Min.`,
                            `Anfahrt in ${city.logistics.drivingTimeMinutes} Minuten`,
                            `Innerhalb ${city.logistics.drivingTimeMinutes} Min. da`
                        ], city.slug, idx + 10);

                        return (
                            <StaggerItem key={idx} animation={entryAnimations.slideUpFade} className="flex flex-col">
                                <div className="mb-4 sm:mb-8 inline-flex">
                                    <div className="w-16 h-16 rounded-full bg-[var(--color-ember-50)] flex items-center justify-center border border-[var(--color-ember-200)] shadow-sm">
                                        <IconComponent className="w-8 h-8 text-[var(--value-icon-color)] stroke-[1.5]" />
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-[color:var(--text-primary)] mb-4 tracking-tight leading-snug">
                                    {scenario.title}
                                </h4>
                                <p className="text-[color:var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow">
                                    {scenario.description}
                                </p>
                                <div className="mt-auto pt-6 border-t border-[var(--border-subtle)]">
                                    <p className="font-medium text-[color:var(--text-primary)] mb-3 tracking-wide text-sm uppercase">{ctaLabel}</p>
                                    <a href="tel:+4964418056279" className="inline-flex items-center gap-2 text-[color:var(--color-red-600)] font-bold hover:underline group text-lg">
                                        <Icons.Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                        {driveTimeText}
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
