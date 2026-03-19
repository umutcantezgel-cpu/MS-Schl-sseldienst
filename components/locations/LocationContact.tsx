"use client";

import { LocationData } from "@/lib/data/locations";
import { Phone, PhoneCall } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";

export default function LocationContact({ city }: { city: LocationData }) {
    return (
        <RevealSection className="py-16 md:py-24 bg-white border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-4xl mx-auto bg-[var(--color-slate-50)] rounded-3xl p-8 md:p-16 text-center border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
                    <h2 className="typo-h2 text-[var(--text-primary)] mb-6">
                        Schlüsseldienst in <span className="text-[var(--value-primary)]">{city.name}</span> benötigt? <br className="hidden md:block" />
                        Rufen Sie jetzt an!
                    </h2>
                    
                    <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
                        Unser Techniker ist in <strong>ca. {city.logistics.drivingTimeMinutes} Minuten</strong> bei Ihnen in {city.name}. Festpreis wird direkt am Telefon genannt — garantiert keine Überraschungen.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <a 
                            href="tel:+4964418056544" 
                            className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-[var(--color-red-500)] px-10 py-5 text-white shadow-[var(--shadow-cta)] transition-all hover:bg-[var(--color-red-600)] hover:shadow-[0_8px_40px_rgba(185,28,28,0.25)] hover:-translate-y-1 w-full sm:w-auto"
                        >
                            <Phone className="h-8 w-8 transition-transform group-hover:rotate-12" />
                            <span className="text-2xl md:text-3xl font-bold tracking-tight">06441 - 805 65 44</span>
                        </a>
                        
                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-[var(--text-tertiary)] font-medium">Alternative Mobilnummer:</span>
                            <a href="tel:+491782471037" className="text-[var(--value-primary)] font-bold hover:underline flex items-center gap-1.5">
                                <PhoneCall className="w-4 h-4" /> 0178 - 247 10 37
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealSection>
    );
}
