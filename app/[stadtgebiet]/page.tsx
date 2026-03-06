import { notFound } from "next/navigation";
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/localData";
import { generateSharedMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyCTA from "@/components/EmergencyCTA";
import HeroCTA from "@/components/HeroCTA";
import TrustBadges from "@/components/trust/TrustBadges";
import PriceCard from "@/components/pricing/PriceCard";
import TrustStrip from "@/components/trust/TrustStrip";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from "@/components/reviews/reviews.data";
import { getFAQSchema } from "@/lib/faqSchema";
import { MapPin, Phone, ShieldCheck, Clock, Check, Star } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
    return getAllCitySlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ stadtgebiet: string }> }) {
    const { stadtgebiet } = await params;
    const city = getCityBySlug(stadtgebiet);

    if (!city) return notFound();

    return generateSharedMetadata({
        title: `Schlüsseldienst ${city.name} | 24/7 Notdienst | in ${city.logistics.drivingTimeMinutes} Min da`,
        description: `Schlüsseldienst ${city.name}: 24/7-Notdienst mit Festpreisen ab ${city.pricing.basePrice}€. Türöffnung in ${city.logistics.drivingTimeMinutes} Minuten in ${city.name} und Umgebung.`,
        path: `/${city.slug}`,
    });
}

export default async function StadtgebietPage({ params }: { params: Promise<{ stadtgebiet: string }> }) {
    const { stadtgebiet } = await params;
    const city = getCityBySlug(stadtgebiet);

    if (!city) {
        notFound();
    }

    const breadcrumbs = [
        { name: "Servicegebiet", href: "/servicegebiet" },
        { name: city.name, href: `/${city.slug}` },
    ];

    // Schema.org for LocalBusiness dynamic per city
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Locksmith",
        "name": `Schlüsseldienst Wetzlar - Einsatzgebiet ${city.name}`,
        "url": `https://schluesseldienst-wetzlar.de/${city.slug}`,
        "telephone": "06441-XXXXXX", // NOTE: Replace with actual phone logic
        "priceRange": "€€",
        "image": "https://schluesseldienst-wetzlar.de/logo.png",
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.latitude,
            "longitude": city.coordinates.longitude
        }
    };

    return (
        <div className="bg-white text-[var(--color-text-primary)] font-sans pt-24 min-h-screen">
            <Script
                id={`schema-city-${city.slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                <Breadcrumbs items={breadcrumbs} />
            </div>

            {/* Hyper-local Hero Section */}
            <section id="hero-section" aria-label={`Notfall-Hilfe ${city.name}`} className="relative bg-white px-[var(--section-px)] py-[var(--section-py)]">
                <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
                    <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-tight">
                        Schlüsseldienst <span className="text-[var(--color-brand)]">{city.name}</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-[600px] text-[18px] text-[var(--color-text-body)] text-center">
                        Ihr zuverlässiger Notdienst für <strong>{city.name}</strong>. Schnelle Anfahrt (<strong className="text-[var(--color-brand)]">{city.logistics.drivingTimeMinutes} Min.</strong>) {city.logistics.routeDescription && ` ${city.logistics.routeDescription}`} Faire Festpreise ab {city.pricing.basePrice}€.
                    </p>
                    <div className="mt-8 mb-2">
                        <TrustBadges />
                    </div>
                    <HeroCTA />
                </div>
            </section>

            <div className="relative -mt-4 mb-16 flex justify-center z-10 w-full px-4">
                <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
            </div>

            <TrustStrip />

            {/* Neighborhoods & Local Context Section */}
            <section className="bg-[var(--color-surface-primary)] px-[var(--section-px)] py-[var(--section-py)]">
                <Card className="mx-auto max-w-4xl p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
                        Einsatzorte in <span className="text-[var(--color-brand)]">{city.name}</span>
                    </h2>
                    <p className="text-[var(--color-text-body)] mb-6">
                        Wir sind regelmäßig im gesamten Stadtgebiet im Einsatz. Zu unseren täglichen Anfahrtsgebieten gehören unter anderem:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {city.neighborhoods.map((hood, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)] text-sm font-semibold text-[var(--color-text-body)] border border-[var(--color-border)]">
                                <MapPin className="h-5 w-5 text-[var(--color-brand)]" aria-hidden="true" />
                                {hood}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 rounded-xl bg-[var(--color-brand-light)] p-6 border border-[var(--color-brand)] border-opacity-20 flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                            <Clock className="h-8 w-8 text-[var(--color-brand)]" aria-hidden="true" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Schnell vor Ort in {city.name}</h3>
                            <p className="text-[var(--color-text-body)] mt-1">
                                Durch unsere strategische Positionierung garantieren wir in der Regel eine Ankunftszeit von 15-30 Minuten im gesamten Stadtgebiet.
                            </p>
                        </div>
                    </div>
                    {city.landmarks && city.landmarks.length > 0 && (
                        <p className="mt-6 text-sm text-[var(--color-text-muted)]">
                            <strong>Lokale Orientierungspunkte:</strong> Häufige Einsätze nahe {city.landmarks.join(", ")}.
                        </p>
                    )}
                </Card>
            </section>

            {/* Localized Pricing Section */}
            <section id="preise" className="bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                            Transparente <span className="text-[var(--color-brand)]">Festpreise</span> für {city.name}
                        </h2>
                        <p className="mt-4 text-lg text-[var(--color-text-body)]">
                            {city.pricing.travelCost === 0
                                ? "Kostenfreie Anfahrt in diesem Servicegebiet."
                                : `Zzgl. günstige ${city.pricing.travelCost}€ Anfahrtspauschale nach ${city.name}.`}
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
                        <PriceCard
                            title="Tür zugefallen"
                            price={city.pricing.basePrice}
                            description="Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen."
                            features={[
                                "Werktags 08-18 Uhr",
                                "Zerstörungsfreie Öffnung (99%)",
                                "Festpreis vor Ort",
                                ...(city.pricing.travelCost === 0 ? ["Inkl. Anfahrt"] : [`+ ${city.pricing.travelCost}€ Anfahrt`])
                            ]}
                            isPopular={true}
                        />
                        <PriceCard
                            title="Tür abgeschlossen"
                            price={city.pricing.basePrice + 30}
                            description="Schlüssel verloren oder doppelt abgeschlossen."
                            features={[
                                "Werktags 08-18 Uhr",
                                "Profi-Werkzeug Einsatz",
                                "Ersatzzylinder zubuchbar (ab 25€)",
                                ...(city.pricing.travelCost === 0 ? ["Inkl. Anfahrt"] : [`+ ${city.pricing.travelCost}€ Anfahrt`])
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <ReviewsSection />

            {/* City-Specific FAQ Section */}
            <section className="bg-white px-[var(--section-px)] py-[var(--section-py)]">
                {city.faqs && city.faqs.length > 0 && (
                    <Script
                        id={`faq-schema-${city.slug}`}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(getFAQSchema(city.faqs)),
                        }}
                    />
                )}
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                            Häufige Fragen zu Einsätzen in <span className="text-[var(--color-brand)]">{city.name}</span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {city.faqs.map((faq, i) => (
                            <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Nearby Territories Links */}
            <section className="bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)] border-t border-[var(--color-border)]">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
                        Einsatzgebiete in der Nähe
                    </h2>
                    <nav aria-label="Benachbarte Einsatzgebiete" className="flex flex-wrap justify-center gap-3">
                        {cities.filter(c => c.slug !== city.slug && c.logistics.distanceFromHQ <= city.logistics.distanceFromHQ + 10).slice(0, 8).map(c => (
                            <Link key={c.id} href={`/${c.slug}`} className="text-[var(--color-text-body)] hover:text-[var(--color-brand)] text-sm underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-brand)] transition-colors">
                                Schlüsseldienst {c.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </section>

            <div className="mt-8">
                <EmergencyCTA />
            </div>
        </div>
    );
}
