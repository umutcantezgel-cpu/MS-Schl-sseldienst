import { generateSharedMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/trust/TrustStrip";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from "@/components/reviews/reviews.data";
import nextDynamic from "next/dynamic";

const FinalCTA = nextDynamic(() => import('@/components/ui/FinalCTA'));

import JsonLd from "@/components/seo/JsonLd";
import { getPricingSchema, getServiceSchema } from "@/lib/schema";
import { getAllTestimonials } from "@/lib/data/testimonials";
import AIAnswerBox from "@/components/seo/AIAnswerBox";

// Dynamically imported below-the-fold sections
const PricingSection = nextDynamic(() => import("@/components/sections/home/PricingSection").then(mod => mod.PricingSection));
const ServicesSection = nextDynamic(() => import("@/components/sections/home/ServicesSection"));
const WhyUsSection = nextDynamic(() => import("@/components/sections/home/WhyUsSection"));
const TrustMetricsSection = nextDynamic(() => import("@/components/sections/home/TrustMetricsSection"));
const InteractiveMapSection = nextDynamic(() => import("@/components/sections/home/InteractiveMapSection"));
const FAQSection = nextDynamic(() => import("@/components/sections/home/FAQSection"));
const SeoContentSection = nextDynamic(() => import("@/components/sections/home/SeoContentSection"));
const ContactSection = nextDynamic(() => import("@/components/sections/home/ContactSection"));

const PersonalizedHero = nextDynamic(() => import('@/components/growth/PersonalizedHero'));
const PersonalizedCTA = nextDynamic(() => import('@/components/growth/PersonalizedCTA'));
const TestimonialCarousel = nextDynamic(() => import('@/components/sections/TestimonialCarousel').then(mod => mod.TestimonialCarousel));
const ProcessSteps = nextDynamic(() => import('@/components/trust/ProcessSteps'));

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
      <JsonLd data={[
        getPricingSchema(),
        getServiceSchema({
          title: "Schlüsseldienst Wetzlar",
          description: "Zerstörungsfreie Türöffnungen vom Fachbetrieb in Wetzlar. Erleben Sie unseren 24h Notdienst mit transparenter, verbindlicher Preisauskunft vorab.",
          url: "/"
        })
      ]} />

      <AIAnswerBox />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Signals & Reviews */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 -mt-[20px] sm:-mt-[24px] lg:-mt-[28px] flex flex-col items-center justify-center gap-3 sm:gap-4 pointer-events-none mb-8 sm:mb-10 lg:mb-14">
        <div className="w-full max-w-5xl pointer-events-auto">
          <TrustStrip />
        </div>
        <aside aria-labelledby="google-reviews-heading" className="pointer-events-auto">
          <h2 id="google-reviews-heading" className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Kundenbewertungen auf Google</h2>
          <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
        </aside>
      </div>

      <PersonalizedHero />
      <PricingSection />
      <ServicesSection />
      <WhyUsSection />
      <TrustMetricsSection />
      <InteractiveMapSection />
      <ProcessSteps headline="So einfach funktioniert unser Schlüsseldienst-Service" subtitle="Der transparente 4-Schritte-Ablauf der Schlüssel Schmiede Wetzlar: Schnell, sicher und ohne versteckte Kosten." badgeText="4 SCHRITTE ZUR FREIEN TÜR" />
      
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
