"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useVisitorSegment } from "@/hooks/useVisitorSegment";
import { trackEvent } from "@/lib/analytics";

interface ServiceLink {
  href: string;
  title: string;
  description: string;
}

const SERVICE_LINKS: Record<string, ServiceLink[]> = {
  "/leistungen/turoeffnung": [
    { href: "/leistungen/schliessanlagen", title: "Schließanlagen", description: "Alte Schlösser austauschen lassen" },
    { href: "/preise", title: "Festpreise ansehen", description: "Transparente Preisliste" },
  ],
  "/leistungen/schliessanlagen": [
    { href: "/leistungen/sicherheitstechnik", title: "Sicherheitstechnik", description: "Einbruchschutz & Beratung" },
    { href: "/leistungen/turoeffnung", title: "Türöffnung", description: "Notfall-Öffnung ab 99€" },
  ],
  "/leistungen/sicherheitstechnik": [
    { href: "/leistungen/schliessanlagen", title: "Schließanlagen", description: "Professionelle Schließsysteme" },
    { href: "/kontakt", title: "Beratung anfragen", description: "Kostenlose Sicherheitsberatung" },
  ],
  "/leistungen/autooeffnung": [
    { href: "/leistungen/turoeffnung", title: "Türöffnung", description: "Auch Haustüren & Wohnungen" },
    { href: "/preise", title: "Festpreise", description: "Alle Preise im Überblick" },
  ],
  "/leistungen/schluessel-nachmachen": [
    { href: "/leistungen/schliessanlagen", title: "Schließanlagen", description: "Komplettes Schließsystem" },
    { href: "/kontakt", title: "Angebot anfragen", description: "Individuelle Beratung" },
  ],
};

const DEFAULT_LINKS: ServiceLink[] = [
  { href: "/leistungen/turoeffnung", title: "Türöffnung", description: "Notfall-Türöffnung ab 99€" },
  { href: "/leistungen/schliessanlagen", title: "Schließanlagen", description: "Professionelle Schließsysteme" },
  { href: "/preise", title: "Festpreise", description: "Transparente Preisliste" },
];

interface RelatedServicesProps {
  currentPath: string;
}

/**
 * Phase 18 — Related Services Component
 * Shows contextual service recommendations at page bottom.
 * Segment-aware: high-intent gets CTA-heavy recommendations.
 */
export default function RelatedServices({ currentPath }: RelatedServicesProps) {
  const segment = useVisitorSegment();
  const links = SERVICE_LINKS[currentPath] || DEFAULT_LINKS;

  // High-intent: prepend a strong CTA
  const showCallCta = segment === "high-intent";

  return (
    <section className="py-12 bg-[var(--color-charcoal-50)]" aria-label="Verwandte Leistungen">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3 className="text-lg font-bold text-[var(--color-charcoal-900)] mb-6">
          Das könnte Sie auch interessieren
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {showCallCta && (
            <a
              href="tel:+4964418056544"
              onClick={() => trackEvent("phone_click", { label: "related_services_call" })}
              className="group flex items-center gap-4 p-6 bg-[var(--color-red-500)] text-white rounded-xl hover:bg-[var(--color-red-600)] transition-colors shadow-sm"
            >
              <Phone className="h-6 w-6 shrink-0" />
              <div>
                <p className="font-bold text-sm">Sofort anrufen</p>
                <p className="text-xs text-white/80">06441 8056544 · 24/7 erreichbar</p>
              </div>
            </a>
          )}

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() =>
                trackEvent("service_detail_click", {
                  label: `related_${link.title}`,
                  category: "related_services",
                })
              }
              className="group flex items-center justify-between p-6 bg-white rounded-xl border border-[var(--color-charcoal-100)] hover:border-[var(--color-red-300)] hover:shadow-md transition-all"
            >
              <div>
                <p className="font-semibold text-sm text-[var(--color-charcoal-900)] group-hover:text-[var(--color-red-600)] transition-colors">
                  {link.title}
                </p>
                <p className="text-xs text-[var(--color-charcoal-500)] mt-0.5">
                  {link.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-[var(--color-charcoal-300)] group-hover:text-[var(--color-red-500)] transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
