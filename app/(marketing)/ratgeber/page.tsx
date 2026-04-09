import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/schema";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { getAllRatgeberPosts } from "@/lib/data/mdx";

export const metadata = generateSharedMetadata({
  title: "Sicherheits-Ratgeber",
  description: "Detaillierte Schritt-für-Schritt Anleitungen und Fachwissen zu mechanischer & elektronischer Sicherheitstechnik für Ihr Zuhause.",
  path: "/ratgeber",
});

export default function RatgeberPage() {
  const breadcrumbs = [
    { name: "Ratgeber", href: "/ratgeber" },
  ];

  const ratgeberPosts = getAllRatgeberPosts();

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Ratgeber und Schlüssel Schmiede Wetzlar",
            "description": "Erweitertes Wissen und Anleitungen zur Prävention und zum technischen Gebäudeschutz.",
            "url": `${siteUrl}/ratgeber`,
            "blogPost": ratgeberPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.metadata.title,
              "url": `${siteUrl}/ratgeber/${post.slug}`,
              "datePublished": post.metadata.publishedAt
            }))
          })
        }}
      />
      <section className="relative pt-[180px] pb-[100px] lg:pt-[220px] lg:pb-[140px] bg-[var(--surface-elevated)] overflow-hidden">
        <div className="container mx-auto px-[var(--section-px)] relative z-10">
          <Breadcrumbs items={breadcrumbs} light={false} />
          
          <div className="max-w-3xl mt-8">
            <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                  Fachwissen & Anleitungen
                </h1>
              </StaggerItem>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <p className="text-xl text-[color:var(--text-secondary)]">
                  Tiefergehende Ratgeber-Artikel für Hauseigentümer. Alles über moderne Sicherheitstechnik, Schließanlagen und Prävention.
                </p>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Featured Pillar Content */}
      <section className="px-[var(--section-px)] py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl">
          <StaggerReveal animation={entryAnimations.slideUpFade}>
            {ratgeberPosts.length === 0 ? (
               <div className="text-center py-24 bg-[var(--color-off-white)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)]">
                 <ShieldCheck className="w-16 h-16 text-[color:var(--text-tertiary)] mx-auto mb-6 opacity-50" />
                 <h2 className="text-2xl font-bold mb-3 text-[color:var(--text-primary)]">Inhalte in Vorbereitung</h2>
                 <p className="text-[color:var(--text-secondary)] max-w-md mx-auto">
                   Unsere Redaktion arbeitet aktuell an neuen, detaillierten Pillar-Guides für diesen Bereich. Schauen Sie bald wieder vorbei!
                 </p>
                 <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-[var(--color-red-500)] font-medium hover:underline">
                   Zum Blog wechseln <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
            ) : (
              <div className="space-y-24">
                {Array.from(new Set(ratgeberPosts.map(p => p.metadata.category || 'Allgemein'))).map((categoryName) => {
                  const categoryPosts = ratgeberPosts.filter(p => (p.metadata.category || 'Allgemein') === categoryName);
                  if (categoryPosts.length === 0) return null;

                  return (
                    <div key={categoryName} className="mb-12">
                      <h2 className="text-3xl font-black text-[color:var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-subtle)]">
                        {categoryName}
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryPosts.map((post, i) => (
                          <StaggerItem key={i} animation={entryAnimations.slideUpFade}>
                            <Link href={`/ratgeber/${post.slug}`} className="flex flex-col h-full bg-white border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-[var(--color-red-500)] hover:-translate-y-2 transition-all duration-500 group">
                              <div className="w-14 h-14 rounded-full bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--color-red-500)] group-hover:text-white transition-all duration-500">
                                <BookOpen className="w-6 h-6" />
                              </div>
                              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-red-500)] transition-colors leading-tight">
                                {post.metadata.title}
                              </h3>
                              <p className="text-[color:var(--text-secondary)] mb-8 flex-1 leading-relaxed line-clamp-3">
                                {post.metadata.excerpt}
                              </p>
                              <div className="flex items-center gap-2 text-sm font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors mt-auto">
                                Ratgeber lesen <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                              </div>
                            </Link>
                          </StaggerItem>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
