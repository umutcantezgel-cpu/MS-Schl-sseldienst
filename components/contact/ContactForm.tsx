"use client";

import { useState, useCallback } from"react";
import { buttonVariants } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import { Textarea } from"@/components/ui/textarea";
import { cn } from"@/lib/utils";
import { CheckCircle2, Loader2, Check, Phone } from"lucide-react";
import { motion, AnimatePresence } from"framer-motion";

interface FieldState {
  touched: boolean;
  valid: boolean;
  error: string;
}

function CheckmarkIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={cn("w-5 h-5 text-emerald-500", className)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <motion.path
        d="M5 13l4 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease:"easeOut" }}
      />
    </motion.svg>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  });
  const [fieldStates, setFieldStates] = useState<Record<string, FieldState>>({
    name: { touched: false, valid: false, error:"" },
    email: { touched: false, valid: false, error:"" },
    phone: { touched: false, valid: false, error:"" },
    message: { touched: false, valid: false, error:"" },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shakeField, setShakeField] = useState<string | null>(null);

  const filledFieldsCount = Object.values(formData).filter((val) => val.trim() !=="").length;
  const showProgress = filledFieldsCount >= 2;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (fieldStates[name]?.error) {
      setFieldStates(prev => ({
        ...prev,
        [name]: { ...prev[name], error:"", valid: value.trim().length > 0 }
      }));
    }
  };

  const validateField = useCallback((name: string, value: string) => {
    let valid = false;
    let error ="";

    switch (name) {
      case"name":
        valid = value.trim().length >= 2;
        error = valid ?"" :"Bitte geben Sie Ihren Namen ein.";
        break;
      case"email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valid = emailRegex.test(value);
        error = value.trim() ==="" ?"Bitte geben Sie Ihre E-Mail ein." : !valid ?"Bitte prüfen Sie Ihre E-Mail-Adresse." :"";
        break;
      case"phone":
        // Phone is optional — valid if empty or has digits
        valid = value.trim() ==="" || /[\d\s\-+()]{6,}/.test(value);
        error ="";
        break;
      case"message":
        valid = value.trim().length >= 5;
        error = valid ?"" :"Bitte beschreiben Sie kurz Ihr Anliegen.";
        break;
    }

    return { valid, error };
  }, []);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Skip validation for optional phone when empty
    if (name ==="phone" && value.trim() ==="") {
      setFieldStates(prev => ({ ...prev, [name]: { touched: true, valid: false, error:"" } }));
      return;
    }

    const { valid, error } = validateField(name, value);
    setFieldStates(prev => ({ ...prev, [name]: { touched: true, valid, error } }));

    // Shake on error
    if (error && value.trim() !=="") {
      setShakeField(name);
      setTimeout(() => setShakeField(null), 500);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const fieldClasses = (name: string) => {
    const state = fieldStates[name];
    if (!state?.touched) return"";
    if (state.error) return"border-red-400 focus:border-red-500 focus:ring-red-500/20";
    if (state.valid) return"border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/20";
    return"";
  };

  if (isSubmitted) {
    return (
      <motion.div
        role="alert"
        aria-live="polite"
        className="rounded-2xl bg-[var(--surface-secondary)] p-10 shadow-[var(--elevation-3)] flex flex-col items-center justify-center text-center max-w-md mx-auto min-h-[400px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease:"easeOut" }}
      >
        <div className="relative mb-6">
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: [1, 1.5, 1.8] }}
            transition={{ duration: 1.5, ease:"easeOut" }}
          />
          <motion.svg
            viewBox="0 0 80 80"
            className="relative w-20 h-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.circle
              cx="40" cy="40" r="36"
              fill="none"
              stroke="rgb(34, 197, 94)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease:"easeOut" }}
            />
            <motion.path
              d="M24 40l10 10 22-22"
              fill="none"
              stroke="rgb(34, 197, 94)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease:"easeOut" }}
            />
          </motion.svg>
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
          Vielen Dank!
        </h3>
        <p className="text-[var(--text-secondary)] mb-2">
          Wir melden uns innerhalb von 30 Minuten bei Ihnen.
        </p>
        <p className="text-[14px] text-[var(--text-tertiary)] mb-8">
          Oder rufen Sie uns direkt an:
        </p>
        <a
          href="tel:+4964418056544"
          className="flex items-center justify-center gap-2 h-[52px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-[16px] rounded-[var(--radius-8)] transition-all shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[2px] w-full sm:w-auto"
        >
          <Phone className="w-5 h-5" />
          06441 8056544
        </a>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl bg-[var(--surface-secondary)] p-8 shadow-[var(--elevation-3)] relative overflow-hidden">
      <h3 className="text-2xl font-bold text-[var(--text-primary)]">
        Nachricht senden
      </h3>
      <p className="mt-2 text-[var(--text-secondary)]">
        Für allgemeine Anfragen (z.B. Sicherheitstechnik, Schließanlagen) nutzen Sie gerne unser Kontaktformular. Wir melden uns schnellstmöglich bei Ihnen.
      </p>

      {/* Progress Indicator */}
      <div
        className={cn("mt-6 overflow-hidden transition-all duration-500 ease-in-out",
          showProgress ?"max-h-20 opacity-100" :"max-h-0 opacity-0"
        )}
      >
        <div className="flex items-center justify-between text-sm font-medium mb-2">
          <span className="text-[var(--value-primary)]">
            {filledFieldsCount === 4 ?"Perfekt! Sie können jetzt absenden." :"Fast geschafft!"}
          </span>
          <span className="text-[var(--text-tertiary)]">{filledFieldsCount} / 4 Felder</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--value-primary)] transition-all duration-500 ease-out"
            style={{ width: `${(filledFieldsCount / 4) * 100}%` }}
          />
        </div>
      </div>

      <form className="mt-8 space-y-5" aria-label="Kontaktformular" onSubmit={handleSubmit}>
        {/* Name Field */}
        <motion.div
          className="relative"
          animate={shakeField ==="name" ? { x: [0, -6, 6, -6, 6, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={fieldStates.name.error ? "err-name" : undefined}
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn("peer pt-5 pb-2 placeholder:text-transparent px-4 pr-10 rounded-[var(--radius-lg)]", fieldClasses("name"))}
            placeholder="Name"
          />
          <label htmlFor="name" className="absolute left-4 top-4 text-[var(--text-tertiary)] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[var(--color-blush-500)] pointer-events-none">
            Name
          </label>
          <AnimatePresence>
            {fieldStates.name.touched && fieldStates.name.valid && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <CheckmarkIcon />
              </div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {fieldStates.name.error && (
              <motion.p
                id="err-name"
                role="alert"
                aria-live="polite"
                className="text-red-500 text-xs mt-1 pl-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height:"auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {fieldStates.name.error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Field */}
        <motion.div
          className="relative"
          animate={shakeField ==="email" ? { x: [0, -6, 6, -6, 6, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={fieldStates.email.error ? "err-email" : undefined}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn("peer pt-5 pb-2 placeholder:text-transparent px-4 pr-10 rounded-[var(--radius-lg)]", fieldClasses("email"))}
            placeholder="E-Mail"
          />
          <label htmlFor="email" className="absolute left-4 top-4 text-[var(--text-tertiary)] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[var(--color-blush-500)] pointer-events-none">
            E-Mail
          </label>
          <AnimatePresence>
            {fieldStates.email.touched && fieldStates.email.valid && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <CheckmarkIcon />
              </div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {fieldStates.email.error && (
              <motion.p
                id="err-email"
                role="alert"
                aria-live="polite"
                className="text-red-500 text-xs mt-1 pl-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height:"auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {fieldStates.email.error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Phone Field */}
        <motion.div
          className="relative"
          animate={shakeField ==="phone" ? { x: [0, -6, 6, -6, 6, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Input
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
            aria-describedby={fieldStates.phone.error ? "err-phone" : undefined}
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn("peer pt-5 pb-2 placeholder:text-transparent px-4 pr-10 rounded-[var(--radius-lg)]", fieldClasses("phone"))}
            placeholder="Telefon (optional)"
          />
          <label htmlFor="phone" className="absolute left-4 top-4 text-[var(--text-tertiary)] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[var(--color-blush-500)] pointer-events-none">
            Telefon (optional)
          </label>
          <AnimatePresence>
            {fieldStates.phone.touched && fieldStates.phone.valid && formData.phone.trim() !=="" && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <CheckmarkIcon />
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Field */}
        <motion.div
          className="relative"
          animate={shakeField ==="message" ? { x: [0, -6, 6, -6, 6, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            aria-required="true"
            aria-describedby={fieldStates.message.error ? "err-message" : undefined}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cn("peer pt-6 pb-2 placeholder:text-transparent px-4 pr-10 rounded-[var(--radius-lg)] resize-none", fieldClasses("message"))}
            placeholder="Nachricht"
          />
          <label htmlFor="message" className="absolute left-4 top-4 text-[var(--text-tertiary)] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[var(--color-blush-500)] pointer-events-none">
            Nachricht
          </label>
          <AnimatePresence>
            {fieldStates.message.touched && fieldStates.message.valid && (
              <div className="absolute right-3 top-6">
                <CheckmarkIcon />
              </div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {fieldStates.message.error && (
              <motion.p
                id="err-message"
                role="alert"
                aria-live="polite"
                className="text-red-500 text-xs mt-1 pl-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height:"auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {fieldStates.message.error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn("bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-[16px] h-[52px] rounded-[var(--radius-8)] flex items-center justify-center transition-all shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)]","w-full transition-all duration-200", filledFieldsCount === 4 && !isSubmitting &&"animate-pulse-glow", isSubmitting &&"opacity-70 pointer-events-none hover:-translate-y-[0px] shadow-none", !isSubmitting &&"hover:-translate-y-[2px]")}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Wird gesendet...
              </span>
            ) : ("Nachricht senden"
            )}
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-[var(--text-tertiary)]">
          <svg className="h-4 w-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          Ihre Daten werden sicher SSL-verschlüsselt übertragen.
        </div>
      </form>
    </div>
  );
}
