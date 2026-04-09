"use client";

import { useState } from"react";
import { m, AnimatePresence } from"framer-motion";
import { Phone, Tag, ArrowRight, Shield, Clock, Wrench } from"lucide-react";
import FAQAccordion from"@/components/ui/FAQAccordion";
import { FAQItem, FAQ_CATEGORIES } from"@/lib/faqData";
import Link from "next/link";

const CATEGORY_ICONS: Record<string, typeof Tag> = {
  kosten: Tag,
  anfahrt: ArrowRight,
  leistungen: Wrench,
  sicherheit: Shield,
  notdienst: Clock,
};

interface FAQFilterSectionProps {
  faqs: FAQItem[];
}

export default function FAQFilterSection({ faqs }: FAQFilterSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("alle");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["alle", ...Object.keys(FAQ_CATEGORIES)] as const;

  const filteredFAQs = faqs.filter(faq => {
    // 1. Category Filter
    const matchesCategory = activeCategory === "alle" || faq.category === activeCategory;
    
    // 2. Search Term Filter
    if (!matchesCategory) return false;
    if (!searchTerm) return true;
    
    const term = searchTerm.toLowerCase();
    return faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term);
  });

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 justify-center">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const Icon = cat ==="alle" ? null : CATEGORY_ICONS[cat];
          const label = cat ==="alle" ?"Alle Fragen" : FAQ_CATEGORIES[cat];

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold
                transition-all duration-300 border
                ${isActive
                  ? "bg-brand-primary text-text-on-primary border-brand-primary shadow-elevated-2"
                  : "bg-surface-elevated text-text-secondary border-border-default hover:border-brand-primary hover:text-brand-primary"
                }
              `}
            >
              {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
              {label}
            </button>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto mb-10 relative">
        <label htmlFor="faq-search" className="sr-only">Häufige Fragen durchsuchen</label>
        <div className="relative">
          <input
            id="faq-search"
            type="text"
            placeholder="Suchen Sie nach Stichworten wie 'Kosten', 'Dauer'..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[52px] pl-12 pr-4 bg-white border border-[var(--border-subtle)] focus:border-[var(--color-red-500)] focus:ring-1 focus:ring-[var(--color-red-500)] rounded-xl outline-none shadow-sm transition-all text-[color:var(--text-primary)]"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[color:var(--text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filtered FAQ Items */}
      <m.div layout className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredFAQs.map((faq, i) => (
            <m.div
              key={faq.question}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
            >
              <FAQAccordion
                question={faq.question}
                answer={faq.answer}
                isDarkerBg={false}
              />
              {/* Micro-CTA after each answer */}
              <div className="mt-2 mb-4 pl-4">
                <a
                  href="tel:+4964418056279"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-red-500)] hover:text-[color:var(--color-red-600)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  Noch Fragen? 06441 8056279
                </a>
              </div>
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>

      {/* Empty State */}
      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[color:var(--text-tertiary)] text-base">
            Keine Fragen in dieser Kategorie.
          </p>
        </div>
      )}

      {/*"Frage nicht gefunden?" CTA Block */}
      <div className="mt-12 bg-surface-secondary border border-border-default rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-text-primary mb-2">
          Ihre Frage war nicht dabei?
        </h3>
        <p className="text-base text-text-secondary mb-6 max-w-md mx-auto">
          Rufen Sie uns einfach an — wir beantworten jede Frage persönlich und kostenlos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+4964418056279"
            className="inline-flex items-center justify-center gap-3 h-[50px] px-7 bg-brand-primary hover:bg-action-primary-hover text-text-on-primary font-bold text-base rounded-xl shadow-elevated-1 hover:shadow-elevated-2 hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-4.5 h-4.5" />
            06441 8056279 anrufen
          </a>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 h-[50px] px-7 bg-surface-elevated border-2 border-border-default hover:border-brand-primary text-text-primary font-semibold text-base rounded-xl hover:-translate-y-[1px] transition-all duration-300"
          >
            Nachricht schreiben
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
