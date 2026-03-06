"use client";

import { Phone, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function MobileBottomBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show the bottom bar after scrolling down 500px (or around 50% of 1st fold)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 right-0 z-[var(--z-sticky)] sm:hidden transform transition-transform duration-500 ease-in-out elevation-3",
                isVisible ? "translate-y-0" : "translate-y-full"
            )}
        >
            <div className="bg-[var(--color-surface-primary)] border-t border-[var(--color-border-subtle)] p-3 px-4 flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] w-full text-center">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-success)]" /> 25 Min. Anfahrt • 100% Festpreis
                </div>
                <a
                    href="tel:06441123456"
                    className="flex w-full items-center justify-center gap-2 rounded-[var(--space-2)] bg-[var(--color-brand)] p-3.5 text-[var(--text-body)] font-[800] text-white transition-colors hover:bg-[var(--color-brand-hover)] active:bg-[var(--color-brand-active)] animate-pulse-glow"
                    style={{ letterSpacing: 'var(--tracking-cta)' }}
                >
                    <Phone className="h-5 w-5 animate-phone-ring" />
                    06441 123 456 anrufen
                </a>
            </div>
        </div>
    );
}
