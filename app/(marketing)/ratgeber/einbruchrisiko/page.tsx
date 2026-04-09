import { Shield, Share2, Clipboard, HeartHandshake } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import RiskCalculator from "@/components/growth/RiskCalculator";
import { siteUrl } from "@/lib/schema";
import { Badge } from "@/components/ui/badge";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { sicherheitImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
  title: "Einbruchrisiko Rechner Wetzlar | Kostenloser Test",
  description: "Wie sicher ist Ihr Zuhause? ✔️ Kostenloser Einbruchrisiko-Check für Wetzlar ✔️ Individuelle Auswertung in 60 Sekunden. Jetzt online berechnen!",
  path: "/ratgeber/einbruchrisiko",
  exactTitle: true,
});

export default function EinbruchrisikoPage() {
  const iframeCode = `<iframe src="${siteUrl}/embed/einbruchrisiko" width="100%" height="600" style="border:none; border-radius: 24px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);" title="Einbruchrisiko Rechner"></iframe>`;

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      <section className="relative pt-[180px] pb-[100px] lg:pt-[220px] lg:pb-[140px] bg-[var(--surface-elevated)] overflow-hidden">
        <div className="container mx-auto px-[var(--section-px)] relative z-10 text-center flex flex-col items-center">
          <Breadcrumbs items={[
            { name: "Ratgeber", href: "/blog" },
            { name: "Einbruchrisiko-Rechner", href: "/ratgeber/einbruchrisiko" }
          ]} light={false} />
          
          <div className="mt-8 max-w-3xl mx-auto">
            <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <div className="inline-flex items-center justify-center p-3 bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] rounded-2xl mb-6">
                  <Shield className="w-8 h-8" />
                </div>
              </StaggerItem>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                  Wie sicher ist Ihr Zuhause?
                </h1>
              </StaggerItem>
              <StaggerItem animation={entryAnimations.slideUpFade}>
                <p className="text-xl text-[color:var(--text-secondary)]">
                  Unser lokaler Einbruchrisiko-Rechner analysiert Ihre Wohnsituation im Lahn-Dill-Kreis und gibt Ihnen eine Sofort-Einschätzung.
                </p>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-[var(--section-px)] py-16 md:py-24 relative -mt-20 z-20">
        <div className="container mx-auto">
          <StaggerReveal animation={entryAnimations.slideUpFade}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <RiskCalculator />
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Ratgeber Visual */}
      <section className="px-[var(--section-px)] py-16 bg-white relative z-20">
       <div className="mx-auto max-w-4xl rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
        <SeoContentImage image={sicherheitImages[1]!} className="w-full h-[300px] md:h-[400px]" sizes="(max-width: 768px) 100vw, 800px" />
       </div>
      </section>

      {/* Embed Section for Partners */}
      <section className="px-[var(--section-px)] pt-0 pb-24 md:pb-32 bg-[var(--color-gray-900)] text-white">
        <div className="container mx-auto max-w-4xl">
          <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="text-center mb-12">
                <Badge className="bg-white/10 text-white mb-4 border-transparent hover:bg-white/20">
                  <Share2 className="w-3 h-3 mr-2" /> Für Partner & Makler
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Nutzen Sie diesen Rechner auf Ihrer Website
                </h2>
                <p className="text-gray-400 text-lg">
                  Bieten Sie Ihren Kunden Mehrwert. Binden Sie den Wetzlarer Sicherheits-Rechner völlig kostenlos per iFrame auf Ihrer Immobilien- oder Vereinswebsite ein.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">iFrame Embed Code</span>
                </div>
                <div className="relative group">
                  <pre className="bg-[#0D1117] p-4 rounded-xl overflow-x-auto text-sm md:text-sm text-gray-300 font-mono border border-white/5">
                    {iframeCode}
                  </pre>
                  {/* Note: the copy button is static here for SEO, in a real app would use a Client Component for clipboard, 
                      but since this is mostly for crawling/manual copying by Makler, selecting text is fine. */}
                </div>
                
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <HeartHandshake className="w-6 h-6 text-[var(--color-red-500)] shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Kostenlos nutzen</h4>
                      <p className="text-sm text-gray-400">Keine API-Keys, keine Anmeldung. Das Widget ist 100% kostenfrei.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-[var(--color-red-500)] shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Datenschutzkonform</h4>
                      <p className="text-sm text-gray-400">Das Widget sammelt keine personenbezogenen Daten und setzt keine Cookies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
