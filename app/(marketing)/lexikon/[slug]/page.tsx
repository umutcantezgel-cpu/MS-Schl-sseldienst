import { notFound } from "next/navigation";
import { lexikonData } from "@/lib/data/lexikon";
import { generateSharedMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpen, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { siteUrl } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const entry = lexikonData.find((e) => e.slug === resolvedParams.slug);
  
  if (!entry) return {};

  return generateSharedMetadata({
    title: `${entry.title} | Schließtechnik Lexikon Wetzlar`,
    description: entry.definition,
    path: `/lexikon/${entry.slug}`
  });
}

export async function generateStaticParams() {
  return lexikonData.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function LexikonEntryPage({ params }: Props) {
  const resolvedParams = await params;
  const entry = lexikonData.find((e) => e.slug === resolvedParams.slug);

  if (!entry) {
    notFound();
  }

  const relatedEntries = entry.relatedSlugs 
    ? lexikonData.filter(e => entry.relatedSlugs!.includes(e.slug))
    : [];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entry.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: entry.title,
    description: entry.definition,
    url: `${siteUrl}/lexikon/${entry.slug}`
  };

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      <JsonLd data={faqSchema} />
      <JsonLd data={webPageSchema} />

      <section className="relative pt-[180px] pb-[60px] lg:pt-[220px] lg:pb-[100px] bg-[var(--surface-elevated)] overflow-hidden">
        <div className="container mx-auto px-[var(--section-px)] relative z-10 text-center flex flex-col items-center">
          <Breadcrumbs items={[
            { name: "Lexikon", href: "/lexikon" },
            { name: entry.title, href: `/lexikon/${entry.slug}` }
          ]} light={false} />
          
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] rounded-2xl mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
              {entry.title}
            </h1>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-sm font-bold text-[color:var(--text-secondary)] uppercase tracking-wider mb-6">
              FAQ & {entry.category}
            </div>
            <p className="text-xl text-[color:var(--text-secondary)] font-medium">
              {entry.definition}
            </p>
          </div>
        </div>
      </section>

      <section className="px-[var(--section-px)] py-16 md:py-24 max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-[var(--color-red-500)] prose-img:rounded-3xl max-w-none mb-16">
          <h2 className="text-3xl font-extrabold text-[color:var(--text-primary)] mb-6">Was ist ein {entry.title}?</h2>
          <p className="text-[color:var(--text-secondary)] leading-relaxed">{entry.longDescription}</p>
        </div>

        {/* FAQs */}
        {entry.faqs.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-8 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[var(--color-red-500)]" /> Häufige Fragen
            </h3>
            <div className="grid gap-6">
              {entry.faqs.map((faq, index) => (
                <div key={index} className="bg-[var(--surface-secondary)] p-6 md:p-8 rounded-[var(--radius-24)] border border-[var(--border-subtle)]">
                  <h4 className="text-lg font-bold text-[color:var(--text-primary)] mb-3">{faq.question}</h4>
                  <p className="text-base text-[color:var(--text-secondary)] leading-relaxed m-0">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Terms */}
        {relatedEntries.length > 0 && (
          <div className="border-t border-[var(--border-subtle)] pt-12">
            <h3 className="text-lg font-bold text-[color:var(--text-secondary)] uppercase tracking-widest mb-6">Verwandte Begriffe</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedEntries.map(related => (
                <Link key={related.slug} href={`/lexikon/${related.slug}`} className="group flex items-center justify-between p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:border-[var(--color-red-500)] transition-all">
                  <span className="font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">{related.title}</span>
                  <ChevronRight className="w-5 h-5 text-[color:var(--text-tertiary)] group-hover:text-[var(--color-red-500)] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA Layer */}
      <section className="px-[var(--section-px)] py-16 bg-[var(--color-gray-900)] text-center text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Fragen zu Ihrer Sicherheitstechnik in Wetzlar?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Unsere Experten beraten Sie gerne kostenlos vor Ort.</p>
        <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-red-500/20">
          Experten kontaktieren <ChevronRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
