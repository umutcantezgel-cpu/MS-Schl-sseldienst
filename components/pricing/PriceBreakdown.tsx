"use client";

import { motion, AnimatePresence } from"framer-motion";
import { ServiceType, TimeSlot, PRICING, TIME_MODIFIERS, ADDONS } from"./pricing.constants";

interface PriceBreakdownProps {
  serviceType: ServiceType;
  timeSlot: TimeSlot;
}

export default function PriceBreakdown({ serviceType, timeSlot }: PriceBreakdownProps) {
  const price = PRICING[serviceType][timeSlot];

  if (price === null) {
    return (
      <div className="rounded-xl bg-[var(--color-red-50)] p-6 ring-1 ring-[var(--color-red-600)] flex flex-col justify-center items-center text-center h-[260px]" aria-live="polite">
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Preis auf Anfrage</h3>
        <p className="text-[var(--text-secondary)] mb-6 text-sm">
          Für diese Dienstleistung müssen wir die Situation vor Ort oder telefonisch bewerten, um einen seriösen Preis zu nennen.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[var(--surface-secondary)] p-6 ring-1 ring-[var(--border-subtle)] h-full flex flex-col" aria-live="polite">
      <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 tracking-tight">Preisaufschlüsselung</h3>

      <dl className="space-y-3 text-sm flex-1">
        <div className="flex justify-between border-b border-[var(--border-subtle)] pb-3">
          <dt className="text-[var(--text-secondary)] text-left">Basis ({TIME_MODIFIERS[timeSlot].label})</dt>
          <dd className="font-semibold text-[var(--text-primary)] shrink-0 ml-4 relative w-[40px] text-right">
            <AnimatePresence mode="wait">
              <motion.span
                key={price}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type:"spring", stiffness: 120, damping: 14 }}
                className="absolute right-0 top-0 bottom-0 m-auto inline-flex items-center"
              >
                {price}€
              </motion.span>
            </AnimatePresence>
          </dd>
        </div>

        <div className="flex justify-between border-b border-[var(--border-subtle)] pb-3">
          <dt className="text-[var(--text-secondary)] text-left">{ADDONS.anfahrt.label}</dt>
          <dd className="font-semibold text-[var(--color-success)] shrink-0 ml-4">{ADDONS.anfahrt.price}</dd>
        </div>

        <div className="pt-2">
          <div className="flex justify-between items-center">
            <dt className="text-sm font-bold text-[var(--text-primary)]">Garantiert ab</dt>
            <dd className="text-3xl font-extrabold text-[var(--color-red-500)] tabular-nums relative w-[80px] h-[40px] text-right">
              <AnimatePresence mode="wait">
                <motion.span
                  key={price}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ type:"spring", stiffness: 120, damping: 14 }}
                  className="absolute right-0 top-0 h-full flex items-center"
                >
                  {price}€
                </motion.span>
              </AnimatePresence>
            </dd>
          </div>
        </div>
      </dl>

      <div className="mt-6 space-y-2 text-xs text-[var(--text-tertiary)] bg-[var(--surface-primary)] p-3 rounded-lg border border-[var(--border-subtle)] text-left">
        <p className="font-semibold text-[var(--text-secondary)]">Optionale Zusatzkosten:</p>
        <ul className="list-disc pl-4 space-y-1">
          {serviceType === 'doorLocked' && (
            <li>{ADDONS.zylinder.label}: {ADDONS.zylinder.price}€</li>
          )}
          <li>{ADDONS.mehrwehraufwand.label}: {ADDONS.mehrwehraufwand.price}</li>
        </ul>
      </div>
    </div>
  );
}
