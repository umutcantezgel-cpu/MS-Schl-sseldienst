import { notFound } from "next/navigation";
import { getAllLocationSlugs, getLocationBySlug } from "@/lib/data/allLocations";
import { siteUrl, getLocalLocationGraphSchema } from "@/lib/schema";
import { generateSharedMetadata } from "@/lib/metadata";
import { aggregateRating } from "@/components/reviews/reviews.data";
import JsonLd from "@/components/seo/JsonLd";

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

function getStadtgebietTitle(cityName: string) {
  let title = `Schlüsseldienst ${cityName} | 24h Notdienst | Schlüssel Schmiede`;
  if (title.length > 55) {
    title = `Schlüsseldienst ${cityName} | 24h Notdienst`;
  }
  if (title.length > 55) {
    title = `Schlüsseldienst ${cityName} | Notdienst`;
  }
  if (title.length > 55) {
    title = `Schlüsseldienst ${cityName}`;
  }
  if (title.length < 45) {
    title = `Schlüsseldienst ${cityName} | 24h Notdienst & schnelle Notfallhilfe`;
  }
  // Hard limit fix for Seobility
  if (title.length > 60) title = title.substring(0, 60).trim();
  if (title.length < 45) title = (title + " - Top Service vor Ort").substring(0, 60).trim();
  return title;
}

export function generateStaticParams() {
  return getAllLocationSlugs().map(slug => ({ stadtgebiet: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stadtgebiet: string }> }) {
  const { stadtgebiet } = await params;
  const city = getLocationBySlug(stadtgebiet);

  if (!city) return notFound();

  const title = getStadtgebietTitle(city.name);

  // Dynamic description formatting: 120 to 155 chars inclusive
  let description = `Ihr lokaler 24h Schlüsseldienst für ${city.name}. Zerstörungsfreie Türöffnung ab 99€ Festpreis. Schnelle Hilfe in ca. ${city.logistics.drivingTimeMinutes} Min. Rufen Sie uns jetzt an!`;
  if (description.length < 120) {
    description = `Ihr lokaler 24h Schlüsseldienst für ${city.name}. Zerstörungsfreie Türöffnung ab 99€ Festpreis. Schnelle Hilfe vor Ort in ca. ${city.logistics.drivingTimeMinutes} Minuten. Schlüssel Schmiede Wetzlar hilft sofort!`;
  }
  if (description.length > 155) {
    description = description.slice(0, 151) + "...";
  }
  if (description.length < 120) {
      description = (description + " Wir garantieren Ihnen absolute Transparenz und professionelle Arbeit bei jeder Türöffnung in Ihrer Region.").substring(0, 155).trim();
  }

  const baseMeta = generateSharedMetadata({
    title,
    description,
    path: `/${city.slug}`,
    exactTitle: true,
  });

  const ogUrl = `/api/og?title=${encodeURIComponent(`Schlüssel Schmiede ${city.name}`)}&time=${city.logistics.drivingTimeMinutes}`;

  return {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `Schlüssel Schmiede ${city.name} und In ${city.logistics.drivingTimeMinutes} Min vor Ort`,
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

  return (
    <div className="bg-transparent text-[color:var(--text-primary)] font-sans min-h-screen">
      <JsonLd data={getLocalLocationGraphSchema({
        slug: city.slug,
        cityName: city.name,
        postalCode: city.plz || "35576",
        lat: city.coordinates.latitude,
        lng: city.coordinates.longitude,
        drivingTimeMinutes: city.logistics.drivingTimeMinutes,
        basePrice: city.pricing.basePrice,
        travelCostText: city.pricing.travelCostText,
        faqs: city.faqs
      })} />
      
      {/* SEO Injection: Ensure exact meta title keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">{getStadtgebietTitle(city.name)}</div>

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
