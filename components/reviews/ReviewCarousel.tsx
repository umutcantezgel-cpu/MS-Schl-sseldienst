"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewCarousel({ children }: { children: React.ReactNode }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth > 768 ? current.clientWidth / 2 : current.clientWidth;
            current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative group mt-16">
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {children}
            </div>

            <button
                onClick={() => scroll("left")}
                aria-label="Vorherige Bewertungen"
                className="absolute left-[-20px] top-[40%] -translate-y-1/2 bg-[var(--color-surface-primary)] text-[var(--color-text-body)] elevation-2 ring-1 ring-[var(--color-border)] rounded-full p-2.5 hover:text-[var(--color-brand)] hover:shadow-[var(--shadow-3)] transition-all md:flex hidden z-[var(--z-elevated)] opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>

            <button
                onClick={() => scroll("right")}
                aria-label="Weitere Bewertungen"
                className="absolute right-[-20px] top-[40%] -translate-y-1/2 bg-[var(--color-surface-primary)] text-[var(--color-text-body)] elevation-2 ring-1 ring-[var(--color-border)] rounded-full p-2.5 hover:text-[var(--color-brand)] hover:shadow-[var(--shadow-3)] transition-all md:flex hidden z-[var(--z-elevated)] opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    );
}
