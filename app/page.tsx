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
import AIAnswerBox from "@/components/seo/AIAnswerBox";

import { PricingSection } from "@/components/sections/home/PricingSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import WhyUsSection from "@/components/sections/home/WhyUsSection";
import TrustMetricsSection from "@/components/sections/home/TrustMetricsSection";
import WerkstattImageSection from "@/components/sections/home/WerkstattImageSection";
import FAQSection from "@/components/sections/home/FAQSection";
import SeoContentSection from "@/components/sections/home/SeoContentSection";

import InteractiveMapSection from "@/components/sections/home/InteractiveMapSection";
import ContactSection from "@/components/sections/home/ContactSection";
import PersonalizedHero from "@/components/growth/PersonalizedHero";
import PersonalizedCTA from "@/components/growth/PersonalizedCTA";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import ProcessSteps from "@/components/trust/ProcessSteps";

export const metadata = generateSharedMetadata({
  title: "Schlüsseldienst Wetzlar | 24h Notdienst ab 99€",
  description: "Zerstörungsfreie Türöffnungen vom Fachbetrieb in Wetzlar. Erleben Sie unseren 24h Notdienst mit transparenter, verbindlicher Preisauskunft vorab.",
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
      <AIAnswerBox />
      
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
    </>
  );
}

export const dynamic = "force-static";
