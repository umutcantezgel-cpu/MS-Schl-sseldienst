"use client";

import { useState, useId } from"react";
import { Plus, Minus, HelpCircle } from"lucide-react";

interface FAQAccordionProps {
  question: string;
  answer: string;
  isDarkerBg?: boolean;
}

export default function FAQAccordion({ question, answer, isDarkerBg = false }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const buttonId = `faq-btn-${uniqueId}`;
  const panelId = `faq-panel-${uniqueId}`;

  return (
    <div className={`rounded-[var(--radius-12)] ${isDarkerBg ? 'bg-[var(--surface-secondary)]' : 'bg-white'} overflow-hidden transition-all duration-300 ease-out mb-6 shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)]`}>
      <h3>
        <button
          id={buttonId}
          onClick={() => setIsOpen(!isOpen)}
          className="faq-hover-accent w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[var(--value-primary)] rounded-[var(--radius-12)]"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="flex gap-3 text-[18px] font-bold text-[var(--text-primary)]">
            <HelpCircle className="h-6 w-6 text-[var(--value-icon-color)] shrink-0" aria-hidden="true" />
            {question}
          </span>
          <span className={`shrink-0 text-[var(--value-icon-color)] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`} aria-hidden="true">
            <Plus className="h-6 w-6" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out ${isOpen ?"grid-rows-[1fr] opacity-100" :"grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 flex flex-col gap-[var(--space-4)]">
            <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75]">
              {answer}
            </p>
            <div className="mt-2 text-[15px] font-medium text-[var(--text-tertiary)] pt-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <span>Direkte Rückfrage?</span>
              <a href="tel:+4964418056544" className="inline-flex items-center text-[var(--color-red-500)] hover:underline font-bold">
                06441-8056544 anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
