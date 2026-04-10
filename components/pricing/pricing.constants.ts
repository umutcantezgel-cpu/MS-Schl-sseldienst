export type ServiceType = 'doorFallen' | 'doorLocked' | 'carOpening' | 'safeOpening';
export type TimeSlot = 'day' | 'evening' | 'night' | 'weekend';

export const PRICING: Record<ServiceType, Record<TimeSlot, number | null>> = {
    doorFallen: { day: 99, evening: 119, night: 149, weekend: 179 },
    doorLocked: { day: 189, evening: 209, night: 239, weekend: 269 },
    carOpening: { day: 99, evening: 129, night: 159, weekend: 189 },
    safeOpening: { day: null, evening: null, night: null, weekend: null } // "Auf Anfrage"
};

export const TIME_MODIFIERS: Record<TimeSlot, { label: string }> = {
    day: { label: 'Regulär (06:00 - 19:59 Uhr)' },
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
    "Festpreis vor Arbeitsbeginn",
    "Keine Abzocke - Lokaler Fachbetrieb",
];
