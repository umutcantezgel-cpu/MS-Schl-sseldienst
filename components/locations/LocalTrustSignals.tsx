"use client";

import { LocationData } from "@/lib/data/locations";

interface LocalTrustSignalsProps {
    city: LocationData;
}

export default function LocalTrustSignals({ city }: LocalTrustSignalsProps) {
    if (!city.routeDescription && (!city.localTestimonials || city.localTestimonials.length === 0)) {
        return null;
    }

    return (
        <section className="relative z-20 w-full px-4 sm:px-[var(--space-4)] flex flex-col items-center gap-[var(--space-6)] mb-12 sm:mb-24 mt-0 sm:-mt-8">
            {/* Hyper-Lokale Trust-Signale */}
            {city.routeDescription && (
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-medium text-[color:var(--color-charcoal-600)] bg-white/80 backdrop-blur-md px-4 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-full border border-[var(--border-subtle)] shadow-sm max-w-[95vw]">
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
            
            {/* Ortsspezifischer Trust-Injector */}
            {city.localTestimonials && city.localTestimonials.length > 0 && (
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 w-full">
                    {city.localTestimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white/90 backdrop-blur-xl p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-[var(--elevation-1)] border border-[var(--border-subtle)] max-w-md w-full sm:w-auto">
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
        </section>
    );
}
