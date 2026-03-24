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
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl text-[color:var(--text-primary)] font-extrabold tracking-tight text-balance leading-[1.1] mb-6">
                            FAQ: Regionale Einsätze in <span className="text-[color:var(--value-primary)]">{city.name}</span>
                        </h2>
                        <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed text-balance">
                            Die häufigsten Fragen von Bewohnern aus {city.name} und Umgebung. Transparent beantwortet.
                        </p>
                    </div>
                </StaggerItem>
                <StaggerItem animation={entryAnimations.slideUpFade}>
                    <div className="space-y-6">
                        {city.faqs.map((faq, i) => (
                            <FAQAccordion key={i} question={faq.question} answer={`${faq.answer} Falls Sie weitere Detailfragen haben, rufen Sie uns unverbindlich an: 06441-8056544.`} />
                        ))}
                    </div>
                </StaggerItem>
            </StaggerReveal>
        </section>
    );
}
