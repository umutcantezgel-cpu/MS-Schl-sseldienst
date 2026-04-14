"use client";

import { useState, useEffect } from "react";
import { ServiceType, TimeSlot, PRICING, GUARANTEES } from "./pricing.constants";
import { ShieldCheck, DoorOpen, Lock, Car, Shield, CheckCircle2, Clock, CalendarDays, Phone, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import HeartbeatCTA from "@/components/animations/HeartbeatCTA";

const SERVICES = [
  { id:"doorFallen", label:"Tür zugefallen", desc:"Nicht abgeschlossen", icon: DoorOpen },
  { id:"doorLocked", label:"Tür abgesperrt", desc:"Schlüssel gedreht", icon: Lock },
  { id:"carOpening", label:"Autoöffnung", desc:"Schonend & Beschädigungsfrei", icon: Car },
  { id:"safeOpening", label:"Tresoröffnung", desc:"Heimsafes & Wertgelasse", icon: Shield },
] as const;

const TIME_SLOTS = [
  { id:"day", label:"Regulär", desc:"06:00 - 19:59", icon: Clock },
  { id:"evening", label:"Abends", desc:"20:00 - 21:59", icon: Clock },
  { id:"night", label:"Nachts", desc:"22:00 - 05:59", icon: Clock },
  { id:"weekend", label:"Wochenende", desc:"Sa, So & Feiertage", icon: CalendarDays },
] as const;

export default function PricingCalculator() {
  const [serviceType, setServiceType] = useState<ServiceType>("doorFallen");
  const [timeSlot, setTimeSlot] = useState<TimeSlot>("day");
  const [isAutoDetected, setIsAutoDetected] = useState(false);

  // Auto-Detect current time slot on mount
  useEffect(() => {
    const detectTimeSlot = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      
      let detectedSlot: TimeSlot ="day";
      
      if (day === 0 || day === 6) {
        detectedSlot ="weekend";
      } else {
        if (hour >= 22 || hour < 6) detectedSlot ="night";
        else if (hour >= 20 && hour < 22) detectedSlot ="evening";
        else detectedSlot ="day";
      }
      return detectedSlot;
    };
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeSlot(detectTimeSlot());
    setIsAutoDetected(true);
  }, []);

  const currentPrice = PRICING[serviceType][timeSlot];
  const isNullPrice = currentPrice === null;
  
  // Calculate Base Price and Surcharge for transparency receipt
  const basePrice = PRICING[serviceType]["day"] || 0;
  const surcharge = (currentPrice || 0) - basePrice;

  return (
    <form aria-label="Preiskalkulator" onSubmit={(e) => e.preventDefault()} className="bg-[var(--surface-primary)] rounded-[32px] shadow-[var(--elevation-3)] ring-1 ring-[var(--border-subtle)] overflow-hidden max-w-5xl mx-auto flex flex-col lg:flex-row">
      
      {/* ── Left Panel: Interactive Toggles ── */}
      <div className="flex-[3] p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)] bg-white/40 backdrop-blur-2xl flex flex-col relative">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-red-500)]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        {/* Step Progress Indicator */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--color-red-500)] text-white flex items-center justify-center text-sm font-bold shadow-sm">
              {serviceType ? <CheckCircle2 className="w-4 h-4" /> : "1"}
            </div>
            <span className="text-sm font-semibold text-[color:var(--text-primary)] hidden sm:inline">Situation</span>
          </div>
          <div className="flex-1 h-[2px] bg-[var(--color-red-500)]" />
          <div className="flex items-center gap-2">
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm transition-colors duration-300",
              timeSlot ? "bg-[var(--color-red-500)] text-white" : "bg-[var(--color-charcoal-100)] text-[color:var(--text-tertiary)]"
            )}>
              {timeSlot ? <CheckCircle2 className="w-4 h-4" /> : "2"}
            </div>
            <span className="text-sm font-semibold text-[color:var(--text-primary)] hidden sm:inline">Zeitpunkt</span>
          </div>
          <div className={cn("flex-1 h-[2px] transition-colors duration-300",
            timeSlot ? "bg-[var(--color-red-500)]" : "bg-[var(--color-charcoal-200)]"
          )} />
          <div className="flex items-center gap-2">
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm transition-colors duration-300",
              serviceType && timeSlot ? "bg-[var(--color-red-500)] text-white" : "bg-[var(--color-charcoal-100)] text-[color:var(--text-tertiary)]"
            )}>
              €
            </div>
            <span className="text-sm font-semibold text-[color:var(--text-primary)] hidden sm:inline">Preis</span>
          </div>
        </div>

        <fieldset className="mb-8">
          <legend className="block w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[var(--value-primary)]/10 text-[color:var(--value-primary)] text-sm font-bold tracking-wide border border-[var(--value-primary)]/20 shadow-sm">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              Interaktiver Live-Rechner
            </div>
            <div className="typo-h3 text-[color:var(--text-primary)] mb-2">
              1. Was ist passiert?
            </div>
            <p className="text-[color:var(--text-secondary)] text-base mb-4">
              Wählen Sie Ihre exakte Situation aus, um den verbindlichen Preis zu ermitteln.
            </p>
          </legend>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isSelected = serviceType === service.id;
            return (
              <label
                key={service.id}
                className={cn("group relative flex cursor-pointer rounded-2xl border p-4 transition-all duration-300 overflow-hidden",
                  isSelected
                    ?"border-[var(--color-red-500)] bg-[var(--color-red-50)] ring-2 ring-[var(--color-red-500)] shadow-[var(--shadow-brand-2)] scale-[1.02] z-10"
                    :"border-[var(--border-subtle)] bg-white hover:border-[var(--color-red-200)] hover:bg-[var(--surface-secondary)] hover:shadow-md"
                )}
              >
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                )}
                <input
                  type="radio"
                  name="serviceType"
                  value={service.id}
                  className="sr-only"
                  checked={isSelected}
                  onChange={(e) => setServiceType(e.target.value as ServiceType)}
                />
                <div className="flex w-full items-center justify-between relative z-10">
                  <div className="flex items-center gap-4 w-full">
                    <div className={cn("p-3 rounded-xl shrink-0 transition-colors duration-300",
                      isSelected ?"bg-[var(--color-red-500)] text-white shadow-inner" :"bg-[var(--border-subtle)]/50 text-[color:var(--text-tertiary)] group-hover:text-[var(--color-red-400)] group-hover:bg-[var(--color-red-50)]"
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={cn("font-bold transition-colors duration-300",
                        isSelected ?"text-[color:var(--text-primary)]" :"text-[color:var(--text-secondary)]"
                      )}>
                        {service.label}
                      </span>
                      <span className={cn("text-sm transition-colors duration-300",
                        isSelected ?"text-[color:var(--color-red-700)] font-medium" :"text-[color:var(--text-tertiary)]"
                      )}>
                        {service.desc}
                      </span>
                    </div>
                  </div>
                  <div className={cn("shrink-0 ml-3 h-[22px] w-[22px] rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    isSelected ?"border-[var(--color-red-500)] bg-[var(--color-red-500)]" :"border-[var(--border-subtle)] bg-transparent"
                  )}>
                    {isSelected && <CheckCircle2 className="h-4 w-4 text-white" />}
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="block w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="typo-h3 text-[color:var(--text-primary)]">
                2. Wann brauchen Sie uns?
              </div>
              {isAutoDetected && (
                <span className="text-xs font-bold bg-status-success/15 text-status-success px-2 py-1 rounded-md animate-in fade-in zoom-in duration-500">
                  Auto-Erkannt
                </span>
              )}
            </div>
          </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TIME_SLOTS.map((slot) => {
            const Icon = slot.icon;
            const isSelected = timeSlot === slot.id;
            return (
              <label
                key={slot.id}
                className={cn("relative flex cursor-pointer rounded-2xl border p-4 transition-all duration-300 text-center flex-col items-center justify-center gap-2",
                  isSelected
                    ?"border-[var(--color-charcoal-900)] bg-[var(--color-charcoal-900)] text-white shadow-[var(--elevation-3)] scale-[1.02] z-10"
                    :"border-[var(--border-subtle)] bg-white text-[color:var(--text-secondary)] hover:border-[var(--color-charcoal-300)] hover:bg-[var(--surface-secondary)] hover:shadow-sm"
                )}
              >
                <input
                  type="radio"
                  name="timeSlot"
                  value={slot.id}
                  className="sr-only"
                  checked={isSelected}
                  onChange={(e) => setTimeSlot(e.target.value as TimeSlot)}
                />
                <Icon className={cn("h-6 w-6 transition-colors", isSelected ?"text-[var(--color-red-500)]" :"text-[color:var(--text-tertiary)]")} />
                <div className="flex flex-col">
                  <span className={cn("font-bold text-base", isSelected ?"text-white" :"text-[color:var(--text-primary)]")}>
                    {slot.label}
                  </span>
                  <span className={cn("text-xs font-medium leading-tight mt-1", isSelected ?"text-white/70" :"text-[color:var(--text-tertiary)]")}>
                    {slot.desc}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
        </fieldset>

      </div>
      
      {/* ── Right Panel: Real-Time Receipt & CTA ── */}
      <div className="flex-[2] bg-[var(--color-charcoal-900)] relative overflow-hidden flex flex-col p-8 lg:p-10 text-white">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[var(--color-red-500)]/10 to-transparent mix-blend-overlay pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-red-500)]/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-auto">
            <span className="text-[var(--color-red-500)] font-bold tracking-widest uppercase text-xs mb-2 block">
              Ihr Verbindlicher Preis
            </span>
            <div className="flex items-baseline gap-2 mt-4">
              {isNullPrice ? (
                <span className="text-4xl font-black tracking-tighter leading-none text-white">Auf Anfrage</span>
              ) : (
                <>
                  <span className="text-xl font-bold text-white/60 uppercase tracking-widest">ab</span>
                  <AnimatedNumber value={currentPrice} className="text-[4.5rem] lg:text-[88px] font-black tracking-tighter leading-none text-white tabular-nums drop-shadow-lg" />
                  <span className="text-[32px] lg:text-4xl font-bold text-[var(--color-red-500)]">€</span>
                </>
              )}
            </div>
            
            {!isNullPrice && (
              <div className="mt-8 bg-black/20 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
                <div className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4 border-b border-white/10 pb-3">
                  Transparenz-Beleg
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-white/80">{SERVICES.find(s => s.id === serviceType)?.label}</span>
                    <span className="font-bold">{basePrice} €</span>
                  </div>
                  {surcharge > 0 && (
                    <div className="flex justify-between items-center text-base text-[var(--color-red-400)]">
                      <span>{timeSlot === 'weekend' ? 'Wochenend-' : timeSlot === 'night' ? 'Nacht-' : 'Abend-'}Zuschlag</span>
                      <span className="font-bold">+{surcharge} €</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-base">
                    <span className="text-white/80">Anfahrt (Wetzlar Kernstadt)</span>
                    <span className="font-bold text-[var(--color-success)] text-sm tracking-wide uppercase">Kostenlos</span>
                  </div>
                  
                  <div className="pt-3 mt-3 border-t border-white/10 flex justify-between items-center">
                    <span className="font-bold text-white">Endsumme ab</span>
                    <span className="font-black text-xl text-white">
                      {currentPrice} €
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 lg:mt-12 flex flex-col gap-4">
            <HeartbeatCTA>
              <a
                href="tel:+4964418056279"
                className="group relative flex items-center justify-center gap-3 w-full min-h-[64px] bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-lg font-bold rounded-[16px] transition-all duration-300 shadow-[var(--shadow-brand-2)] hover:shadow-[var(--shadow-brand-3)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 z-10" />
                <span className="z-10 tracking-wide whitespace-nowrap text-base sm:text-lg">{isNullPrice ?"Kostenlos beraten lassen" :"06441 8056279 anrufen"}</span>
              </a>
            </HeartbeatCTA>
            
            <p className="text-center text-sm text-white/50 font-medium">
              Ein Mitarbeiter ist direkt am Apparat.<br />Kein Callcenter, keine Warteschleife.
            </p>
            <p className="text-center text-[11px] text-white/35 font-medium mt-1">
              Endpreise gem. § 19 UStG (Kleinunternehmerregelung).
            </p>

            {/* Trust Guarantee Badges */}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
              {GUARANTEES.map((guarantee, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                  <BadgeCheck className="w-4 h-4 text-[var(--color-success)] shrink-0" />
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </form>
  );
}
