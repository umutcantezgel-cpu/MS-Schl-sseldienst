import { getAllCaseStudies } from '@/lib/data/case-studies';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { getAllTestimonials } from '@/lib/data/testimonials';
import Link from 'next/link';
import { generateSharedMetadata } from '@/lib/metadata';
import { ShieldCheck, Award, Building, Home, CheckCircle2 } from 'lucide-react';

export const metadata = generateSharedMetadata({
  title: 'Referenzen & Erfolgsgeschichten | Schlüssel Schmiede Wetzlar',
  description: 'Erfahren Sie mehr über unsere erfolgreich abgeschlossenen Projekte, Türöffnungen und Sicherheitsinstallationen in und um Wetzlar.',
  path: '/referenzen',
  exactTitle: true,
});

export default function ReferenzenPage() {
  const caseStudies = getAllCaseStudies();
  const testimonials = getAllTestimonials();

  // Find featured (or use the first one)
  const featuredStudy = caseStudies[0];
  const otherStudies = caseStudies.slice(1);

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-32 pb-20 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A1A2F] mb-6 tracking-tight">
            Referenzen & Erfolgsgeschichten | Schlüsseldienst Wetzlar
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transparente Erfolgsgeschichten und dokumentierte Sicherheitskonzepte aus unserem täglichen Einsatz in Wetzlar. Als führender Schlüsseldienst Wetzlar betreuen wir Privathaushalte, Gewerbebetriebe, Kanzleien und Immobilienverwaltungen im gesamten Lahn-Dill-Kreis.
          </p>
        </div>
      </section>

      {/* Extended Introductory Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Award className="w-6 h-6 text-[var(--color-red-500)]" />
              Dokumentierte Qualität & Handwerkskompetenz in der Region
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Auf dieser Seite präsentieren wir Ihnen ausgewählte Referenzen & Erfolgsgeschichten unserer täglichen Arbeit als Schlüssel Schmiede Wetzlar. Jedes Projekt demonstriert unseren hohen Anspruch an Präzision, schadensfreie Öffnungstechniken und langlebige Sicherheitssysteme.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Ob schadensfreie Notöffnung von Hochsicherheitstüren in Mehrfamilienhäusern, die mechatronische Ausstattung von Gewerbeobjekten oder die fachgerechte Reparatur nach Einbruchversuchen – die Schlüssel Schmiede steht für lückenlose Transparenz und faire Konditionen.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-[var(--color-red-500)] inline-block rounded-full"></span>
              Ausgewähltes Hauptprojekt
            </h2>
            
            <Link 
              href={`/referenzen/${featuredStudy.slug}`}
              className="group flex flex-col md:flex-row bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="md:w-2/5 bg-[#0A1A2F] relative p-10 flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <span className="inline-block bg-[var(--color-red-500)] text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide mb-6">
                    {featuredStudy.industry}
                  </span>
                  <h3 className="text-3xl font-bold text-white leading-tight mb-4 group-hover:text-blue-200 transition-colors">
                    {featuredStudy.title}
                  </h3>
                  <p className="text-blue-100/80 font-medium">
                    {featuredStudy.client}
                  </p>
                </div>
              </div>
              
              <div className="md:w-3/5 p-10 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-3">Die Herausforderung</h4>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {featuredStudy.challenge}
                  </p>
                  
                  {featuredStudy.results && (
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {featuredStudy.results.map((result: { value: string; metric: string }, i: number) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="text-2xl font-black text-[#0A1A2F] mb-1">{result.value}</div>
                          <div className="text-sm font-medium text-slate-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center text-[var(--color-red-500)] font-bold group-hover:text-[var(--color-red-600)] transition-colors mt-auto">
                  Vollständigen Fallstudien-Bericht zu {featuredStudy.title} lesen
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      {otherStudies.length > 0 && (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-[var(--color-red-500)] inline-block rounded-full"></span>
              Weitere erfolgreich umgesetzte Projekte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherStudies.map((study) => (
                <CaseStudyCard key={study.id} caseStudy={study} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Categories Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <h2 className="text-3xl font-bold text-[#0A1A2F] text-center">
            Unsere Kernbereiche für Geschäftskunden & Privathaushalte
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Privater Einbruchschutz & Türöffnung</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Von der zerstörungsfreien Notöffnung an Sonntagen bis zur Nachrüstung von Panzerriegeln und VdS-geprüften Schließzylindern für Ein- und Mehrfamilienhäuser in Wetzlar.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-900 flex items-center justify-center font-bold">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Gewerbliche Schließanlagen & Firmenobjekte</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Konzeptionierung, Lieferung und Montage von Generalschlüssel-Systemen und elektronischen Zutrittskontrollen für Kanzleien, Praxen und Firmengebäude im Lahn-Dill-Kreis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1A2F] mb-4">
              Stimmen unserer Kunden aus Wetzlar
            </h2>
            <p className="text-lg text-slate-600">
              Überzeugen Sie sich selbst von unserer Expertise anhand echter Kundenbewertungen aus dem Wetzlarer Raum.
            </p>
          </div>
          <TestimonialGrid testimonials={testimonials} showFilters={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A1A2F] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Benötigen Sie eine ähnliche Sicherheitslösung?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Ob Notöffnung oder komplexes Sicherheitskonzept – Ihr Schlüsseldienst Wetzlar steht Ihnen jederzeit mit Rat und Tat zur Seite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/anfrage"
              className="px-8 py-4 font-bold text-white bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] rounded-xl uppercase tracking-wider transition-colors shadow-lg shadow-red-500/20"
            >
              Unverbindliches Festpreis-Angebot für Ihr Objekt anfragen
            </Link>
            <Link 
              href="tel:+4964418056279"
              className="px-8 py-4 font-bold text-white bg-white/10 hover:bg-white/20 border-2 border-white/20 rounded-xl uppercase tracking-wider backdrop-blur-md transition-colors"
            >
              Schlüsseldienst Wetzlar anrufen: 06441 8056279
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
