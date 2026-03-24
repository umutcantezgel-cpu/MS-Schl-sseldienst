import { LocationData } from "@/lib/data/locations";
import RevealSection from "@/components/motion/RevealSection";

interface LocationAboutProps {
    city: LocationData;
}

export default function LocationAbout({ city }: LocationAboutProps) {
    if (!city.aboutText) return null;

    return (
        <RevealSection className="py-24 md:py-32 bg-white border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <main className="max-w-prose mx-auto">
                    {/* Editorial Text Design */}
                    <div 
                        className="prose prose-lg md:prose-xl prose-slate 
                                   prose-headings:text-[color:var(--text-primary)] prose-headings:text-balance prose-headings:tracking-tight prose-headings:font-extrabold
                                   prose-p:text-[color:var(--text-secondary)] prose-p:leading-relaxed prose-p:mb-8
                                   prose-strong:text-[color:var(--text-primary)] prose-strong:font-bold
                                   prose-a:text-[color:var(--value-primary)] prose-a:no-underline hover:prose-a:underline 
                                   prose-h3:mt-16 mx-auto"
                        dangerouslySetInnerHTML={{ __html: city.aboutText }}
                    />
                </main>
            </div>
        </RevealSection>
    );
}
