"use client";

import { useEffect, useState } from "react";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import TrustStrip from "@/components/trust/TrustStrip";
import { aggregateRating } from "@/components/reviews/reviews.data";
import { LocationData } from "@/lib/data/locations";

interface LocalTrustSignalsProps {
    city: LocationData;
}

export default function LocalTrustSignals({ city }: LocalTrustSignalsProps) {
    const [liveRating, setLiveRating] = useState(aggregateRating);

    useEffect(() => {
        fetch('/api/reviews')
            .then(res => res.json())
            .then(data => {
                if (data && data.reviewCount) setLiveRating(data);
            })
            .catch(err => console.error("Failed to fetch live reviews:", err));
    }, []);
    return (
        <div className="relative z-20 w-full px-[var(--space-4)] -mt-[88px] lg:-mt-[120px] flex flex-col items-center gap-[var(--space-6)] pointer-events-none mb-24">
            <aside aria-label={`Google-Bewertungen für Schlüsseldienst ${city.name}`} className="pointer-events-auto">
                <GoogleReviewsBadge rating={liveRating.ratingValue} count={liveRating.reviewCount} />
            </aside>

            {/* Hyper-Lokale Trust-Signale */}
            {city.routeDescription && (
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base font-medium text-[color:var(--color-charcoal-600)] pointer-events-auto bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-[var(--border-subtle)] shadow-sm">
                    <span className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--value-primary)]"></span>
                        Anfahrt aus Wetzlar {city.routeDescription}
                    </span>
                    <span className="hidden sm:block text-[var(--border-subtle)]">|</span>
                    <span className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--value-primary)]"></span>
                        {city.fareInfo || "Festpreis ab 99€"}
                    </span>
                </div>
            )}

            <div className="w-full pointer-events-auto px-4 mt-6">
                <TrustStrip />
            </div>
            
            {/* Ortsspezifischer Trust-Injector */}
            {city.localTestimonials && city.localTestimonials.length > 0 && (
                <div className="mt-12 pointer-events-auto flex flex-wrap justify-center gap-6">
                    {city.localTestimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[var(--elevation-1)] border border-[var(--border-subtle)] max-w-md">
                            <div className="flex text-[color:var(--value-primary)] mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg aria-hidden="true" key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-base md:text-lg font-medium text-[color:var(--text-secondary)] leading-relaxed italic mb-4">&quot;{testimonial.quote}&quot;</p>
                            <p className="text-sm font-bold text-[color:var(--color-charcoal-900)] tracking-wide uppercase">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
