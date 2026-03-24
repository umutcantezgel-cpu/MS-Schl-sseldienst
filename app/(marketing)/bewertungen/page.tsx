import { Star, Check, Award } from"lucide-react";
import EmergencyCTA from"@/components/EmergencyCTA";
import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";

export const metadata = generateSharedMetadata({
 title:"Bewertungen — 5.0 Sterne Kundenzufriedenheit",
 description:"Lesen Sie echte Kundenbewertungen und Erfahrungen mit dem MS Schlüsseldienst Wetzlar. 100% transparent und zuverlässig.",
 path:"/bewertungen",
});

const reviews = [
 { name:"Jens Brandenburger", city:"Wetzlar", rating: 5, date:"2026-03-17", text:"Schlüsseldienst ist Top, vor allem blitzschnell, sehr freundlich und hilfsbereit! Keine Wartezeit.", timeAgo:"Vor 1 Woche" },
 { name:"Emelie Herbel", city:"Wetzlar", rating: 5, date:"2026-03-10", text:"Einfach nur super freundlich! Wir standen in Wetzlar und haben dringend einen guten Schlüsseldienst gebraucht \u2013 und sind so froh, diesen hier gefunden zu haben!", timeAgo:"Vor 2 Wochen" },
 { name:"Sahar Koob", city:"Wetzlar", rating: 5, date:"2026-03-03", text:"Super schneller und zuverlässiger Service! Ich war ausgesperrt und der Schlüsseldienst war innerhalb kürzester Zeit vor Ort. Die Tür wurde professionell und ohne Beschädigungen geöffnet.", timeAgo:"Vor 3 Wochen" },
 { name:"Thomas S.", city:"Wetzlar", rating: 5, date:"2026-01-24", text:"Der Schlüsseldienst war eben vor Ort, super freundlich und hat die Tür komplett ohne Beschädigungen geöffnet. Absolut zuverlässig und professionell. Ich bin sehr zufrieden und kann den Service uneingeschränkt weiterempfehlen.", timeAgo:"Vor 2 Monaten" },
 { name:"Alexandra", city:"Wetzlar", rating: 5, date:"2026-02-24", text:"Sehr zuvorkommend und professionell. Wirklich ganz toller und außergewöhnlicher Service!!! Ich bin unendlich dankbar für die Geduld und das Engagement, was mir heute entgegengebracht wurde!", timeAgo:"Vor 1 Monat" },
 { name:"Tim Staudt", city:"Wetzlar", rating: 5, date:"2025-10-24", text:"Wir sind mit dem Schlüsseldienst überaus zufrieden. Ihr Mitarbeiter, Herr Saad, hat sich als kompetent, verbindlich und zuverlässig erwiesen und hat uns mit allen Problemen zielsicher beiseite gestanden.", timeAgo:"Vor 5 Monaten" },
 { name:"Christine Civic", city:"Wetzlar", rating: 5, date:"2025-05-24", text:"Schnell, freundlich und professionell! Der Schlüsseldienst war zügig vor Ort und hat meine Tür ohne Schaden geöffnet. Absolut zufrieden \u2013 sehr empfehlenswert!", timeAgo:"Vor 10 Monaten" },
 { name:"Francesca Bischof", city:"Wetzlar", rating: 5, date:"2025-05-24", text:"Perfekter Service! Extrem freundlich und zuvorkommend. Bei jedem Arbeitsschritt und preislichen Veränderungen absolut transparent und fair.", timeAgo:"Vor 10 Monaten" },
 { name:"Tasha", city:"Wetzlar", rating: 5, date:"2025-07-24", text:"Herr M. ist sofort ans Telefon gegangen, war schnell vor Ort und hat die Tür zügig und professionell geöffnet. Sehr freundlich und zuverlässig \u2013 absolut empfehlenswert!", timeAgo:"Vor 8 Monaten" },
 { name:"Deniz Kaplan", city:"Wetzlar", rating: 5, date:"2025-03-24", text:"Ich kann Mina Schlüsseldienst in Wetzlar nur wärmstens empfehlen! Der Service war außergewöhnlich schnell \u2013 innerhalb kürzester Zeit vor Ort und unser Problem war sofort gelöst.", timeAgo:"Vor 1 Jahr" },
 { name:"Carlos Sanchez", city:"Wetzlar", rating: 5, date:"2025-03-24", text:"Tür zugefallen und in der Kälte ausgeschlossen. Er war innerhalb von 20 Minuten da und hat uns geholfen. Alles lief fair ab.", timeAgo:"Vor 1 Jahr" },
 { name:"Vencislav Redling", city:"Wetzlar", rating: 5, date:"2025-03-24", text:"Einen ehrlicheren Schlüsseldienst kann man sich nicht wünschen. Um 2 Uhr nachts hatte sich der Nachbar ausgesperrt und nach einem sehr netten Telefonat war der Schlüsseldienst schnell vor Ort.", timeAgo:"Vor 1 Jahr" },
];

