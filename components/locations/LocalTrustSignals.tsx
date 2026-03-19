import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import TrustStrip from "@/components/trust/TrustStrip";
import { aggregateRating } from "@/components/reviews/reviews.data";
import { LocationData } from "@/lib/data/locations";

interface LocalTrustSignalsProps {
    city: LocationData;
}

export default function LocalTrustSignals({ city }: LocalTrustSignalsProps) {
    return (
        <div className="relative z-20 w-full px-[var(--space-4)] -mt-[72px] lg:-mt-[96px] flex flex-col items-center gap-[var(--space-6)] pointer-events-none mb-16">
            <aside aria-label={`Google-Bewertungen für Schlüsseldienst ${city.name}`} className="pointer-events-auto">
                <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
            </aside>

            {/* Hyper-Lokale Trust-Signale */}
            {city.routeDescription && (
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[var(--color-charcoal-500)] pointer-events-auto bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-[var(--border-subtle)] shadow-sm">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--value-primary)]"></span>
                        Anfahrt aus Wetzlar {city.routeDescription}
                    </span>
                    <span className="hidden sm:block text-[var(--border-subtle)]">|</span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--value-primary)]"></span>
                        {city.fareInfo || "Festpreis ab 99€"}
                    </span>
                </div>
            )}

            <div className="w-full pointer-events-auto px-2 mt-4">
                <TrustStrip />
            </div>
            
            {/* Ortsspezifischer Trust-Injector */}
            {city.localTestimonials && city.localTestimonials.length > 0 && (
                <div className="mt-8 pointer-events-auto flex flex-wrap justify-center gap-4">
                    {city.localTestimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm border border-[var(--border-subtle)] max-w-sm">
                            <div className="flex text-[var(--value-primary)] mb-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-[var(--text-secondary)] italic">"{testimonial.quote}"</p>
                            <p className="text-xs font-bold text-[var(--text-primary)] mt-2">— {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
