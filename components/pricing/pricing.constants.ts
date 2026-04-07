export type ServiceType = 'doorFallen' | 'doorLocked' | 'carOpening' | 'safeOpening';
export type TimeSlot = 'day' | 'evening' | 'night';

export const PRICING: Record<ServiceType, Record<TimeSlot, number | null>> = {
    doorFallen: { day: 89, evening: 119, night: 149 },
    doorLocked: { day: 129, evening: 159, night: 189 },
    carOpening: { day: 99, evening: 129, night: 159 },
    safeOpening: { day: null, evening: null, night: null } // "Auf Anfrage"
};

export const TIME_MODIFIERS: Record<TimeSlot, { label: string }> = {
    day: { label: 'Tagsüber (Mo–Sa 10–18h)' },
    evening: { label: 'Abends (18–22h)' },
    night: { label: 'Nachts & Wochenende' },
};

export const ADDONS = {
    anfahrt: { label: 'Anfahrtspauschale', price: 'inklusive' },
    zylinder: { label: 'Ersatzzylinder (Markenware) ab', price: 25 },
    mehrwehraufwand: { label: 'Erschwerter Zugang / Sicherheitstüren', price: 'nach Aufwand' }
};

export const GUARANTEES = [
    "Garantiert keine versteckten Kosten",
    "Festpreis vor Arbeitsbeginn",
    "Keine Abzocke - Lokaler Fachbetrieb",
];
