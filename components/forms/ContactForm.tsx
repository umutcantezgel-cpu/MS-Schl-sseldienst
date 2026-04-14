"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FormField } from "./FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { getAllServices } from "@/lib/data/services";
import { submitToFormspree } from "@/lib/forms/formspree";
import { validateRequired, validatePhone, FormErrors, ValidationResult } from "@/lib/forms/validation";
import { useUI } from "@/lib/context/UIContext";

export interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
  formId?: string;
}

export function ContactForm({ onSuccess, className = "", formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "demo-form" }: ContactFormProps) {
  const { addToast } = useUI();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceOption: "",
    address: "",
    message: "",
    gdpr: false,
    startTime: "", // Will be set on mount to prevent SSR mismatch
    website: ""
  });

  // Phase 4.2 StartTime Initialization
  useEffect(() => {
    setFormData(prev => ({ ...prev, startTime: Date.now().toString() }));
  }, []);

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const services = typeof getAllServices === 'function' ? getAllServices() : [];

  const validateField = (name: string, value: string | boolean): ValidationResult => {
    switch (name) {
      case "name":
        return validateRequired(value);
      case "phone":
        return validatePhone(value as string);
      case "gdpr":
        return value === true ? { valid: true } : { valid: false, message: "Bitte akzeptieren Sie die DSGVO" };
      default:
        return { valid: true };
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setTouched(prev => {
      const next = new Set(prev);
      next.add(name);
      return next;
    });

    const result = validateField(name, finalValue);
    const errorMessage = !result.valid ? result.message : "";
    
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: finalValue }));
    
    if (touched.has(name)) {
      const result = validateField(name, finalValue);
      const errorMessage = !result.valid ? result.message : "";
      
      setErrors(prev => ({
        ...prev,
        [name]: errorMessage
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    
    // Batch validation
    let hasErrors = false;
    const newErrors: FormErrors = {};
    const newTouched = new Set(touched);
    
    Object.entries(formData).forEach(([key, value]) => {
      newTouched.add(key);
      const res = validateField(key, value);
      if (!res.valid) {
        hasErrors = true;
        newErrors[key] = res.message;
      }
    });
    
    setTouched(newTouched);
    setErrors(newErrors);

    if (hasErrors) {
      addToast("error", "Bitte korrigieren Sie die rot markierten Felder.");
      return;
    }

    setLoading(true);

    // Build FormData for Server Action
    const dataForServer = new FormData();
    dataForServer.append("name", formData.name);
    dataForServer.append("email", formData.email);
    dataForServer.append("phone", formData.phone);
    dataForServer.append("message", `Service: ${formData.serviceOption}\nAdresse: ${formData.address}\n\n${formData.message}`);
    // Honeypot & Timestamp Field from State
    dataForServer.append("website", formData.website || "");
    dataForServer.append("startTime", formData.startTime);

    try {
      import("@/app/actions/contact").then(async ({ submitContactForm }) => {
        let result = await submitContactForm({ success: false, message: "" }, dataForServer);
        
        // Handle Server Action Feedback
        if (result.success) {
          setSuccess(true);
          addToast("success", "Ihre Anfrage wurde erfolgreich gesendet!");
          if (onSuccess) onSuccess();
        } else if (result.fallbackToClient) {
          // If Server Action signals a strict network error on its end, we Fallback to direct AJAX
          console.warn("Server action fallback triggered, submitting direct via client...");
          const fallbackResult = await submitToFormspree(formId, Object.fromEntries(dataForServer.entries()));
          if (fallbackResult.success) {
            setSuccess(true);
            addToast("success", "Ihre Anfrage wurde erfolgreich gesendet!");
            if (onSuccess) onSuccess();
          } else {
            setSubmitError(fallbackResult.error?.message || "Fallback fehlgeschlagen. Bitte erneut versuchen.");
            addToast("error", "Verbindungsfehler auf beiden Netzwerkebenen.");
          }
        } else {
          // Normal validation or rate limit error from server
          if (result.errors) {
            // Phase 4.1 Type Resolution Fix
            const resolvedErrors: Record<string, string> = {};
            Object.entries(result.errors).forEach(([k, v]) => {
              resolvedErrors[k] = v[0] || "Ungültige Eingabe"; // Take the first validation message
            });
            setErrors(resolvedErrors);
          }
          setSubmitError(result.message || "Es ist ein Fehler aufgetreten.");
          addToast("error", result.message || "Fehler beim Absenden.");
        }
        setLoading(false);
      });
    } catch (err) {
      console.error(err);
      setSubmitError("Unerwarteter Fehler im Client.");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`p-8 bg-green-50 border border-green-200 rounded-xl text-center shadow-sm ${className}`} role="alert" aria-live="polite">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div className="text-xl font-bold text-gray-900 mb-2">Nachricht erfolgreich gesendet!</div>
        <p className="text-gray-600 font-medium">
          Unser Team hat Ihre Anfrage erhalten. Wir prüfen diese sofort und melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`max-w-2xl mx-auto space-y-6 ${className}`} noValidate>
      
      {submitError && (
        <div className="p-4 bg-red-50 text-red-700 text-sm font-medium rounded-lg border border-red-200">
          {submitError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Vor- und Nachname" required htmlFor="name" error={errors.name}>
          <Input 
            id="name" name="name" placeholder="Max Mustermann" 
            disabled={loading} 
            value={formData.name} onChange={handleChange} onBlur={handleBlur}
            className={errors.name ? 'border-red-500 ring-red-500' : ''}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </FormField>
        
        <FormField label="Telefonnummer (Pflichtfeld)" required htmlFor="phone" error={errors.phone}>
          <Input 
            id="phone" name="phone" type="tel" placeholder="0170 1234567" 
            disabled={loading} 
            value={formData.phone} onChange={handleChange} onBlur={handleBlur}
            className={errors.phone ? 'border-red-500 ring-red-500' : ''}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="E-Mail" htmlFor="email" error={errors.email}>
          <Input 
            id="email" name="email" type="email" placeholder="max@beispiel.de" 
            disabled={loading} 
            value={formData.email} onChange={handleChange} onBlur={handleBlur}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </FormField>
        
        <FormField label="Welchen Service benötigen Sie?" htmlFor="serviceOption">
          <Select 
            id="serviceOption" 
            name="serviceOption" 
            disabled={loading}
            value={formData.serviceOption} onChange={handleChange} onBlur={handleBlur}
            options={[
              { label: "- Bitte wählen -", value: "" },
              ...services.map(s => ({ label: s.title, value: s.slug })),
              { label: "Anderes Anliegen", value: "other" }
            ]}
          />
        </FormField>
      </div>

      <FormField label="Adresse / Postleitzahl (Für schnellere Anfahrt)" htmlFor="address">
        <Input 
          id="address" name="address" placeholder="Wetzlarer Straße 1, 35576 Wetzlar" 
          disabled={loading} 
          value={formData.address} onChange={handleChange} onBlur={handleBlur}
        />
      </FormField>

      <FormField label="Nachricht / Details zum Vorfall" htmlFor="message">
        <Textarea 
          id="message" name="message" rows={4} 
          placeholder="Tür ist nur zugefallen? Steckt der Schlüssel von innen?" 
          disabled={loading}
          value={formData.message} onChange={handleChange} onBlur={handleBlur}
        />
      </FormField>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <Checkbox 
          id="gdpr" name="gdpr" 
          disabled={loading}
          checked={formData.gdpr}
          onChange={(e) => {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, gdpr: checked }));
            if (touched.has("gdpr")) {
              setErrors(prev => ({ ...prev, gdpr: checked ? "" : "Bitte akzeptieren Sie die DSGVO" }));
            }
          }}
          onBlur={() => {
            setTouched(prev => new Set(prev).add("gdpr"));
            setErrors(prev => ({ ...prev, gdpr: formData.gdpr ? "" : "Bitte akzeptieren Sie die DSGVO" }));
          }}
          label={<span className="text-sm">Ich erkläre mich mit den <Link href="/datenschutz" className="text-[var(--color-red-500)] underline">Datenschutzbestimmungen</Link> einverstanden. Die Daten werden über Formspree Inc. (USA) auf Basis von Standardvertragsklauseln übermittelt.</span>}
        />
        {errors.gdpr && <p className="text-red-500 text-xs mt-1 font-medium">{errors.gdpr}</p>}
      </div>

      <div className="mt-8 pb-4">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full text-base h-12 shadow-[0_4px_14px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] transition-all bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)]"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
              Sende Anfrage...
            </span>
          ) : "Jetzt schnelle Hilfe anfragen"}
        </Button>
      </div>
    </form>
  );
}
