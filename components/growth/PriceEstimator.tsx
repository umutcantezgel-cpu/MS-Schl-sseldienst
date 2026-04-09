"use client";

import { useState } from "react";
import { Phone, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// ─── Step Types ───
type Situation =
  | "zugefallen"
  | "abgebrochen"
  | "schliessanlage"
  | "sicherheit";
type Zeitpunkt = "regulaer" | "nacht" | "wochenende";

interface PriceRange {
  from: number;
  to: number;
  note: string;
}

// ─── Price Matrix ───
const PRICE_MATRIX: Record<Situation, Record<Zeitpunkt, PriceRange>> = {
  zugefallen: {
    regulaer: { from: 99, to: 149, note: "Einfache Türöffnung ohne Beschädigung" },
    nacht: { from: 149, to: 199, note: "Nachtdienst-Zuschlag inkl." },
    wochenende: { from: 129, to: 179, note: "Wochenend-Zuschlag inkl." },
  },
  abgebrochen: {
    regulaer: { from: 129, to: 199, note: "Inkl. Schlüsselentfernung" },
    nacht: { from: 179, to: 249, note: "Nachtdienst + Schlüsselentfernung" },
    wochenende: { from: 159, to: 229, note: "Wochenend + Schlüsselentfernung" },
  },
  schliessanlage: {
    regulaer: { from: 199, to: 499, note: "Je nach Schließsystem und Umfang" },
    nacht: { from: 249, to: 549, note: "Express-Service nachts verfügbar" },
    wochenende: { from: 229, to: 529, note: "Wochenend-Verfügbarkeit" },
  },
  sicherheit: {
    regulaer: { from: 149, to: 399, note: "Einbruchschutz-Beratung & Installation" },
    nacht: { from: 199, to: 449, note: "Notfall-Sicherung nach Einbruch" },
    wochenende: { from: 179, to: 429, note: "Wochenend-Express" },
  },
};

const SITUATIONS: { key: Situation; label: string }[] = [
  { key: "zugefallen", label: "Tür zugefallen" },
  { key: "abgebrochen", label: "Schlüssel abgebrochen" },
  { key: "schliessanlage", label: "Schließanlage wechseln" },
  { key: "sicherheit", label: "Sicherheitstechnik" },
];

const ZEITPUNKTE: { key: Zeitpunkt; label: string; time: string }[] = [
  { key: "regulaer", label: "Regulär", time: "Mo-Sa 10:00-18:00" },
  { key: "nacht", label: "Nachtdienst", time: "22:00-07:00" },
  { key: "wochenende", label: "Wochenende/Feiertag", time: "Sa & So ganztags" },
];

/**
 * Phase 18 , Interactive Price Estimator for Schlüsseldienst
 * 3 steps: Situation → Zeitpunkt → Result with CTA
 */
export default function PriceEstimator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [situation, setSituation] = useState<Situation | null>(null);
  const [zeitpunkt, setZeitpunkt] = useState<Zeitpunkt | null>(null);

  const handleSituation = (s: Situation) => {
    setSituation(s);
    setStep(2);
    trackEvent("pricing_calculator_use", { label: "estimator_start", category: s });
  };

  const handleZeitpunkt = (z: Zeitpunkt) => {
    setZeitpunkt(z);
    setStep(3);
    trackEvent("pricing_calculator_use", {
      label: "estimator_result",
      category: `${situation}_${z}`,
    });
  };

  const reset = () => {
    setStep(1);
    setSituation(null);
    setZeitpunkt(null);
  };

  const price =
    situation && zeitpunkt ? PRICE_MATRIX[situation][zeitpunkt] : null;

  return (
    <div className="bg-white rounded-2xl border border-[var(--color-charcoal-100)] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[var(--color-charcoal-900)] text-white px-6 py-4">
        <div className="text-lg font-bold">Preis-Schätzer</div>
        <p className="text-sm text-white/70 mt-0.5">
          Unverbindliche Preiseinschätzung in 2 Schritten
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-2 px-6 pt-5 pb-3">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= s
                  ? "bg-[var(--color-red-500)] text-white"
                  : "bg-[var(--color-charcoal-100)] text-[var(--color-charcoal-400)]"
              }`}
            >
              {step > s ? <CheckCircle className="h-4 w-4" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`w-8 h-0.5 transition-colors ${
                  step > s
                    ? "bg-[var(--color-red-500)]"
                    : "bg-[var(--color-charcoal-100)]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        {/* Step 1: Situation */}
        {step === 1 && (
          <div>
            <p className="text-sm font-semibold text-[var(--color-charcoal-700)] mb-3">
              Was ist Ihre Situation?
            </p>
            <div className="grid gap-2">
              {SITUATIONS.map((s) => (
                <button
                  key={s.key}
                  onClick={() => handleSituation(s.key)}
                  className="flex items-center gap-3 w-full text-left p-3 rounded-lg border border-[var(--color-charcoal-100)] hover:border-[var(--color-red-300)] hover:bg-[var(--color-red-50)] transition-all group"
                >

                  <span className="text-sm font-medium text-[var(--color-charcoal-700)] group-hover:text-[var(--color-red-600)] transition-colors">
                    {s.label}
                  </span>
                  <ArrowRight className="h-4 w-4 ml-auto text-[var(--color-charcoal-300)] group-hover:text-[var(--color-red-500)] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Zeitpunkt */}
        {step === 2 && (
          <div>
            <p className="text-sm font-semibold text-[var(--color-charcoal-700)] mb-3">
              Wann benötigen Sie den Service?
            </p>
            <div className="grid gap-2">
              {ZEITPUNKTE.map((z) => (
                <button
                  key={z.key}
                  onClick={() => handleZeitpunkt(z.key)}
                  className="flex items-center justify-between w-full text-left p-3 rounded-lg border border-[var(--color-charcoal-100)] hover:border-[var(--color-red-300)] hover:bg-[var(--color-red-50)] transition-all group"
                >
                  <div>
                    <span className="text-sm font-medium text-[var(--color-charcoal-700)] group-hover:text-[var(--color-red-600)] transition-colors">
                      {z.label}
                    </span>
                    <p className="text-xs text-[var(--color-charcoal-400)] mt-0.5">
                      {z.time}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--color-charcoal-300)] group-hover:text-[var(--color-red-500)] transition-colors" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-3 text-xs text-[var(--color-charcoal-400)] hover:text-[var(--color-charcoal-600)] flex items-center gap-1"
            >
              <ArrowLeft className="h-3 w-3" /> Zurück
            </button>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 3 && price && (
          <div className="text-center">
            <div className="bg-[var(--color-red-50)] rounded-xl p-6 mb-4">
              <p className="text-sm text-[var(--color-charcoal-500)] mb-1">
                Geschätzter Preis
              </p>
              <p className="text-3xl font-bold text-[var(--color-red-600)]">
                {price.from}€ - {price.to}€
              </p>
              <p className="text-xs text-[var(--color-charcoal-500)] mt-2">
                {price.note}
              </p>
            </div>

            <p className="text-xs text-[var(--color-charcoal-400)] mb-4">
              Der exakte Festpreis wird Ihnen telefonisch vor Anfahrt genannt.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="tel:+4964418056279"
                onClick={() =>
                  trackEvent("pricing_calculator_use", {
                    label: "estimator_cta_click",
                    category: `${situation}_${zeitpunkt}`,
                  })
                }
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold rounded-xl transition-colors"
              >
                <Phone className="h-4 w-4" />
                Jetzt anrufen , 06441 8056279
              </a>

              <button
                onClick={reset}
                className="text-xs text-[var(--color-charcoal-400)] hover:text-[var(--color-charcoal-600)] mt-1"
              >
                Neue Schätzung starten
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
