"use client";

import { useState } from "react";
import TimeSlotSelector from "./TimeSlotSelector";
import PriceBreakdown from "./PriceBreakdown";
import { ServiceType, TimeSlot, PRICING } from "./pricing.constants";
import { ShieldCheck, DoorOpen, Lock, Car, Shield } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PricingCalculator() {
    const [serviceType, setServiceType] = useState<ServiceType>("doorFallen");
    const [timeSlot, setTimeSlot] = useState<TimeSlot>("day");

    const currentPrice = PRICING[serviceType][timeSlot];
    const isNullPrice = currentPrice === null;

    const services = [
        { id: "doorFallen", label: "Tür zugefallen", desc: "(nicht abgeschlossen)", icon: DoorOpen },
        { id: "doorLocked", label: "Tür abgesperrt", desc: "(Schlüssel gedreht)", icon: Lock },
        { id: "carOpening", label: "Autoöffnung", desc: "(Schonende Öffnung)", icon: Car },
        { id: "safeOpening", label: "Tresoröffnung", desc: "(Wertgelasse)", icon: Shield },
    ] as const;

    return (
        <div className="bg-[var(--color-surface-primary)] rounded-3xl elevation-3 ring-1 ring-[var(--color-border-subtle)] overflow-hidden max-w-6xl mx-auto">
            <div className="bg-[var(--color-stone-900)] px-6 py-8 sm:p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[var(--color-brand)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg elevation-2">
                    In 2 Klicks zum Preis
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl flex items-center justify-center gap-3">
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

            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

                {/* Columns 1 & 2: Interactive Controls */}
                <div className="lg:col-span-2 space-y-10">
                    <fieldset>
                        <legend className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
                            1. Was müssen wir öffnen?
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service) => {
                                const Icon = service.icon;
                                const isSelected = serviceType === service.id;
                                return (
                                    <label
                                        key={service.id}
                                        className={`relative flex cursor-pointer rounded-2xl border p-4 transition-all ${isSelected
                                            ? "border-[var(--color-brand)] bg-[var(--color-brand-light)] ring-1 ring-[var(--color-brand)] elevation-2 scale-[1.02]"
                                            : "border-[var(--color-border)] bg-[var(--color-surface-primary)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface-subtle)]"
                                            }`}
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
                                                <div className={`p-3 rounded-xl shrink-0 transition-colors ${isSelected ? "bg-[var(--color-red-100)] text-[var(--color-brand)]" : "bg-[var(--color-surface-divider)] text-[var(--color-text-muted)]"}`}>
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <span className={`font-bold transition-colors ${isSelected ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-body)]"}`}>
                                                        {service.label}
                                                    </span>
                                                    <span className={`text-xs transition-colors ${isSelected ? "text-[var(--color-text-body)]" : "text-[var(--color-text-muted)]"}`}>
                                                        {service.desc}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`shrink-0 ml-3 h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${isSelected ? "border-[var(--color-brand)] bg-[var(--color-brand)]" : "border-[var(--color-border)] bg-white"}`}>
                                                {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                                            </div>
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
                            2. Wann benötigen Sie unsere Hilfe?
                        </legend>
                        <TimeSlotSelector selected={timeSlot} onSelect={setTimeSlot} />
                    </fieldset>
                </div>

                {/* Column 3: The Result/Breakdown */}
                <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-[var(--color-border)] pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-between">
                    <div>
                        <PriceBreakdown serviceType={serviceType} timeSlot={timeSlot} />
                    </div>

                    <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] pb-2">
                        <a
                            href="tel:+496441123456"
                            className={cn(buttonVariants({ size: "lg" }), "w-full")}
                        >
                            {isNullPrice ? "Jetzt beraten lassen" : "Sofort Monteur rufen"}
                        </a>
                        <p className="text-center text-xs text-[var(--color-text-muted)] mt-3 flex items-center justify-center gap-1">
                            <ShieldCheck className="h-5 w-5 text-[var(--color-brand)]" />
                            Geprüfter Wetzlarer Betrieb
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
