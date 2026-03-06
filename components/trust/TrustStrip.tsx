import { Clock, Truck, ShieldCheck, Star } from "lucide-react";
import StaggerReveal, { StaggerItem } from "../motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function TrustStrip() {
    return (
        <div className="bg-white elevation-1 relative z-20">
            <div className="mx-auto max-w-7xl px-[var(--section-px)] py-4 sm:py-6 lg:py-8">
                <StaggerReveal
                    className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-y-[var(--space-6)] md:gap-x-[var(--space-7)]"
                    animation={entryAnimations.slideUpFade}
                    staggerDelay={0.1}
                >
                    {[
                        { icon: Clock, text: "24/7 Notdienst" },
                        { icon: Truck, text: "15-30 Min. Anfahrt" },
                        { icon: ShieldCheck, text: "Festpreise ab 50€" },
                        { icon: Star, text: "4.9★ bei 127 Bewertungen", fill: true },
                    ].map((item) => (
                        <StaggerItem key={item.text} className="flex items-center gap-[var(--space-2)]" animation={entryAnimations.slideUpFade}>
                            <item.icon className={`h-[24px] w-[24px] text-[var(--color-brand)] stroke-[1.5] ${item.fill ? "fill-current" : ""}`} aria-hidden="true" />
                            <span
                                className="font-[600] text-[var(--color-text-primary)]"
                                style={{ fontSize: 'var(--text-small)', letterSpacing: 'var(--tracking-cta)' }}
                            >
                                {item.text}
                            </span>
                        </StaggerItem>
                    ))}
                </StaggerReveal>
            </div>
        </div>
    );
}
