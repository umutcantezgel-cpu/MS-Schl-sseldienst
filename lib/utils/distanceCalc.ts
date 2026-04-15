/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 2: Serverseitige Distanz- und ETA-Berechnung
 * ══════════════════════════════════════════════════════════════════
 * Haversine formula for great-circle distance between two GPS points.
 * Used to calculate ETA from Langgasse 70 (SSOT) to each Micro-POI.
 *
 * WHY: "Information Gain" signal for Google. Showing exact distance
 * and driving time is data no competitor provides, making each POI
 * page genuinely more useful than any generic city page.
 *
 * SPEED MODEL: Assumes 40 km/h average urban speed (conservative,
 * accounts for city traffic, one-way streets, parking).
 * ══════════════════════════════════════════════════════════════════
 */

import { companyInfo } from "@/lib/data/company";

const EARTH_RADIUS_KM = 6371;
const AVERAGE_SPEED_KMH = 40; // Urban driving speed estimate

/** Convert degrees to radians */
function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/**
 * Haversine distance between two GPS points in kilometers.
 */
export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_KM * c;
}

export interface ETAResult {
  /** Distance in km (1 decimal) */
  distanceKm: number;
  /** Estimated driving time in minutes (rounded up) */
  etaMinutes: number;
  /** Human-readable string, e.g. "8,3 km — ca. 12 Minuten" */
  formatted: string;
}

/**
 * Calculate ETA from our SSOT HQ (Langgasse 70, Wetzlar) to a POI.
 * Adds a 1.3x road factor (roads aren't straight lines).
 */
export function calculateETA(poiLat: number, poiLng: number): ETAResult {
  const straightLine = haversineDistance(
    companyInfo.geo.latitude,
    companyInfo.geo.longitude,
    poiLat,
    poiLng
  );
  // Road detour factor: real roads are ~1.3x longer than straight line
  const roadDistance = straightLine * 1.3;
  const distanceKm = Math.round(roadDistance * 10) / 10;
  const etaMinutes = Math.max(5, Math.ceil((roadDistance / AVERAGE_SPEED_KMH) * 60));
  const formatted = `${distanceKm.toFixed(1).replace(".", ",")} km — ca. ${etaMinutes} Minuten`;

  return { distanceKm, etaMinutes, formatted };
}
