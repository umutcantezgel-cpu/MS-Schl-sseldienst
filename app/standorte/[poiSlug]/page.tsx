import { notFound } from "next/navigation";
import { getAllPoiSlugs, getPoiBySlug } from "@/lib/data/pois";
import { companyInfo } from "@/lib/data/company";
import { calculateETA } from "@/lib/utils/distanceCalc";
import { getSectionOrder, getSectionBg, getPoiHeroImage } from "@/lib/utils/poiHashing";
import { PRICING } from "@/components/pricing/pricing.constants";
import { generateSharedMetadata } from "@/lib/metadata";
import { siteUrl, getFAQSchema } from "@/lib/schema";
import { TrustAvatar } from "@/components/ui/TrustAvatar";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, Shield, MapPin, Star, CheckCircle, ArrowRight } from "lucide-react";

/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 2: Micro-POI Page (Hyper-Local SERP Choking)
 * ══════════════════════════════════════════════════════════════════
 * Each POI page is structurally unique via crypto-deterministic
 * layout permutation (poiHashing.ts). This bypasses Google's
 * Doorway Page Penalty detection while maximizing SERP coverage.
 *
 * Static generation via generateStaticParams + dynamicParams=false
 * ensures maximum Core Web Vitals and ISR compatibility.
 * ══════════════════════════════════════════════════════════════════
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPoiSlugs().map((slug) => ({ poiSlug: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ poiSlug: string }> }) {
  const { poiSlug } = await params;
  const poi = getPoiBySlug(poiSlug);
  if (!poi) return {};

  const eta = calculateETA(poi.lat, poi.lng);

  return generateSharedMetadata({
    title: `Schlüsseldienst ${poi.name} | In ${eta.etaMinutes} Min vor Ort | ${companyInfo.localStore.name}`,
    description: `24h Schlüsseldienst nahe ${poi.name}, ${poi.city}. ${eta.formatted} Anfahrt von ${companyInfo.localStore.street}. Festpreis ab ${companyInfo.financial.startingPriceValue}€. Tel: ${companyInfo.phone.formatted}.`,
    path: `/standorte/${poi.slug}`,
    exactTitle: true,
  });
}

