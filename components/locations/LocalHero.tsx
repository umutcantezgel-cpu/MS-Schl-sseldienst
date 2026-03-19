"use client";

import { LocationData } from "@/lib/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/trust/TrustBadges";
import { Phone } from "lucide-react";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

interface LocalHeroProps {
    city: LocationData;
}

export default function LocalHero({ city }: LocalHeroProps) {
    const breadcrumbs = [
        { name: "Servicegebiet", href: "/servicegebiet" },
        { name: `Schlüsseldienst ${city.name}`, href: `/${city.slug}` },
    ];

    return (
        <section
            id="hero-section"
            aria-label={`Notfall-Hilfe ${city.name}`}
            className="relative pt-[180px] pb-[100px] lg:pt-[220px] lg:pb-[140px] bg-transparent overflow-hidden border-b border-[var(--border-subtle)]"
        >
            {/* Subtle Background Accent */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-[var(--color-blush-500)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
                <Breadcrumbs items={breadcrumbs} />

                <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
                    <StaggerItem animation={entryAnimations.slideUpFade}>
                        <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-[var(--color-red-50)] text-[var(--color-red-600)] font-bold text-sm md:text-base border border-[var(--color-red-100)] shadow-sm backdrop-blur-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-red-400)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-red-500)]"></span>
                            </span>
                            In ca. {city.logistics.drivingTimeMinutes} Min. bei Ihnen in {city.name}
                        </div>
                    </StaggerItem>
                    
                    <StaggerItem animation={entryAnimations.slideUpFade}>
                        <h1 className="typo-hero-display text-[var(--text-primary)] mb-[var(--space-6)] text-balance max-w-4xl tracking-tight leading-tight">
                            {city.heroVariant ? (
                                <span dangerouslySetInnerHTML={{ __html: city.heroVariant.replace(city.name, `<span class="text-[var(--value-primary)]">${city.name}</span>`) }} />
                            ) : (
                                <>
                                    Schlüsseldienst <span className="text-[var(--value-primary)]">{city.name}</span> — <br className="hidden md:block" />
                                    Türöffnung zum Festpreis | 24/7 Notdienst
                                </>
                            )}
                        </h1>
                    </StaggerItem>
                    
                    <StaggerItem animation={entryAnimations.slideUpFade}>
                        <p className="mx-auto max-w-[700px] text-[18px] sm:text-[20px] text-[var(--text-secondary)] text-center leading-relaxed">
                            {city.content.heroIntro}
                        </p>
                        
                        {/* Optionale hyper-lokale Landmarks Injektion, wenn vorhanden */}
                        {city.localLandmarks && city.localLandmarks.length > 0 && (
                            <p className="mt-3 text-sm text-[var(--text-tertiary)] italic">
                                Schnell vor Ort rund um: {city.localLandmarks.join(", ")}.
                            </p>
                        )}
                    </StaggerItem>
                    
                    <StaggerItem animation={entryAnimations.slideUpFade}>
                        <div className="mt-8 mb-4">
                            <TrustBadges />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <a
                                href="tel:+4964418056544"
                                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--color-red-500)] px-8 py-4 typo-cta-button text-white shadow-[var(--shadow-cta)] transition-all hover:bg-[var(--color-red-600)] hover:shadow-[0_8px_40px_rgba(185,28,28,0.25)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-red-400)] focus-visible:ring-offset-2"
                            >
                                <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
                                <span className="text-xl">Jetzt Anrufen — 06441-8056544</span>
                            </a>
                            <span className="typo-tiny text-[var(--color-charcoal-400)] text-center font-medium">
                                Kostenlos & unverbindlich — Antwort in 30 Min
                            </span>
                        </div>
                    </StaggerItem>
                </StaggerReveal>
            </div>
        </section>
    );
}
