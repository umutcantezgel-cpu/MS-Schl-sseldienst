import { notFound } from "next/navigation";
import { getAllLocationSlugs, getLocationBySlug } from "@/lib/data/allLocations";
import { siteUrl } from "@/lib/schema";
import { generateSharedMetadata } from "@/lib/metadata";
import { aggregateRating } from "@/components/reviews/reviews.data";
import { getFAQSchema } from "@/lib/faqSchema";
import Script from "next/script";

// Modulare High-Performance Local-Components (12-Sektionen 10x Expansion)
import LocalHero from "@/components/locations/LocalHero";
import LocalTrustSignals from "@/components/locations/LocalTrustSignals";
import RouteVisualization from "@/components/locations/RouteVisualization";
import LocalPricing from "@/components/locations/LocalPricing";
import LocationScenarios from "@/components/locations/LocationScenarios";
import LocationAbout from "@/components/locations/LocationAbout";
import LocationServices from "@/components/locations/LocationServices";
import LocalFAQ from "@/components/locations/LocalFAQ";
import LocationReviews from "@/components/locations/LocationReviews";
import NeighborGrid from "@/components/locations/NeighborGrid";
import LocationContact from "@/components/locations/LocationContact";
import LocationFinalCTA from "@/components/locations/LocationFinalCTA";

export function generateStaticParams() {
  return getAllLocationSlugs().map(slug => ({ stadtgebiet: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stadtgebiet: string }> }) {
  const { stadtgebiet } = await params;
  const city = getLocationBySlug(stadtgebiet);

  if (!city) return notFound();

  const baseMeta = generateSharedMetadata({
    title: city.seo.metaTitle,
    description: city.seo.metaDescription,
    path: `/${city.slug}`,
  });

  const ogUrl = `/api/og?title=${encodeURIComponent(`Schlüsseldienst ${city.name}`)}&time=${city.logistics.drivingTimeMinutes}`;

  return {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `Schlüsseldienst ${city.name} — In ${city.logistics.drivingTimeMinutes} Min vor Ort`,
        },
      ],
    },
    twitter: {
      ...baseMeta.twitter,
      images: [ogUrl],
    },
  };
}

export default async function StadtgebietPage({ params }: { params: Promise<{ stadtgebiet: string }> }) {
  const { stadtgebiet } = await params;
  const city = getLocationBySlug(stadtgebiet);

  if (!city) {
    notFound();
  }

  // Dynamische Bild-URL für OG und Schema
  const ogUrl = `${siteUrl}/api/og?title=${encodeURIComponent(`Schlüsseldienst ${city.name}`)}&time=${city.logistics.drivingTimeMinutes}`;

  // Schema.org — Stadtspezifisches LocalBusiness (vollständig, Rich-Results-ready)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": `MS Schlüsseldienst ${city.name}`,
    "url": `${siteUrl}/${city.slug}`,
    "telephone": ["+4964418056544", "+491782471037"],
    "email": "info@sd-wetzlar.de",
    "priceRange": "ab 99€",
    "image": ogUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "Hessen",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.latitude,
      "longitude": city.coordinates.longitude
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue.toString(),
      "reviewCount": aggregateRating.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "parentOrganization": {
      "@type": "Locksmith",
      "@id": `${siteUrl}/#localbusiness`,
      "name": "MS Schlüsseldienst Wetzlar",
      "url": siteUrl
    }
  };

  return (
    <div className="bg-transparent text-[color:var(--text-primary)] font-sans min-h-screen">
      <Script
        id={`schema-city-${city.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {city.faqs && city.faqs.length > 0 && (
        <Script
          id={`faq-schema-${city.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema(city.faqs)),
          }}
        />
      )}

      {/* Die 10x Expanded 12-Sektionen Architektur */}
      {/* Sektion 1 & 2 */}
      <LocalHero city={city} />
      <LocalTrustSignals city={city} />
      
      {/* Sektion 3 */}
      <RouteVisualization city={city} />
      
      {/* Sektion 4 */}
      <LocalPricing city={city} />
      
      {/* Sektion 5 */}
      <LocationScenarios city={city} />
      
      {/* Sektion 6 */}
      <LocationAbout city={city} />
      
      {/* Sektion 7 */}
      <LocationServices city={city} />
      
      {/* Sektion 8 */}
      <LocalFAQ city={city} />
      
      {/* Sektion 9 */}
      <LocationReviews city={city} />
      
      {/* Sektion 10 */}
      <NeighborGrid city={city} />
      
      {/* Sektion 11 */}
      <LocationContact city={city} />
      
      {/* Sektion 12 (Final CTA) */}
      <LocationFinalCTA city={city} />
    </div>
  );
}
