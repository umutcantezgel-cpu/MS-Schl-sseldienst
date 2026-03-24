"use client";

import { X } from"lucide-react";
import { useEffect } from"react";

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
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
    return undefined;
  }, [isOpen, onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modal = document.getElementById('bottom-sheet-modal');
      if (modal) {
        const elements = modal.querySelectorAll(focusableElements);
        const firstElement = elements[0] as HTMLElement;
        const lastElement = elements[elements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[var(--z-overlay)] bg-[var(--color-charcoal-900)]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="bottom-sheet-modal"
        role="dialog"
        aria-modal="true"
        className="fixed bottom-0 left-0 right-0 z-[var(--z-modal)] bg-[var(--surface-primary)] rounded-t-3xl elevation-4 transition-transform transform translate-y-0 max-h-[90vh] overflow-y-auto w-full md:max-w-md md:left-1/2 md:-translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:rounded-3xl"
        onKeyDown={handleKeyDown}
      >
        <div className="sticky top-0 z-[var(--z-elevated)] bg-white/95 backdrop-blur-md px-4 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div className="w-12 h-1.5 bg-[var(--color-charcoal-200)] rounded-full absolute top-2 left-1/2 -translate-x-1/2 md:hidden" />
          <h3 className="font-bold text-lg text-[color:var(--text-primary)] mt-2 md:mt-0">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 mt-2 md:mt-0 bg-[var(--border-subtle)] rounded-full text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] transition-colors"
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
