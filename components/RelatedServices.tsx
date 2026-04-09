import { SeoLink } from "@/components/nav/SeoLink";
import { CONTENT_GRAPH } from"@/lib/contentGraph";
import { ArrowRight } from"lucide-react";

export default function RelatedServices({ currentServiceId }: { currentServiceId: string }) {
  const currentNode = CONTENT_GRAPH.find(n => n.slug === currentServiceId || n.slug === `/leistungen/${currentServiceId}`);
  if (!currentNode || !currentNode.relatedSlugs || currentNode.relatedSlugs.length === 0) return null;

  return (
    <section className="my-12 py-8 border-t border-[var(--border-subtle)]">
      <div className="text-2xl font-bold text-[color:var(--text-primary)] mb-6">Passende Leistungen für Sie</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentNode.relatedSlugs.map((slug) => {
          const service = CONTENT_GRAPH.find(n => n.slug === slug);
          if (!service) return null;

          return (
            <SeoLink
              key={slug}
              href={service.slug}
              className="group block p-6 bg-[var(--surface-primary)] rounded-[var(--radius-lg)] elevation-1 border border-[var(--border-subtle)] hover:shadow-[var(--shadow-lift)] transition-all hover:border-[var(--color-red-600)]"
              uniqueContext={service.title}
            >
              <div className="text-lg font-semibold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] transition-colors">
                {service.title}
              </div>
              <span className="text-[var(--color-red-500)] font-medium flex items-center gap-1 mt-auto">
                Details zu {service.title}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </SeoLink>
          );
        })}
      </div>
    </section>
  );
}
