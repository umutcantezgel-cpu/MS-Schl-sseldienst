import { LocationData } from "@/lib/data/locations";
import { Navigation2, MapPin, MapPinned } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";

interface RouteVisualizationProps {
    city: LocationData;
}

export default function RouteVisualization({ city }: RouteVisualizationProps) {
    if (!city.mainRoad && !city.distanceKm) return null;

    return (
        <RevealSection className="py-16 md:py-24 bg-[var(--color-charcoal-50)] border-y border-[var(--border-subtle)] relative overflow-hidden">
            <div className="container mx-auto px-[var(--section-px)] relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="typo-section-heading text-[color:var(--text-primary)] mb-4">
                        So schnell sind wir in {city.name}
                    </h2>
                    <p className="typo-body-large text-[color:var(--text-secondary)]">
                        Transparente Anfahrt direkt aus Wetzlar. Ohne Umwege, ohne Callcenter.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative mt-16 md:mt-24">
                    {/* Desktop Connecting Line */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-[var(--color-charcoal-100)] z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--value-primary)]/20 via-[var(--value-primary)] to-[var(--value-primary)]/20 shadow-[0_0_10px_var(--value-primary)] opacity-50" />
                        <div className="h-full w-24 bg-[var(--value-primary)] shadow-[0_0_15px_var(--value-primary)] rounded-full animate-[pulse_2s_ease-in-out_infinite] blur-[2px]" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0 relative z-10">
                        
                        {/* Step 1 */}
                        <div className="flex flex-col items-center flex-1 w-full relative">
                            {/* Mobile connecting line */}
                            <div className="md:hidden absolute top-[56px] bottom-[-48px] left-1/2 w-0.5 -translate-x-1/2 bg-[var(--color-charcoal-200)]" />
                            
                            <div className="w-14 h-14 rounded-full bg-white border border-[var(--border-subtle)] shadow-md flex items-center justify-center text-[color:var(--value-primary)] mb-4 relative bg-clip-padding">
                                <div className="absolute inset-0 bg-[var(--value-primary)]/5 rounded-full" />
                                <MapPin className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <div className="text-lg font-bold text-[color:var(--text-primary)] text-center">Start: Wetzlar</div>
                            <p className="text-sm text-[color:var(--text-tertiary)] text-center mt-1">
                                Zentrale & Materiallager
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center flex-1 w-full relative">
                            {/* Mobile connecting line */}
                            <div className="md:hidden absolute top-[56px] bottom-[-48px] left-1/2 w-0.5 -translate-x-1/2 bg-[var(--color-charcoal-200)]" />

                            <div className="w-14 h-14 rounded-full bg-[var(--color-red-500)] text-white shadow-[var(--shadow-cta)] flex items-center justify-center mb-4 relative z-10 transition-transform hover:scale-110 duration-500">
                                <Navigation2 className="w-6 h-6 stroke-[2]" />
                            </div>
                            <div className="text-lg font-bold text-[color:var(--text-primary)] text-center">
                                {city.mainRoad ? `Über ${city.mainRoad}` : `${city.distanceKm} km Strecke`}
                            </div>
                            <p className="text-sm text-[color:var(--text-tertiary)] text-center mt-1">
                                {city.routeDescription ? city.routeDescription : "Direkter Weg ohne Umwege"}
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center flex-1 w-full">
                            <div className="w-14 h-14 rounded-full bg-white border-2 border-[var(--value-primary)] shadow-md flex items-center justify-center text-[color:var(--value-primary)] mb-4 relative z-10">
                                {/* Pulse ring around destination */}
                                <div className="absolute inset-0 rounded-full border border-[var(--value-primary)] opacity-50 animate-ping" />
                                <MapPinned className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <div className="text-lg font-bold text-[color:var(--text-primary)] text-center">Ziel: {city.name}</div>
                            <p className="text-sm text-[color:var(--text-tertiary)] text-center mt-1 font-medium text-[color:var(--color-red-600)] bg-[var(--color-red-50)] px-3 py-1 rounded-full border border-[var(--color-red-100)] inline-block mt-2">
                                Ankunft in ca. {city.logistics.drivingTimeMinutes} Min.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </RevealSection>
    );
}
