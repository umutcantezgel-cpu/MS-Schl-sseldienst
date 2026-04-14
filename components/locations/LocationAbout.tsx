import { LocationData } from "@/lib/data/locations";
import RevealSection from "@/components/motion/RevealSection";
import { sanitizeHTML } from "@/lib/sanitize";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { getLocationImageSet } from "@/lib/imageRotation";
import { getAboutText } from "@/lib/contentDifferentiation";

interface LocationAboutProps {
    city: LocationData;
}

export default function LocationAbout({ city }: LocationAboutProps) {
    const aboutContent = getAboutText(city);
    if (!aboutContent) return null;

    const imageSet = getLocationImageSet(city.slug);

    return (
        <RevealSection className="py-12 sm:py-24 md:py-32 bg-white border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_320px] gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Editorial Text */}
                    <main>
                        <div 
                            className="prose prose-lg md:prose-xl prose-slate 
                                       prose-headings:text-[color:var(--text-primary)] prose-headings:text-balance prose-headings:tracking-tight prose-headings:font-extrabold
                                       prose-p:text-[color:var(--text-secondary)] prose-p:leading-relaxed prose-p:mb-8
                                       prose-strong:text-[color:var(--text-primary)] prose-strong:font-bold
                                       prose-a:text-[color:var(--value-primary)] prose-a:no-underline hover:prose-a:underline 
                                       prose-h3:mt-16 mx-auto"
                            dangerouslySetInnerHTML={{ __html: sanitizeHTML(aboutContent) }}
                        />
                    </main>

                    {/* Rotated Trust-Image (unique per city) */}
                    <aside className="hidden md:block sticky top-32">
                        <div className="rounded-[var(--radius-24)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--elevation-1)]">
                            <SeoContentImage
                                image={imageSet.trust}
                                cityName={city.name}
                                className="w-full h-auto"
                                sizes="320px"
                            />
                        </div>
                        <p className="mt-4 text-center text-sm font-medium text-[color:var(--text-tertiary)]">
                            Ihr Ansprechpartner für {city.name}
                        </p>
                    </aside>
                </div>
            </div>
        </RevealSection>
    );
}

