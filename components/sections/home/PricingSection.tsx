import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import RevealSection from "@/components/motion/RevealSection";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { Typography } from "@/components/ui/typography/Typography";
import { TrustBadgeRow } from "@/components/ui/TrustBadgeRow";
import { companyInfo } from "@/lib/data/company";

export function PricingSection() {
  return (
   <section
    id="preise"
    aria-labelledby="preise-heading"
    className="bg-[var(--color-charcoal-50)]/40 px-[var(--section-px)] pt-8 pb-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden"
   >
    <RevealSection className="mx-auto max-w-7xl relative z-10">
      <SectionHeader
        pill="SCHLÜSSELDIENST PREISE"
        headingId="preise-heading"
        title={<>Transparente <span className="text-[var(--color-red-500)]">Preise</span></>}
        description="Festpreis am Telefon , keine versteckten Kosten , Rechnung erst nach Abschluss."
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
        <span className="text-sm font-semibold text-[color:var(--text-primary)]">{item.text}</span>
       </div>
      ))}
     </div>

     <TrustBadgeRow className="mb-12" />

     {/* 3 Premium Cards */}
     <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

       {/* Card 1: Abends/Nachts (links, normal) */}
       <div className="flex flex-col rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <Typography variant="h3" as="div" className="mb-1">Nacht- & Abendtarif</Typography>
        <Typography variant="small" color="secondary" weight="semibold" className="mb-4 block">Zuschläge ab 20 Uhr</Typography>
        <p className="text-sm text-[color:var(--text-secondary)] mb-6 leading-relaxed">Gleiche Qualität, fairer Aufpreis. Mehraufwand wird vorab besprochen keine Überraschungen.</p>

        <div className="flex flex-col gap-4 mb-8 bg-red-50/50 p-5 rounded-xl border border-red-100 relative overflow-hidden shadow-inner">
         <div className="flex flex-col relative z-10 w-full">
          <div className="mb-1">
           <span className="text-xs font-black text-[var(--color-red-500)] uppercase tracking-widest flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red-500)] animate-pulse shadow-[0_0_8px_rgba(185,28,28,0.4)]" /> Abendtarif
           </span>
          </div>
          <div className="flex items-end justify-between">
           <span className="text-sm font-medium text-[color:var(--text-secondary)] pb-1.5">20:00 - 21:59 Uhr</span>
           <div className="flex items-baseline gap-1.5 shrink-0">
            <span className="text-xs font-bold text-[color:var(--text-tertiary)] uppercase tracking-wide">ab</span>
            <span className="text-4xl font-black leading-none tracking-tighter text-[color:var(--text-primary)] tabular-nums">119</span>
            <span className="text-lg font-bold text-[var(--color-red-500)]">€</span>
           </div>
          </div>
         </div>

         <div className="h-px w-full bg-gradient-to-r from-red-200/50 via-red-200/20 to-transparent relative z-10" />
         
         <div className="flex flex-col relative z-10 w-full mb-1">
          <div className="mb-1">
           <span className="text-xs font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.4)]" /> Nachttarif
           </span>
          </div>
          <div className="flex items-end justify-between">
           <span className="text-sm font-medium text-[color:var(--text-secondary)] pb-1.5">22:00 - 05:59 Uhr</span>
           <div className="flex items-baseline gap-1.5 shrink-0">
            <span className="text-xs font-bold text-[color:var(--text-tertiary)] uppercase tracking-wide">ab</span>
            <span className="text-5xl font-black leading-none tracking-tighter text-[color:var(--text-primary)] tabular-nums">149</span>
            <span className="text-xl font-bold text-[var(--color-red-500)]">€</span>
           </div>
          </div>
         </div>
        </div>

        <ul className="mb-8 space-y-3 flex-1">
         <li className="flex gap-3 items-start">
          <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
          <span className="text-base text-[color:var(--text-secondary)]">In 20–30 Min. bei Ihnen</span>
         </li>
         <li className="flex gap-3 items-start">
          <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
          <span className="text-base text-[color:var(--text-secondary)]">Preis vorab am Telefon</span>
         </li>
        </ul>

        <div className="w-full flex flex-col gap-1.5 mt-2">
         <a href="tel:+4964418056279" className="w-full h-[52px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          Notdienst anfordern
         </a>
         <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Festpreis wird am Telefon bestätigt</span>
        </div>
       </div>

       {/* Card 2: Tagsüber , Zugefallen vs Abgeschlossen (Mitte, Highlight) */}
       <div className="relative flex flex-col rounded-2xl bg-white/90 backdrop-blur-3xl p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 border-2 border-[var(--price-card-accent)] shadow-[0_0_30px_rgba(184,67,42,0.15),0_4px_20px_rgba(0,0,0,0.06)]">
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-[var(--action-primary)] text-white text-xs font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
         Am häufigsten benötigt
        </div>

        <Typography variant="h3" as="div" className="mb-1">{companyInfo.financial.pricingTexts?.headline}</Typography>
        <Typography variant="small" color="secondary" weight="semibold" className="mb-4 block">Mo–Fr {companyInfo.openingHours.store}</Typography>
        <p className="text-sm text-[color:var(--text-secondary)] mb-6 leading-relaxed">{companyInfo.financial.pricingTexts?.baseNote} {companyInfo.financial.pricingTexts?.consistencyNote} {companyInfo.financial.pricingTexts?.transparencyNote}</p>

        <div className="flex flex-col gap-4 mb-8 bg-red-50/50 p-5 rounded-xl border border-red-100 relative overflow-hidden shadow-inner">
         {/* Zugefallene Tür */}
         <div className="flex flex-col relative z-10 w-full">
          <div className="mb-1">
           <span className="text-xs font-black text-[var(--color-red-500)] uppercase tracking-widest flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red-500)]" /> Tür zugefallen
           </span>
          </div>
          <div className="flex items-end justify-between">
           <span className="text-sm font-medium text-[color:var(--text-secondary)] pb-1.5">Schlüssel steckt nicht</span>
           <div className="flex items-baseline gap-1.5 shrink-0">
            <span className="text-xs font-bold text-[color:var(--text-tertiary)] uppercase tracking-wide">ab</span>
            <span className="text-5xl font-black leading-none tracking-tighter text-[color:var(--text-primary)] tabular-nums">{companyInfo.financial.startingPriceValue}</span>
            <span className="text-xl font-bold text-[var(--color-red-500)]">€</span>
           </div>
          </div>
         </div>

         <div className="h-px w-full bg-gradient-to-r from-red-200/50 via-red-200/20 to-transparent relative z-10" />

         {/* Abgeschlossene Tür */}
         <div className="flex flex-col relative z-10 w-full">
          <div className="mb-1">
           <span className="text-xs font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.4)]" /> Tür abgeschlossen
           </span>
          </div>
          <div className="flex items-end justify-between">
           <span className="text-sm font-medium text-[color:var(--text-secondary)] pb-1.5">Schlüssel steckt / zugedreht</span>
           <div className="flex items-baseline gap-1.5 shrink-0">
            <span className="text-xs font-bold text-[color:var(--text-tertiary)] uppercase tracking-wide">ab</span>
            <span className="text-5xl font-black leading-none tracking-tighter text-[color:var(--text-primary)] tabular-nums">189</span>
            <span className="text-xl font-bold text-[var(--color-red-500)]">€</span>
           </div>
          </div>
         </div>
        </div>

        <ul className="mb-8 space-y-3 flex-1">
         <li className="flex gap-3 items-start">
          <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
          <span className="text-base text-[color:var(--text-secondary)]">99 % zerstörungsfrei</span>
         </li>
         <li className="flex gap-3 items-start">
          <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
          <span className="text-base text-[color:var(--text-secondary)]">Festpreis ohne Extras</span>
         </li>
         <li className="flex gap-3 items-start">
          <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
          <span className="text-base text-[color:var(--text-secondary)]">Anfahrt Wetzlar kostenlos</span>
         </li>
        </ul>

        <div className="w-full flex flex-col gap-1.5 mt-2">
         <a href="tel:+4964418056279" className="w-full h-[56px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white transition-all duration-300 shadow-[0_4px_20px_rgba(185,28,28,0.3)] hover:shadow-[0_8px_30px_rgba(185,28,28,0.4)] hover:-translate-y-[2px]">
          Tagsüber zum Festpreis anrufen
         </a>
         <span className="typo-tiny text-[var(--color-charcoal-400)] text-center">Festpreis wird vor Anfahrt genannt</span>
        </div>
       </div>

       {/* Card 3: Wochenende */}
       <div className="flex flex-col rounded-2xl bg-white/70 backdrop-blur-2xl border border-[var(--color-charcoal-100)] p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <Typography variant="h3" as="div" className="mb-1">Wochenende & Feiertag</Typography>
        <Typography variant="small" color="secondary" weight="semibold" className="mb-4 block">Sa · So · Feiertags</Typography>
        <p className="text-sm text-[color:var(--text-secondary)] mb-8 leading-relaxed">Fixpreis inkl. Basisöffnung. Zusatzaufwand wird vorher abgestimmt.</p>

        <div className="flex items-baseline gap-1 mb-8">
         <span className="text-sm font-bold text-[color:var(--text-tertiary)] uppercase tracking-wider">ab</span>
         <span className="text-[4.5rem] font-black leading-none tracking-tighter text-[color:var(--text-primary)] tabular-nums">179</span>
         <span className="text-2xl font-bold text-[var(--value-price)]">€</span>
        </div>

        <ul className="mb-8 space-y-3 flex-1">
         <li className="flex gap-3 items-start">
          <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
          <span className="text-base text-[color:var(--text-secondary)]">Selber Techniker wie werktags</span>
         </li>
         <li className="flex gap-3 items-start">
          <Check className="h-5 w-5 shrink-0 text-[var(--value-icon-color)] mt-0.5" />
          <span className="text-base text-[color:var(--text-secondary)]">Kein Callcenter, direkt Wetzlar</span>
         </li>
        </ul>

        <div className="w-full flex flex-col gap-1.5 mt-2">
         <a href="tel:+4964418056279" className="w-full h-[52px] rounded-xl flex items-center justify-center typo-cta-button bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white transition-all duration-300">
          Wochenend-Festpreis erfragen
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
  );
}
