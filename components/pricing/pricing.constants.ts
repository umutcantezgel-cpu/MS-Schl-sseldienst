export type ServiceType = 'doorFallen' | 'doorLocked' | 'carOpening' | 'safeOpening';
export type TimeSlot = 'day' | 'evening' | 'night' | 'weekend';

import { companyInfo } from "@/lib/data/company";

export const PRICING: Record<ServiceType, Record<TimeSlot, number | null>> = {
    doorFallen: { day: companyInfo.financial.startingPriceValue, evening: 149, night: 149, weekend: 179 },
    doorLocked: { day: 129, evening: 169, night: 169, weekend: 189 },
    carOpening: { day: 149, evening: 180, night: 180, weekend: 180 },
    safeOpening: { day: null, evening: null, night: null, weekend: null } // "Auf Anfrage"
};

export const TIME_MODIFIERS: Record<TimeSlot, { label: string }> = {
    day: { label: `Regulär (${companyInfo.openingHours.store})` },
    evening: { label: 'Spätdienst (20:00 - 21:59 Uhr)' },
    night: { label: 'Notdienst (22:00 - 05:59 Uhr)' },
    weekend: { label: 'Sonn- und Feiertage' },
};

export const ADDONS = {
    anfahrt: { label: 'Anfahrtspauschale', price: 'zzgl. (in der Wetzlarer Kernstadt kostenlos)' },
    zylinder: { label: 'Ersatzzylinder (Markenware) ab', price: 25 },
    mehrwehraufwand: { label: 'Erschwerter Zugang / Sicherheitstüren', price: 'nach Aufwand' }
};

export const GUARANTEES = [
    "Garantiert keine versteckten Kosten",
    "Verbindlicher Preis vor Arbeitsbeginn",
    "Keine Abzocke - Lokaler Fachbetrieb",
];
