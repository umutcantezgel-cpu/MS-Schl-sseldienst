import { LocationData } from "@/lib/data/locations";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function LocalContentBlocks({ city }: { city: LocationData }) {
    if (!city.content.mainText) return null;

    return (
        <section aria-label={`Informationen zum Schlüsseldienst in ${city.name}`} className="relative bg-transparent px-[var(--section-px)] py-[var(--section-py)]">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl z-[-1]"></div>
            
            <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1} className="mx-auto max-w-prose relative z-10">
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    {/* Editorial Main Text */}
                    <div 
                        className="prose prose-lg md:prose-xl prose-slate 
                                   prose-headings:text-[color:var(--text-primary)] prose-headings:text-balance prose-headings:tracking-tight prose-headings:font-extrabold
                                   prose-p:text-[color:var(--text-secondary)] prose-p:leading-relaxed prose-p:mb-8
                                   prose-strong:text-[color:var(--text-primary)] prose-strong:font-bold
                                   prose-a:text-[color:var(--value-primary)] prose-a:no-underline hover:prose-a:underline 
                                   prose-h2:mt-16 mx-auto" 
                        dangerouslySetInnerHTML={{ __html: city.content.mainText }} 
                    />
                </StaggerItem>

                {/* Custom Sektionen (Hyper-Lokaler Content) */}
                {city.customSections && city.customSections.length > 0 && (
                    <div className="mt-20 space-y-12">
                        {city.customSections.map((section, idx) => (
                            <StaggerItem key={idx} animation={entryAnimations.slideUpFade}>
                                <div className={`p-10 rounded-3xl ${section.type === 'b2b' ? 'bg-[var(--color-charcoal-50)] border border-[var(--color-charcoal-100)]' : 'bg-white shadow-sm border border-[var(--border-subtle)]'}`}>
                                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] mb-6 text-balance">{section.headline}</h3>
                                    <div 
                                        className="prose prose-lg prose-slate 
                                                   prose-p:text-[color:var(--text-secondary)] prose-p:leading-relaxed prose-p:mb-6
                                                   prose-strong:text-[color:var(--text-primary)] prose-strong:font-bold"
                                        dangerouslySetInnerHTML={{ __html: section.content }}
                                    />
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                )}
            </StaggerReveal>
        </section>
    );
}