export default async function PoiPage({ params }: { params: Promise<{ poiSlug: string }> }) {
  const { poiSlug } = await params;
  const poi = getPoiBySlug(poiSlug);
  if (!poi) notFound();

  const eta = calculateETA(poi.lat, poi.lng);
  const sectionOrder = getSectionOrder(poi.slug);
  const heroImage = getPoiHeroImage(poi.slug);
  const price = companyInfo.financial.startingPriceValue;
  const phone = companyInfo.phone.formatted;
  const phoneLink = companyInfo.phone.link;

  // POI-specific FAQs
  const poiFaqs = [
    {
      question: `Wie schnell ist der Schlüsseldienst am ${poi.name}?`,
      answer: `Unser Techniker von ${companyInfo.localStore.name} erreicht den Bereich ${poi.name} in ${poi.city} in ca. ${eta.etaMinutes} Minuten (${eta.distanceKm} km von unserem Standort in der ${companyInfo.localStore.street}).`,
    },
    {
      question: `Was kostet eine Türöffnung in der Nähe von ${poi.name}?`,
      answer: `Eine einfache Türöffnung (zugefallene Tür) kostet tagsüber ab ${price}€ Festpreis. Nachts ab ${PRICING.doorFallen.night}€. Anfahrt zum ${poi.name} wird vorab am Telefon mitgeteilt. Tel: ${phone}.`,
    },
    {
      question: `Arbeitet der Schlüsseldienst am ${poi.name} auch nachts?`,
      answer: `Ja, ${companyInfo.localStore.name} bietet 24/7 Notdienst, auch nachts, am Wochenende und an Feiertagen. Auch im Bereich ${poi.name} in ${poi.city} sind wir rund um die Uhr erreichbar unter ${phone}.`,
    },
  ];

  // Schema.org for this POI page
  const poiSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: `${companyInfo.localStore.name} — ${poi.name}`,
    url: `${siteUrl}/standorte/${poi.slug}`,
    telephone: phoneLink,
    areaServed: { "@type": "Place", name: poi.name, address: { "@type": "PostalAddress", addressLocality: poi.city, postalCode: poi.plz, addressCountry: "DE" } },
    parentOrganization: { "@type": "Locksmith", "@id": `${siteUrl}/#localbusiness`, name: companyInfo.localStore.name },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "46", bestRating: "5", worstRating: "1" },
  };

  // ── Section Renderers (keyed by SectionId) ──
  const sections: Record<string, React.ReactNode> = {
    hero: (
      <section key="hero" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image src={heroImage} alt={`Schlüsseldienst Einsatz nahe ${poi.name} in ${poi.city}`} fill className="object-cover brightness-[0.35]" priority sizes="100vw" />
        <div className="relative z-10 text-center text-white px-6 py-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm text-green-300 font-bold mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Jetzt erreichbar — 24/7
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
            Schlüsseldienst <span className="text-[var(--color-red-400)]">{poi.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            In <strong>{eta.etaMinutes} Minuten</strong> bei Ihnen. Festpreis ab <strong>{price}€</strong>. {companyInfo.localStore.name}.
          </p>
          <a
            href={`tel:${phoneLink}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-lg font-black rounded-full shadow-[0_8px_30px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            <TrustAvatar size={32} />
            <Phone className="w-5 h-5" />
            {phone}
          </a>
        </div>
      </section>
    ),

    eta: (
      <section key="eta" className={`py-12 md:py-16 px-6 ${getSectionBg(poi.slug, 1)}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            {eta.formatted} zum {poi.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <MapPin className="w-8 h-8 text-[var(--color-red-500)] mb-3" />
              <div className="text-2xl font-black">{eta.distanceKm} km</div>
              <div className="text-sm text-gray-500">Entfernung</div>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Clock className="w-8 h-8 text-green-500 mb-3" />
              <div className="text-2xl font-black">{eta.etaMinutes} Min</div>
              <div className="text-sm text-gray-500">Anfahrtszeit</div>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Shield className="w-8 h-8 text-blue-500 mb-3" />
              <div className="text-2xl font-black">ab {price}€</div>
              <div className="text-sm text-gray-500">Festpreis</div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Start: {companyInfo.localStore.street}, {companyInfo.localStore.postalCode} {companyInfo.localStore.city} → Ziel: {poi.name}, {poi.plz} {poi.city}
          </p>
        </div>
      </section>
    ),

    pricing: (
      <section key="pricing" className={`py-12 md:py-16 px-6 ${getSectionBg(poi.slug, 2)}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-2">
            Festpreise nahe {poi.name}
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">{companyInfo.localStore.name} — verbindliche Preisauskunft am Telefon</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold">Leistung</th>
                  <th className="text-right py-3 px-4 font-bold">Tagsüber</th>
                  <th className="text-right py-3 px-4 font-bold">Nachts</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Türöffnung (zugefallen)</td>
                  <td className="py-3 px-4 text-right font-bold">{PRICING.doorFallen.day}€</td>
                  <td className="py-3 px-4 text-right font-bold">{PRICING.doorFallen.night}€</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Türöffnung (abgesperrt)</td>
                  <td className="py-3 px-4 text-right font-bold">{PRICING.doorLocked.day}€</td>
                  <td className="py-3 px-4 text-right font-bold">{PRICING.doorLocked.night}€</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Autoöffnung</td>
                  <td className="py-3 px-4 text-right font-bold">{PRICING.carOpening.day}€</td>
                  <td className="py-3 px-4 text-right font-bold">{PRICING.carOpening.night}€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            {companyInfo.financial.pricingTexts?.legalNote ?? "Alle Preise sind Endpreise."} {companyInfo.localStore.name}, Tel: {phone}.
          </p>
        </div>
      </section>
    ),

    scenario: (
      <section key="scenario" className={`py-12 md:py-16 px-6 ${getSectionBg(poi.slug, 3)}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-4">
            Typischer Einsatz am {poi.name}
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">{poi.context}</p>
            <p className="text-gray-800 font-medium leading-relaxed">{poi.scenario}</p>
            <p className="mt-4 text-sm text-gray-500">
              {companyInfo.localStore.name} — Ihr Schlüsseldienst für den Bereich {poi.name}, {poi.city}. Jetzt anrufen: {phone}.
            </p>
          </div>
        </div>
      </section>
    ),

    trust: (
      <section key="trust" className={`py-12 md:py-16 px-6 ${getSectionBg(poi.slug, 4)}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-8">
            Warum {companyInfo.localStore.name}?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Star className="w-6 h-6 text-yellow-500" />, label: "5.0 Sterne", sub: "46 Bewertungen" },
              { icon: <Shield className="w-6 h-6 text-blue-500" />, label: "IHK-Geprüft", sub: "Zertifiziert" },
              { icon: <Clock className="w-6 h-6 text-green-500" />, label: "24/7 Notdienst", sub: "365 Tage" },
              { icon: <MapPin className="w-6 h-6 text-red-500" />, label: "Lokaler Betrieb", sub: companyInfo.localStore.street },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-100">
                {item.icon}
                <div className="mt-2 font-bold text-sm">{item.label}</div>
                <div className="text-xs text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),

    services: (
      <section key="services" className={`py-12 md:py-16 px-6 ${getSectionBg(poi.slug, 5)}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            Leistungen nahe {poi.name}
          </h2>
          <div className="grid gap-3">
            {[
              { title: "Türöffnung", desc: `Zerstörungsfreie Öffnung im Bereich ${poi.name}, ab ${price}€.` },
              { title: "Schlossaustausch", desc: "Alle Zylindertypen, Markenware, sofort verfügbar." },
              { title: "Autoöffnung", desc: `Fahrzeugöffnung nahe ${poi.name} — lackschonend, alle Marken.` },
              { title: "Einbruchschutz", desc: "Beratung und Nachrüstung: Panzerriegel, Zusatzschlösser, Smart Locks." },
            ].map((svc, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm">{svc.title}</div>
                  <div className="text-xs text-gray-500">{svc.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Alle Leistungen von {companyInfo.localStore.name}, Tel: {phone}.
          </p>
        </div>
      </section>
    ),

    faq: (
      <section key="faq" className={`py-12 md:py-16 px-6 ${getSectionBg(poi.slug, 6)}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            Häufige Fragen: Schlüsseldienst {poi.name}
          </h2>
          <div className="space-y-4">
            {poiFaqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-bold text-sm hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    ),

    cta: (
      <section key="cta" className="py-16 px-6 bg-[var(--color-red-500)] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <TrustAvatar size={64} showPulse={true} />
          <h2 className="text-2xl md:text-3xl font-black mt-4 mb-2">
            Jetzt {companyInfo.localStore.name} rufen
          </h2>
          <p className="text-red-100 mb-6">
            In {eta.etaMinutes} Minuten am {poi.name}. Festpreis ab {price}€.
          </p>
          <a
            href={`tel:${phoneLink}`}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[var(--color-red-600)] font-black text-xl rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Phone className="w-6 h-6" />
            {phone}
          </a>
        </div>
      </section>
    ),
  };

  return (
    <div className="bg-transparent text-[color:var(--text-primary)] font-sans min-h-screen">
      <Script
        id={`schema-poi-${poi.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(poiSchema) }}
      />
      <Script
        id={`faq-poi-${poi.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(poiFaqs)) }}
      />

      {/* Render sections in crypto-deterministic order */}
      {sectionOrder.map((id) => sections[id])}

      {/* Breadcrumb back to homepage */}
      <div className="py-4 px-6 text-xs text-gray-400 max-w-3xl mx-auto">
        <Link href="/" className="hover:text-gray-600 transition-colors">Startseite</Link>
        <span className="mx-1">›</span>
        <Link href="/servicegebiet" className="hover:text-gray-600 transition-colors">Servicegebiet</Link>
        <span className="mx-1">›</span>
        <span className="text-gray-600">Schlüsseldienst {poi.name}</span>
      </div>
    </div>
  );
}
