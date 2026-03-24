import { Star, Check, Award } from"lucide-react";
import EmergencyCTA from"@/components/EmergencyCTA";
import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";

export const metadata = generateSharedMetadata({
 title:"Bewertungen — 4.9 Sterne Kundenzufriedenheit",
 description:"Lesen Sie echte Kundenbewertungen und Erfahrungen mit dem MS Schlüsseldienst Wetzlar. 100% transparent und zuverlässig.",
 path:"/bewertungen",
});

const reviews = [
 { name:"Stefan", city:"Wetzlar", rating: 5, date:"2024-12-01", text:"Super Service! Schnelle Hilfe und sehr freundliches Personal. Ich war wirklich beeindruckt von der Professionalität und der zügigen Umsetzung meines Anliegens.", timeAgo:"Vor 2 Tagen" },
 { name:"Maria", city:"Gießen", rating: 5, date:"2024-11-25", text:"Ich bin begeistert. Die Reparatur ging sehr schnell und der Preis war absolut fair. Man merkt, dass hier Experten am Werk sind. Klare Weiterempfehlung!", timeAgo:"Vor 1 Woche" },
 { name:"Laura", city:"Wetzlar", rating: 5, date:"2024-11-01", text:"Sehr kompetent und hilfsbereit. Ich wurde umfassend beraten und alle meine Fragen wurden geduldig beantwortet. Das Team ist klasse!", timeAgo:"Vor 1 Monat" },
 { name:"Michael", city:"Herborn", rating: 5, date:"2024-11-01", text:"Top Leistung! Das Team ist extrem zuverlässig. Sie waren pünktlich vor Ort und haben die Arbeit sauber und zügig erledigt.", timeAgo:"Vor 1 Monat" },
 { name:"Julia", city:"Wetzlar", rating: 5, date:"2024-10-01", text:"Hervorragender Kundenservice. Sehr zu empfehlen. Man fühlt sich vom ersten Kontakt an gut aufgehoben und verstanden.", timeAgo:"Vor 2 Monaten" },
 { name:"Thomas", city:"Dillenburg", rating: 4, date:"2024-11-15", text:"Gute Arbeit insgesamt. Das Ergebnis ist top, nur ein Stern Abzug wegen einer leichten Verzögerung bei der Terminfindung. Ansonsten alles prima.", timeAgo:"Vor 2 Wochen" },
];

function generateReviewSchema() {
 return {"@context":"https://schema.org","@type":"LocalBusiness","name":"Schlüsseldienst Wetzlar","aggregateRating": {"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"127","bestRating":"5","worstRating":"1"
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
            <span>Über 120 verifizierte Erfahrungen</span>
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
              <span className="text-4xl font-extrabold text-white">4.9</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-1 text-[var(--color-yellow-400)]" aria-label="4.9 von 5 Sternen" role="img">
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
