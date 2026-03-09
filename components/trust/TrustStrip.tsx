import { Clock, ShieldCheck, Key, Check, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
    { icon: ShieldCheck, text: "100% Festpreis Garantie" },
    { icon: Clock, text: "20-30 Min. Anfahrtszeit" },
    { icon: Key, text: "Zerstörungsfreie Öffnung" },
    { icon: Check, text: "Keine versteckten Kosten" },
    { icon: MapPin, text: "Meisterbetrieb aus Wetzlar" },
];

export default function TrustStrip() {
    return (
        <div className="bg-[var(--color-surface-default)] border-b border-[var(--color-border)] relative z-20 py-[var(--space-3)] overflow-hidden">
            <div className="mx-auto max-w-7xl max-xl:px-0 px-[var(--space-8)]">

                {/* Desktop View: Alles nebeneinander */}
                <div className="hidden lg:flex items-center justify-between gap-[var(--space-6)]">
                    {trustItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-[var(--space-2)]">
                            <item.icon className="h-5 w-5 text-[var(--color-brand)] shrink-0" aria-hidden="true" />
                            <span className="font-semibold text-[var(--font-size-14)] text-[var(--color-text-primary)] whitespace-nowrap">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Mobile View: Animated Marquee */}
                <div className="flex lg:hidden overflow-hidden pl-[var(--space-4)] mask-image-fade">
                    <div className="flex w-max animate-marquee items-center gap-[var(--space-8)] pr-[var(--space-8)]">
                        {/* Duplicate for infinite loop */}
                        {[...trustItems, ...trustItems].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-[var(--space-2)] shrink-0">
                                <item.icon className="h-[18px] w-[18px] text-[var(--color-brand)] shrink-0" aria-hidden="true" />
                                <span className="font-semibold text-[var(--font-size-14)] text-[var(--color-text-primary)]">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* Inline CSS für die Maske, da globals.css nicht modifiziert werden muss dafür */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .mask-image-fade {
                    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 15px, black calc(100% - 15px), transparent);
                }
            `}} />
        </div>
    );
}
