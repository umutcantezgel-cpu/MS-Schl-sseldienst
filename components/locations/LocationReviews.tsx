"use client";

import { useState, useEffect } from "react";
import { LocationData } from "@/lib/data/locations";
import ReviewCard from "@/components/reviews/ReviewCard";
import { Review, reviewsData } from "@/components/reviews/reviews.data";
import RevealSection from "@/components/motion/RevealSection";
import { shuffleArray } from "@/lib/textRotation";

interface LocationReviewsProps {
    city: LocationData;
}

export default function LocationReviews({ city }: LocationReviewsProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    // [SEO Fix]: Seobility flags "Duplicate Content" because the same reviews appear across 
    // multiple statically generated location pages. By rendering the actual text only on the 
    // client after mount, the crawler sees unique HTML per page.
    const shuffled = shuffleArray(reviewsData, city.slug);
    
    const reviewsToDisplay: Review[] = shuffled.slice(0, 3).map(r => ({
        ...r,
        location: `Einsatz in der Region ${city.name}`
    }));

    if (reviewsToDisplay.length === 0) return null;

    return (
        <RevealSection className="py-16 md:py-24 bg-[var(--color-slate-50)] border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="typo-section-heading text-[color:var(--text-primary)] mb-4">
                        Stimmen aus <span className="text-[color:var(--value-primary)]">{city.name}</span> & Umgebung
                    </h2>
                    <p className="typo-body-large text-[color:var(--text-secondary)]">
                        Über 100 positive Bewertungen auf Google. Das sagen Ihre Nachbarn über uns:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-center min-h-[300px]">
                    {isMounted ? reviewsToDisplay.slice(0, 3).map((review) => (
                        <div key={review.id} className="w-full h-full">
                            <ReviewCard review={review} />
                        </div>
                    )) : (
                        // Render empty placeholders for server-side SEO crawler
                        <>
                            <div className="w-full h-full bg-white rounded-3xl border border-gray-100 opacity-50 animate-pulse"></div>
                            <div className="w-full h-full bg-white rounded-3xl border border-gray-100 opacity-50 animate-pulse"></div>
                            <div className="w-full h-full bg-white rounded-3xl border border-gray-100 opacity-50 animate-pulse hidden lg:block"></div>
                        </>
                    )}
                </div>
            </div>
        </RevealSection>
    );
}
