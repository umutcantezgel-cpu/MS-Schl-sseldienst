"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export default function BottomSheet({ isOpen, onClose, children, title }: BottomSheetProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-[var(--z-overlay)] bg-[var(--color-stone-900)]/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />
            <div
                role="dialog"
                aria-modal="true"
                className="fixed bottom-0 left-0 right-0 z-[var(--z-modal)] bg-white rounded-t-3xl elevation-4 transition-transform transform translate-y-0 max-h-[90vh] overflow-y-auto w-full md:max-w-md md:left-1/2 md:-translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:rounded-3xl"
            >
                <div className="sticky top-0 z-[var(--z-elevated)] bg-white/95 backdrop-blur-md px-4 py-4 border-b border-[var(--color-border-subtle)] flex items-center justify-between">
                    <div className="w-12 h-1.5 bg-[var(--color-stone-200)] rounded-full absolute top-2 left-1/2 -translate-x-1/2 md:hidden" />
                    <h3 className="font-bold text-lg text-[var(--color-text-primary)] mt-2 md:mt-0">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 mt-2 md:mt-0 bg-[var(--color-surface-divider)] rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        aria-label="Schließen"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)]">
                    {children}
                </div>
            </div>
        </>
    );
}
