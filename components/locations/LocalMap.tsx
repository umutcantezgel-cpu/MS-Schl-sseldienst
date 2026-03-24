import { LocationData } from "@/lib/data/locations";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { MapPin } from "lucide-react";

export default function LocalMap({ city }: { city: LocationData }) {
    // Falls mapConfig.style existiert, könnte das genutzt werden, 
    // hier defaulten wir auf Google Maps Iframe für schnelle Ladezeit ohne API Key für den MVP.
    const zoom = city.mapConfig?.zoom || 13;
    const lat = city.coordinates.latitude;
    const lng = city.coordinates.longitude;
    const q = city.name.replace(' ', '+');

    return (
        <section aria-label={`Karte Einsatzgebiet ${city.name}`} className="bg-transparent relative px-[var(--section-px)] py-[var(--section-py)]">
            <StaggerReveal className="mx-auto max-w-6xl relative z-10" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <div className="text-center mb-10">
                        <h2 className="typo-h2 text-[color:var(--text-primary)] flex items-center justify-center gap-3">
                            <MapPin className="text-[var(--color-red-500)] w-8 h-8" />
                            Einsatzgebiet <span className="text-[color:var(--value-primary)]">{city.name}</span>
                        </h2>
                        <p className="mt-4 text-[18px] text-[color:var(--text-secondary)] font-medium">
                            Unser Monteur ist lokal verwurzelt und erreicht Sie in der Regel in unter {city.logistics.drivingTimeMinutes} Minuten.
                        </p>
                    </div>
                </StaggerItem>
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-[var(--border-subtle)] h-[400px] md:h-[500px] bg-[var(--color-charcoal-50)] relative">
                        {/* Wir nutzen eine standard Google Maps iFrame Lösung. Bei Ausbau in Phase 3+ kann hier MapboxGL eingebunden werden */}
                        <iframe
                            title={`Karte von ${city.name}`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://maps.google.com/maps?q=${lat},${lng}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
                        ></iframe>
                    </div>
                </StaggerItem>
            </StaggerReveal>
        </section>
    );
}
