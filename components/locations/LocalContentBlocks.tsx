"use client";

import { LocationData } from "@/lib/data/locations";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function LocalContentBlocks({ city }: { city: LocationData }) {
    return (
        <section aria-label={`Informationen zum Schlüsseldienst in ${city.name}`} className="relative bg-transparent px-[var(--section-px)] py-[var(--section-py)]">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl z-[-1]"></div>
            
            <StaggerReveal animation={entryAnimations.slideUpFade} staggerDelay={0.1} className="mx-auto max-w-4xl relative z-10">
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    {/* Der ursprüngliche Haupttext */}
                    <div 
                        className="prose prose-lg prose-slate prose-a:text-[var(--value-primary)] prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] mx-auto max-w-none" 
                        dangerouslySetInnerHTML={{ __html: city.content.mainText }} 
                    />
                </StaggerItem>

                {/* Neue Custom Sektionen (Hyper-Lokaler Content) */}
                {city.customSections && city.customSections.length > 0 && (
                    <div className="mt-16 space-y-12">
                        {city.customSections.map((section, idx) => (
                            <StaggerItem key={idx} animation={entryAnimations.slideUpFade}>
                                <div className={`p-8 rounded-3xl ${section.type === 'b2b' ? 'bg-[var(--color-charcoal-50)] border border-[var(--color-charcoal-100)]' : 'bg-white shadow-sm border border-[var(--border-subtle)]'}`}>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{section.headline}</h3>
                                    <div 
                                        className="prose prose-slate max-w-none prose-p:text-[var(--text-secondary)]"
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
