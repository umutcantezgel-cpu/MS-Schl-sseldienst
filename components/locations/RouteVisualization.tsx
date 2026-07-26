import { LocationData } from "@/lib/data/locations";
import { Navigation2, MapPin, MapPinned, ArrowDown } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";
import { pickVariant } from "@/lib/textRotation";

const subtitleVariants = [
    (name: string) => `Transparente Anfahrt direkt aus Wetzlar nach ${name}. Ohne Umwege, ohne Callcenter.`,
    (name: string) => `Direkte Route von unserem Standort in Wetzlar zu Ihnen nach ${name}, schnell und zuverlässig.`,
    (name: string) => `Unsere Techniker starten aus Wetzlar und fahren auf direktem Weg nach ${name}. Kein Callcenter dazwischen.`,
    (name: string) => `Von Wetzlar nach ${name}: Kurzer Anfahrtsweg, kalkulierbare Zeiten und volle Transparenz.`,
    (name: string) => `Wir kommen persönlich aus Wetzlar, die Strecke nach ${name} kennen unsere Monteure im Schlaf.`,
];

const startLabelVariants = [
    "Zentrale & Materiallager",
    "Unser Hauptsitz in Wetzlar",
    "Startpunkt: Wetzlarer Zentrale",
    "Basis mit Vollausstattung",
];

interface RouteVisualizationProps {
    city: LocationData;
}

export default function RouteVisualization({ city }: RouteVisualizationProps) {
    if (!city.mainRoad && !city.distanceKm) return null;

    const subtitle = pickVariant(subtitleVariants, city.slug)(city.name);
    const startLabel = pickVariant(startLabelVariants, city.slug, 1);

    return (
        <RevealSection className="py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-[var(--section-px)] relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black tracking-tight text-[color:var(--text-primary)] leading-[1.15] mb-3">
                        So schnell sind wir in {city.name}
                    </h2>
                    <p className="text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Route Steps Card-based layout */}
                <div className="max-w-4xl mx-auto">
                    
                    {/* Responsive Grid / Stack */}
                    <div className="relative flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto items-center">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 -z-10 -translate-y-1/2"></div>
                        
                        {/* Start Card */}
                        <div className="w-full relative rounded-2xl bg-white border border-gray-100 shadow-sm md:shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-4 md:p-6 flex flex-row md:flex-col items-center gap-4 md:gap-0 hover:shadow-lg transition-shadow text-left md:text-center">
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center md:mx-auto md:mb-3 border border-blue-100/50">
                                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <div className="text-base font-bold text-[color:var(--text-primary)]">Start: Wetzlar</div>
                                <p className="text-sm text-[color:var(--text-tertiary)] md:mt-1">{startLabel}</p>
                            </div>
                        </div>
                        
                        {/* Arrow (Mobile) */}
                        <div className="md:hidden flex justify-center -my-1">
                            <ArrowDown className="w-5 h-5 text-gray-300" />
                        </div>

                        {/* Route Card */}
                        <div className="w-full relative rounded-2xl bg-gradient-to-r md:bg-gradient-to-br from-[var(--color-red-500)] to-[var(--color-red-600)] md:to-[var(--color-red-700)] shadow-md md:shadow-lg shadow-red-500/15 md:shadow-red-500/10 p-4 md:p-6 flex flex-row md:flex-col items-center gap-4 md:gap-0 text-left md:text-center">
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-xl bg-white/15 backdrop-blur-sm text-white flex items-center justify-center md:mx-auto md:mb-3 border border-white/20">
                                <Navigation2 className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="min-w-0">
                                <div className="text-base font-bold text-white">
                                    <span className="md:hidden">{city.mainRoad ? `Über ${city.mainRoad}` : `${city.distanceKm} km`}</span>
                                    <span className="hidden md:inline">{city.mainRoad ? `Über ${city.mainRoad}` : `${city.distanceKm} km Strecke`}</span>
                                </div>
                                <p className="text-sm text-white/75 truncate md:whitespace-normal md:line-clamp-2 md:mt-1">
                                    {city.routeDescription || "Direkter Weg ohne Umwege"}
                                </p>
                            </div>
                        </div>
                        
                        {/* Arrow (Mobile) */}
                        <div className="md:hidden flex justify-center -my-1">
                            <ArrowDown className="w-5 h-5 text-gray-300" />
                        </div>

                        {/* Destination Card */}
                        <div className="w-full relative rounded-2xl bg-white border-2 border-[var(--color-red-200)] shadow-sm md:shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-4 md:p-6 flex flex-row md:flex-col items-center gap-4 md:gap-0 hover:shadow-lg transition-shadow text-left md:text-center">
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-xl bg-red-50 text-[var(--color-red-600)] flex items-center justify-center md:mx-auto md:mb-3 border border-red-100/50">
                                <MapPinned className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <div className="text-base font-bold text-[color:var(--text-primary)]">Ziel: {city.name}</div>
                                <div className="mt-0.5 md:mt-2">
                                    <span className="text-sm font-semibold text-[var(--color-red-600)] md:bg-red-50 md:px-3 md:py-1 md:rounded-full md:border md:border-red-100 md:inline-block">
                                        <span className="md:hidden">ca. {city.logistics.drivingTimeMinutes} Min. Anfahrt</span>
                                        <span className="hidden md:inline">Ankunft in ca. {city.logistics.drivingTimeMinutes} Min.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealSection>
    );
}
