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
                    
                    {/* Desktop: Horizontal 3-column card layout */}
                    <div className="hidden md:grid md:grid-cols-3 gap-4">
                        {/* Start Card */}
                        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 border border-blue-100/50">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="text-base font-bold text-[color:var(--text-primary)]">Start: Wetzlar</div>
                            <p className="text-sm text-[color:var(--text-tertiary)] mt-1">{startLabel}</p>
                        </div>

                        {/* Route Card */}
                        <div className="relative rounded-2xl bg-gradient-to-br from-[var(--color-red-500)] to-[var(--color-red-700)] shadow-lg shadow-red-500/10 p-6 text-center">
                            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm text-white flex items-center justify-center mx-auto mb-3 border border-white/20">
                                <Navigation2 className="w-6 h-6" />
                            </div>
                            <div className="text-base font-bold text-white">
                                {city.mainRoad ? `Über ${city.mainRoad}` : `${city.distanceKm} km Strecke`}
                            </div>
                            <p className="text-sm text-white/75 mt-1 line-clamp-2">
                                {city.routeDescription || "Direkter Weg ohne Umwege"}
                            </p>
                        </div>

                        {/* Destination Card */}
                        <div className="relative rounded-2xl bg-white border-2 border-[var(--color-red-200)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--color-red-600)] flex items-center justify-center mx-auto mb-3 border border-red-100/50">
                                <MapPinned className="w-6 h-6" />
                            </div>
                            <div className="text-base font-bold text-[color:var(--text-primary)]">Ziel: {city.name}</div>
                            <span className="inline-block mt-2 text-sm font-semibold text-[var(--color-red-600)] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                Ankunft in ca. {city.logistics.drivingTimeMinutes} Min.
                            </span>
                        </div>
                    </div>

                    {/* Mobile: Compact vertical card stack */}
                    <div className="flex flex-col gap-3 md:hidden">
                        {/* Start */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-base font-bold text-[color:var(--text-primary)]">Start: Wetzlar</div>
                                <p className="text-sm text-[color:var(--text-tertiary)]">{startLabel}</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center -my-1">
                            <ArrowDown className="w-5 h-5 text-gray-300" />
                        </div>

                        {/* Route */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[var(--color-red-500)] to-[var(--color-red-600)] shadow-md shadow-red-500/15">
                            <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 backdrop-blur-sm text-white flex items-center justify-center border border-white/20">
                                <Navigation2 className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                                <div className="text-base font-bold text-white">
                                    {city.mainRoad ? `Über ${city.mainRoad}` : `${city.distanceKm} km`}
                                </div>
                                <p className="text-sm text-white/75 truncate">
                                    {city.routeDescription || "Direkter Weg ohne Umwege"}
                                </p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center -my-1">
                            <ArrowDown className="w-5 h-5 text-gray-300" />
                        </div>

                        {/* Destination */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-[var(--color-red-200)] shadow-sm">
                            <div className="w-11 h-11 shrink-0 rounded-xl bg-red-50 text-[var(--color-red-600)] flex items-center justify-center border border-red-100/50">
                                <MapPinned className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-base font-bold text-[color:var(--text-primary)]">Ziel: {city.name}</div>
                                <span className="text-sm font-semibold text-[var(--color-red-600)]">
                                    ca. {city.logistics.drivingTimeMinutes} Min. Anfahrt
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealSection>
    );
}
