import { LocationData } from "@/lib/data/locations";
import { Phone, PhoneCall } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";
import { pickVariant } from "@/lib/textRotation";

const descVariants = [
    (name: string, time: string) => `Unser Techniker ist in ca. ${time} Minuten bei Ihnen in ${name}. Der verbindliche Festpreis wird direkt am Telefon genannt , garantiert keine Überraschungen oder versteckten Kosten.`,
    (name: string, time: string) => `Wir sind durchschnittlich in ${time} Minuten in ${name} vor Ort. Noch am Telefon nennen wir Ihnen den verbindlichen Festpreis , ohne Nachberechnung, ohne Kleingedrucktes.`,
    (name: string, time: string) => `Ihr Schlüsseldienst für ${name}: In nur ${time} Minuten bei Ihnen. Festpreisgarantie ab dem ersten Telefonat, damit Sie genau wissen, was der Einsatz kostet.`,
    (name: string, time: string) => `Von Wetzlar nach ${name} brauchen wir ca. ${time} Minuten. Den verbindlichen Einsatzpreis erfahren Sie sofort , transparent und fair, ohne versteckte Zuschläge.`,
    (name: string, time: string) => `Schlüsseldienst-Notfall in ${name}? Unser Team ist in rund ${time} Minuten da. Den Komplettpreis erhalten Sie vorab am Telefon , mit Festpreisgarantie.`,
];

export default function LocationContact({ city }: { city: LocationData }) {
    const desc = pickVariant(descVariants, city.slug)(city.name, city.logistics.drivingTimeMinutes);

    return (
        <RevealSection className="py-[var(--section-py)] bg-white border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-4xl mx-auto bg-[var(--color-slate-50)] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-20 text-center border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[color:var(--text-primary)] font-extrabold tracking-tight text-balance leading-[1.1] mb-8">
                        Schlüsseldienst in <span className="text-[color:var(--value-primary)]">{city.name}</span> benötigt? <br className="hidden md:block" />
                        {pickVariant(["Rufen Sie jetzt an!", "Direkt Helfer rufen!", "Sofort anrufen!"], city.slug, 9)}
                    </h2>
                    
                    <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed text-balance max-w-prose mx-auto mb-12 break-words hyphens-auto">
                        {desc}
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <a 
                            href="tel:+4964418056279" 
                            className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 overflow-hidden rounded-full bg-[var(--color-red-500)] px-6 sm:px-12 py-4 sm:py-6 text-white shadow-[var(--shadow-cta)] transition-all hover:bg-[var(--color-red-600)] hover:shadow-[0_8px_40px_rgba(185,28,28,0.25)] hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap"
                        >
                            <Phone className="h-6 w-6 sm:h-8 sm:w-8 shrink-0 transition-transform group-hover:rotate-12" />
                            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight tabular-nums whitespace-nowrap">06441 8056279</span>
                        </a>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mt-4 bg-white/50 px-6 py-4 sm:py-3 rounded-2xl sm:rounded-full border border-[var(--border-subtle)] text-center text-balance w-full sm:w-auto mx-auto max-w-[90vw]">
                            <span className="text-[color:var(--text-tertiary)] font-medium tracking-wide">Festnetz:</span>
                            <a href="tel:+4964418056279" className="text-[color:var(--value-primary)] font-bold hover:underline flex items-center gap-2 tracking-wide text-base sm:text-lg justify-center whitespace-nowrap">
                                <PhoneCall className="w-5 h-5 shrink-0" /> 06441 - 80 56 279
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealSection>
    );
}
