import { generateSharedMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/trust/TrustStrip";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from "@/components/reviews/reviews.data";
import FinalCTA from "@/components/ui/FinalCTA";
import { ClientLogos } from "@/components/sections/ClientLogos";
import nextDynamic from "next/dynamic";
import JsonLd from "@/components/seo/JsonLd";
import { createOrganizationSchema, createLocalBusinessSchema, createWebsiteSchema } from "@/lib/seo/jsonld";
import { getAllTestimonials } from "@/lib/data/testimonials";

import { PricingSection } from "@/components/sections/home/PricingSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import WhyUsSection from "@/components/sections/home/WhyUsSection";
import TrustMetricsSection from "@/components/sections/home/TrustMetricsSection";
import InteractiveMapSection from "@/components/sections/home/InteractiveMapSection";
import WerkstattImageSection from "@/components/sections/home/WerkstattImageSection";
import FAQSection from "@/components/sections/home/FAQSection";
import ContactSection from "@/components/sections/home/ContactSection";
import SeoContentSection from "@/components/sections/home/SeoContentSection";
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

// ── PAGE-LEVEL METADATA (overrides layout defaults) ────────────────────────
export const metadata = generateSharedMetadata({
  title: "Schlüssel Schmiede Wetzlar | Schlüssel & Sicherheit",
  description: "Schlüssel Schmiede Wetzlar und Fachgeschäft Langgasse 70. Schlüssel nachmachen, Schließanlagen & Sicherheitstechnik. ☎ 06441-8056279",
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
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 -mt-[38px] sm:-mt-[42px] lg:-mt-[36px] flex flex-col items-center justify-center gap-3 sm:gap-4 pointer-events-none mb-8 sm:mb-10 lg:mb-14">
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
      <ClientLogos />
      <InteractiveMapSection />
      <WerkstattImageSection />
      <ProcessSteps />
      
      {/* Testimonials */}
      <TestimonialCarousel testimonials={testimonials} title="Das sagen unsere Kunden" subtitle="Geprüfte Bewertungen aus der Region" />

      <FAQSection />
      <ContactSection />
      <PersonalizedCTA />
      <SeoContentSection />

      <FinalCTA className="bg-[var(--color-red-500)]" />

      <JsonLd data={getFAQSchema(getHomepageFAQs())} />
    </>
  );
}

export const dynamic = "force-static";
