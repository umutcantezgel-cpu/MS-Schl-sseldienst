"use client";

import { useState, useCallback, useActionState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Loader2, Phone, AlertCircle } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { trackFormFunnel } from "@/lib/analytics";
import TrustSignals from "@/components/trust/TrustSignals";
import { CTA_COPY } from "@/lib/cta-copy";

interface FieldState {
  touched: boolean;
  valid: boolean;
  error: string;
}

function CheckmarkIcon({ className }: { className?: string }) {
  return (
    <m.svg
      viewBox="0 0 24 24"
      className={cn("w-5 h-5 text-status-success", className)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <m.path
        d="M5 13l4 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </m.svg>
  );
}

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [fieldStates, setFieldStates] = useState<Record<string, FieldState>>({
    name: { touched: false, valid: false, error: "" },
    email: { touched: false, valid: false, error: "" },
    phone: { touched: false, valid: false, error: "" },
    message: { touched: false, valid: false, error: "" },
  });
  const [formStarted, setFormStarted] = useState(false);
  const [shakeField, setShakeField] = useState<string | null>(null);

  const filledFieldsCount = Object.values(formData).filter((val) => val.trim() !== "").length;
  const showProgress = filledFieldsCount >= 2;

  // Track form start
  const handleFocus = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackFormFunnel("start");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (fieldStates[name]?.error) {
      setFieldStates(prev => ({
        ...prev,
        [name]: { ...prev[name], error: "", valid: value.trim().length > 0 }
      }));
    }
  };

  const validateField = useCallback((name: string, value: string) => {
    let valid = false;
    let error = "";

    switch (name) {
      case "name":
        valid = value.trim().length >= 2;
        error = valid ? "" : "Bitte geben Sie Ihren Namen ein.";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valid = emailRegex.test(value);
        error = value.trim() === "" ? "Bitte geben Sie Ihre E-Mail ein." : !valid ? "Bitte prüfen Sie Ihre E-Mail-Adresse." : "";
        break;
      case "phone":
        // Phone is optional — valid if empty or has digits
        valid = value.trim() === "" || /[\d\s\-+()]{6,}/.test(value);
        error = "";
        break;
      case "message":
        valid = value.trim().length >= 5;
        error = valid ? "" : "Bitte beschreiben Sie kurz Ihr Anliegen.";
        break;
    }

    return { valid, error };
  }, []);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Skip validation for optional phone when empty
    if (name === "phone" && value.trim() === "") {
      setFieldStates(prev => ({ ...prev, [name]: { touched: true, valid: false, error: "" } }));
      return;
    }

    const { valid, error } = validateField(name, value);
    setFieldStates(prev => ({ ...prev, [name]: { touched: true, valid, error } }));

    // Shake on error
    if (error && value.trim() !== "") {
      setShakeField(name);
      setTimeout(() => setShakeField(null), 500);
    }

    // Track progress
    if (filledFieldsCount >= 3) {
      trackFormFunnel("progress", { value: filledFieldsCount });
    }
  };

  const fieldClasses = (name: string) => {
    const fieldState = fieldStates[name];
    if (!fieldState?.touched) return "";
    if (fieldState.error) return "border-red-400 focus:border-red-500 focus:ring-red-500/20";
    if (fieldState.valid) return "border-status-success/60 focus:border-status-success focus:ring-status-success/20";
    return "";
  };

  // ─── Success State ───
  if (state.success && state.message) {
    trackFormFunnel("success");
    return (
      <m.div
        role="alert"
        aria-live="polite"
        className="rounded-2xl bg-[var(--surface-secondary)] p-10 shadow-[var(--elevation-3)] flex flex-col items-center justify-center text-center max-w-md mx-auto min-h-[400px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="relative mb-6">
          <m.div
            className="absolute inset-0 rounded-full bg-status-success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: [1, 1.5, 1.8] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <m.svg
            viewBox="0 0 80 80"
            className="relative w-20 h-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <m.circle
              cx="40" cy="40" r="36"
              fill="none"
              stroke="rgb(34, 197, 94)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <m.path
              d="M24 40l10 10 22-22"
              fill="none"
              stroke="rgb(34, 197, 94)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            />
          </m.svg>
        </div>
        <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-3">
          {state.submittedName
            ? `Vielen Dank, ${state.submittedName}!`
            : "Vielen Dank!"}
        </h3>
        <p className="text-[color:var(--text-secondary)] mb-2">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
        <p className="text-[14px] text-[color:var(--text-tertiary)] mb-8">
          Oder rufen Sie uns direkt an:
        </p>
        <a
          href="tel:+4964418056544"
          className="flex items-center justify-center gap-2 h-[52px] px-8 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-[16px] rounded-[var(--radius-8)] transition-all shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[2px] w-full sm:w-auto"
        >
          <Phone className="w-5 h-5" />
          06441 8056544
        </a>
      </m.div>
    );
  }

  // ─── Error State (server-side failure) ───
  const showServerError = !state.success && state.message && !state.errors;

  return (
    <div className="rounded-2xl bg-[var(--surface-secondary)] p-8 shadow-[var(--elevation-3)] relative overflow-hidden">
      <h3 className="text-2xl font-bold text-[color:var(--text-primary)]">
        Nachricht senden
      </h3>
      <p className="mt-2 text-[color:var(--text-secondary)]">
        Für allgemeine Anfragen (z.B. Sicherheitstechnik, Schließanlagen) nutzen Sie gerne unser Kontaktformular. Wir melden uns schnellstmöglich bei Ihnen.
      </p>

      {/* Server Error Banner */}
      <AnimatePresence>
        {showServerError && (
          <m.div
            className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <AlertCircle className="h-5 w-5 text-red-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-red-800 text-sm font-medium">{state.message}</p>
              <p className="text-red-700 text-xs mt-1">
                Alternativ: <a href="tel:+4964418056544" className="underline font-medium">06441 8056544 anrufen</a> oder <a href="mailto:info@ms-schluesseldienst-wetzlar.de" className="underline font-medium">E-Mail schreiben</a>
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div
        className={cn("mt-6 overflow-hidden transition-all duration-500 ease-in-out",
          showProgress ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex items-center justify-between text-sm font-medium mb-2">
          <span className="text-[color:var(--value-primary)]">
            {filledFieldsCount === 4 ? "Perfekt! Sie können jetzt absenden." : "Fast geschafft!"}
          </span>
          <span className="text-[color:var(--text-tertiary)]">{filledFieldsCount} / 4 Felder</span>
        </div>
        <div className="h-2 w-full bg-[var(--color-charcoal-200)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--value-primary)] transition-all duration-500 ease-out"
            style={{ width: `${(filledFieldsCount / 4) * 100}%` }}
          />
        </div>
      </div>

      <form className="mt-8 space-y-5" aria-label="Kontaktformular" action={formAction}>
        {/* ─── Honeypot (hidden from humans, bots fill it) ─── */}
        <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            name="website"
            id="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name Field */}
        <m.div
          className="relative"
          animate={shakeField === "name" ? { x: [0, -6, 6, -6, 6, 0] } : {}}
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
            onFocus={handleFocus}
            className={cn("peer pt-5 pb-2 placeholder:text-transparent px-4 pr-10 rounded-[var(--radius-lg)]", fieldClasses("name"))}
            placeholder="Name"
          />
          <label htmlFor="name" className="absolute left-4 top-4 text-[color:var(--text-tertiary)] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[var(--color-blush-500)] pointer-events-none">
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
              <m.p
                id="err-name"
                role="alert"
                aria-live="polite"
                className="text-red-700 text-xs mt-1.5 pl-1 flex items-start gap-1 font-medium"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                {fieldStates.name.error}
              </m.p>
            )}
          </AnimatePresence>
        </m.div>

        {/* Email Field */}
        <m.div
          className="relative"
          animate={shakeField === "email" ? { x: [0, -6, 6, -6, 6, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={fieldStates.email.error ? "err-email" : "hint-email"}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={cn("peer pt-5 pb-2 placeholder:text-transparent px-4 pr-10 rounded-[var(--radius-lg)]", fieldClasses("email"))}
            placeholder="E-Mail"
          />
          <label htmlFor="email" className="absolute left-4 top-4 text-[color:var(--text-tertiary)] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[color:var(--color-red-500)] pointer-events-none">
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
              <m.p
                id="err-email"
                role="alert"
                aria-live="polite"
                className="text-red-700 text-xs mt-1.5 pl-1 flex items-start gap-1 font-medium"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                {fieldStates.email.error}
              </m.p>
            )}
          </AnimatePresence>
          <p id="hint-email" className="text-[11px] text-[color:var(--text-tertiary)] mt-1 pl-1 hidden peer-focus:block">
            Wir verwenden Ihre E-Mail ausschließlich für die Antwort.
          </p>
        </m.div>

        {/* Phone Field */}
        <m.div
          className="relative"
          animate={shakeField === "phone" ? { x: [0, -6, 6, -6, 6, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Input
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
            aria-describedby="hint-phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={cn("peer pt-5 pb-2 placeholder:text-transparent px-4 pr-10 rounded-[var(--radius-lg)]", fieldClasses("phone"))}
            placeholder="Telefon (optional)"
          />
          <label htmlFor="phone" className="absolute left-4 top-4 text-[color:var(--text-tertiary)] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[color:var(--color-red-500)] pointer-events-none">
            Telefon (optional)
          </label>
          <AnimatePresence>
            {fieldStates.phone.touched && fieldStates.phone.valid && formData.phone.trim() !== "" && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <CheckmarkIcon />
              </div>
            )}
          </AnimatePresence>
          <p id="hint-phone" className="text-[11px] text-[color:var(--text-tertiary)] mt-1 pl-1 hidden peer-focus:block">
            Optional — beschleunigt aber die Rückmeldung.
          </p>
        </m.div>

        {/* Message Field */}
        <m.div
          className="relative"
          animate={shakeField === "message" ? { x: [0, -6, 6, -6, 6, 0] } : {}}
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
            onFocus={handleFocus}
            className={cn("peer pt-6 pb-2 placeholder:text-transparent px-4 pr-10 rounded-[var(--radius-lg)] resize-none", fieldClasses("message"))}
            placeholder="Nachricht"
          />
          <label htmlFor="message" className="absolute left-4 top-4 text-[color:var(--text-tertiary)] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[color:var(--color-red-500)] pointer-events-none">
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
              <m.p
                id="err-message"
                role="alert"
                aria-live="polite"
                className="text-red-700 text-xs mt-1.5 pl-1 flex items-start gap-1 font-medium"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                {fieldStates.message.error}
              </m.p>
            )}
          </AnimatePresence>
        </m.div>

        <div>
          <button
            type="submit"
            disabled={isPending}
            className={cn("bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-[16px] h-[52px] rounded-[var(--radius-8)] flex items-center justify-center transition-all shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)]", "w-full transition-all duration-200", filledFieldsCount === 4 && !isPending && "animate-pulse-glow", isPending && "opacity-70 pointer-events-none hover:-translate-y-[0px] shadow-none", !isPending && "hover:-translate-y-[2px]")}
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                {CTA_COPY.submitting}
              </span>
            ) : (
              CTA_COPY.formSubmit
            )}
          </button>
        </div>

        {/* Trust Micro-Copy */}
        <TrustSignals variant="inline" preset="default" className="mt-4 justify-center" />
      </form>
    </div>
  );
}
