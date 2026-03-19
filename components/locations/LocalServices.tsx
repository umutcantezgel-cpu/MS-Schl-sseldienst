"use client";

import { LocationData } from "@/lib/data/locations";
import { Card } from "@/components/ui/card";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { Check, ShieldCheck, Clock, Building2, Home } from "lucide-react";

export default function LocalServices({ city }: { city: LocationData }) {
    // Falls demographicFocus vorhanden ist, variieren wir das Icon oder die Headline slightly
    const isUrban = city.demographicsFocus === "urban";
    const isRural = city.demographicsFocus === "rural";

    return (
        <section aria-labelledby="services-heading" className="bg-transparent px-[var(--section-px)] pb-[var(--section-py)] relative">
            <h2 id="services-heading" className="sr-only">Unsere Services in {city.name}</h2>
            <StaggerReveal className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
                {/* Service 1: Türöffnung */}
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <Card className="p-8 border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 border border-green-100">
                            {isUrban ? <Building2 className="w-6 h-6 text-green-600" /> : isRural ? <Home className="w-6 h-6 text-green-600" /> : <Check className="w-6 h-6 text-green-600" />}
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                            {isUrban ? "Wohnungstüren Öffnung" : isRural ? "Haus- & Gartentüren" : "Ohne Schäden öffnen"}
                        </h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed">{city.content.serviceZerstörungsfrei}</p>
                    </Card>
                </StaggerItem>

                {/* Service 2: Frästechnik / Sicherheit */}
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <Card className="p-8 border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                            {isUrban ? "Schließanlagen-Service" : "Spezial-Frästechnik"}
                        </h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed">{city.content.serviceBohren}</p>
                    </Card>
                </StaggerItem>

                {/* Service 3: 24/7 Notdienst */}
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <Card className="p-8 border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
                        <div className="w-12 h-12 bg-[var(--value-icon-bg)] rounded-xl flex items-center justify-center mb-6 border border-[var(--value-icon-bg)] bg-white/80">
                            <Clock className="w-6 h-6 text-[var(--value-icon-color)]" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">24/7 Notdienst</h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed">{city.content.service247}</p>
                    </Card>
                </StaggerItem>
            </StaggerReveal>
        </section>
    );
}
