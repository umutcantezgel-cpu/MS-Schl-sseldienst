"use client";

import { LocationData } from "@/lib/data/locations";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function LocalFAQ({ city }: { city: LocationData }) {
    if (!city.faqs || city.faqs.length === 0) return null;

    return (
        <section aria-labelledby="faq-heading" className="bg-transparent relative px-[var(--section-px)] py-[var(--section-py)]">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-[-1]"></div>
            <StaggerReveal className="mx-auto max-w-4xl relative z-10" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <div className="text-center mb-12">
                        <h2 id="faq-heading" className="typo-h2 text-[var(--text-primary)]">
                            FAQ: Schlüsseldienst Einsätze in <span className="text-[var(--value-primary)]">{city.name}</span>
                        </h2>
                    </div>
                </StaggerItem>
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <div className="space-y-4">
                        {city.faqs.map((faq, i) => (
                            <FAQAccordion key={i} question={faq.question} answer={`${faq.answer} Noch Fragen? Rufen Sie uns jederzeit unverbindlich an: 06441-8056544`} />
                        ))}
                    </div>
                </StaggerItem>
            </StaggerReveal>
        </section>
    );
}
