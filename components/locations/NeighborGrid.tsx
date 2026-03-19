"use client";

import Link from "next/link";
import { LocationData } from "@/lib/data/locations";
import { allLocations } from "@/lib/data/allLocations";
import { ArrowRight, MapPin } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function NeighborGrid({ city }: { city: LocationData }) {
    if (!city.neighbors || city.neighbors.length === 0) return null;

    const neighborLocations = city.neighbors
        .map(slug => allLocations.find(l => l.slug === slug))
        .filter((l): l is LocationData => l !== undefined);

    if (neighborLocations.length === 0) return null;

    const neighborNames = neighborLocations.map(n => n.name);
    const namesString = neighborNames.length > 1 
        ? neighborNames.slice(0, -1).join(", ") + " und " + neighborNames.slice(-1)
        : neighborNames[0];

    return (
        <RevealSection className="py-16 md:py-24 bg-white border-b border-[var(--border-subtle)] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-slate-100)] rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="typo-section-heading text-[var(--text-primary)] mb-4">
                        Schlüsseldienst auch in Ihrer Nähe
                    </h2>
                    <p className="typo-body-large text-[var(--text-secondary)] mb-6">
                        Von {city.name} aus sind wir auch schnell in {namesString}. Unser Einsatzgebiet deckt den gesamten Lahn-Dill-Kreis ab.
                    </p>
                    <Link href="/servicegebiet" className="inline-flex items-center gap-2 text-[var(--value-primary)] font-bold hover:underline">
                        Gesamtes Einsatzgebiet ansehen <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto" animation={entryAnimations.slideUpFade}>
                    {neighborLocations.map((neighbor) => (
                        <StaggerItem key={neighbor.id} animation={entryAnimations.slideUpFade}>
                            <Link 
                                href={`/${neighbor.slug}`}
                                className="group flex flex-col justify-between h-full bg-white border border-[var(--border-subtle)] p-6 rounded-2xl shadow-sm hover:shadow-[var(--elevation-2)] hover:-translate-y-1 hover:border-[var(--color-red-100)] transition-all duration-300"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-slate-50)] text-[var(--text-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-red-50)] group-hover:text-[var(--color-red-500)] transition-colors">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--value-primary)] group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="font-bold text-lg text-[var(--text-primary)] mb-1">
                                        {neighbor.name}
                                    </h3>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t border-[var(--color-slate-100)]">
                                    <span className="inline-block px-3 py-1 bg-[var(--color-red-50)] text-[var(--color-red-600)] text-xs font-bold rounded-full border border-[var(--color-red-100)]">
                                        Ca. {neighbor.logistics.drivingTimeMinutes} Min.
                                    </span>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerReveal>
            </div>
        </RevealSection>
    );
}
