"use client";

import { useState } from"react";
import { motion, AnimatePresence } from"framer-motion";
import { Phone, Tag, ArrowRight, Shield, Clock, Wrench } from"lucide-react";
import FAQAccordion from"@/components/ui/FAQAccordion";
import { FAQItem, FAQ_CATEGORIES } from"@/lib/faqData";

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

  const categories = ["alle", ...Object.keys(FAQ_CATEGORIES)] as const;

  const filteredFAQs = activeCategory ==="alle"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

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
                inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[14px] font-semibold
                transition-all duration-300 border
                ${isActive
                  ?"bg-[var(--color-red-500)] text-white border-[var(--color-red-500)] shadow-[var(--elevation-2)]"
                  :"bg-white text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--color-red-300)] hover:text-[var(--color-red-500)]"
                }
              `}
            >
              {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
              {label}
            </button>
          );
        })}
      </div>

      {/* Filtered FAQ Items */}
      <motion.div layout className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredFAQs.map((faq, i) => (
            <motion.div
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
                  href="tel:+4964418056544"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-red-500)] hover:text-[var(--color-red-600)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  Noch Fragen? 06441 8056544
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--text-tertiary)] text-[16px]">
            Keine Fragen in dieser Kategorie.
          </p>
        </div>
      )}

      {/*"Frage nicht gefunden?" CTA Block */}
      <div className="mt-12 bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 text-center">
        <h3 className="text-[20px] font-bold text-[var(--text-primary)] mb-2">
          Ihre Frage war nicht dabei?
        </h3>
        <p className="text-[15px] text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
          Rufen Sie uns einfach an — wir beantworten jede Frage persönlich und kostenlos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+4964418056544"
            className="inline-flex items-center justify-center gap-3 h-[50px] px-7 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-[15px] rounded-xl shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-4.5 h-4.5" />
            06441 8056544 anrufen
          </a>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 h-[50px] px-7 bg-white border border-[var(--border-subtle)] hover:border-[var(--color-red-300)] text-[var(--text-primary)] font-semibold text-[15px] rounded-xl hover:-translate-y-[1px] transition-all duration-300"
          >
            Nachricht schreiben
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
