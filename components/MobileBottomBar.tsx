"use client";

import { Phone } from "lucide-react";

export default function MobileBottomBar() {
    return (
        <a
            href="tel:+4964418056544"
            className="fixed bottom-0 left-0 right-0 z-[var(--z-mobile-bar)] flex h-[56px] w-full items-center justify-center gap-[var(--space-2)] bg-[var(--color-cta-background)] text-white pb-[env(safe-area-inset-bottom)] lg:hidden elevation-3 active:bg-[var(--color-cta-hover)] transition-colors"
            aria-label="Jetzt anrufen: 06441 8056544"
        >
            <Phone className="h-5 w-5 animate-heartbeat-cta" aria-hidden="true" />
            <span className="text-[var(--font-size-18)] font-bold">06441 8056544</span>
        </a>
    );
}
