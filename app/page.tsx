import { generateSharedMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/trust/TrustStrip";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from "@/components/reviews/reviews.data";
import FinalCTA from "@/components/ui/FinalCTA";
import nextDynamic from "next/dynamic";


import JsonLd from "@/components/seo/JsonLd";
import { createOrganizationSchema, createLocalBusinessSchema, createWebsiteSchema } from "@/lib/seo/jsonld";
import { getAllTestimonials } from "@/lib/data/testimonials";

// ── [PERF] Below-the-fold sections: lazy-loaded to slash Main Thread work, TBT & Speed Index ──
const PricingSection = nextDynamic(() => import("@/components/sections/home/PricingSection").then(mod => mod.PricingSection), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[500px]" role="status" aria-label="Preise werden geladen" />,
});
const ServicesSection = nextDynamic(() => import("@/components/sections/home/ServicesSection"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[400px]" role="status" aria-label="Leistungen werden geladen" />,
});
const WhyUsSection = nextDynamic(() => import("@/components/sections/home/WhyUsSection"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[350px]" role="status" aria-label="Vorteile werden geladen" />,
});
const TrustMetricsSection = nextDynamic(() => import("@/components/sections/home/TrustMetricsSection"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[200px]" role="status" aria-label="Kennzahlen werden geladen" />,
});
const WerkstattImageSection = nextDynamic(() => import("@/components/sections/home/WerkstattImageSection"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[400px]" role="status" aria-label="Werkstatt wird geladen" />,
});
const FAQSection = nextDynamic(() => import("@/components/sections/home/FAQSection"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[300px]" role="status" aria-label="FAQ werden geladen" />,
});
const SeoContentSection = nextDynamic(() => import("@/components/sections/home/SeoContentSection"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[250px]" role="status" aria-label="Inhalte werden geladen" />,
});

const InteractiveMapSection = nextDynamic(() => import("@/components/sections/home/InteractiveMapSection"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[600px]" role="status" aria-label="Karte wird geladen" />,
});
const ContactSection = nextDynamic(() => import("@/components/sections/home/ContactSection"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[500px]" role="status" aria-label="Kontaktformular wird geladen" />,
});
import { getHomepageFAQs } from "@/lib/faqData";
import { getFAQSchema } from "@/lib/schema";

const PersonalizedHero = nextDynamic(() => import("@/components/growth/PersonalizedHero"));
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
const TestimonialCarousel = nextDynamic(() => import("@/components/sections/TestimonialCarousel").then(mod => mod.TestimonialCarousel), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-xl" role="status" aria-label="Bewertungen werden geladen" />,
});
const ProcessSteps = nextDynamic(() => import("@/components/trust/ProcessSteps"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-64 rounded-xl" role="status" aria-label="Ablauf wird geladen" />,
});

export const metadata = generateSharedMetadata({
  title: "Schlüssel Schmiede Wetzlar | Fachbetrieb für Sicherheitstechnik",
  description: "Zerstörungsfreie Türöffnungen vom Spezialisten in Wetzlar (Gloelstraße 11). Erleben Sie maximale Kostensicherheit durch unser garantiertes Festpreis-System.",
  path: "/",
  exactTitle: true,
});

export const revalidate = 3600;

export default function HomePage() {
  const testimonials = getAllTestimonials();
  
  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createLocalBusinessSchema()} />
      <JsonLd data={createWebsiteSchema()} />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Signals & Reviews */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 -mt-[20px] sm:-mt-[24px] lg:-mt-[28px] flex flex-col items-center justify-center gap-3 sm:gap-4 pointer-events-none mb-8 sm:mb-10 lg:mb-14">
        <div className="w-full max-w-5xl pointer-events-auto">
          <TrustStrip />
        </div>
        <aside aria-labelledby="google-reviews-heading" className="pointer-events-auto">
          <h2 id="google-reviews-heading" className="sr-only">Kundenbewertungen auf Google</h2>
          <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
        </aside>
      </div>

      <PersonalizedHero />
      <PricingSection />
      <ServicesSection />
      <WhyUsSection />
      <TrustMetricsSection />
      <InteractiveMapSection />
      <WerkstattImageSection />
      <ProcessSteps />
      
      {/* Testimonials */}
      <TestimonialCarousel testimonials={testimonials} title="Das sagen unsere Kunden" subtitle="Geprüfte Bewertungen aus der Region" />

      <FAQSection />
      <ContactSection />
      <PersonalizedCTA />
      <SeoContentSection />

      <FinalCTA className="bg-[var(--color-red-500)]" headline="Schlüsselproblem? Rufen Sie jetzt an!" benefits={["Lokaler Fachbetrieb aus Wetzlar","Feste Preise ohne Überraschungen","Sofortige Hilfe rund um die Uhr"]} buttonText="Schlüssel Schmiede anrufen" socialProof="Über 500 zufriedene Kunden aus Wetzlar" subtitle="Langgasse 70 · Wetzlar · 24/7 erreichbar" />

      <JsonLd data={getFAQSchema(getHomepageFAQs())} />
    </>
  );
}

export const dynamic = "force-static";
