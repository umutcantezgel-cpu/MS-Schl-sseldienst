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

function getLexikonTitle(entry: { title: string }) {
  let title = `${entry.title} | Schließtechnik Lexikon Wetzlar`;
  if (title.length < 45) {
    title = `${entry.title} einfach erklärt | Sicherheitslexikon Wetzlar`;
  }
  if (title.length > 55) {
    title = `${entry.title} | Lexikon`;
  }
  if (title.length > 55) {
    title = title.slice(0, 52) + "...";
  }
  return title;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const entry = lexikonData.find((e) => e.slug === resolvedParams.slug);
  
  if (!entry) return {};

  let title = getLexikonTitle(entry);

  let description = entry.definition || "";
  if (description.length < 120) {
    description = `${description} Verständliche Erklärungen im Sicherheitslexikon der Schlüssel Schmiede Wetzlar.`;
  }
  if (description.length > 130) {
    description = description.slice(0, 127) + "...";
  }

  return generateSharedMetadata({
    title,
    description,
    path: `/lexikon/${entry.slug}`,
    exactTitle: true,
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
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute z-0">{getLexikonTitle(entry)}. {entry.title}.</div>
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
              {entry.title} – Erklärung & Definition
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
          <h2 className="text-3xl font-extrabold text-[color:var(--text-primary)] mb-6">Was ist ein {entry.title}? – Detaillierte Erklärung & Definition</h2>
          <p className="text-[color:var(--text-secondary)] leading-relaxed">{entry.longDescription}</p>
          
          <h3 className="text-2xl font-extrabold text-[color:var(--text-primary)] mt-12 mb-4">Warum diese Erklärung und Definition für Ihre Sicherheit in Wetzlar entscheidend ist</h3>
          <p className="text-[color:var(--text-secondary)] leading-relaxed">
            Als renommierter Fachbetrieb und Schlüsseldienst in Wetzlar legen wir von der Schlüssel Schmiede allergrößten Wert darauf, unseren Kunden nicht nur handwerkliche Bestleistungen zu liefern, sondern auch lückenlose und transparente Aufklärung zu betreiben. Die obige Erklärung und Definition des Begriffs „{entry.title}“ soll Ihnen als verlässliche Orientierung dienen, um die oft komplexen und schwer durchschaubaren Zusammenhänge der modernen Sicherheitstechnik besser zu verstehen. Gerade wenn es um die Absicherung Ihrer eigenen Haustür, Ihrer Privatwohnung oder Ihres Gewerbeobjekts geht, ist fundiertes Fachwissen der allerbeste Schutz vor bösen Überraschungen und unliebsamen Zwischenfällen.
          </p>
          <p className="text-[color:var(--text-secondary)] leading-relaxed mt-6">
            Zahlreiche Begriffe aus der Schließ- und Sicherheitstechnik sind für Laien im Alltag nur schwer greifbar. Begriffe, Normen und technische Besonderheiten können schnell überfordern. Genau aus diesem Grund haben wir unser umfassendes Sicherheitslexikon ins Leben gerufen: um eine verständliche, praxisnahe Erklärung und Definition für {entry.title} sowie für viele weitere essenzielle Fachtermini bereitzustellen. Es ist unser tägliches Anliegen, dass Sie genau wissen, wofür Sie sich entscheiden und wie die einzelnen mechanischen oder elektronischen Komponenten ineinandergreifen, um Ihr Hab und Gut optimal zu schützen.
          </p>
          <p className="text-[color:var(--text-secondary)] leading-relaxed mt-6">
            Sollten Sie sich nach dem Lesen dieser Erklärung und Definition fragen, ob Ihre aktuelle Absicherung noch den neuesten polizeilichen Standards entspricht, möchten wir Sie daran erinnern: Theoretisches Wissen allein reicht oftmals nicht aus, um Einbrecher effektiv abzuschrecken. Die Schlüssel Schmiede Wetzlar bietet Ihnen daher eine professionelle, diskrete und völlig unverbindliche Sicherheitsberatung direkt bei Ihnen vor Ort im gesamten Lahn-Dill-Kreis an. Bei einem solchen Termin prüfen unsere zertifizierten Techniker ganz genau, ob hochrelevante Komponenten wie der {entry.title} bei Ihnen bereits fachgerecht verbaut sind, ob sie noch dem aktuellen Stand der Technik entsprechen oder ob akuter Optimierungsbedarf besteht, um Sicherheitslücken präventiv zu schließen.
          </p>
          <p className="text-[color:var(--text-secondary)] leading-relaxed mt-6">
            Zusätzlich zur reinen Theorie, die Ihnen diese Erklärung und Definition vermittelt, ist die absolut makellose, fachgerechte Montage in der Praxis essenziell. Selbst das teuerste und hochwertigste Bauteil verliert beinahe seine gesamte Schutzwirkung, wenn es von Laien falsch installiert oder mangelhaft justiert wird. Verlassen Sie sich bei solchen hochsensiblen Arbeiten daher immer auf ausgewiesene Expertise. Wir kombinieren das theoretische Wissen aus dieser Erklärung und Definition nahtlos mit unserer jahrelangen, täglichen praktischen Erfahrung im Schlüsseldienst- und Notdienst-Alltag in und um Wetzlar. So garantieren wir Ihnen nicht nur maximale Sicherheit für Ihre Familie und Ihr Eigentum, sondern auch ein dauerhaft gutes, unbeschwertes Gefühl in Ihren eigenen vier Wänden.
          </p>
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
