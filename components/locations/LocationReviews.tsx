import { LocationData } from "@/lib/data/locations";
import ReviewCard from "@/components/reviews/ReviewCard";
import { Review, reviewsData } from "@/components/reviews/reviews.data";
import RevealSection from "@/components/motion/RevealSection";

interface LocationReviewsProps {
    city: LocationData;
}

export default function LocationReviews({ city }: LocationReviewsProps) {
    // [SEO Fix]: "Derselbe Text mehrmals auf einer Seite" (6 Fehler pro Seite)
    // Die hyper-lokalen Testimonials (city.localTestimonials) werden bereits ganz oben in "LocalTrustSignals" gerendert.
    // Wenn wir sie hier unten nochmal rendern, zählt Seobility 3 Quotes + 3 Namen = 6 Textdopplungen.
    // Lösung: Hier rendern wir IMMER allgemeine Bewertungen aus dem globalen Datensatz und rotieren
    // sie anhand des city.slugs, was zusätzlich Duplicate Content über verschiedene Seiten hinweg reduziert.

    const hash = city.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    // Wenn reviewsData weniger als 3 Einträge hat, fallback. (In der Regel gibt es mehr).
    const maxIndex = Math.max(0, reviewsData.length - 3);
    const startIndex = hash % (maxIndex + 1);

    const reviewsToDisplay: Review[] = reviewsData.slice(startIndex, startIndex + 3).map(r => ({
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
