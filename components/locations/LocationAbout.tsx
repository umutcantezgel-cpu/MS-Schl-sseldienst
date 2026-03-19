"use client";

import { LocationData } from "@/lib/data/locations";
import RevealSection from "@/components/motion/RevealSection";

interface LocationAboutProps {
    city: LocationData;
}

export default function LocationAbout({ city }: LocationAboutProps) {
    if (!city.aboutText) return null;

    return (
        <RevealSection className="py-16 md:py-24 bg-white border-b border-[var(--border-subtle)]">
            <div className="container mx-auto px-[var(--section-px)]">
                <main className="max-w-[75ch] mx-auto">
                    {/* Optional Title depending on if handled by subheadings */}
                    <div 
                        className="prose prose-lg prose-slate prose-headings:text-[var(--text-primary)] prose-a:text-[var(--value-primary)] prose-a:no-underline hover:prose-a:underline prose-h3:mt-10 mx-auto"
                        dangerouslySetInnerHTML={{ __html: city.aboutText }}
                    />
                </main>
            </div>
        </RevealSection>
    );
}
