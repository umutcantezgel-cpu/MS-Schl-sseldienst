import { Phone, ArrowRight, ShieldCheck, MapPin, Euro, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { featureCardStagger } from "@/lib/motion";
import { aggregateRating } from "@/components/reviews/reviews.data";

export default function HeroSection() {
    return (
        <section id="hero-section" aria-label="Notfall-Hilfe" className="relative min-h-[90vh] lg:min-h-[85vh] w-full flex items-center justify-center overflow-hidden pt-[var(--space-20)] lg:pt-0">

            {/* --- Hintergrund-Schichten (Prompt 1.4) --- */}
            {/* Schicht 1: Base Color */}
            <div className="absolute inset-0 hero-bg-layer-1 z-0" />

            {/* Schicht 2: Image (15% Opacity, mix-blend-overlay) - Platzhalter falls kein Bild vorhanden */}
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay opacity-80 z-0">
                {/* Hier könnte ein echtes Next/Image rein, wenn vorhanden */}
            </div>

            {/* Schicht 3: Gradient */}
            <div className="absolute inset-0 hero-bg-layer-3 z-[1]" />

            {/* Schicht 4: Geometrisches Muster */}
            <div className="absolute inset-0 hero-bg-layer-4 opacity-50 z-[2]" />

            {/* Schicht 5: Bottom-Fade für weichen Übergang */}
            <div className="absolute bottom-0 left-0 right-0 h-48 hero-bg-layer-5 z-[5]" />


            {/* --- Content Container (Dual-Panel) --- */}
            <div className="container relative z-[10] mx-auto px-[var(--space-4)] md:px-[var(--space-8)] h-full flex items-center">
                <div className="grid lg:grid-cols-12 gap-[var(--space-8)] lg:gap-[var(--space-12)] w-full py-[var(--space-12)]">

                    {/* Linkes Panel (60%) */}
                    <div className="lg:col-span-7 flex flex-col justify-center gap-[var(--space-6)] text-[var(--color-hero-text)]">

                        {/* Notfall-Badge (Prompt 1.1) */}
                        <div className="flex">
                            <Badge variant="hero" className="pl-1.5 py-1.5">
                                <span className="relative flex h-3 w-3 mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                Aktuell 1 Monteur in Wetzlar verfügbar
                            </Badge>
                        </div>

                        {/* Headline */}
                        <h1 className="text-hierarchy-1 text-white text-balance">
                            Ausgesperrt? <br className="hidden sm:block" />
                            Wir sind in <span className="text-[var(--color-brand)]">20 Min.</span> bei Ihnen.
                        </h1>

                        <p className="text-hierarchy-4 text-white/80">
                            Lokaler Schlüsseldienst für Wetzlar & Umgebung. Zerstörungsfreie Öffnung zum transparenten Festpreis – ohne versteckte Kosten.
                        </p>

                        {/* Schnell-Navigations-Links (Prompt 1.6) */}
                        <div className="flex flex-wrap items-center gap-[var(--space-2)] text-[var(--typo-micro-size)] font-medium">
                            <a href="#preise" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white">Festpreise ab 50€</a>
                            <a href="#leistungen" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white">Tür- & Autoöffnung</a>
                            <a href="#bewertungen" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white">5.0 Sterne Rating</a>
                        </div>

                        {/* CTA Area */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-[var(--space-4)] w-full sm:w-auto mt-[var(--space-2)]">
                            <a
                                href="tel:+4964418056544"
                                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto h-[64px] animate-heartbeat-cta shadow-[var(--shadow-brand-glow)] text-[var(--font-size-20)]")}
                            >
                                <Phone className="h-6 w-6 mr-2" />
                                06441 8056544
                            </a>
                            <a
                                href="#preise"
                                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "w-full sm:w-auto h-[64px]")}
                            >
                                Preise ansehen <ArrowRight className="h-5 w-5 ml-2" />
                            </a>
                        </div>

                        {/* Social Proof Badge (Prompt 1.3) */}
                        <a href="#bewertungen" className="flex items-center gap-[var(--space-3)] mt-[var(--space-4)] hover:opacity-80 transition-opacity p-2 rounded-lg hover:bg-white/5 w-fit">
                            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 shrink-0">
                                {/* Google "G" SVG Placeholder */}
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="font-bold ml-1">{aggregateRating.ratingValue.toFixed(1)}</span>
                                </div>
                                <span className="text-[var(--font-size-13)] opacity-80">
                                    Basierend auf {aggregateRating.reviewCount} Kundenbewertungen
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Rechtes Panel (40%) - Feature Cards (Prompt 1.1 + 1.5) */}
                    <div className="lg:col-span-5 flex flex-col justify-center gap-[var(--space-4)] mt-[var(--space-8)] lg:mt-0 relative z-[10]">
                        <StaggerReveal staggerDelay={0.12} className="flex flex-col gap-[var(--space-4)]">
                            {/* Card 1 */}
                            <StaggerItem animation={featureCardStagger}>
                                <div className="glass-panel p-[var(--space-4)] rounded-[var(--radius-16)] flex items-start gap-[var(--space-4)] hover:bg-white/20 transition-all duration-[var(--duration-300)] ease-out border border-white/10 hover:-translate-y-1">
                                    <div className="flex items-center justify-center bg-[var(--color-brand)] text-white w-12 h-12 rounded-[var(--radius-8)] shrink-0">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-[var(--font-size-16)] mb-1">Zerstörungsfreie Öffnung</h3>
                                        <p className="text-white/70 text-[var(--font-size-14)]">In 99% der Fälle öffnen wir zugefallene Türen komplett ohne Beschädigung an Schloss oder Zylinder.</p>
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Card 2 */}
                            <StaggerItem animation={featureCardStagger}>
                                <div className="glass-panel p-[var(--space-4)] rounded-[var(--radius-16)] flex items-start gap-[var(--space-4)] hover:bg-white/20 transition-all duration-[var(--duration-300)] ease-out border border-white/10 hover:-translate-y-1">
                                    <div className="flex items-center justify-center bg-[var(--color-brand)] text-white w-12 h-12 rounded-[var(--radius-8)] shrink-0">
                                        <Euro className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-[var(--font-size-16)] mb-1">Garantiert 100% Festpreis</h3>
                                        <p className="text-white/70 text-[var(--font-size-14)]">Wir nennen Ihnen unseren fairen Festpreis verbindlich vor der Anfahrt am Telefon. Keine Ausnahmen.</p>
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Card 3 */}
                            <StaggerItem animation={featureCardStagger}>
                                <div className="glass-panel p-[var(--space-4)] rounded-[var(--radius-16)] flex items-start gap-[var(--space-4)] hover:bg-white/20 transition-all duration-[var(--duration-300)] ease-out border border-white/10 hover:-translate-y-1">
                                    <div className="flex items-center justify-center bg-[var(--color-brand)] text-white w-12 h-12 rounded-[var(--radius-8)] shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-[var(--font-size-16)] mb-1">Regionaler Meisterbetrieb</h3>
                                        <p className="text-white/70 text-[var(--font-size-14)]">Kein Callcenter. Sie sprechen direkt mit dem Monteur, der aus Wetzlar zu Ihnen aufbricht.</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggerReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
