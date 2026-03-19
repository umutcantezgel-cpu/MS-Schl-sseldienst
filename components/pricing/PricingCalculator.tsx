"use client";

import { useState } from"react";
import { motion, AnimatePresence } from"framer-motion";
import TimeSlotSelector from"./TimeSlotSelector";
import PriceBreakdown from"./PriceBreakdown";
import { ServiceType, TimeSlot, PRICING } from"./pricing.constants";
import { ShieldCheck, DoorOpen, Lock, Car, Shield, ArrowLeft, ArrowRight, CheckCircle } from"lucide-react";
import { cn } from"@/lib/utils";

const SERVICES = [
  { id:"doorFallen", label:"Tür zugefallen", desc:"(nicht abgeschlossen)", icon: DoorOpen },
  { id:"doorLocked", label:"Tür abgesperrt", desc:"(Schlüssel gedreht)", icon: Lock },
  { id:"carOpening", label:"Autoöffnung", desc:"(Schonende Öffnung)", icon: Car },
  { id:"safeOpening", label:"Tresoröffnung", desc:"(Wertgelasse)", icon: Shield },
] as const;

const STEP_LABELS = ["Situation wählen","Zeitraum wählen","Ihr Festpreis",
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

export default function PricingCalculator() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [serviceType, setServiceType] = useState<ServiceType>("doorFallen");
  const [timeSlot, setTimeSlot] = useState<TimeSlot>("day");

  const currentPrice = PRICING[serviceType][timeSlot];
  const isNullPrice = currentPrice === null;

  const goNext = () => {
    if (step < 2) {
      setDirection(1);
      setStep(s => s + 1);
    }
  };
  const goBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(s => s - 1);
    }
  };
  const goToStep = (target: number) => {
    setDirection(target > step ? 1 : -1);
    setStep(target);
  };

  return (
    <div className="bg-[var(--surface-primary)] rounded-3xl shadow-[var(--elevation-3)] ring-1 ring-[var(--border-subtle)] overflow-hidden max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-[var(--color-charcoal-900)] px-6 py-8 sm:px-10 sm:py-10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-[var(--color-red-500)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg shadow-[var(--elevation-2)]">
          In 3 Klicks zum Preis
        </div>
        <h2 className="typo-h2 text-white flex items-center justify-center gap-3">
          <ShieldCheck className="h-8 w-8 text-[var(--color-red-500)]" />
          Garantiert keine versteckten Kosten
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
          <div className="bg-[var(--color-success)]/10 text-[var(--color-success)] px-4 py-2 rounded-full ring-1 ring-[var(--color-success)]/30">
            Unser Festpreis: ab 89 €
          </div>
          <div className="bg-[var(--color-red-500)]/10 text-[var(--color-red-400)] px-4 py-2 rounded-full ring-1 ring-[var(--color-red-500)]/30 hidden sm:block">
            Unseriöse Anbieter: Oft &gt; 300 €
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="px-6 sm:px-10 pt-8">
        <div className="flex items-center justify-between relative mb-8">
          {/* Connecting line */}
          <div className="absolute top-5 left-[16%] right-[16%] h-[2px] bg-slate-200 z-0"></div>
          <div
            className="absolute top-5 left-[16%] h-[2px] bg-[var(--color-red-500)] z-[1] transition-all duration-500"
            style={{ width: `${step * 34}%` }}
          ></div>

          {STEP_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => goToStep(i)}
              className="flex flex-col items-center gap-2 relative z-10 group"
            >
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2",
                i < step
                  ?"bg-[var(--color-red-500)] border-[var(--color-red-500)] text-white"
                  : i === step
                    ?"bg-white border-[var(--color-red-500)] text-[var(--color-red-500)] shadow-[var(--elevation-2)]"
                    :"bg-white border-slate-200 text-slate-400"
              )}>
                {i < step ? <CheckCircle className="w-5 h-5" /> : i + 1}
              </div>
              <span className={cn("text-[12px] font-semibold transition-colors hidden sm:block",
                i <= step ?"text-[var(--text-primary)]" :"text-[var(--text-tertiary)]"
              )}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="px-6 sm:px-10 pb-8 relative overflow-hidden min-h-[320px]">
        <AnimatePresence mode="wait" custom={direction}>
          {/* Step 1: Service Selection */}
          {step === 0 && (
            <motion.div
              key="step-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease:"easeInOut" }}
            >
              <fieldset>
                <legend className="text-lg font-bold text-[var(--text-primary)] mb-5">
                  Was müssen wir öffnen?
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    const isSelected = serviceType === service.id;
                    return (
                      <label
                        key={service.id}
                        className={cn("relative flex cursor-pointer rounded-2xl border p-4 transition-all",
                          isSelected
                            ?"border-[var(--color-red-500)] bg-[var(--color-red-50)] ring-1 ring-[var(--color-red-500)] shadow-[var(--elevation-2)] scale-[1.02]"
                            :"border-[var(--border-subtle)] bg-[var(--surface-primary)] hover:border-[var(--border-subtle)] hover:bg-[var(--surface-secondary)]"
                        )}
                      >
                        <input
                          type="radio"
                          name="serviceType"
                          value={service.id}
                          className="sr-only"
                          checked={isSelected}
                          onChange={(e) => setServiceType(e.target.value as ServiceType)}
                        />
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-4 w-full">
                            <div className={cn("p-3 rounded-xl shrink-0 transition-colors",
                              isSelected ?"bg-[var(--color-red-50)] text-[var(--color-red-500)]" :"bg-[var(--border-subtle)] text-[var(--text-tertiary)]"
                            )}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className={cn("font-bold transition-colors",
                                isSelected ?"text-[var(--text-primary)]" :"text-[var(--text-secondary)]"
                              )}>
                                {service.label}
                              </span>
                              <span className={cn("text-xs transition-colors",
                                isSelected ?"text-[var(--text-secondary)]" :"text-[var(--text-tertiary)]"
                              )}>
                                {service.desc}
                              </span>
                            </div>
                          </div>
                          <div className={cn("shrink-0 ml-3 h-5 w-5 rounded-full border flex items-center justify-center transition-colors",
                            isSelected ?"border-[var(--color-red-500)] bg-[var(--color-red-500)]" :"border-[var(--border-subtle)] bg-[var(--surface-primary)]"
                          )}>
                            {isSelected && <div className="h-2 w-2 rounded-full bg-[var(--surface-primary)]" />}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={goNext}
                  className="inline-flex items-center gap-2 h-[48px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-[15px] rounded-[var(--radius-8)] transition-all shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[1px]"
                >
                  Weiter
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Time Slot Selection */}
          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease:"easeInOut" }}
            >
              <fieldset>
                <legend className="text-lg font-bold text-[var(--text-primary)] mb-5">
                  Wann benötigen Sie unsere Hilfe?
                </legend>
                <TimeSlotSelector selected={timeSlot} onSelect={setTimeSlot} />
              </fieldset>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 h-[48px] px-6 border border-[var(--border-subtle)] text-[var(--text-secondary)] font-bold text-[15px] rounded-[var(--radius-8)] transition-all hover:bg-[var(--surface-secondary)]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zurück
                </button>
                <button
                  onClick={goNext}
                  className="inline-flex items-center gap-2 h-[48px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-[15px] rounded-[var(--radius-8)] transition-all shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[1px]"
                >
                  Preis anzeigen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Price Result */}
          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease:"easeInOut" }}
            >
              <PriceBreakdown serviceType={serviceType} timeSlot={timeSlot} />

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+4964418056544"
                  className="flex items-center justify-center h-[52px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-[16px] rounded-[var(--radius-8)] transition-all shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[2px] w-full animate-heartbeat-cta"
                >
                  {isNullPrice ?"Jetzt beraten lassen" :"Sofort Monteur rufen"}
                </a>
                <div className="flex justify-between items-center">
                  <button
                    onClick={goBack}
                    className="inline-flex items-center gap-2 text-[14px] text-[var(--text-tertiary)] font-medium hover:text-[var(--text-secondary)] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Zurück
                  </button>
                  <p className="text-xs text-[var(--text-tertiary)] flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-red-500)]" />
                    Geprüfter Wetzlarer Betrieb
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
