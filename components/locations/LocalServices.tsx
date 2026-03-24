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
                    <Card className="p-8 border border-[var(--border-subtle)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
                        <div className="w-12 h-12 bg-status-success/10 rounded-xl flex items-center justify-center mb-6 border border-status-success/20">
                            {isUrban ? <Building2 className="w-6 h-6 text-status-success" /> : isRural ? <Home className="w-6 h-6 text-status-success" /> : <Check className="w-6 h-6 text-status-success" />}
                        </div>
                        <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-4">
                            {isUrban ? "Wohnungstüren Öffnung" : isRural ? "Haus- & Gartentüren" : "Ohne Schäden öffnen"}
                        </h3>
                        <p className="text-[color:var(--text-secondary)] leading-relaxed line-clamp-3">{city.content.serviceZerstörungsfrei}</p>
                    </Card>
                </StaggerItem>

                {/* Service 2: Frästechnik / Sicherheit */}
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <Card className="p-8 border border-[var(--border-subtle)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
                        <div className="w-12 h-12 bg-status-info/10 rounded-xl flex items-center justify-center mb-6 border border-status-info/20">
                            <ShieldCheck className="w-6 h-6 text-status-info" />
                        </div>
                        <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-4">
                            {isUrban ? "Schließanlagen-Service" : "Spezial-Frästechnik"}
                        </h3>
                        <p className="text-[color:var(--text-secondary)] leading-relaxed line-clamp-3">{city.content.serviceBohren}</p>
                    </Card>
                </StaggerItem>

                {/* Service 3: 24/7 Notdienst */}
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <Card className="p-8 border border-[var(--border-subtle)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
                        <div className="w-12 h-12 bg-[var(--value-icon-bg)] rounded-xl flex items-center justify-center mb-6 border border-[var(--value-icon-bg)] bg-white/80">
                            <Clock className="w-6 h-6 text-[var(--value-icon-color)]" />
                        </div>
                        <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-4">24/7 Notdienst</h3>
                        <p className="text-[color:var(--text-secondary)] leading-relaxed line-clamp-3">{city.content.service247}</p>
                    </Card>
                </StaggerItem>
            </StaggerReveal>
        </section>
    );
}
