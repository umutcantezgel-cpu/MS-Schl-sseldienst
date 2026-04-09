import { generateSharedMetadata } from "@/lib/metadata";
import { getAllServices } from "@/lib/data/services";
import { getAllBlogPosts } from "@/lib/data/mdx";
import Link from "next/link";
import { Phone, CheckCircle2, ShieldCheck, DoorOpen, Car, KeyRound, Copy, Siren, Clock, Lock, Hammer } from "lucide-react";
import RelatedPosts from "@/components/blog/RelatedPosts";

export const metadata = generateSharedMetadata({
  title: "Alle Leistungen | Schlüsseldienst Wetzlar",
  description: "Alle Services im Überblick: ✔️ Türöffnung ab 99€ ✔️ Tresoröffnung ✔️ Einbruchschutz. Zertifiziert, schnell & lokal in Wetzlar verankert. Jetzt anrufen!",
  path: "/leistungen",
});

const iconMap: Record<string, any> = {
  "DoorOpen": DoorOpen,
  "Car": Car,
  "Shield": ShieldCheck,
  "Key": KeyRound,
  "Copy": Copy,
  "Siren": Siren,
  "Safe": Lock,
  "Clock": Clock,
  "default": Hammer,
};

export default function LeistungenPage() { 
  const services = getAllServices();

  return (
    <main className="bg-white pb-32 pt-32 lg:pt-40">
      
      {/* HERO SECTION */}
      <section className="px-[var(--section-px)] mb-20 lg:mb-32">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-red-500)]/10 text-[var(--color-red-600)] font-bold text-sm tracking-wide mb-6">
            <ShieldCheck className="w-4 h-4" />
            VdS-Anerkannte Experten
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[color:var(--text-primary)] tracking-tight mb-6">
            Unsere Leistungen im <span className="text-[var(--color-red-500)]">Überblick</span>
          </h1>
          <p className="text-lg md:text-xl text-[color:var(--text-secondary)] mx-auto max-w-3xl leading-relaxed">
            Egal ob Sie sich ausgesperrt haben, ein neues Schloss benötigen oder Ihr Haus absichern wollen - 
            wir sind 24/7 für Sie da. Mit Festpreis-Garantie und ehrlicher Arbeitsausführung.
          </p>
        </div>
      </section>

      {/* SERVICE BENTO GRID */}
      <section className="px-[var(--section-px)] mb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon ? iconMap[service.icon] || iconMap.default : iconMap.default;
              
              // Die wichtigsten Services größer darstellen (Highlight)
              const isHeroCard = idx === 0 || idx === 1; 

              return (
                <Link
                  key={service.slug}
                  href={`/leistungen/${service.slug}`}
                  className={`group relative flex flex-col p-8 rounded-[var(--radius-xl)] bg-white border border-[var(--border-subtle)] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${isHeroCard ? 'lg:col-span-2' : ''}`}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Icon className="w-48 h-48 -mr-12 -mt-12 text-[var(--color-red-500)] transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>

                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-red-500)] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h2 className="text-2xl font-black text-[color:var(--text-primary)] mb-3 group-hover:text-[var(--color-red-500)] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-[color:var(--text-secondary)] leading-relaxed mb-6 font-medium">
                      {service.shortDescription}
                    </p>
                    
                    {/* Feature Liste */}
                    <ul className="space-y-2 mb-8 mt-auto">
                      {(service.features || []).slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[color:var(--text-secondary)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-red-500)] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 font-bold text-[color:var(--text-primary)] flex items-center gap-2 mt-auto pt-4 border-t border-[var(--border-subtle)] group-hover:text-[var(--color-red-500)] transition-colors">
                    Details zu {service.title} <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST STRIP & CTA */}
      <section className="px-[var(--section-px)]">
        <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-gray-900 to-black rounded-[var(--radius-2xl)] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
          
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Lock className="w-64 h-64 text-white -mr-16 -mt-16" />
          </div>

          <div className="relative z-10 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold backdrop-blur-md border border-white/20">
            <Clock className="w-5 h-5" />
            24/7 Notdienst-Einsatzbereitschaft
          </div>

          <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white mb-6 tracking-tight max-w-2xl">
            Wir öffnen jede Tür - Schnell, sicher & zum Festpreis.
          </h2>

          <p className="relative z-10 text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Rufen Sie uns direkt an. Wir nennen Ihnen den Preis unverbindlich am Telefon. Keine versteckten Gebühren.
          </p>

          <a href="tel:+4964418056279" className="relative z-10 inline-flex items-center justify-center h-16 px-10 rounded-full font-black text-lg text-white bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(220,38,38,0.4)]">
            <Phone className="w-5 h-5 mr-2" />
            06441 - 8056279
          </a>
          
          <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-8 opacity-80">
            {['In 15-30 Min. vor Ort', 'Zerstörungsfrei in 99% der Fälle', 'IHK-Geprüft'].map((tag, idx) => (
              <span key={idx} className="text-sm text-gray-400 flex items-center gap-1.5 focus:outline-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* RELEVANT BLOG POSTS FOR SEO INTERLINKING */}
      <RelatedPosts posts={getAllBlogPosts()} type="blog" title="Aktuelles aus dem Blog" />

    </main>
  ); 
}

// Statically optimize this page
export const dynamic = "force-static";
