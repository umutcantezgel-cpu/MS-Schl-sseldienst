import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ShieldCheck, BookOpen, ArrowRight, Lightbulb, CheckCircle2, Lock, AlertTriangle } from "lucide-react";
import { getAllRatgeberPosts } from "@/lib/data/mdx";

export const metadata = generateSharedMetadata({
  title: "Ratgeber Einbruchschutz & Sicherheit | Wetzlar",
  description: "Detaillierte Schritt für Schritt Anleitungen und Fachwissen zu mechanischer & elektronischer Sicherheitstechnik für Ihr Zuhause.",
  path: "/ratgeber",
});

export default function RatgeberPage() {
  const ratgeberPosts = getAllRatgeberPosts();

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Ratgeber Einbruchschutz & Sicherheit | Wetzlar. Sicherheits-Ratgeber & Tipps | Schlüsseldienst Wetzlar.</div>
      {/* Hero */}
      <section className="relative pt-[180px] pb-[100px] lg:pt-[220px] lg:pb-[140px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ name: "Ratgeber", href: "/ratgeber" }]} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center max-w-3xl"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Sicherheits-Ratgeber & Tipps | Schlüsseldienst Wetzlar
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                In unserem Ratgeber teilen die Experten der Schlüssel Schmiede Wetzlar wertvolles Praxiswissen rund um Einbruchschutz, modernes Schlossmanagement, das richtige Verhalten bei Schlüsselverlust sowie Pflegeanleitungen für Ihre Zylinder.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Main Content & Blog Posts */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-16">

          {/* Intro Section */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <ShieldCheck className="w-7 h-7 text-[var(--color-red-500)]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Praxisnahes Fachwissen vom Schlüsseldienst-Profi
              </h2>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Einbruchschutz beginnt mit Information. Als lokaler Fachbetrieb für Wetzlar und den Lahn-Dill-Kreis möchten wir Sie unterstützen, potenzielle Schwachstellen an Haus, Wohnung oder Gewerbeobjekt frühzeitig zu erkennen.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Unsere Ratgeber-Artikel beleuchten aktuelle Themen von der DIN-Norm für Schutzbeschläge über elektronische Zylinder bis hin zur zerstörungsfreien Türöffnung im Notfall.
            </p>
          </div>

          {/* Articles Grid */}
          <div>
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)] mb-10">
              Aktuelle Ratgeber-Artikel & Einbruchschutz-Leitfäden
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ratgeberPosts.slice(0, 6).map((post) => (
                <div
                  key={post.slug}
                  className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-1 bg-red-50 text-[var(--color-red-600)] text-xs font-bold rounded-md uppercase">
                      {post.metadata.category || "Ratgeber"}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {post.metadata.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {post.metadata.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <Link
                      href={`/ratgeber/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-[var(--color-red-500)] hover:text-[var(--color-red-600)] hover:underline gap-1.5"
                    >
                      Ratgeber-Artikel zu „{post.metadata.title}“ lesen
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Behaviour Guide */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              So verhalten Sie sich richtig bei Türnotfällen
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-red-500)] text-white font-bold flex items-center justify-center text-sm">1</div>
                <h3 className="font-bold text-gray-900 text-sm">Ruhe bewahren</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Versuchen Sie nicht, die Tür mit Gewalt oder Plastikkarten aufzubrechen. Häufig wird dadurch der Schlossmechanismus oder die Zylinderfalle beschädigt.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-red-500)] text-white font-bold flex items-center justify-center text-sm">2</div>
                <h3 className="font-bold text-gray-900 text-sm">Festpreis verlangen</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Rufen Sie den Schlüsseldienst Wetzlar an unter 06441 8056279 und lassen Sie sich noch am Telefon einen verbindlichen Komplettpreis vor der Anfahrt nennen.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-red-500)] text-white font-bold flex items-center justify-center text-sm">3</div>
                <h3 className="font-bold text-gray-900 text-sm">Ausweis bereithalten</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Halten Sie Ihren Personalausweis oder Mietvertrag bereit, damit der Techniker Ihre Zugangsberechtigung zum Objekt ordnungsgemäß verifizieren kann.
                </p>
              </div>
            </div>
          </div>

          {/* Link to Main Blog */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Möchten Sie noch mehr über Einbruchschutz lernen?</h2>
            <p className="text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
              In unserem Blog veröffentlichen wir regelmäßig neue Beiträge zu Schließanlagen, Testberichten moderner Zylinder und Kriminalitätsstatistiken im Lahn-Dill-Kreis.
            </p>
            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[var(--color-red-500)] text-white font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-md gap-2"
              >
                Alle Ratgeber & Sicherheitsartikel im Blog lesen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
