"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { allLocations } from "@/lib/data/allLocations";

const WETZLAR_CENTER: [number, number] = [50.5607, 8.5046];
const DEFAULT_ZOOM = 10;

/* ── Ring classification by distance ── */
function getRingInfo(distanceKm: number): {
  ring: number;
  color: string;
  fillColor: string;
  label: string;
} {
  if (distanceKm <= 5)
    return {
      ring: 1,
      color: "#16a34a",
      fillColor: "#16a34a",
      label: "Keine Anfahrtskosten",
    };
  if (distanceKm <= 15)
    return {
      ring: 2,
      color: "#ca8a04",
      fillColor: "#eab308",
      label: "Geringe Anfahrtskosten",
    };
  if (distanceKm <= 30)
    return {
      ring: 3,
      color: "#ea580c",
      fillColor: "#f97316",
      label: "Anfahrtskosten nach Absprache",
    };
  return {
    ring: 4,
    color: "#dc2626",
    fillColor: "#ef4444",
    label: "Erweitertes Einsatzgebiet",
  };
}

export default function HomeServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const initMap = useCallback(async () => {
    if (!containerRef.current) return;

    const L = (await import("leaflet")).default;

    /* Guard: if the container was already initialized by a previous mount (React Strict Mode),
       clean it up before re-creating */
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
    // Also check Leaflet's internal marker on the DOM element
    const el = containerRef.current as HTMLDivElement & { _leaflet_id?: number };
    if (el._leaflet_id) {
      delete el._leaflet_id;
    }

    const map = L.map(containerRef.current, {
      center: WETZLAR_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: true,
    });

    mapInstanceRef.current = map;

    /* Zoom control top-right */
    L.control.zoom({ position: "topright" }).addTo(map);

    /* Attribution bottom-right */
    L.control
      .attribution({ position: "bottomright" })
      .addAttribution(
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      )
      .addTo(map);

    /* CartoDB Positron (light, premium feel) */
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 18,
        subdomains: "abcd",
      }
    ).addTo(map);

    /* ── Service radius rings ── */
    const radiusRings = [
      { km: 5, color: "#16a34a", opacity: 0.08, stroke: 0.2 },
      { km: 15, color: "#eab308", opacity: 0.05, stroke: 0.15 },
      { km: 30, color: "#f97316", opacity: 0.04, stroke: 0.12 },
      { km: 50, color: "#B91C1C", opacity: 0.03, stroke: 0.1 },
    ];

    radiusRings.forEach((ring) => {
      L.circle(WETZLAR_CENTER, {
        radius: ring.km * 1000,
        fillColor: ring.color,
        fillOpacity: ring.opacity,
        color: ring.color,
        opacity: ring.stroke,
        weight: 1.5,
        dashArray: ring.km > 15 ? "6 4" : undefined,
        interactive: false,
      }).addTo(map);
    });

    /* ── Location markers ── */
    allLocations.forEach((loc) => {
      const ringInfo = getRingInfo(loc.logistics.distanceFromHQ);

      const marker = L.circleMarker(
        [loc.coordinates.latitude, loc.coordinates.longitude],
        {
          radius: 6,
          fillColor: ringInfo.fillColor,
          fillOpacity: 0.85,
          color: "#ffffff",
          weight: 1.5,
          opacity: 1,
        }
      ).addTo(map);

      /* Tooltip on hover */
      marker.bindTooltip(
        `<div style="font-family: var(--font-sans, system-ui, sans-serif); padding: 2px 0;">
          <strong style="font-size: 13px; color: #1a1a1a;">${loc.name}</strong>
          <div style="font-size: 12px; color: #666; margin-top: 2px;">
            Anfahrt: ca. ${loc.logistics.drivingTimeMinutes} Min.
          </div>
          <div style="font-size: 12px; color: ${ringInfo.color}; font-weight: 600; margin-top: 2px;">
            ${ringInfo.label}
          </div>
        </div>`,
        {
          direction: "top",
          offset: L.point(0, -8),
          className: "map-premium-tooltip",
        }
      );

      /* Popup on click */
      marker.bindPopup(
        `<div style="font-family: var(--font-sans, system-ui, sans-serif); padding: 4px 0; min-width: 180px;">
          <strong style="font-size: 14px; color: #1a1a1a; display: block; margin-bottom: 4px;">${loc.name}</strong>
          <div style="font-size: 12px; color: #666;">PLZ: ${loc.plz}</div>
          <div style="font-size: 12px; color: #666; margin-top: 2px;">
            Anfahrt: ca. ${loc.logistics.drivingTimeMinutes} Min.
          </div>
          <div style="font-size: 13px; color: ${ringInfo.color}; font-weight: 600; margin-top: 4px;">
            Ab ${loc.pricing.basePrice} EUR Festpreis
          </div>
          <div style="font-size: 12px; color: ${ringInfo.color}; margin-top: 2px;">
            ${loc.pricing.travelCostText}
          </div>
          <div style="margin-top: 8px; display: flex; gap: 6px;">
            <a href="tel:+4964418056544" 
               style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 4px; padding: 6px 10px; background: #B91C1C; color: white; border-radius: 8px; font-size: 12px; font-weight: 600; text-decoration: none;">
              Anrufen
            </a>
            <a href="/${loc.slug}" 
               style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 6px 10px; background: #f3f4f6; color: #1a1a1a; border-radius: 8px; font-size: 12px; font-weight: 600; text-decoration: none; border: 1px solid #e5e7eb;">
              Details
            </a>
          </div>
        </div>`,
        { maxWidth: 240, className: "map-premium-popup" }
      );

      /* Hover scale effect */
      marker.on("mouseover", () => marker.setRadius(9));
      marker.on("mouseout", () => marker.setRadius(6));
    });

    /* ── HQ marker (branded "MS") ── */
    const hqIcon = L.divIcon({
      html: `
        <div style="
          width: 44px; height: 44px; 
          background: #B91C1C; 
          border: 3px solid white; 
          border-radius: 50%; 
          display: flex; align-items: center; justify-content: center;
          color: white; font-weight: 800; font-size: 14px; font-family: system-ui;
          box-shadow: 0 4px 16px rgba(185,28,28,0.4);
          animation: hqPulse 2s ease-in-out infinite;
        ">MS</div>
      `,
      className: "hq-marker-icon",
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    });

    L.marker(WETZLAR_CENTER, { icon: hqIcon, zIndexOffset: 1000 })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: system-ui; padding: 4px 0; text-align: center;">
          <strong style="font-size: 15px; color: #B91C1C;">MS Schlüsseldienst</strong>
          <div style="font-size: 13px; color: #666; margin-top: 4px;">Hauptstandort Wetzlar</div>
          <div style="font-size: 13px; color: #1a1a1a; font-weight: 600; margin-top: 4px;">24/7 Notdienst</div>
          <a href="tel:+4964418056544" 
             style="display: block; margin-top: 8px; padding: 8px 16px; background: #B91C1C; color: white; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; text-align: center;">
            06441 8056544
          </a>
        </div>`,
        { maxWidth: 220 }
      );

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    initMap();
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [initMap]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-charcoal-100)] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[var(--surface-secondary)]">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-charcoal-200)] border-t-[var(--color-red-500)]" />
            <span className="text-sm font-medium text-[color:var(--text-tertiary)]">
              Karte wird geladen...
            </span>
          </div>
        </div>
      )}

      {/* Map container */}
      <div
        ref={containerRef}
        className="h-[320px] w-full sm:h-[400px] lg:h-[450px]"
        aria-label="Interaktive Karte unserer Einsatzgebiete in der Region Wetzlar"
        role="application"
      />

      {/* Legend overlay */}
      <div className="absolute bottom-4 left-4 z-[1000] rounded-xl bg-white/90 backdrop-blur-md border border-[var(--color-charcoal-100)] p-3 shadow-lg">
        <p className="text-[11px] font-bold text-[color:var(--text-primary)] uppercase tracking-wider mb-2">
          Einsatzgebiete
        </p>
        <div className="flex flex-col gap-1.5">
          {[
            { color: "#16a34a", label: "Keine Anfahrt" },
            { color: "#eab308", label: "Geringe Anfahrt" },
            { color: "#f97316", label: "Nach Absprache" },
            { color: "#ef4444", label: "Erweitertes Gebiet" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shrink-0 border border-white shadow-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[11px] text-[color:var(--text-secondary)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* HQ Pulse animation */}
      <style jsx global>{`
        @keyframes hqPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(185,28,28,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(185,28,28,0); }
        }
        .hq-marker-icon {
          background: transparent !important;
          border: none !important;
        }
        .map-premium-tooltip {
          border-radius: 10px !important;
          border: 1px solid #e5e7eb !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
          padding: 8px 12px !important;
        }
        .map-premium-popup .leaflet-popup-content-wrapper {
          border-radius: 14px !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
          border: 1px solid #e5e7eb !important;
        }
        .map-premium-popup .leaflet-popup-tip {
          box-shadow: none !important;
          border: 1px solid #e5e7eb !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .hq-marker-icon div { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
