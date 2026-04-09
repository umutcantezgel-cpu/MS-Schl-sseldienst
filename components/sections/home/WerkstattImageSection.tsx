import { SeoContentImage } from "@/components/seo/SeoImage";
import { werkstattImages } from "@/lib/data/imageAssets";

export default function WerkstattImageSection() {
  return (
    <section className="px-[var(--section-px)] py-8">
      <div className="mx-auto max-w-4xl rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
        <SeoContentImage
          image={werkstattImages[0]!}
          className="w-full h-[300px] md:h-[400px]"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    </section>
  );
}
