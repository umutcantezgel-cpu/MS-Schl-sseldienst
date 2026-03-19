import { notFound } from"next/navigation";
import { allLocations, getLocationBySlug, getAllLocationSlugs } from"@/lib/data/allLocations";
import { siteUrl } from"@/lib/schema";
import { generateSharedMetadata } from"@/lib/metadata";
import Breadcrumbs from"@/components/Breadcrumbs";
import EmergencyCTA from"@/components/EmergencyCTA";
import HeroCTA from"@/components/HeroCTA";
import TrustBadges from"@/components/trust/TrustBadges";
import PriceCard from"@/components/pricing/PriceCard";
import TrustStrip from"@/components/trust/TrustStrip";
import ReviewsSection from"@/components/reviews/ReviewsSection";
import GoogleReviewsBadge from"@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from"@/components/reviews/reviews.data";
import { getFAQSchema } from"@/lib/faqSchema";
import { Phone, ShieldCheck, Clock, Check, Star } from"lucide-react";
import Link from"next/link";
import Script from"next/script";
import FAQAccordion from"@/components/ui/FAQAccordion";
import { Card } from"@/components/ui/card";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";

export function generateStaticParams() {
  return getAllLocationSlugs().map(slug => ({ stadtgebiet: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stadtgebiet: string }> }) {
  const { stadtgebiet } = await params;
  const city = getLocationBySlug(stadtgebiet);

  if (!city) return notFound();

  return generateSharedMetadata({
    title: city.seo.metaTitle,
    description: city.seo.metaDescription,
    path: `/${city.slug}`,
  });
}

export default async function StadtgebietPage({ params }: { params: Promise<{ stadtgebiet: string }> }) {
  const { stadtgebiet } = await params;
  const city = getLocationBySlug(stadtgebiet);

  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name:"Servicegebiet", href:"/servicegebiet" },
    { name: `Schlüsseldienst ${city.name}`, href: `/${city.slug}` },
  ];
  // Schema.org — Stadtspezifisches LocalBusiness (vollständig, Rich-Results-ready)
  const localBusinessSchema = {"@context":"https://schema.org","@type":"Locksmith","name": `MS Schlüsseldienst ${city.name}`,"url": `${siteUrl}/${city.slug}`,"telephone": ["+4964418056544","+491782471037"],"email":"info@sd-wetzlar.de","priceRange":"ab 99€","image": `${siteUrl}/og-image.png`,"address": {"@type":"PostalAddress","addressLocality": city.name,"addressRegion":"Hessen","addressCountry":"DE"
    },"geo": {"@type":"GeoCoordinates","latitude": city.coordinates.latitude,"longitude": city.coordinates.longitude
    },"areaServed": {"@type":"City","name": city.name
    },"aggregateRating": {"@type":"AggregateRating","ratingValue": aggregateRating.ratingValue.toString(),"reviewCount": aggregateRating.reviewCount.toString(),"bestRating":"5","worstRating":"1"
    },"openingHoursSpecification": [{"@type":"OpeningHoursSpecification","dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"
    }],"parentOrganization": {"@type":"Locksmith","@id": `${siteUrl}/#localbusiness`,"name":"MS Schlüsseldienst Wetzlar","url": siteUrl
    }
  };


  return (
    <div className="bg-transparent text-[var(--text-primary)] font-sans min-h-screen">
      <Script
        id={`schema-city-${city.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* SEKTION 1 — Stadt-Hero */}
      <section id="hero-section" aria-label={`Notfall-Hilfe ${city.name}`} className="relative pt-[180px] pb-[100px] lg:pt-[220px] lg:pb-[140px] bg-transparent overflow-hidden border-b border-[var(--border-subtle)]">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-[var(--color-blush-500)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs items={breadcrumbs} />
          
          <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--value-primary)]/10 text-[var(--value-primary)] font-semibold text-sm mb-6 border border-[var(--value-primary)]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--value-primary)]"></span>
                </span>
                In ca. {city.logistics.drivingTimeMinutes} Min. bei Ihnen in {city.name}
              </div>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[var(--text-primary)] mb-[var(--space-6)] text-balance max-w-4xl">
                Schlüsseldienst <span className="text-[var(--value-primary)]">{city.name}</span> — Türöffnung zum Festpreis | 24/7 Notdienst
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="mx-auto max-w-[700px] text-[18px] sm:text-[20px] text-[var(--text-secondary)] text-center leading-relaxed">
                {city.content.heroIntro}
              </p>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="mt-8 mb-2">
                <TrustBadges />
              </div>
                <div className="flex flex-col items-center gap-2">
                  <a
                    href="tel:+4964418056544"
                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--color-red-500)] px-8 py-4 typo-cta-button text-white shadow-[var(--shadow-cta)] transition-all hover:bg-[var(--color-red-600)] hover:shadow-[0_8px_40px_rgba(185,28,28,0.25)] hover:-translate-y-0.5"
                  >
                    <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
                    <span className="text-xl">Jetzt Anrufen — 06441-8056544</span>
                  </a>
                  <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Kostenlos & unverbindlich — Antwort in 30 Min</span>
                </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* SEKTION 2 — Trust-Signale (Floating über Section-Border) */}
      <div className="relative z-20 w-full px-[var(--space-4)] -mt-[72px] lg:-mt-[96px] flex flex-col items-center gap-[var(--space-6)] pointer-events-none mb-16">
        <aside aria-label="Google-Bewertungen" className="pointer-events-auto">
          <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
        </aside>
        <div className="w-full pointer-events-auto px-2">
          <TrustStrip />
        </div>
      </div>

      {/* SEKTION 4 — Stadtspezifischer Haupttext (SEO-Herzstück) */}
      <section aria-label={`Informationen zum Schlüsseldienst in ${city.name}`} className="relative bg-transparent px-[var(--section-px)] py-[var(--section-py)]">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl z-[-1]"></div>
        <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1} className="mx-auto max-w-4xl relative z-10">
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="prose prose-lg prose-slate prose-a:text-[var(--value-primary)] prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] mx-auto max-w-none" dangerouslySetInnerHTML={{ __html: city.content.mainText }} />
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* SEKTION 5 — Services in dieser Stadt */}
      <section aria-labelledby="services-heading" className="bg-transparent px-[var(--section-px)] pb-[var(--section-py)] relative">
        <h2 id="services-heading" className="sr-only">Unsere Services in {city.name}</h2>
        <StaggerReveal className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <Card className="p-8 border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 border border-green-100">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Ohne Schäden öffnen</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{city.content.serviceZerstörungsfrei}</p>
            </Card>
          </StaggerItem>
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <Card className="p-8 border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Spezial-Frästechnik</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{city.content.serviceBohren}</p>
            </Card>
          </StaggerItem>
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <Card className="p-8 border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow h-full bg-white/70 backdrop-blur-2xl rounded-2xl">
              <div className="w-12 h-12 bg-[var(--value-icon-bg)] rounded-xl flex items-center justify-center mb-6 border border-[var(--value-icon-bg)] bg-white/80">
                <Clock className="w-6 h-6 text-[var(--value-icon-color)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">24/7 Notdienst</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{city.content.service247}</p>
            </Card>
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* SEKTION 3 — Stadtspezifische Preisübersicht */}
      <section id="preise" aria-labelledby="preise-heading" className="bg-transparent relative px-[var(--section-px)] py-[var(--section-py)] border-y border-[var(--border-subtle)]">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-lg z-[-1]"></div>
        <StaggerReveal className="mx-auto max-w-7xl relative z-10" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="text-center mb-16">
              <h2 id="preise-heading" className="typo-h2 text-[var(--text-primary)]">
                Transparente <span className="text-[var(--value-primary)]">Festpreise</span> für {city.name}
              </h2>
              <p className="mt-4 text-[18px] text-[var(--text-secondary)] max-w-2xl mx-auto font-medium bg-[var(--value-primary)]/10 text-[var(--value-primary)] py-3 px-6 rounded-lg border border-[var(--value-primary)]/20">
                Anfahrtskosten: {city.pricing.travelCostText}
              </p>
            </div>
          </StaggerItem>
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <PriceCard
                title="Tür zugefallen"
                price={city.pricing.basePrice}
                description="Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen."
                features={["Werktags 06-20 Uhr","Zerstörungsfreie Öffnung (>99%)","Festpreis am Telefon genannt",
                  ...(city.pricing.travelCost === 0 ? ["Inkl. Anfahrt in diesem Bezirk"] : [`Zzgl. lokale Anfahrt`])
                ]}
                isPopular={true}
              />
              <PriceCard
                title="Abends & Nachts"
                price={city.pricing.basePriceNight || 119}
                description="Einsätze in den späten Abend- oder tiefen Nachtstunden."
                features={["20:00 bis 05:59 Uhr","Gleiche Pünktlichkeit","Gleiche Zerstörungsfreiheit",
                  ...(city.pricing.travelCost === 0 ? ["Inkl. Anfahrt in diesem Bezirk"] : [`Zzgl. lokale Anfahrt`])
                ]}
              />
              <PriceCard
                title="Wochenende/Feiertag"
                price={city.pricing.basePriceWeekend || 179}
                description="Notdienst an allen Samstagen, Sonntagen und Feiertagen."
                features={["Rund um die Uhr am Wochenende","Priorisierter Service in Notlagen","Defekte Schlösser öffnen",
                  ...(city.pricing.travelCost === 0 ? ["Inkl. Anfahrt in diesem Bezirk"] : [`Zzgl. lokale Anfahrt`])
                ]}
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
        
        <div className="mt-12 flex flex-col items-center gap-2">
          <a href="tel:+4964418056544" className="text-[var(--color-red-500)] typo-cta-button hover:underline flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> 06441-8056544 anrufen zur Preisauskunft
          </a>
          <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Festpreis wird vor Anfahrt genannt</span>
        </div>
      </section>

      {/* SEKTION 6 — Stadtspezifische FAQ */}
      <section aria-labelledby="faq-heading" className="bg-transparent relative px-[var(--section-px)] py-[var(--section-py)]">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-[-1]"></div>
        {city.faqs && city.faqs.length > 0 && (
          <Script
            id={`faq-schema-${city.slug}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getFAQSchema(city.faqs)),
            }}
          />
        )}
        <StaggerReveal className="mx-auto max-w-4xl relative z-10" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="typo-h2 text-[var(--text-primary)]">
                FAQ: Schlüsseldienst Einsätze in <span className="text-[var(--value-primary)]">{city.name}</span>
              </h2>
            </div>
          </StaggerItem>
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="space-y-4">
              {city.faqs.map((faq, i) => (
                <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* SEKTION 7 — Nachbar-Verlinkung */}
      <section aria-labelledby="nachbarn-heading" className="bg-transparent relative px-[var(--section-px)] py-[var(--space-16)] border-t border-[var(--border-subtle)]">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xl z-[-1]"></div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 id="nachbarn-heading" className="text-xl font-bold text-[var(--text-primary)] mb-6">
            Wir sind auch in Ihrer direkten Nachbarschaft schnell vor Ort:
          </h2>
          <nav aria-label="Benachbarte Einsatzgebiete" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {city.neighbors.map((neighborSlug) => {
              const neighbor = allLocations.find(l => l.slug === neighborSlug);
              if (!neighbor) return null;
              return (
                <Link key={neighbor.id} href={`/${neighbor.slug}`} className="text-[var(--text-secondary)] font-medium hover:text-[var(--color-red-500)] underline decoration-[var(--border-subtle)] underline-offset-4 hover:decoration-[var(--color-red-500)] transition-colors">
                  Schlüsseldienst {neighbor.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      {/* SEKTION 8 — Finaler CTA */}
      <section aria-labelledby="cta-heading" className="bg-[var(--color-red-600)] px-[var(--section-px)] py-[var(--space-32)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
        <div className="container relative z-10 mx-auto max-w-4xl">
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold mb-6">
            Vor verschlossener Tür in {city.name}? Wir sind sofort da.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto text-balance">
            Keine Callcenter, keine Wucherpreise. Rufen Sie Ihren regionalen Experten direkt an und wir machen uns auf den Weg zu Ihnen.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a href="tel:+4964418056544" className="inline-flex items-center justify-center gap-4 bg-white text-[var(--color-red-600)] px-10 py-5 rounded-full typo-cta-button text-2xl md:text-3xl shadow-xl hover:scale-105 hover:bg-white/90 transition-all hover:shadow-2xl">
              <Phone className="w-8 h-8 md:w-9 md:h-9 animate-pulse" />
              06441-8056544
            </a>
            <span className="typo-small text-white/80 text-center uppercase tracking-wider">Antwort innerhalb von 30 Minuten</span>
          </div>
        </div>
      </section>
    </div>
  );
}
