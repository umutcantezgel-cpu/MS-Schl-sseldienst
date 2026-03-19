"use client";

import { LocationData } from "@/lib/data/locations";
import { Check, Phone } from "lucide-react";

export default function LocationFinalCTA({ city }: { city: LocationData }) {
    return (
        <section aria-labelledby="cta-heading" className="bg-[var(--action-primary)] relative py-[var(--section-py)] overflow-hidden">
            {/* Radial Rosé-Pattern Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-blush-500)] opacity-20 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-[var(--section-px)] relative z-10 text-center text-white">
                <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                    Vor verschlossener Tür in {city.name}? <br className="hidden md:block" />
                    Wir sind in ca. {city.logistics.drivingTimeMinutes} Minuten da.
                </h2>

                {/* Drei Bestätigungszeilen mit Check-Icons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white stroke-[3]" />
                        </div>
                        <span className="text-lg md:text-xl font-medium">Techniker in {city.logistics.drivingTimeMinutes} Min. in {city.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white stroke-[3]" />
                        </div>
                        <span className="text-lg md:text-xl font-medium">Festpreis wird vor Anfahrt genannt</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5 text-white stroke-[3]" />
                        </div>
                        <span className="text-lg md:text-xl font-medium">Keine versteckten Kosten</span>
                    </div>
                </div>

                {/* Invertierter Button */}
                <div className="flex justify-center">
                    <a 
                        href="tel:+4964418056544" 
                        className="group flex flex-col items-center justify-center gap-1 bg-white px-12 py-5 rounded-full text-[var(--action-primary)] hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                    >
                        <div className="flex items-center gap-3 font-extrabold text-2xl md:text-3xl">
                            <Phone className="w-6 h-6 fill-current" />
                            <span>06441 - 805 65 44</span>
                        </div>
                        <span className="text-sm font-semibold opacity-80 uppercase tracking-widest">Jetzt Techniker rufen</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
