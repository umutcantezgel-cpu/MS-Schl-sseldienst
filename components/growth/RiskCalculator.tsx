"use client";
import { useState } from "react";
import { ShieldAlert, ShieldCheck, Home, Building2, Lock, AlertTriangle, ChevronRight, Activity, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface RiskCalculatorProps {
  embedded?: boolean;
}

export default function RiskCalculator({ embedded = false }: RiskCalculatorProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    plz: "",
    livingType: "",
    securityLevel: ""
  });
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleNext = () => setStep(s => s + 1);

  const calculateRisk = () => {
    setCalculating(true);
    setTimeout(() => {
      // Mock Algorithmus für den Lahn-Dill-Kreis
      let baseRisk = 45; // Basis-Risiko
      
      // PLZ Einfluss (Wetzlar Stadt vs. Umland)
      if (formData.plz.startsWith("3557")) baseRisk += 15; // Wetzlar Kernstadt
      if (formData.plz.startsWith("356")) baseRisk -= 5; // Lahn-Dill Umland

      // Wohnsituation
      if (formData.livingType === "efh") baseRisk += 25; // Einfamilienhaus (höchstes Risiko)
      if (formData.livingType === "eg") baseRisk += 15; // Erdgeschoss
      if (formData.livingType === "og") baseRisk -= 10; // Obergeschoss

      // Sicherheitstechnik
      if (formData.securityLevel === "none") baseRisk += 20;
      if (formData.securityLevel === "basic") baseRisk -= 10;
      if (formData.securityLevel === "high") baseRisk -= 35;

      // Begrenzung 0-100
      const finalRisk = Math.max(5, Math.min(95, baseRisk));
      setResult(finalRisk);
      setCalculating(false);
      setStep(4);
    }, 1500);
  };

  const reset = () => {
    setStep(1);
    setResult(null);
    setFormData({ plz: "", livingType: "", securityLevel: "" });
  };

  return (
    <div className={`w-full max-w-xl mx-auto bg-white rounded-[var(--radius-24)] border border-[var(--border-subtle)] shadow-[var(--elevation-2)] overflow-hidden flex flex-col font-sans ${embedded ? 'h-full flex-1' : ''}`}>
      {/* Header */}
      <div className="bg-[var(--surface-elevated)] p-6 border-b border-[var(--border-subtle)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/5 rounded-bl-[100px] pointer-events-none" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <div className="text-xl font-extrabold text-[color:var(--text-primary)] flex items-center gap-2 tracking-tight">
              <Activity className="w-5 h-5 text-[var(--color-red-500)]" />
              Einbruchrisiko-Analyse
            </div>
            <p className="text-sm font-medium text-[color:var(--text-secondary)] mt-1">Lahn-Dill-Kreis & Wetzlar</p>
          </div>
          <Badge className="bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] border-transparent font-bold">Lokal</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 flex-grow">
        
        {/* Step 1: PLZ */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="text-lg font-bold text-[color:var(--text-primary)] mb-4">Wo befindet sich die Immobilie?</div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[color:var(--text-tertiary)]" />
              <input 
                type="text" 
                placeholder="Postleitzahl (z.B. 35578)" 
                className="w-full text-base py-4 pl-12 pr-4 bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-xl focus:ring-2 focus:ring-[var(--color-red-500)] focus:border-transparent outline-none transition-all font-medium placeholder:font-normal placeholder:text-gray-400"
                value={formData.plz}
                onChange={(e) => setFormData({...formData, plz: e.target.value.replace(/[^0-9]/g, '').slice(0, 5)})}
              />
            </div>
            <button 
              onClick={handleNext} 
              disabled={formData.plz.length !== 5}
              className="mt-6 w-full py-4 bg-[var(--color-red-500)] text-white font-bold rounded-xl disabled:opacity-50 hover:bg-[var(--color-red-600)] transition-all flex items-center justify-center gap-2 group shadow-[var(--shadow-cta)]"
            >
              Weiter <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Step 2: Wohnsituation */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="text-lg font-bold text-[color:var(--text-primary)] mb-4">Welche Wohnart liegt vor?</div>
            <div className="grid gap-3">
              <button 
                onClick={() => { setFormData({...formData, livingType: 'efh'}); handleNext(); }}
                className="flex items-center gap-4 p-4 border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] rounded-xl bg-[var(--surface-secondary)] hover:bg-white transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[color:var(--text-primary)]">Einfamilienhaus</div>
                  <div className="text-sm font-medium text-[color:var(--text-secondary)] m-0">Freistehend oder Reihenhaus</div>
                </div>
              </button>
              
              <button 
                onClick={() => { setFormData({...formData, livingType: 'eg'}); handleNext(); }}
                className="flex items-center gap-4 p-4 border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] rounded-xl bg-[var(--surface-secondary)] hover:bg-white transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[color:var(--text-primary)]">Wohnung Erdgeschoss</div>
                  <div className="text-sm font-medium text-[color:var(--text-secondary)] m-0">Parterre oder Hochparterre</div>
                </div>
              </button>

              <button 
                onClick={() => { setFormData({...formData, livingType: 'og'}); handleNext(); }}
                className="flex items-center gap-4 p-4 border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] rounded-xl bg-[var(--surface-secondary)] hover:bg-white transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[color:var(--text-primary)]">Wohnung Obergeschoss</div>
                  <div className="text-sm font-medium text-[color:var(--text-secondary)] m-0">Ab dem 1. Stockwerk aufwärts</div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Sicherheit */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="text-lg font-bold text-[color:var(--text-primary)] mb-4">Aktuelle Sicherheitsmaßnahmen?</div>
            <div className="grid gap-3">
              <button 
                onClick={() => { setFormData({...formData, securityLevel: 'none'}); calculateRisk(); }}
                className="flex items-center gap-4 p-4 border border-[var(--border-subtle)] hover:border-[var(--color-red-500)] rounded-xl bg-[var(--surface-secondary)] hover:bg-white transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[color:var(--text-primary)]">Basis/Keine Extras</div>
                  <div className="text-sm font-medium text-[color:var(--text-secondary)] m-0">Standardbeschläge, keine Zusatzschlösser</div>
                </div>
              </button>

              <button 
                onClick={() => { setFormData({...formData, securityLevel: 'basic'}); calculateRisk(); }}
                className="flex items-center gap-4 p-4 border border-[var(--border-subtle)] hover:border-amber-500 rounded-xl bg-[var(--surface-secondary)] hover:bg-white transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[color:var(--text-primary)]">Mittlerer Schutz</div>
                  <div className="text-sm font-medium text-[color:var(--text-secondary)] m-0">Aufschraubschlösser oder Kette vorhanden</div>
                </div>
              </button>

              <button 
                onClick={() => { setFormData({...formData, securityLevel: 'high'}); calculateRisk(); }}
                className="flex items-center gap-4 p-4 border border-[var(--border-subtle)] hover:border-emerald-500 rounded-xl bg-[var(--surface-secondary)] hover:bg-white transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[color:var(--text-primary)]">Hoher Schutz</div>
                  <div className="text-sm font-medium text-[color:var(--text-secondary)] m-0">Panzerriegel, VdS-Zylinder & Kernziehschutz</div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Calculating State */}
        {calculating && (
          <div className="animate-in fade-in py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 border-4 border-[var(--surface-secondary)] border-t-[var(--color-red-500)] rounded-full animate-spin mb-6"></div>
            <div className="text-xl font-bold text-[color:var(--text-primary)]">Analysiere Risikoprofil...</div>
            <p className="text-[color:var(--text-secondary)] font-medium mt-2">Berechne lokale Daten für {formData.plz}</p>
          </div>
        )}

        {/* Result */}
        {step === 4 && result !== null && !calculating && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <div className="text-sm font-bold text-[color:var(--text-secondary)] uppercase tracking-widest mb-4">Ihr berechnetes Risiko</div>
              <div className="flex justify-center mb-2">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--surface-secondary)" strokeWidth="10" />
                    <circle 
                      cx="50" cy="50" r="45" fill="none" 
                      stroke={result > 60 ? "var(--color-red-500)" : result > 30 ? "#f59e0b" : "#10b981"} 
                      strokeWidth="10" strokeDasharray="283" strokeDashoffset={283 - (283 * result) / 100} 
                      className="transition-all duration-1000 ease-out" 
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-[color:var(--text-primary)]">{result}%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 mb-2">
                {result > 60 ? (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] rounded-full font-bold">
                    <ShieldAlert className="w-5 h-5" /> Sehr hohes Einbruchrisiko
                  </div>
                ) : result > 30 ? (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-bold">
                    <AlertTriangle className="w-5 h-5" /> Erhöhtes Risiko
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold">
                    <ShieldCheck className="w-5 h-5" /> Guter Schutz
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[var(--surface-secondary)] p-5 rounded-xl border border-[var(--border-subtle)] text-center mb-6">
              <p className="text-[15px] text-[color:var(--text-primary)] font-medium leading-relaxed m-0">
                {result > 60 
                  ? "Türen in Erdgeschossen und Einfamilienhäusern ohne Zusatzsicherung werden in Wetzlar häufig von Gelegenheitstätern angegriffen. Ein Nachrüsten wird dringend empfohlen."
                  : result > 30 
                  ? "Ihr Schutz ist im Durchschnitt, bietet geübten Tätern aber noch Schwachstellen. Eine professionelle Schwachstellenanalyse deckt diese auf."
                  : "Sie sind bereits gut ausgestattet. Achten Sie darauf, Türen immer zweimal abzuschließen und Fenster nicht auf Kipp zu lassen."}
              </p>
            </div>

            {!embedded && (
              <Link href="/leistungen/einbruchschutz" className="w-full py-4 bg-[var(--color-red-500)] text-white font-bold rounded-xl hover:bg-[var(--color-red-600)] transition-all flex items-center justify-center gap-2 shadow-[var(--shadow-cta)] mb-4">
                Kostenlose Beratung anfordern <ChevronRight className="w-5 h-5" />
              </Link>
            )}

            <button onClick={reset} className="w-full py-3 text-[color:var(--text-secondary)] font-semibold hover:text-[color:var(--text-primary)] transition-colors text-sm">
              Analyse neu starten
            </button>
          </div>
        )}

      </div>

      {/* Widget Footer (The Authority Link Generator!) */}
      <div className="bg-[var(--color-gray-900)] p-4 text-center border-t border-[var(--color-gray-800)]">
        <p className="text-xs font-semibold text-gray-400">
          Datenbereitstellung & Analyse durch<br/>
          <a href="https://wetzlar-schlüsseldienst.de" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-red-500)] transition-colors mt-1 inline-block text-[13px] font-bold">
            Schlüssel Schmiede Wetzlar
          </a>
        </p>
      </div>
    </div>
  );
}
