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
} from"lucide-react";
import Link from"next/link";
import { buttonVariants } from"@/components/ui/button";
import { cn } from"@/lib/utils";
import HeroSection from"@/components/HeroSection";
import TrustStrip from"@/components/trust/TrustStrip";
import ProcessSteps from"@/components/trust/ProcessSteps";
import AboutStatsSection from"@/components/about/AboutStatsSection";
import ReviewsSection from"@/components/reviews/ReviewsSection";
import GoogleReviewsBadge from"@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from"@/components/reviews/reviews.data";
import { getHomepageFAQs } from"@/lib/faqData";
import { getFAQSchema } from"@/lib/faqSchema";
import FAQAccordion from"@/components/ui/FAQAccordion";
import ContactForm from"@/components/contact/ContactForm";
import FinalCTA from"@/components/ui/FinalCTA";
import RevealSection from"@/components/motion/RevealSection";

export default function HomePage() {
 return (
  <>
   {/* Hero Section */}
   <HeroSection />

   <div className="relative z-20 w-full px-[var(--space-4)] -mt-[72px] lg:-mt-[96px] flex flex-col items-center gap-[var(--space-6)] pointer-events-none">
    {/* Pointer-events-auto on children so they remain clickable, container is none to avoid blocking clicks in between */}
    <aside aria-label="Google-Bewertungen" className="pointer-events-auto">
     <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
    </aside>

    <div className="w-full pointer-events-auto px-2">
     <TrustStrip />
    </div>
   </div>

   {/* Pricing Section */}
   <section
    id="preise"
    aria-label="Transparente Festpreise für Türöffnungen"
    className="bg-transparent px-[var(--space-6)] py-[var(--space-16)] lg:py-[var(--space-20)] relative overflow-hidden"
   >
    <RevealSection className="mx-auto max-w-7xl relative z-10">
     <div className="text-center mb-[var(--space-12)]">
      <h2 className="typo-h2 text-[var(--text-primary)]">
       Transparente <span className="text-[var(--color-red-500)]">Preise</span>
      </h2>
      <div className="mx-auto h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)]" />
      <p className="typo-lead text-[var(--text-secondary)] max-w-2xl mx-auto">
       Festpreis am Telefon — keine versteckten Kosten — Rechnung erst nach Abschluss.
      </p>
     </div>

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
        <span className="text-[14px] font-semibold text-[var(--text-primary)]">{item.text}</span>
       </div>
      ))}
     </div>

     {/* 3 Premium Cards */}
     <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

      {/* Card 1: Tagsüber */}
      <div className="flex flex-col rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
       <h3 className="typo-h4-card text-[var(--text-primary)] mb-1">Tagsüber ausgesperrt?</h3>
       <span className="typo-small text-[var(--text-secondary)] font-medium mb-8 block">Montag – Freitag (06:00 – 19:59 Uhr)</span>

       <div className="flex items-baseline gap-1 mb-8">
        <span className="text-[13px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider">ab</span>
        <span className="text-[80px] font-black leading-none tracking-tighter text-[var(--text-primary)] tabular-nums">99</span>
        <span className="text-[28px] font-bold text-[var(--value-price)]">€</span>
       </div>

       <ul className="mb-8 space-y-3 flex-1">
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[var(--text-secondary)]">Professionelle Türöffnung</span>
        </li>
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[var(--text-secondary)]">Ohne Beschädigung (bei zugefallener Tür)</span>
        </li>
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[var(--text-secondary)]">Festpreis inkl. Standardleistungen</span>
        </li>
       </ul>

       <div className="w-full flex flex-col gap-1.5 mt-2">
        <a href="tel:+4964418056544" className="w-full h-[52px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
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

       <h3 className="typo-h4-card text-[var(--text-primary)] mb-1">Abends oder nachts?</h3>
       <span className="typo-small text-[var(--text-secondary)] font-medium mb-6 block">Spätzuschlag je nach Uhrzeit</span>

       <div className="flex flex-col gap-4 mb-8 bg-white/40 p-5 rounded-xl border border-[var(--color-charcoal-100)]">
        <div className="flex items-center justify-between">
         <span className="text-[14px] font-medium text-[var(--text-secondary)]">20:00 – 21:59 Uhr:</span>
         <div className="flex items-baseline gap-1">
          <span className="text-[12px] font-bold text-[var(--text-tertiary)] uppercase tracking-wide">ab</span>
          <span className="text-[36px] font-black leading-none tracking-tight text-[var(--text-primary)] tabular-nums">119</span>
          <span className="text-[18px] font-bold text-[var(--value-price)]">€</span>
         </div>
        </div>
        <div className="h-px w-full bg-[var(--color-charcoal-100)]" />
        <div className="flex items-center justify-between">
         <span className="text-[14px] font-medium text-[var(--text-secondary)]">22:00 – 05:59 Uhr:</span>
         <div className="flex items-baseline gap-1">
          <span className="text-[12px] font-bold text-[var(--text-tertiary)] uppercase tracking-wide">ab</span>
          <span className="text-[44px] font-black leading-none tracking-tight text-[var(--text-primary)] tabular-nums">149</span>
          <span className="text-[20px] font-bold text-[var(--value-price)]">€</span>
         </div>
        </div>
       </div>

       <ul className="mb-8 space-y-3 flex-1">
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[var(--text-secondary)]">Priorisierter Notdienst-Einsatz</span>
        </li>
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[var(--text-secondary)]">Garantierte Ankunft in 20-30 Min.</span>
        </li>
       </ul>

       <div className="w-full flex flex-col gap-1.5 mt-2">
        <a href="tel:+4964418056544" className="w-full h-[56px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white transition-all duration-300 shadow-[0_4px_20px_rgba(185,28,28,0.3)] hover:shadow-[0_8px_30px_rgba(185,28,28,0.4)] hover:-translate-y-[2px]">
         Notdienst anfordern
        </a>
        <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Festpreis wird am Telefon bestätigt</span>
       </div>
      </div>

      {/* Card 3: Wochenende */}
      <div className="flex flex-col rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
       <h3 className="typo-h4-card text-[var(--text-primary)] mb-1">Wochenende / Feiertag?</h3>
       <span className="typo-small text-[var(--text-secondary)] font-medium mb-8 block">Samstag, Sonntag & Feiertage</span>

       <div className="flex items-baseline gap-1 mb-8">
        <span className="text-[13px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider">ab</span>
        <span className="text-[72px] font-black leading-none tracking-tighter text-[var(--text-primary)] tabular-nums">179</span>
        <span className="text-[26px] font-bold text-[var(--value-price)]">€</span>
       </div>

       <ul className="mb-8 space-y-3 flex-1">
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[var(--text-secondary)]">Rund um die Uhr Einsatzbereitschaft</span>
        </li>
        <li className="flex gap-3 items-start">
         <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
         <span className="text-[15px] text-[var(--text-secondary)]">Zerstörungsfreie Öffnung</span>
        </li>
       </ul>

       <div className="w-full flex flex-col gap-1.5 mt-2">
        <a href="tel:+4964418056544" className="w-full h-[52px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white transition-all duration-300">
         Jetzt anrufen
        </a>
        <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Kostenlos & unverbindlich</span>
       </div>
      </div>
     </div>

     {/* Unified Footnote */}
     <p className="mt-8 text-center text-[13px] text-[var(--text-tertiary)] italic max-w-3xl mx-auto leading-relaxed">
      *zzgl. Anfahrt. Wetzlarer Kernstadt: keine Anfahrtskosten. Festpreis richtet sich nach Art der Türbeschaffenheit (z.B. Doppelfalz).
     </p>

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
   <section aria-label="Schnelle und professionelle Türöffnungen" className="bg-transparent px-[var(--space-4)] md:px-[var(--space-8)] py-[var(--space-16)] lg:py-[var(--space-20)] relative overflow-hidden">
    <RevealSection className="mx-auto max-w-7xl relative z-10">
     <div className="text-center mb-[var(--space-12)]">
      <h2 className="typo-h2 text-[var(--text-primary)]">
       Unsere <span className="text-[var(--color-red-500)]">Sofort-Hilfe</span>
      </h2>
      <div className="mx-auto h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)]" />
      <p className="typo-lead text-[var(--text-secondary)] max-w-2xl mx-auto">
       Kompetente und schnelle Lösungen für Ihre individuelle Notsituation.
      </p>
     </div>

     {/* Bento Grid */}
     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {...[
       { icon: DoorOpen, title:"Haus- & Wohnungstüren", desc:"Zerstörungsfreie Öffnung in 99% der Fälle. Egal ob zugefallen oder abgeschlossen.", href:"/leistungen/turoeffnung", linkText:"Mehr erfahren", featured: true },
       { icon: Car, title:"Fahrzeug-Öffnung", desc:"Schonende Autoöffnung für alle Marken – garantiert ohne Kratzer oder Lackschäden.", href:"/leistungen/autooeffnung", linkText:"Mehr erfahren" },
       { icon: Lock, title:"Tresor-Öffnung", desc:"Beschädigungsfreie Experten-Öffnung für Heimsafes und professionelle Wertgelasse.", href:"/leistungen/tresoroeffnung", linkText:"Mehr erfahren" },
       { icon: ShieldCheck, title:"Einbruchschutz", desc:"Sicherung Ihrer Immobilien nach neuesten Standards und Einbau hochwertiger Zylinder.", href:"/leistungen/sicherheitstechnik", linkText:"Mehr erfahren" },
       { icon: Key, title:"Schließanlagen", desc:"Planung und Montage von Schließanlagen für private und gewerbliche Objekte.", href:"/leistungen/schliessanlagen", linkText:"Mehr erfahren" },
       { icon: Key, title:"Schlüssel nachmachen", desc:"Präzise Zweitschlüssel und Ersatzschlüssel als Sofort-Service in unserer Filiale.", href:"/leistungen/schluessel-nachmachen", linkText:"Mehr erfahren" },
      ].map((service, idx) => (
       <a
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
        <h3 className="typo-h4-card text-[var(--text-primary)] mb-2">
         {service.title}
        </h3>
        <p className="typo-body text-[var(--text-secondary)] mb-auto">
         {service.desc}
        </p>
        <div className="mt-6 flex items-center gap-2 font-semibold typo-small text-[var(--value-link-hover)] transition-colors">
         {service.linkText} <ArrowRight className="h-4 w-4 arrow-overshoot" aria-hidden="true" />
        </div>
       </a>
      ))}
     </div>

     {/* Persönlichkeits-Quote */}
     <div className="mt-8 relative rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-8 lg:p-10 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
       <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl bg-gradient-to-br from-[var(--value-primary)] to-[var(--color-ember-700)] flex items-center justify-center text-white text-2xl font-black shadow-[0_4px_20px_rgba(184,67,42,0.3)]">
        MS
       </div>
       <div className="flex flex-col flex-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3 text-yellow-500">
         {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <h3 className="text-[22px] font-bold text-[var(--text-primary)] mb-3">Chef-Monteur vor Ort</h3>
        <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed italic mb-4">
         &quot;Ihre Tür ist mein Handwerk. Ich verspreche Ihnen eine ehrliche Beratung, keine verdeckten Kosten und eine schnelle Lösung Ihres Problems.&quot;
        </p>
        <span className="inline-block self-start md:self-auto px-4 py-1.5 bg-[var(--value-primary)]/10 text-[var(--value-primary)] font-bold tracking-wider uppercase text-[11px] rounded-lg border border-[var(--value-primary)]/20">
         Geschäftsführer & Techniker
        </span>
       </div>
      </div>
     </div>
    </RevealSection>
   </section>

   {/* Why Us Section */}
   <section aria-label="Warum MS Schlüsseldienst Wetzlar?" className="bg-transparent px-[var(--space-6)] py-[var(--space-16)] lg:py-[var(--space-20)] overflow-hidden">
    <RevealSection className="mx-auto max-w-7xl">
     <div className="text-center mb-[var(--space-12)] lg:mb-[var(--space-16)]">
      <h2 className="typo-h2 text-[var(--text-primary)]">
       Warum <span className="text-[var(--color-red-500)]">MS Schlüsseldienst</span>?
      </h2>
      <div className="mx-auto h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)]" />
     </div>

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
        <h3 className="typo-h4-card text-[var(--text-primary)] mb-3">
         {item.title}
        </h3>
        <p className="typo-body text-[var(--text-secondary)]">
         {item.desc}
        </p>
       </div>
      ))}
     </div>
    </RevealSection>
   </section>

   {/* Über-Uns & Animierte Statistiken (Phase 6) */}
   <AboutStatsSection />

   {/* Process Visualization */}
   <ProcessSteps />

   {/* Testimonials */}
   <ReviewsSection />

   {/* FAQ Section */}
   <section aria-label="Häufig gestellte Fragen" className="bg-transparent relative px-[var(--section-px)] py-[var(--section-py)]">
    {/* Subtler Glass-Background for FAQ readability */}
    <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-[-1]"></div>
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{
      __html: JSON.stringify(getFAQSchema(getHomepageFAQs())),
     }}
    />
    <RevealSection className="mx-auto max-w-4xl">
     <div className="text-center mb-[var(--space-12)]">
      <h2 className="typo-h2 text-[var(--text-primary)]">
       Häufig gestellte <span className="text-[var(--color-red-500)]">Fragen</span>
      </h2>
      <div className="mx-auto h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)]"></div>
      <p className="typo-lead text-[var(--text-secondary)] mx-auto">
       Schlüsseldienst Wetzlar beantwortet Ihre wichtigsten Fragen — ehrlich und transparent.
      </p>
     </div>
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

   <section aria-label="Kontakt aufnehmen" className="bg-transparent relative px-[var(--space-6)] md:px-[var(--space-8)] py-[var(--space-16)] lg:py-[var(--space-20)]">
    <div className="absolute inset-0 bg-[var(--surface-secondary)]/50 backdrop-blur-lg z-[-1]"></div>
    <RevealSection className="mx-auto max-w-7xl">
     <div className="text-center mb-[var(--space-12)]">
      <h2 className="typo-h2 text-[var(--text-primary)]">
       Zwei Wege zu Ihrer <span className="text-[var(--color-red-500)]">Lösung</span>
      </h2>
      <div className="mx-auto h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)]"></div>
     </div>

     <div className="grid lg:grid-cols-2 gap-[var(--space-8)] lg:gap-[var(--space-12)] mx-auto max-w-6xl">
      {/* Linker Pfad: Schnell via Phone */}
      <div className="bg-white/80 backdrop-blur-2xl rounded-[var(--radius-16)] p-[var(--space-8)] shadow-[var(--elevation-3)] flex flex-col justify-center text-center border border-[var(--color-charcoal-100)]">
       <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] mx-auto mb-6">
        <Phone className="w-10 h-10" />
       </div>
       <h3 className="typo-h3 text-[var(--text-primary)] mb-4">Notfall? Tür zu?</h3>
       <p className="typo-body text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
        Verlieren Sie keine Zeit mit Formularen. Rufen Sie unseren 24/7 Notdienst direkt an. Wir nennen Ihnen den Festpreis bereits am Telefon.
       </p>
       <a
        href="tel:+4964418056544"
        className="inline-flex items-center justify-center gap-3 w-full h-[64px] bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white typo-cta-button text-[18px] rounded-[var(--radius-12)] shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-1 transition-all duration-300 group"
       >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        06441 8056544 anrufen
       </a>
       <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--text-tertiary)] font-medium">
        <Clock className="w-4 h-4 text-[var(--color-success)]" />
        <span>In 20-30 Min vor Ort</span>
       </div>
      </div>

      {/* Rechter Pfad: Modernes Formular */}
      <div className="h-full">
       <ContactForm />
      </div>
     </div>
    </RevealSection>
   </section>

   <FinalCTA className="bg-[var(--color-red-500)]" />
  </>
 );
}
