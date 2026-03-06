"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const filledFieldsCount = Object.values(formData).filter((val) => val.trim() !== "").length;
    const showProgress = filledFieldsCount >= 2; // Show progress early to encourage completion

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1200));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="rounded-2xl bg-[var(--color-surface-subtle)] p-10 ring-1 ring-[var(--color-border)] flex flex-col items-center justify-center text-center max-w-md mx-auto min-h-[400px]">
                <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-[var(--color-success)] opacity-20 animate-ping"></div>
                    <CheckCircle2 className="relative h-20 w-20 text-[var(--color-success)] bg-white rounded-full scale-in-center" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                    Nachricht erfolgreich gesendet!
                </h3>
                <p className="text-[var(--color-text-body)] mb-8">
                    Vielen Dank für Ihre Anfrage. Einer unserer Experten wird sich in Kürze bei Ihnen melden. In dringenden Notfällen rufen Sie uns bitte direkt an.
                </p>
                <a
                    href="tel:06441123456"
                    className={cn(buttonVariants({ variant: "default" }), "w-full sm:w-auto")}
                >
                    Jetzt Notdienst anrufen
                </a>
            </div>
        );
    }

    return (
        <div className="rounded-2xl bg-[var(--color-surface-subtle)] p-8 ring-1 ring-[var(--color-border)] relative overflow-hidden">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                Nachricht senden
            </h3>
            <p className="mt-2 text-[var(--color-text-body)]">
                Für allgemeine Anfragen (z.B. Sicherheitstechnik, Schließanlagen) nutzen Sie gerne unser Kontaktformular. Wir melden uns schnellstmöglich bei Ihnen.
            </p>

            {/* Progress Indicator (Micro-Conversion) */}
            <div
                className={cn(
                    "mt-6 overflow-hidden transition-all duration-500 ease-in-out",
                    showProgress ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex items-center justify-between text-sm font-medium mb-2">
                    <span className="text-[var(--color-brand)]">
                        {filledFieldsCount === 4 ? "Perfekt! Sie können jetzt absenden." : "Fast geschafft!"}
                    </span>
                    <span className="text-[var(--color-text-muted)]">{filledFieldsCount} / 4 Felder</span>
                </div>
                <div className="h-2 w-full bg-[var(--color-surface-divider)] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[var(--color-brand)] transition-all duration-500 ease-out"
                        style={{ width: `${(filledFieldsCount / 4) * 100}%` }}
                    />
                </div>
            </div>

            <form className="mt-8 space-y-6" aria-label="Kontaktformular" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-body)]">
                        Name
                    </label>
                    <div className="mt-2">
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            required
                            aria-required="true"
                            value={formData.name}
                            onChange={handleChange}
                            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Kleine Bitte: Verraten Sie uns noch Ihren Namen für eine persönliche Ansprache.')}
                            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-body)]">
                        E-Mail
                    </label>
                    <div className="mt-2">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            aria-required="true"
                            value={formData.email}
                            onChange={handleChange}
                            onInvalid={(e) => {
                                const target = e.target as HTMLInputElement;
                                if (target.validity.valueMissing) {
                                    target.setCustomValidity('Fast geschafft! Hier fehlt nur noch Ihre E-Mail-Adresse.');
                                } else if (target.validity.typeMismatch) {
                                    target.setCustomValidity('Hoppla, da hat sich ein Tippfehler eingeschlichen. Fehlt da vielleicht ein @ oder ein Punkt?');
                                }
                            }}
                            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-body)]">
                        Telefon (optional)
                    </label>
                    <div className="mt-2">
                        <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-body)]">
                        Nachricht
                    </label>
                    <div className="mt-2">
                        <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            aria-required="true"
                            value={formData.message}
                            onChange={handleChange}
                            onInvalid={(e) => (e.target as HTMLTextAreaElement).setCustomValidity('Wie können wir Ihnen helfen? Ein kurzer Satz genügt völlig.')}
                            onInput={(e) => (e.target as HTMLTextAreaElement).setCustomValidity('')}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(buttonVariants({ size: "lg" }), "w-full transition-all duration-200", filledFieldsCount === 4 && !isSubmitting && "animate-pulse-glow")}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Wird gesendet...
                            </span>
                        ) : (
                            "Nachricht senden"
                        )}
                    </button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-[var(--color-text-muted)]">
                    <svg className="h-4 w-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Ihre Daten werden sicher SSL-verschlüsselt übertragen.
                </div>
            </form>
        </div>
    );
}
