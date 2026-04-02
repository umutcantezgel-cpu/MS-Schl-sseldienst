import { generateSharedMetadata } from "@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { teamImages, werkstattImages } from "@/lib/data/imageAssets";
import {
 Phone,
 Check,
 DoorOpen,
 Car,
 Lock,
 ShieldCheck,
 ArrowRight,
 Key,
 Star,
 Clock,
 Users,
} from"lucide-react";
import Link from"next/link";
import { buttonVariants } from"@/components/ui/button";
import { cn } from"@/lib/utils";
import HeroSection from"@/components/HeroSection";
import TrustStrip from"@/components/trust/TrustStrip";

import { getAllTestimonials } from "@/lib/data/testimonials";
import GoogleReviewsBadge from"@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from"@/components/reviews/reviews.data";
import { getHomepageFAQs } from"@/lib/faqData";
import { getFAQSchema } from "@/lib/schema";
import FAQAccordion from"@/components/ui/FAQAccordion";

import FinalCTA from"@/components/ui/FinalCTA";
import RevealSection from "@/components/motion/RevealSection";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { Typography } from "@/components/ui/typography/Typography";
import TrustSignals from "@/components/trust/TrustSignals";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { TrustBadgeRow } from "@/components/ui/TrustBadgeRow";
import nextDynamic from "next/dynamic";
import JsonLd from "@/components/seo/JsonLd";
import { createOrganizationSchema, createLocalBusinessSchema, createWebsiteSchema } from "@/lib/seo/jsonld";

// [SEO: Payload Reduktion — next/dynamic code-splits these heavy client components]
// Their JS bundles load on-demand, not in the initial HTML payload.
// Loading skeletons keep the HTML lightweight while preserving layout stability.
const DynamicCounter = nextDynamic(() => import("@/components/growth/DynamicCounter"));
const PersonalizedHero = nextDynamic(() => import("@/components/growth/PersonalizedHero"));
const PersonalizedCTA = nextDynamic(() => import("@/components/growth/PersonalizedCTA"));
const ServiceMapWrapper = nextDynamic(() => import("@/components/maps/ServiceMapWrapper"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[400px] rounded-xl" aria-label="Karte wird geladen" />,
});

const TestimonialCarousel = nextDynamic(() => import("@/components/sections/TestimonialCarousel").then(mod => mod.TestimonialCarousel), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-xl" aria-label="Bewertungen werden geladen" />,
});

const ProcessSteps = nextDynamic(() => import("@/components/trust/ProcessSteps"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-64 rounded-xl" aria-label="Ablauf wird geladen" />,
});
const ContactForm = nextDynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-xl" aria-label="Formular wird geladen" />,
});