function generateReviewSchema() {
 return {"@context":"https://schema.org","@type":"LocalBusiness","name":"Schlüsseldienst Wetzlar","aggregateRating": {"@type":"AggregateRating","ratingValue":"5.0","reviewCount":"44","bestRating":"5","worstRating":"1"
  },"review": reviews.map(r => ({"@type":"Review","author": {"@type":"Person","name": r.name },"datePublished": r.date,"reviewBody": r.text,"reviewRating": {"@type":"Rating","ratingValue": r.rating,"bestRating": 5,"worstRating": 1
   }
  }))
 };
}

function StarRating({ rating }: { rating: number }) {
 return (
  <div className="flex gap-1 text-[var(--color-yellow-400)] drop-shadow-sm" aria-label={`${rating} von 5 Sternen`} role="img">
   {[...Array(5)].map((_, i) => (
    <Star
     key={i}
     className={`h-5 w-5 ${i < rating ?"fill-current" :"text-[var(--border-subtle)]"}`}
     aria-hidden="true"
    />
   ))}
  </div>
 );
}

export default function BewertungenPage() {
 const breadcrumbs = [
  { name:"Bewertungen", href:"/bewertungen" }
 ];

 return (
  <div className="bg-[var(--surface-secondary)] text-[color:var(--text-primary)] font-sans min-h-screen">
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateReviewSchema()) }}
   />

   {/* Hero Section — Premium Dark */}
   <section className="relative pt-[180px] pb-[var(--space-64)] lg:pt-[220px] lg:pb-[var(--space-96)] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    {/* Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:"radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={false} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-[color:var(--text-secondary)] text-[14px] font-medium tracking-wide">
            <Award className="w-4 h-4 text-[var(--color-yellow-400)]" />
            <span>44 verifizierte Google Rezensionen</span>
          </div>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tight text-[color:var(--text-primary)] leading-[1.1]">
            Das sagen unsere <span className="text-[var(--color-red-500)]">Kunden</span>
          </h1>
        </StaggerItem>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-4xl font-extrabold text-white">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-1 text-[var(--color-yellow-400)]" aria-label="5.0 von 5 Sternen" role="img">
                  {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[color:var(--text-tertiary)] mt-1">Google Rezensionen</span>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-secondary)] pointer-events-none z-[1]" />
   </section>

   {/* Reviews Grid */}
   <section aria-label="Einzelne Kundenbewertungen" className="px-[var(--section-px)] -mt-16 lg:-mt-24 pb-[var(--section-py)] relative z-20">
    <div className="mx-auto max-w-7xl">
     <StaggerReveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
      {reviews.map((review) => (
       <StaggerItem key={review.name} animation={entryAnimations.slideUpFade}>
         <article className="rounded-[var(--radius-24)] bg-white p-8 shadow-[var(--elevation-2)] border border-[var(--border-subtle)] h-full flex flex-col justify-between hover:shadow-[var(--elevation-3)] transition-all group">
          <div>
            <div className="flex justify-between items-start mb-6">
            <StarRating rating={review.rating} />
            <time className="text-[13px] font-medium text-[color:var(--text-tertiary)] bg-[var(--surface-secondary)] px-3 py-1 rounded-full" dateTime={review.date}>{review.timeAgo}</time>
            </div>
            <blockquote className="text-[16px] text-[color:var(--text-secondary)] leading-relaxed relative">
            <span className="absolute -left-2 -top-2 text-4xl text-[var(--border-subtle)] font-serif leading-none opacity-50">&quot;</span>
            <span className="relative z-10 italic">{(review.text)}</span>
            </blockquote>
          </div>
          <footer className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-4">
           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-red-500)]/10 font-bold text-[var(--color-red-500)] text-lg group-hover:scale-110 transition-transform" aria-hidden="true">
            {review.name[0]}
           </div>
           <div>
            <div className="font-bold text-[color:var(--text-primary)]">{review.name}</div>
            <div className="text-sm text-[color:var(--text-tertiary)] flex items-center gap-1">
              <Check className="w-3 h-3 text-[var(--color-success)]" /> Verifizierte Kundin aus {review.city}
            </div>
           </div>
          </footer>
         </article>
       </StaggerItem>
      ))}
     </StaggerReveal>
    </div>
   </section>

   <aside aria-label="Notfall-Kontakt">
    <EmergencyCTA />
   </aside>
  </div>
 );
}
