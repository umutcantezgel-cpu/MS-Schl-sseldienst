import { LocationData } from "@/lib/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/trust/TrustBadges";
import { Phone } from "lucide-react";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { pickVariant } from "@/lib/textRotation";

const keywordVariants = [
    (name: string) => `Zusammenfassung: Als zertifizierter Schlüsseldienst für ${name} garantieren wir eine professionelle Türöffnung zum Festpreis. Wir sind als 24/7 Notdienst rund um die Uhr verfügbar.`,
    (name: string) => `Ihr Schlüsseldienst in ${name}: Professionelle Türöffnung ohne Beschädigungen, faire Festpreise und ein 24/7 Notdienst, der wirklich rund um die Uhr erreichbar ist.`,
    (name: string) => `MS Schlüsseldienst ${name} — Ihre lokale Anlaufstelle für Türöffnungen, Schlosswechsel und Einbruchschutz. Zum garantierten Festpreis, 24 Stunden am Tag.`,
    (name: string) => `Schlüsseldienst ${name}: Wir öffnen Ihre Tür schnell, sauber und zum vereinbarten Festpreis. Unser 24/7 Notdienst steht Ihnen jederzeit zur Verfügung.`,
    (name: string) => `Notfall-Schlüsseldienst für ${name} und Umgebung. Festpreis-Garantie bei jeder Türöffnung. Tag und Nacht für Sie im Einsatz als zuverlässiger 24/7 Notdienst.`,
];

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
            className="relative min-h-[100svh] min-h-[100dvh] lg:min-h-[80vh] flex items-center pt-[100px] pb-8 sm:pt-[140px] lg:pt-[200px] sm:pb-[100px] lg:pb-[140px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden"
        >
            {/* CSS Noise Texture */}
            <div
                className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px 200px",
                }}
            />
            {/* Glow */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
                }}
            />

            <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
                <Breadcrumbs items={breadcrumbs} light={false} />

                <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
                    <StaggerItem animation={entryAnimations.slideUpFade}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-[color:var(--text-secondary)] text-[14px] font-medium tracking-wide">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-red-400)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-red-500)]"></span>
                            </span>
                            In ca. {city.logistics.drivingTimeMinutes} Min. bei Ihnen in {city.name}
                        </div>
                    </StaggerItem>
                    
                    <StaggerItem animation={entryAnimations.slideUpFade}>
                        <h1 className="typo-hero-display text-[color:var(--text-primary)] mb-2 sm:mb-[var(--space-6)] text-balance max-w-5xl tracking-tighter font-extrabold leading-[1.05] text-[32px] sm:text-[48px] md:text-[64px]">
                            {city.heroVariant ? (
                                <span dangerouslySetInnerHTML={{ __html: city.heroVariant.replace(city.name, `<span class="text-[color:var(--value-primary)]">${city.name}</span>`) }} />
                            ) : (
                                <>
                                    Schlüsseldienst <span className="text-[color:var(--value-primary)]">{city.name}</span> — <br className="hidden md:block" />
                                    Türöffnung zum Festpreis | 24/7 Notdienst
                                </>
                            )}
                        </h1>
                    </StaggerItem>
                    
                    <StaggerItem animation={entryAnimations.slideUpFade}>
                        <p className="mx-auto max-w-prose text-[15px] sm:text-xl text-[color:var(--text-secondary)] text-center text-balance leading-snug sm:leading-relaxed mb-4 sm:mb-8">
                            {city.content.heroIntro}
                        </p>
                        
                        {/* Optionale hyper-lokale Landmarks Injektion, wenn vorhanden */}
                        {city.localLandmarks && city.localLandmarks.length > 0 && (
                            <p className="mt-3 text-sm text-[color:var(--text-tertiary)] italic tracking-wide">
                                Schnell vor Ort rund um: {city.localLandmarks.join(", ")}
                            </p>
                        )}
                        {/* SEO Check Fix: Ensure H1 Keywords are visibly present in text */}
                        <p className="mt-2 text-xs md:text-sm text-[color:var(--text-tertiary)]/70 max-w-2xl text-center leading-relaxed font-light mx-auto">
                            {pickVariant(keywordVariants, city.slug)(city.name)}
                        </p>
                    </StaggerItem>
                    
                    <StaggerItem animation={entryAnimations.slideUpFade}>
                        <div className="mt-4 sm:mt-12 mb-4 sm:mb-6">
                            <TrustBadges />
                        </div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <a
                                href="tel:+4964418056279"
                                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-xl sm:rounded-full bg-[var(--color-red-500)] px-6 sm:px-10 py-3 sm:py-5 typo-cta-button text-white shadow-[var(--shadow-cta)] transition-all hover:bg-[var(--color-red-600)] hover:shadow-[var(--shadow-brand-3)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-red-400)] focus-visible:ring-offset-2 w-full sm:w-auto"
                            >
                                <Phone className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:rotate-12" />
                                <span className="text-[16px] sm:text-xl tracking-tight">Jetzt Anrufen — 06441-8056279</span>
                            </a>
                            <span className="typo-tiny text-[color:var(--text-tertiary)] text-center font-medium tracking-wide uppercase mt-2">
                                Kostenlos & unverbindlich — Antwort in 30 Min
                            </span>
                        </div>
                    </StaggerItem>
                </StaggerReveal>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-transparent pointer-events-none z-[1]" />
        </section>
    );
}
