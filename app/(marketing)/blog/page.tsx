import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/schema";
import Link from "next/link";
import { ArrowRight, Lock, Key, Shield, AlertTriangle, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/lib/data/mdx";

export const metadata = generateSharedMetadata({
  title: "Sicherheitstechnik Blog",
  description: "Aktuelle Ratgeber & Tipps zu: ✔️ Einbruchschutz ✔️ Smart Locks ✔️ Sicherheitstechnik. Geballtes Fachwissen vom regionalen Experten aus Wetzlar.",
  path: "/blog",
});

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Blog", href: "/blog" },
  ];

  const categories = [
    {
      name: "Einbruchschutz",
      icon: <Shield className="w-6 h-6 text-[var(--color-red-500)]" />,
      description: "Tipps, wie Sie Ihr Zuhause effektiv absichern.",
      count: 12
    },
    {
      name: "Smarte Schließanlagen",
      icon: <Key className="w-6 h-6 text-[var(--color-red-500)]" />,
      description: "Alles über moderne und elektronische Schließsysteme.",
      count: 8
    },
    {
      name: "Sicherheitstechnik",
      icon: <Lock className="w-6 h-6 text-[var(--color-red-500)]" />,
      description: "Kameras, Alarmanlagen und mechanischer Schutz.",
      count: 15
    },
    {
      name: "Notfälle",
      icon: <AlertTriangle className="w-6 h-6 text-[var(--color-red-500)]" />,
      description: "Prävention und schnelle Hilfe im Notfall.",
      count: 6
    }
  ];

  const featuredPosts = getAllBlogPosts();

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Sicherheitstechnik Blog — Schlüssel Schmiede Wetzlar",
            "description": "Ratgeber, Tipps und aktuelles Wissen rund Einbruchschutz, smarte Türschlösser und Sicherheitstechnik in Wetzlar.",
            "url": `${siteUrl}/blog`,
            "blogPost": featuredPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.metadata.title,
              "url": `${siteUrl}/blog/${post.slug}`,
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
                  Sicherheits-Ratgeber
                </h1>
              </StaggerItem>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <p className="text-xl text-[color:var(--text-secondary)]">
                  Praktische Tipps, Expertenwissen und Updates rund um das Thema Gebäudesicherheit und moderner Einbruchschutz.
                </p>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-[var(--section-px)] py-16 bg-[var(--color-off-white)]">
        <div className="container mx-auto">
          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
            {categories.map((cat, i) => (
              <StaggerItem key={i} animation={entryAnimations.slideUpFade}>
                <div className="block h-full p-6 rounded-[var(--radius-lg)] bg-[var(--surface-primary)] border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(220,38,38,0.08)] transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--color-red-500)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-red-500)] group-hover:scale-110 transition-all duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">{cat.icon}</div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 relative z-10">{cat.name}</h3>
                  <p className="text-sm text-[color:var(--text-secondary)] mb-4 relative z-10 line-clamp-2">{cat.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-[var(--section-px)] py-20 lg:py-28">
        <div className="container mx-auto max-w-5xl">
          <StaggerReveal animation={entryAnimations.slideUpFade}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h2 className="typo-h2 mb-10">Neueste Beiträge</h2>
            </StaggerItem>

            <div className="space-y-10">
              {featuredPosts.map((post, i) => (
                <StaggerItem key={i} animation={entryAnimations.slideUpFade}>
                  <Link href={`/blog/${post.slug}`} className="block group border-b border-[var(--border-subtle)] last:border-0 pb-10 last:pb-0 hover:bg-[var(--color-off-white)]/50 p-4 -mx-4 rounded-[var(--radius-lg)] transition-all duration-300">
                    <article className="flex flex-col md:flex-row gap-6 md:gap-10">
                      <div className="flex-1 flex flex-col items-start">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white shadow-sm border border-[var(--border-subtle)] text-[color:var(--text-secondary)]">
                            {post.metadata.category}
                          </span>
                          <span className="text-xs font-semibold text-[color:var(--text-tertiary)] flex items-center gap-1.5 bg-[var(--surface-primary)] px-2 py-1 rounded-md">
                             <Clock className="w-3.5 h-3.5" />
                             {post.metadata.readingTime} Min.
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[var(--color-red-500)] transition-colors text-balance">
                          {post.metadata.title}
                        </h3>
                        <p className="text-base text-[color:var(--text-secondary)] mb-6 line-clamp-3 leading-relaxed">
                          {post.metadata.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-red-500)]/5 text-sm font-bold text-[color:var(--text-primary)] group-hover:bg-[var(--color-red-500)] group-hover:text-white transition-all duration-300 mt-auto">
                          Artikel lesen <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
