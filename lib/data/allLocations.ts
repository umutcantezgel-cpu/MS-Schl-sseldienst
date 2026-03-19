import { LocationData, locations as ring1 } from "./locations";
import { ring2Locations } from "./locations_ring2";
import { ring3LocationsA } from "./locations_ring3a";
import { ring3LocationsB } from "./locations_ring3b";
import { ring4Locations } from "./locations_ring4";

export const allLocations: LocationData[] = [
    ...ring1,
    ...ring2Locations,
    ...ring3LocationsA,
    ...ring3LocationsB,
    ...ring4Locations
];

export function getLocationBySlug(slug: string): LocationData | undefined {
    // Normalisieren, falls der Request 'wetzlar-niedergirmes' statt 'schluesseldienst-wetzlar-niedergirmes' ist
    // Wir handhaben die Slugs als "schluesseldienst-[stadt]" im Array.
    // Aber die Next.js Route heißt /[stadtgebiet], d.h. der User gibt "/schluesseldienst-asslar" ein?
    // Der User schrieb im Prompt:
    // URLS: /schluesseldienst-wetzlar-niedergirmes
    return allLocations.find((loc) => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
    return allLocations.map((loc) => loc.slug);
}