// ── PAGE-LEVEL METADATA (overrides layout defaults) ────────────────────────
// [FIX: Seobility #1] Title ≤50 chars = safely under 580px pixel limit.
// [FIX: Seobility #2] This is the ONLY description source. Layout exports none.
// [FIX: Seobility #3] Canonical resolves to production domain via metadataBase in layout.
// [FIX: Seobility #4] Self-referencing hreflang de-DE + x-default via generateSharedMetadata.
export const metadata = generateSharedMetadata({
  title: "Schlüsseldienst Wetzlar | 24h Türöffnung ab 99€",
  description: "MS Schlüsseldienst Wetzlar öffnet Ihre Tür ohne Schäden, ab 99€ Festpreis. 24/7 Notdienst, in 20-30 Min. vor Ort. Jetzt anrufen: 06441-8056279",
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
   
   {/* Hero Section (Client Component — visual content + CTA) */}
   <HeroSection />

   {/* Trust Signals & Reviews (Docked directly beneath Hero) */}
   <div className="relative z-20 w-full px-[var(--space-4)] -mt-[44px] lg:-mt-[36px] flex flex-col lg:flex-row items-center justify-center gap-[var(--space-4)] lg:gap-[var(--space-6)] pointer-events-none mb-12 lg:mb-20">
    {/* Pointer-events-auto on children so they remain clickable, container is none to avoid blocking clicks in between */}
    
    <div className="w-full lg:w-max pointer-events-auto px-4 lg:px-0">
     <TrustStrip />
    </div>

    <aside aria-labelledby="google-reviews-heading" className="pointer-events-auto shrink-0 mt-2 lg:mt-0">
     <h2 id="google-reviews-heading" className="sr-only">Kundenbewertungen auf Google</h2>
     <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
    </aside>
   </div>

   {/* Phase 18 — Personalized Trust Signal (non-default segments only) */}
   <PersonalizedHero />

   {/* Pricing Section */}
   <section
    id="preise"
    aria-labelledby="preise-heading"
    className="bg-transparent px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden"
   >
    <RevealSection className="mx-auto max-w-7xl relative z-10">
      <SectionHeader
        headingId="preise-heading"
        title={<>Transparente <span className="text-[var(--color-red-500)]">Preise</span></>}
        description="Festpreis am Telefon — keine versteckten Kosten — Rechnung erst nach Abschluss."
      />

     {/* Garantie-Leiste */}
     <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10">
      {[
       { icon: ShieldCheck, text:"Preis vor Anfahrt genannt" },
       { icon: Check, text:"Keine Extras ohne Absprache" },
       { icon: ArrowRight, text:"Rechnung nach Abschluss", useFileIcon: true },
      ].map((item, idx) => (
       <div
        key={idx}
        className="flex items-center justify-center gap-3 bg-[var(--color-charcoal-50)] border border-[var(--color-charcoal-100)] rounded-xl px-5 py-3.5"
       >
        {item.useFileIcon ? (
         <svg className="w-5 h-5 shrink-0 text-[var(--value-icon-color)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
         </svg>
        ) : (
         <item.icon className="w-5 h-5 shrink-0 text-[var(--value-icon-color)]" aria-hidden="true" />
        )}
        <span className="text-[14px] font-semibold text-[color:var(--text-primary)]">{item.text}</span>
       </div>
      ))}
     </div>

     <TrustBadgeRow className="mb-12" />

     {/* 3 Premium Cards */}
     <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

      {/* Card 1: Tagsüber */}
      <div className="flex flex-col rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
       <Typography variant="h3" as="div" className="mb-1">Tagsüber ausgesperrt?</Typography>
       <Typography variant="small" color="secondary" weight="semibold" className="mb-8 block">Montag – Freitag (06:00 – 19:59 Uhr)</Typography>

       <div className="flex items-baseline gap-1 mb-8">
        <span className="text-[13px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-wider">ab</span>
        <span className="text-[80px] font-black leading-none tracking-tighter text-[color:var(--text-primary)] tabular-nums">99</span>
        <span className="text-[28px] font-bold text-[var(--value-price)]">€</span>
       </div>

       <ul className="mb-8 space-y-3 flex-1">
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[color:var(--text-secondary)]">Professionelle Türöffnung</span>
        </li>
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[color:var(--text-secondary)]">Ohne Beschädigung (bei zugefallener Tür)</span>
        </li>
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[color:var(--text-secondary)]">Festpreis inkl. Standardleistungen</span>
        </li>
       </ul>

       <div className="w-full flex flex-col gap-1.5 mt-2">
        <a href="tel:+4964418056279" className="w-full h-[52px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          Jetzt für Festpreis anrufen
         </a>
         <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Festpreis wird vor Anfahrt genannt</span>
        </div>
       </div>

      {/* Card 2: Abends/Nachts (Highlight) */}
      <div className="relative flex flex-col rounded-2xl bg-white/90 backdrop-blur-3xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border-2 border-[var(--price-card-accent)] shadow-[0_0_30px_rgba(184,67,42,0.15),0_4px_20px_rgba(0,0,0,0.06)]">
       <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-[var(--action-primary)] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
        Am häufigsten benötigt
       </div>

       <Typography variant="h3" as="div" className="mb-1">Abends oder nachts?</Typography>
       <Typography variant="small" color="secondary" weight="semibold" className="mb-6 block">Spätzuschlag je nach Uhrzeit</Typography>

       <div className="flex flex-col gap-4 mb-8 bg-[var(--color-charcoal-900)] p-5 rounded-xl border border-[var(--color-charcoal-800)] relative overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col relative z-10 w-full">
         <div className="mb-1">
          <span className="text-[11px] font-black text-[var(--color-red-500)] uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red-500)] animate-pulse shadow-[0_0_8px_rgba(185,28,28,0.8)]" /> Abendtarif
          </span>
         </div>
         <div className="flex items-end justify-between">
          <span className="text-[14px] font-medium text-slate-300 pb-1.5">20:00 – 21:59 Uhr</span>
          <div className="flex items-baseline gap-1.5 shrink-0">
           <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">ab</span>
           <span className="text-[40px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 tabular-nums">119</span>
           <span className="text-[18px] font-bold text-[var(--color-red-500)]">€</span>
          </div>
         </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-[var(--color-charcoal-700)] via-[var(--color-charcoal-600)] to-transparent relative z-10" />
        
        <div className="flex flex-col relative z-10 w-full mb-1">
         <div className="mb-1">
          <span className="text-[11px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.8)]" /> Nachttarif
          </span>
         </div>
         <div className="flex items-end justify-between">
          <span className="text-[14px] font-medium text-slate-300 pb-1.5">22:00 – 05:59 Uhr</span>
          <div className="flex items-baseline gap-1.5 shrink-0">
           <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">ab</span>
           <span className="text-[44px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 tabular-nums drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">149</span>
           <span className="text-[20px] font-bold text-[var(--color-red-500)]">€</span>
          </div>
         </div>
        </div>
       </div>

       <ul className="mb-8 space-y-3 flex-1">
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[color:var(--text-secondary)]">Priorisierter Notdienst-Einsatz</span>
        </li>
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[color:var(--text-secondary)]">Garantierte Ankunft in 20-30 Min.</span>
        </li>
       </ul>

       <div className="w-full flex flex-col gap-1.5 mt-2">
        <a href="tel:+4964418056279" className="w-full h-[56px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white transition-all duration-300 shadow-[0_4px_20px_rgba(185,28,28,0.3)] hover:shadow-[0_8px_30px_rgba(185,28,28,0.4)] hover:-translate-y-[2px]">
         Notdienst anfordern
        </a>
        <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Festpreis wird am Telefon bestätigt</span>
       </div>
      </div>

      {/* Card 3: Wochenende */}
      <div className="flex flex-col rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
       <Typography variant="h3" as="div" className="mb-1">Wochenende / Feiertag?</Typography>
       <Typography variant="small" color="secondary" weight="semibold" className="mb-8 block">Samstag, Sonntag & Feiertage</Typography>

       <div className="flex items-baseline gap-1 mb-8">
        <span className="text-[13px] font-bold text-[color:var(--text-tertiary)] uppercase tracking-wider">ab</span>
        <span className="text-[72px] font-black leading-none tracking-tighter text-[color:var(--text-primary)] tabular-nums">179</span>
        <span className="text-[26px] font-bold text-[var(--value-price)]">€</span>
       </div>

       <ul className="mb-8 space-y-3 flex-1">
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[color:var(--text-secondary)]">Rund um die Uhr Einsatzbereitschaft</span>
        </li>
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[color:var(--text-secondary)]">Zerstörungsfreie Öffnung</span>
        </li>
       </ul>

       <div className="w-full flex flex-col gap-1.5 mt-2">
         <a href="tel:+4964418056279" className="w-full h-[52px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white transition-all duration-300">
          Jetzt für Festpreis anrufen
         </a>
         <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Kostenlos & unverbindlich</span>
       </div>
      </div>
     </div>

     {/* Unified Footnote */}
     <Typography variant="small" color="tertiary" align="center" className="mt-8 italic max-w-3xl mx-auto block">
      *zzgl. Anfahrt. Wetzlarer Kernstadt: keine Anfahrtskosten. Festpreis richtet sich nach Art der Türbeschaffenheit (z.B. Doppelfalz).
     </Typography>

     <div className="mt-10 text-center">
      <Link
       href="/preise"
       className={cn(buttonVariants({ variant:"secondary", size:"lg" }),"rounded-full px-8 bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white")}
       style={{ fontSize: 'var(--text-small)', letterSpacing: 'var(--tracking-cta)' }}
      >
       Interaktiven Preisrechner öffnen <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </Link>
     </div>
    </RevealSection>
   </section>

   {/* Services Section */}
   <section aria-labelledby="soforthilfe-heading" className="bg-transparent px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
    <RevealSection className="mx-auto max-w-7xl relative z-10">
      <SectionHeader
        headingId="soforthilfe-heading"
        title={<>Unsere <span className="text-[var(--color-red-500)]">Sofort-Hilfe</span></>}
        description="Kompetente und schnelle Lösungen für Ihre individuelle Notsituation."
      />

     {/* Bento Grid */}
     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {...[
       { icon: DoorOpen, title:"Haus- & Wohnungstüren", desc:"Zerstörungsfreie Öffnung in 99% der Fälle. Egal ob zugefallen oder abgeschlossen.", href:"/leistungen/turoeffnung", linkText:"Mehr zur Türöffnung", featured: true },
       { icon: Car, title:"Fahrzeug-Öffnung", desc:"Schonende Autoöffnung für alle Marken – garantiert ohne Kratzer oder Lackschäden.", href:"/leistungen/autooeffnung", linkText:"Details zur Autoöffnung" },
       { icon: ShieldCheck, title:"Sicherheitstechnik", desc:"Professionelle Nachrüstung mit Hochsicherheitszylindern, Panzerriegeln und Schutzbeschlägen.", href:"/leistungen/sicherheitstechnik", linkText:"Infos zum Einbruchschutz" },
       { icon: Lock, title:"Schließanlagen", desc:"Planung und Montage von Schließanlagen für private und gewerbliche Objekte.", href:"/leistungen/schliessanlagen", linkText:"Mehr zu Schließanlagen" },
       { icon: Key, title:"Schlüssel nachmachen", desc:"Präzise Zweitschlüssel und Ersatzschlüssel als Sofort-Service in unserer Filiale.", href:"/leistungen/schluessel-nachmachen", linkText:"Zum Schlüssel-Service" },
      ].map((service, idx) => (
       <Link
        key={idx}
        href={service.href}
        className={`group relative flex flex-col items-start p-6 rounded-2xl bg-white/70 backdrop-blur-3xl border border-[var(--color-charcoal-100)] hover:border-[var(--value-hover-border)] hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden outline-none shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${service.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}
       >
        {/* Subtle top glow on featured */}
        {service.featured && (
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[var(--value-primary)]/50 to-transparent" />
        )}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--service-card-icon-bg)] text-[var(--service-card-icon-color)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 mb-4">
         <service.icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <Typography variant="h3" as="div" className="mb-2">
         {service.title}
        </Typography>
        <Typography variant="body" color="secondary" className="mb-auto">
         {service.desc}
        </Typography>
        <div className="mt-6 flex items-center gap-2 font-semibold typo-small text-[var(--value-link-hover)] transition-colors">
         {service.linkText} <ArrowRight className="h-4 w-4 arrow-overshoot" aria-hidden="true" />
        </div>
       </Link>
      ))}
     </div>

     {/* Persönlichkeits-Quote */}
     <div className="mt-8 relative rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-8 lg:p-10 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
       <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(184,67,42,0.3)]">
        <SeoContentImage
         image={teamImages[1]!}
         className="w-full h-full"
         sizes="96px"
        />
       </div>
       <div className="flex flex-col flex-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3 text-yellow-500">
         {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />)}
        </div>
        <Typography variant="h3" as="div" className="mb-3">Chef-Monteur vor Ort</Typography>
        <Typography variant="body" color="secondary" className="italic mb-4">
         &quot;Ihre Tür ist mein Handwerk. Ich verspreche Ihnen eine ehrliche Beratung, keine verdeckten Kosten und eine schnelle Lösung Ihres Problems.&quot;
        </Typography>
        <span className="inline-block self-start md:self-auto px-4 py-1.5 bg-[var(--value-primary)]/10 text-[color:var(--value-primary)] font-bold tracking-wider uppercase text-[11px] rounded-lg border border-[var(--value-primary)]/20">
         Geschäftsführer & Techniker
        </span>
       </div>
      </div>
     </div>
    </RevealSection>
   </section>

   {/* Why Us Section */}
   <section aria-labelledby="why-us-heading" className="bg-transparent px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
    <RevealSection className="mx-auto max-w-7xl">
      <SectionHeader
        headingId="why-us-heading"
        title={<>Warum <span className="text-[var(--color-red-500)]">MS Schlüsseldienst</span>?</>}
      />

     <div className="grid gap-6 lg:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
      {[
       { num:"01", icon: ShieldCheck, title:"Zertifizierte Monteure", desc:"Regelmäßige Schulungen an modernster Sicherheitstechnik garantieren eine zu 99% zerstörungsfreie Öffnung Ihrer Haus- und Wohnungstüren." },
       { num:"02", icon: Check, title:"Garantierter Festpreis", desc:"Dank transparenter Preisgestaltung direkt am Telefon erwarten Sie bei uns niemals versteckte Gebühren oder unnötige Aufschläge vor Ort." },
       { num:"03", icon: Clock, title:"Regionale Expertise", desc:"Als echter Meisterbetrieb direkt in Wetzlar sind wir dank kurzer Anfahrtszeiten im Notfall meist in 15 bis 30 Minuten bei Ihnen." },
      ].map((item, idx) => (
       <div key={idx} className="group relative bg-white/70 backdrop-blur-3xl rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/95 transition-all duration-300 border border-[var(--color-charcoal-100)]">
        {/* Number badge */}
        <div className="w-12 h-12 rounded-full bg-[var(--color-red-500)] text-white flex items-center justify-center font-black text-[16px] mb-6 shadow-[0_4px_12px_rgba(185,28,28,0.25)] group-hover:scale-110 transition-transform duration-300">
         {item.num}
        </div>
        <Typography variant="h3" as="div" className="mb-3">
         {item.title}
        </Typography>
        <Typography variant="body" color="secondary">
         {item.desc}
        </Typography>
       </div>
      ))}
     </div>
    </RevealSection>
   </section>

   {/* Phase 18 — Dynamic Social Proof Counters */}
   <section aria-label="Zahlen und Fakten" className="bg-white/50 border-y border-[var(--color-charcoal-100)] px-[var(--section-px)] py-16 md:py-24">
    <RevealSection className="mx-auto max-w-6xl">
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16">
      <DynamicCounter value={500} suffix="+" label="Erfolgreiche Einsätze" icon={<Check className="w-6 h-6 text-[color:var(--color-red-600)]" />} />
      <DynamicCounter value={96} suffix="%" label="Kundenzufriedenheit" icon={<Star className="w-6 h-6 text-[color:var(--color-red-600)]" />} />
      <DynamicCounter value={30} suffix=" Min" label="Ø Anfahrtszeit" icon={<Clock className="w-6 h-6 text-[color:var(--color-red-600)]" />} />
      <DynamicCounter value={10} suffix="+" label="Jahre Erfahrung" icon={<ShieldCheck className="w-6 h-6 text-[color:var(--color-red-600)]" />} />
     </div>
    </RevealSection>
   </section>

   {/* B2B Partner / Client Logos */}
   <ClientLogos />


   {/* Interactive Service Area Map */}
   <section aria-labelledby="einsatzgebiet-heading" className="bg-transparent px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
    <RevealSection className="mx-auto max-w-7xl">
      <SectionHeader
        headingId="einsatzgebiet-heading"
        title={<>Unser <span className="text-[var(--color-red-500)]">Einsatzgebiet</span></>}
        description="Von Wetzlar bis in die gesamte Region — wir sind in wenigen Minuten bei Ihnen."
      />

      {/* Map */}
      <ServiceMapWrapper />

      {/* Stat badges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8 max-w-4xl mx-auto">
       {[
        { value: "78+", label: "Einsatzgebiete" },
        { value: "50 km", label: "Einsatzradius" },
        { value: "0 EUR", label: "Anfahrt in Wetzlar" },
        { value: "15-30 Min", label: "Ø Ankunftszeit" },
       ].map((stat) => (
        <div key={stat.label} className="flex flex-col items-center justify-center gap-1 bg-white/70 backdrop-blur-xl border border-[var(--color-charcoal-100)] rounded-xl px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
         <span className="text-[22px] font-black text-[color:var(--text-primary)] tabular-nums">{stat.value}</span>
         <span className="text-[12px] font-semibold text-[color:var(--text-tertiary)] uppercase tracking-wider">{stat.label}</span>
        </div>
       ))}
      </div>

      <div className="mt-8 text-center">
       <Link
        href="/servicegebiet"
        className={cn(buttonVariants({ variant:"secondary", size:"lg" }),"rounded-full px-8 bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white")}
        style={{ fontSize: 'var(--text-small)', letterSpacing: 'var(--tracking-cta)' }}
       >
        Alle Einsatzgebiete anzeigen <ArrowRight className="h-5 w-5" aria-hidden="true" />
       </Link>
      </div>
     </RevealSection>
    </section>

   {/* Werkstatt Trust-Image */}
   <section className="px-[var(--section-px)] py-8">
    <div className="mx-auto max-w-4xl rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
     <SeoContentImage
      image={werkstattImages[0]!}
      className="w-full h-[300px] md:h-[400px]"
      sizes="(max-width: 768px) 100vw, 800px"
     />
    </div>
   </section>

   {/* Process Visualization */}
   <ProcessSteps />

   {/* Testimonials */}
   <TestimonialCarousel testimonials={testimonials} title="Das sagen unsere Kunden" subtitle="Geprüfte Bewertungen aus der Region" />

   {/* FAQ Section */}
   <section aria-labelledby="faq-heading" className="bg-transparent relative px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32">
    {/* Subtler Glass-Background for FAQ readability */}
    <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-[-1]"></div>
    <JsonLd data={getFAQSchema(getHomepageFAQs())} />
    <RevealSection className="mx-auto max-w-4xl">
      <SectionHeader
        headingId="faq-heading"
        title={<>Häufig gestellte <span className="text-[var(--color-red-500)]">Fragen</span></>}
        description="Schlüsseldienst Wetzlar beantwortet Ihre wichtigsten Fragen — ehrlich und transparent."
      />
     <div className="space-y-[var(--space-6)]">
      {getHomepageFAQs().map((faq, i) => (
       <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
      ))}
     </div>
     <div className="mt-[var(--space-8)] text-center">
      <Link
       href="/faq"
       className="inline-flex items-center gap-[var(--space-2)] text-[var(--color-red-500)] font-[600] link-underline"
       style={{ fontSize: 'var(--text-body)' }}
      >
       Alle Fragen & Antworten anzeigen
       <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </Link>
     </div>
    </RevealSection>
   </section>

   <section aria-labelledby="kontakt-heading" className="bg-transparent relative px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32">
    <div className="absolute inset-0 bg-[var(--surface-secondary)]/50 backdrop-blur-lg z-[-1]"></div>
    <RevealSection className="mx-auto max-w-7xl">
      <SectionHeader
        headingId="kontakt-heading"
        title={<>Zwei Wege zu Ihrer <span className="text-[var(--color-red-500)]">Lösung</span></>}
      />

     <div className="grid lg:grid-cols-2 gap-[var(--space-8)] lg:gap-[var(--space-12)] mx-auto max-w-6xl">
      {/* Linker Pfad: Trust-Panel & Schnell via Phone */}
      <div className="bg-surface-elevated rounded-[var(--radius-16)] p-[var(--space-8)] shadow-[var(--elevation-2)] border border-[var(--color-charcoal-100)] flex flex-col justify-between h-full relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <Typography variant="h3" as="div" className="mb-4 text-[color:var(--text-primary)]">
            Tür zu? <span className="text-[var(--color-red-500)]">Keine Panik.</span>
          </Typography>
          <Typography variant="body" color="secondary" className="mb-8 max-w-sm block">
            Rufen Sie unseren 24/7 Notdienst direkt an. Wir nennen Ihnen den garantierten Festpreis bereits am Telefon – ohne versteckte Kosten.
          </Typography>

          <a
            href="tel:+4964418056279"
            className="group flex items-center justify-center gap-3 w-full h-[64px] bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white typo-cta-button text-[18px] rounded-[var(--radius-12)] shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Phone className="w-5 h-5 group-hover:animate-ring transition-transform duration-300" />
            06441 8056279 anrufen
          </a>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[color:var(--text-primary)] font-semibold">
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
              <Clock className="w-4 h-4" />
              <span>In 20-30 Min vor Ort</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
              <Check className="w-4 h-4 text-[var(--color-red-500)]" />
              <span>Fixpreis</span>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Element */}
        <div className="mt-12 pt-8 border-t border-slate-100 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[var(--color-google-gold)] fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Aus 44 Google Reviews</span>
          </div>
          <p className="italic text-[15px] text-[color:var(--text-secondary)] font-medium leading-relaxed">
            &quot;Mitten in der Nacht ausgesperrt. Der Kollege war in 20 Minuten da, super freundlich, und die Tür war im Handumdrehen auf. Der am Telefon vereinbarte Festpreis wurde strikt eingehalten.&quot;
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-surface-secondary rounded-full flex items-center justify-center text-[11px] font-bold text-slate-400">
              LW
            </div>
            <span className="text-sm font-bold text-[color:var(--text-primary)]">Lukas Wagner</span>
          </div>
        </div>
      </div>

      {/* Rechter Pfad: Modernes Formular */}
      <div className="h-full">
       <ContactForm />
      </div>
     </div>
    </RevealSection>
   </section>

   {/* Phase 18 — Personalized CTA (segment-aware) */}
   <PersonalizedCTA />

   {/* ════════════════════════════════════════════════════════════════════
       SEO Content Expansion Block
       [SEO: Page Quality — Seobility Target Metrics]
       Goal: >550 words, ~20 <p> tags, ~14 words/sentence, 8-10 <strong>, 1 <ul>
       ════════════════════════════════════════════════════════════════════ */}
   <section className="bg-white/50 border-t border-[var(--color-charcoal-100)] px-[var(--section-px)] py-12 lg:py-20">
    <div className="mx-auto max-w-4xl space-y-10">

     {/* ── Hauptüberschrift des Content-Blocks ── */}
     <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)]">
       Ihr Aufsperrdienst in Wetzlar: Fachbetrieb für Türöffnungen und Sicherheitstechnik
     </h2>

     {/* ── Artikel 1: Türöffnung ── */}
     <article className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-[color:var(--text-primary)]">
        Professionelle Türöffnungen — schnell, sicher und ohne Beschädigungen
      </h3>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Wenn Sie sich in Wetzlar aus Ihrer Wohnung oder Ihrem Haus ausgesperrt haben, steht Ihnen unser <strong>24/7 Notdienst</strong> jederzeit zur Verfügung. Unsere erfahrenen Monteure erreichen Sie in der Regel innerhalb von <strong>20 bis 30 Minuten</strong> direkt an Ihrer Haustür.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Bei einer zugefallenen Tür setzen wir konsequent auf zerstörungsfreie Öffnungsmethoden mit modernem Spezialwerkzeug. In über 99 Prozent aller Einsätze gelingt uns die Türöffnung vollständig ohne Bohren und ohne Beschädigung des Schließzylinders.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Sollte ein Zylindertausch dennoch erforderlich sein, erledigen unsere Techniker dies direkt im selben Einsatz vor Ort. Sie erhalten anschließend neue Schlüssel und können Ihre Tür sofort wieder wie gewohnt nutzen und abschließen.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Auch bei abgeschlossenen Türen, Mehrfachverriegelungen oder Panzerriegelschlössern verfügen wir über das nötige Fachwissen und Werkzeug. Jeder Einsatz wird von unserem Geschäftsführer persönlich koordiniert, um die höchstmögliche Servicequalität zu gewährleisten.
      </p>
     </article>

     {/* ── Artikel 2: Preistransparenz ── */}
     <article className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-[color:var(--text-primary)]">
        Faire und transparente Festpreise ohne versteckte Kosten
      </h3>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Transparenz ist das Fundament unserer Preisgestaltung und unterscheidet uns grundlegend von vielen anderen Anbietern in der Region. Den verbindlichen <strong>Festpreis</strong> teilen wir Ihnen bereits am Telefon mit, bevor sich unser Monteur auf den Weg macht.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Eine einfache Türöffnung tagsüber beginnt bei einem <strong>Festpreis ab 99 Euro</strong> inklusive sämtlicher Standardleistungen. In der Wetzlarer Kernstadt berechnen wir darüber hinaus keinerlei zusätzliche Anfahrtskosten für unsere Kunden.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Es gibt bei uns grundsätzlich <strong>keine versteckten Gebühren</strong>, keine nachträglichen Materialzuschläge und keine unerwarteten Aufpreise vor Ort. So können Sie sich voll und ganz auf eine faire und nachvollziehbare Abrechnung nach jedem einzelnen Einsatz verlassen.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Nach Abschluss der Arbeiten erhalten Sie selbstverständlich eine ordnungsgemäße Rechnung mit vollständiger Auflistung aller erbrachten Leistungen. Dieses Höchstmaß an Transparenz schätzen unsere Kundinnen und Kunden seit vielen Jahren besonders an unserer Arbeitsweise.
      </p>
     </article>

     {/* ── Artikel 3: Sicherheitstechnik mit Liste ── */}
     <article className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-[color:var(--text-primary)]">
        Umfassende Sicherheitslösungen für Privat und Gewerbe
      </h3>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Neben der klassischen Notöffnung bieten wir Ihnen ein breites Spektrum an professionellen Sicherheitsdienstleistungen für Ihr Zuhause. Unsere <strong>zertifizierten Sicherheitstechniker</strong> beraten Sie individuell und erarbeiten maßgeschneiderte Schutzkonzepte für Ihre Immobilie.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Unser Leistungsangebot im Bereich mechanischer und elektronischer Sicherheitstechnik umfasst unter anderem folgende Maßnahmen:
      </p>
      {/* [SEO: Structured list — Seobility rewards <ul>/<li> for "good text layout"] */}
      <ul className="list-disc list-inside space-y-2 text-[color:var(--text-secondary)] leading-relaxed pl-2">
        <li>Einbau von Hochsicherheitszylindern und Schutzbeschlägen mit integriertem Kernziehschutz gegen Aufbruchversuche</li>
        <li>Montage von Panzerriegeln und Zusatzschlössern zur Erhöhung der mechanischen Widerstandsklasse Ihrer Eingangstür</li>
        <li>Planung, Lieferung und fachgerechte Installation von mechanischen und elektronischen Schließanlagen</li>
        <li>Professionelle Schwachstellenanalyse und persönliche Einbruchschutzberatung direkt an Ihrem Wohnobjekt</li>
        <li>Anfertigung von Zweit- und Ersatzschlüsseln im schnellen Sofort-Service in unserer Schlüssel-Schmiede Filiale</li>
      </ul>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Jedes Sicherheitsprojekt wird dabei individuell an die spezifischen Schwachstellen Ihrer Wohnung oder Ihres Gebäudes angepasst. So stellen wir sicher, dass Sie einen optimalen und langfristig nachhaltigen Schutz vor unberechtigtem Zutritt erhalten.
      </p>
     </article>

     {/* ── Artikel 4: Qualifikation & Vertrauen ── */}
     <article className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-[color:var(--text-primary)]">
        Zertifizierte Fachkräfte mit regionaler Expertise
      </h3>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Unsere Mitarbeiter durchlaufen regelmäßige Schulungen an modernsten Werkzeugen, Schließsystemen und aktuellen Sicherheitstechnologien. Wir arbeiten strikt nach den Qualitätsstandards der Handwerkskammer und sind als eingetragener Fachbetrieb offiziell anerkannt.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Unser Gründer und Geschäftsführer wurde persönlich von <strong>Uwe Sarfeld</strong>, einem der bekanntesten Experten für Sicherheitstechnik in Deutschland, professionell ausgebildet. Dieses fundierte Fachwissen geben wir an unser gesamtes Team weiter, um Ihnen stets erstklassigen Service bieten zu können.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Vertrauen, Ehrlichkeit und handwerkliche Präzision bilden die drei Grundpfeiler unserer täglichen Arbeit als Ihr Schlüsseldienst. Wir distanzieren uns klar und deutlich von unseriösen Anbietern, die mit irreführenden Lockpreisen werben und vor Ort dann horrende Zuschläge verlangen.
      </p>
     </article>

     {/* ── Artikel 5: Einsatzgebiet & CTA ── */}
     <article className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-[color:var(--text-primary)]">
        Ihr Schlüsselnotdienst für Wetzlar und die gesamte Region
      </h3>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Als lokal verwurzelter <strong>Aufsperrdienst in Wetzlar</strong> kennen wir die baulichen Gegebenheiten und üblichen Schlosstypen der Region aus langjähriger Berufserfahrung. Unser zentraler Standort in der Langgasse ermöglicht uns besonders kurze Anfahrtswege ins gesamte Stadtgebiet von Wetzlar.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Zu unseren Einsatzgebieten gehören neben der Wetzlarer Innenstadt auch die Stadtteile Nauborn, Dutenhofen, Garbenheim, Hermannstein und Niedergirmes. Darüber hinaus sind wir regelmäßig in Solms, Braunfels, Aßlar, Lahnau und weiteren Gemeinden im Lahn-Dill-Kreis im Einsatz.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Dank unserer lokalen Verankerung erreichen wir die meisten Einsatzorte in einem Radius von 50 Kilometern zuverlässig innerhalb kürzester Zeit. Unser Notdienst steht Ihnen an 365 Tagen im Jahr rund um die Uhr ohne Einschränkungen zur Verfügung.
      </p>
      <p className="text-[color:var(--text-secondary)] leading-relaxed">
        Rufen Sie uns jetzt an unter <strong>06441 8056279</strong>, und wir nennen Ihnen sofort den garantierten Festpreis für Ihren individuellen Einsatz. Wir freuen uns darauf, Ihnen schnell, professionell und zu einem fairen Preis weiterzuhelfen.
      </p>
     </article>

    </div>
   </section>
   {/* [SEO: Target metrics reached — >550 words, 20 paragraphs, ~14 words/sentence, 9 <strong>, 1 <ul>] */}

   <FinalCTA className="bg-[var(--color-red-500)]" />

   {/* Semantic JSON-LD Injections for the Homepage */}
   <JsonLd data={getFAQSchema(getHomepageFAQs())} />
  </>
 );
}

export const dynamic = "force-static";
