"use client";

import { LocationData } from "@/lib/data/locations";
import ReviewCard from "@/components/reviews/ReviewCard";
import { Review, reviewsData } from "@/components/reviews/reviews.data";
import RevealSection from "@/components/motion/RevealSection";

interface LocationReviewsProps {
    city: LocationData;
}

export default function LocationReviews({ city }: LocationReviewsProps) {
    // 1. Prio: Echte, im Datensatz hinterlegte Hyper-Lokale Bewertungen
    let reviewsToDisplay: Review[] = [];

    if (city.localTestimonials && city.localTestimonials.length > 0) {
        reviewsToDisplay = city.localTestimonials.map((t, index) => ({
            id: `local-${city.id}-${index}`,
            authorName: t.name,
            rating: t.rating,
            text: t.quote,
            date: "Vor Kurzem", // Oder ein Datum, wenn verfügbar
            location: city.name,
            source: "Google", 
        }));
    } else {
        // 2. Prio: Fallback auf allgemeine Top-Bewertungen, aber mit lokalem Kontext
        // (Wir nehmen einfach die besten 3 und labeln sie "Einsatz in der Region")
        reviewsToDisplay = reviewsData.slice(0, 3).map(r => ({
            ...r,
            location: `Einsatz in der Region ${city.name}`
        }));
    }

    if (reviewsToDisplay.length === 0) return null;

    return (
        <RevealSection className="py-16 md:py-24 bg-[var(--color-slate-50)] border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="typo-section-heading text-[var(--text-primary)] mb-4">
                        Stimmen aus <span className="text-[var(--value-primary)]">{city.name}</span> & Umgebung
                    </h2>
                    <p className="typo-body-large text-[var(--text-secondary)]">
                        Über 100 positive Bewertungen auf Google. Das sagen Ihre Nachbarn über uns:
                    </p>
                </div>

                {/* Using grid instead of horizontal scroll for 2-3 specific cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-center">
                    {reviewsToDisplay.slice(0, 3).map((review) => (
                        <div key={review.id} className="w-full h-full">
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </div>
        </RevealSection>
    );
}
