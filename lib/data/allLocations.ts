import { LocationData, locations as ring1 } from "./locations";
import { ring1bLocations } from "./locations_ring1b";
import { wetzlarBezirkeLocations } from "./locations_wetzlar_bezirke";
import { ring2Locations } from "./locations_ring2";
import { ring2bLocations } from "./locations_ring2b";
import { ring2cLocations } from "./locations_ring2c";
import { ring3LocationsA } from "./locations_ring3a";
import { ring3LocationsB } from "./locations_ring3b";
import { ring3cLocations } from "./locations_ring3c";
import { ring3dLocations } from "./locations_ring3d";
import { ring3eLocations } from "./locations_ring3e";
import { ring3fLocations } from "./locations_ring3f";
import { ring4Locations } from "./locations_ring4";
import { ring4bLocations } from "./locations_ring4b";

export const allLocations: LocationData[] = [
    ...ring1,
    ...wetzlarBezirkeLocations,
    ...ring1bLocations,
    ...ring2Locations,
    ...ring2bLocations,
    ...ring2cLocations,
    ...ring3LocationsA,
    ...ring3LocationsB,
    ...ring3cLocations,
    ...ring3dLocations,
    ...ring3eLocations,
    ...ring3fLocations,
    ...ring4Locations,
    ...ring4bLocations
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
