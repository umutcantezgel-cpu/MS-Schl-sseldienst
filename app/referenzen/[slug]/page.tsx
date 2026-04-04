import { Metadata } from 'next';
import { getCaseStudyBySlug } from '@/lib/data/case-studies';
import { getTestimonialById } from '@/lib/data/testimonials';
import { notFound } from 'next/navigation';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

import { generateSharedMetadata } from '@/lib/metadata';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const study = getCaseStudyBySlug(awaitedParams.slug);
  
  if (!study) {
    return generateSharedMetadata({
      title: 'Projekt nicht gefunden',
      description: 'Das gesuchte Projekt konnte nicht gefunden werden.',
      path: `/referenzen/${awaitedParams.slug}`,
      noindex: true,
    });
  }

  return generateSharedMetadata({
    title: `${study.title} | Referenzen`,
    description: (study.challenge || "").substring(0, 160) + '...',
    path: `/referenzen/${study.slug}`,
  });
}

import JsonLd from '@/components/seo/JsonLd';
import { createArticleSchema } from '@/lib/seo/jsonld';

export default async function CaseStudyPage({ params, searchParams }: Props) {
  const awaitedParams = await params;
  const study = getCaseStudyBySlug(awaitedParams.slug);

  if (!study) {
    notFound();
  }

  const testimonial = study.testimonialId ? getTestimonialById(study.testimonialId) : null;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wetzlar-schlüsseldienst.de";

  return (
    <>
      <JsonLd data={createArticleSchema({
        headline: study.title,
        description: study.challenge || study.title,
        datePublished: new Date().toISOString(),
        url: `${siteUrl}/referenzen/${study.slug}`,
        author: "Schlüssel Schmiede Wetzlar"
      })} />
      <main className="min-h-screen bg-slate-50">
        {/* 1. HERO */}
      <section className="bg-[#0A1A2F] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-red-500)] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 opacity-[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-block bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold text-white tracking-widest uppercase backdrop-blur-sm">
              {study.industry}
            </span>
            <span className="inline-block bg-[var(--color-red-500)]/20 border border-[var(--color-red-500)]/50 px-4 py-1.5 rounded-full text-sm font-bold text-[var(--color-red-500)] tracking-widest uppercase backdrop-blur-sm">
              {study.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {study.title}
          </h1>
          <p className="text-2xl text-blue-200/80 font-medium font-serif italic max-w-2xl mx-auto">
            {study.client}
          </p>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="container mx-auto px-4 max-w-4xl -mt-10 relative z-20 pb-24">
        
        {/* Metadaten Bar */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kunde</span>
            <span className="text-lg font-bold text-[#0A1A2F]">{study.client}</span>
          </div>
          <div className="w-full sm:w-px h-px sm:h-12 bg-slate-200"></div>
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Branche</span>
            <span className="text-lg font-bold text-[#0A1A2F]">{study.industry}</span>
          </div>
          <div className="w-full sm:w-px h-px sm:h-12 bg-slate-200"></div>
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Zeitraum</span>
            <span className="text-lg font-bold text-[#0A1A2F]">{study.date}</span>
          </div>
        </div>

        {/* 2. CHALLENGE */}
        <section className="mb-16 bg-white p-10 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6 flex items-center gap-3">
            <span className="w-6 h-6 rounded bg-[var(--color-red-500)] text-white flex items-center justify-center text-sm font-black">1</span>
            Die Herausforderung
          </h2>
          <div className="prose prose-lg text-slate-700 max-w-none leading-relaxed">
            <p>{study.challenge}</p>
          </div>
        </section>

        {/* 3. LÖSUNG */}
        <section className="mb-16 bg-white p-10 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6 flex items-center gap-3 relative z-10">
            <span className="w-6 h-6 rounded bg-[#0A1A2F] text-white flex items-center justify-center text-sm font-black">2</span>
            Unsere Lösung
          </h2>
          <div className="prose prose-lg text-slate-700 max-w-none leading-relaxed relative z-10">
            <p>{study.solution}</p>
          </div>
        </section>

        {/* 4. ERGEBNISSE & KPIs */}
        {study.results && study.results.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-8 text-center">Messbare Ergebnisse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {study.results.map((result, idx) => (
                <div key={idx} className="bg-white border-b-4 border-[var(--color-red-500)] rounded-2xl p-8 text-center shadow-md hover:-translate-y-1 transition-transform">
                  <div className="text-4xl font-black text-[#0A1A2F] tracking-tight mb-2">{result.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{result.metric}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. TECHNOLOGIEN */}
        {study.technologies && study.technologies.length > 0 && (
          <section className="mb-16 text-center">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Verwendete Technologien & Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {study.technologies.map((tech: string, idx: number) => (
                <span key={idx} className="bg-slate-200/50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 6. CLIENT TESTIMONIAL */}
        {testimonial && (
          <section className="mb-16">
            <TestimonialCard testimonial={testimonial} variant="featured" />
          </section>
        )}

        {/* LINK BACK */}
        {study.serviceSlug && (
           <div className="text-center">
            <Link 
              href={`/leistungen/${study.serviceSlug}`}
              className="inline-flex items-center text-[#0A1A2F] font-bold text-lg hover:text-[var(--color-red-500)] transition-colors"
            >
              Zum zugehörigen Service 
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
           </div>
        )}
      </div>

      {/* 7. CTA SEKTION */}
      <section className="bg-[#0A1A2F] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(45deg, #FFF 25%, transparent 25%, transparent 75%, #FFF 75%, #FFF), linear-gradient(45deg, #FFF 25%, transparent 25%, transparent 75%, #FFF 75%, #FFF)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6">Sie haben eine ähnliche Herausforderung?</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10">
            Lassen Sie uns gemeinsam eine maßgeschneiderte Sicherheitslösung für Ihr Objekt erarbeiten.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/anfrage"
              className="px-10 py-4 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold rounded-xl text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              Kostenlose Beratung
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

