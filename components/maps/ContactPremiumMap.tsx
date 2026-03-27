"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { allLocations } from "@/lib/data/allLocations";
import { Phone, Search, MapPin, Clock, Navigation, X } from "lucide-react";

const WETZLAR_CENTER = { lat: 50.5607, lng: 8.5046 };
const DEFAULT_ZOOM = 10;

let isInitialized = false;

/* ── Ring classification ── */
function getRingColor(distanceKm: number): { bg: string; text: string; label: string } {
  if (distanceKm <= 5) return { bg: "#dcfce7", text: "#16a34a", label: "Keine Anfahrt" };
  if (distanceKm <= 15) return { bg: "#fef9c3", text: "#ca8a04", label: "Geringe Anfahrt" };
  if (distanceKm <= 30) return { bg: "#ffedd5", text: "#ea580c", label: "Nach Absprache" };
  return { bg: "#fee2e2", text: "#dc2626", label: "Erweitert" };
}

/* ── Custom map styles ── */
const MAP_STYLES: google.maps.MapTypeStyle[] = [
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "transit", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#e8f4fd" }] },
  { featureType: "landscape.man_made", elementType: "geometry.fill", stylers: [{ color: "#f8f9fa" }] },
  { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#e5e7eb" }] },
  { featureType: "road.arterial", elementType: "geometry.fill", stylers: [{ color: "#f3f4f6" }] },
];

interface LocationWithDistance {
  loc: (typeof allLocations)[number];
  ringInfo: ReturnType<typeof getRingColor>;
}

export default function ContactPremiumMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const locations: LocationWithDistance[] = allLocations.map((loc) => ({
    loc,
    ringInfo: getRingColor(loc.logistics.distanceFromHQ),
  }));

  const filteredLocations = locations.filter(
    ({ loc }) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.plz.includes(searchQuery)
  );

  /* ── Focus marker from sidebar ── */
  const focusLocation = useCallback((locationId: string) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const loc = allLocations.find((l) => l.id === locationId);
    if (!loc) return;

    setActiveLocationId(locationId);
    map.panTo({ lat: loc.coordinates.latitude, lng: loc.coordinates.longitude });
    map.setZoom(13);

    const marker = markersRef.current.find((m) => (m as unknown as { _locationId: string })._locationId === locationId);
    if (marker && infoWindowRef.current) {
      const ringInfo = getRingColor(loc.logistics.distanceFromHQ);
      infoWindowRef.current.setContent(buildInfoContent(loc, ringInfo));
      infoWindowRef.current.open(map, marker);
    }

    /* Close sidebar on mobile */
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  }, []);

  /* ── Build info window content ── */
  // eslint-disable-next-line react-hooks/immutability
  function buildInfoContent(
    loc: (typeof allLocations)[number],
    ringInfo: ReturnType<typeof getRingColor>
  ): string {
    return `
      <div style="font-family: system-ui, -apple-system, sans-serif; padding: 4px 0; min-width: 220px; max-width: 280px;">
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
          <div style="width: 10px; height: 10px; border-radius: 50%; background: ${ringInfo.text};"></div>
          <strong style="font-size: 15px; color: #1a1a1a;">${loc.name}</strong>
        </div>
        
        <div style="display: flex; gap: 12px; margin-bottom: 8px;">
          <div style="font-size: 12px; color: #666;">
            <span style="font-weight: 600;">PLZ:</span> ${loc.plz}
          </div>
          <div style="font-size: 12px; color: #666;">
            <span style="font-weight: 600;">Anfahrt:</span> ca. ${loc.logistics.drivingTimeMinutes} Min.
          </div>
        </div>
        
        <div style="display: flex; align-items: center; gap: 6px; padding: 6px 10px; background: ${ringInfo.bg}; border-radius: 8px; margin-bottom: 10px;">
          <span style="font-size: 13px; font-weight: 700; color: ${ringInfo.text};">
            Ab ${loc.pricing.basePrice} EUR · ${ringInfo.label}
          </span>
        </div>
        
        <div style="display: flex; gap: 6px;">
          <a href="tel:+4964418056544" 
             style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 4px; padding: 8px 12px; background: #B91C1C; color: white; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; transition: background 0.2s;">
            Anrufen
          </a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.coordinates.latitude},${loc.coordinates.longitude}" 
             target="_blank" rel="noopener noreferrer"
             style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 4px; padding: 8px 12px; background: #f3f4f6; color: #1a1a1a; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none; border: 1px solid #e5e7eb;">
            Route
          </a>
        </div>
        
        <a href="/${loc.slug}" 
           style="display: block; margin-top: 8px; text-align: center; font-size: 12px; color: #B91C1C; font-weight: 600; text-decoration: none;">
          Alle Details zu ${loc.name} →
        </a>
      </div>
    `;
  }

  /* ── Initialize map ── */
  useEffect(() => {
    async function initMap() {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      if (!apiKey) {
        setError("Google Maps API Key fehlt.");
        return;
      }

      if (!isInitialized) {
        setOptions({ key: apiKey, v: "weekly" });
        isInitialized = true;
      }

      try {
        const { Map } = (await importLibrary("maps")) as google.maps.MapsLibrary;
        const { Marker } = (await importLibrary("marker")) as google.maps.MarkerLibrary;

        if (!mapRef.current) return;

        const map = new Map(mapRef.current, {
          center: WETZLAR_CENTER,
          zoom: DEFAULT_ZOOM,
          disableDefaultUI: true,
          zoomControl: true,
          fullscreenControl: true,
          gestureHandling: "cooperative",
          styles: MAP_STYLES,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP,
          },
        });

        mapInstanceRef.current = map;
        const infoWindow = new google.maps.InfoWindow();
        infoWindowRef.current = infoWindow;

        /* ── Service radius rings ── */
        const radiusConfigs = [
          { km: 5, color: "#16a34a", opacity: 0.06 },
          { km: 15, color: "#eab308", opacity: 0.04 },
          { km: 30, color: "#f97316", opacity: 0.03 },
          { km: 50, color: "#B91C1C", opacity: 0.02 },
        ];

        radiusConfigs.forEach((config) => {
          new google.maps.Circle({
            map,
            center: WETZLAR_CENTER,
            radius: config.km * 1000,
            fillColor: config.color,
            fillOpacity: config.opacity,
            strokeColor: config.color,
            strokeOpacity: 0.2,
            strokeWeight: 1.5,
          });
        });

        /* ── Location markers with staggered animation ── */
        const sortedLocations = [...allLocations].sort(
          (a, b) => a.logistics.distanceFromHQ - b.logistics.distanceFromHQ
        );

        sortedLocations.forEach((loc, idx) => {
          const ringInfo = getRingColor(loc.logistics.distanceFromHQ);

          setTimeout(() => {
            const marker = new Marker({
              position: { lat: loc.coordinates.latitude, lng: loc.coordinates.longitude },
              map,
              title: loc.name,
              animation: google.maps.Animation.DROP,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 7,
                fillColor: ringInfo.text,
                fillOpacity: 0.9,
                strokeColor: "#FFFFFF",
                strokeWeight: 2,
              },
            });

            (marker as unknown as { _locationId: string })._locationId = loc.id;
            markersRef.current.push(marker);

            marker.addListener("click", () => {
              setActiveLocationId(loc.id);
              infoWindow.setContent(buildInfoContent(loc, ringInfo));
              infoWindow.open(map, marker);
            });

            marker.addListener("mouseover", () => {
              marker.setIcon({
                ...marker.getIcon() as google.maps.Symbol,
                scale: 10,
              });
            });

            marker.addListener("mouseout", () => {
              marker.setIcon({
                ...marker.getIcon() as google.maps.Symbol,
                scale: 7,
              });
            });
          }, Math.min(idx * 30, 1500));
        });

        /* ── HQ marker ── */
        new Marker({
          position: WETZLAR_CENTER,
          map,
          title: "MS Schlüsseldienst Wetzlar — Hauptstandort",
          zIndex: 100,
          icon: {
            url:
              "data:image/svg+xml," +
              encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="24" fill="#B91C1C" stroke="white" stroke-width="3"/>
                <text x="26" y="32" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="system-ui">MS</text>
              </svg>
            `),
            scaledSize: new google.maps.Size(52, 52),
            anchor: new google.maps.Point(26, 26),
          },
        });

        /* ── "Fit all" button ── */
        const fitBtn = document.createElement("button");
        fitBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`;
        fitBtn.title = "Alle Standorte anzeigen";
        fitBtn.style.cssText =
          "background:white;border:none;border-radius:8px;padding:8px;margin:10px;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center;color:#374151;";
        fitBtn.addEventListener("click", () => {
          const bounds = new google.maps.LatLngBounds();
          allLocations.forEach((loc) =>
            bounds.extend({ lat: loc.coordinates.latitude, lng: loc.coordinates.longitude })
          );
          map.fitBounds(bounds, 40);
        });
        map.controls[google.maps.ControlPosition.RIGHT_TOP]?.push(fitBtn);

        setIsLoaded(true);
      } catch (err: unknown) {
        console.error("Google Maps Error:", err);
        setError("Karte konnte nicht geladen werden.");
      }
    }

    initMap();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center rounded-2xl bg-[var(--surface-secondary)] p-12 text-center border border-[var(--border-subtle)]">
        <p className="text-[color:var(--text-tertiary)]">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-charcoal-100)] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col lg:flex-row h-[500px] sm:h-[550px] lg:h-[600px]">
        
        {/* ── Sidebar ── */}
        <div
          className={`
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            absolute lg:relative z-30 lg:z-auto
            w-[85%] sm:w-[340px] lg:w-[320px] h-full
            bg-white border-r border-[var(--color-charcoal-100)]
            flex flex-col transition-transform duration-300 ease-out
          `}
        >
          {/* Sidebar header */}
          <div className="p-4 border-b border-[var(--color-charcoal-100)] shrink-0">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[15px] font-bold text-[color:var(--text-primary)]">
                Einsatzgebiete
              </h3>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-1.5 rounded-lg hover:bg-[var(--surface-secondary)] transition-colors"
                aria-label="Sidebar schließen"
              >
                <X className="w-4 h-4 text-[color:var(--text-tertiary)]" />
              </button>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-tertiary)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ort oder PLZ suchen..."
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-subtle)] text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-tertiary)] outline-none focus:border-[var(--color-red-500)] focus:ring-1 focus:ring-[var(--color-red-500)]/20 transition-all"
              />
            </div>

            <p className="mt-2 text-[11px] text-[color:var(--text-tertiary)]">
              {filteredLocations.length} von {locations.length} Gebieten
            </p>
          </div>

          {/* Location list */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            {filteredLocations.map(({ loc, ringInfo }) => (
              <button
                key={loc.id}
                onClick={() => focusLocation(loc.id)}
                className={`
                  w-full text-left px-4 py-3 border-b border-[var(--color-charcoal-50)]
                  hover:bg-[var(--surface-secondary)] transition-colors
                  ${activeLocationId === loc.id ? "bg-[var(--color-red-500)]/5 border-l-2 border-l-[var(--color-red-500)]" : ""}
                `}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0 mt-1 border border-white shadow-sm"
                    style={{ backgroundColor: ringInfo.text }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[color:var(--text-primary)] truncate">
                      {loc.name}
                    </p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-[11px] text-[color:var(--text-tertiary)]">
                        PLZ {loc.plz}
                      </span>
                      <span className="text-[11px] text-[color:var(--text-tertiary)]">
                        ca. {loc.logistics.drivingTimeMinutes} Min
                      </span>
                    </div>
                    <span
                      className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: ringInfo.bg, color: ringInfo.text }}
                    >
                      Ab {loc.pricing.basePrice} EUR · {ringInfo.label}
                    </span>
                  </div>
                </div>
              </button>
            ))}
            {filteredLocations.length === 0 && (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="w-8 h-8 text-[color:var(--text-tertiary)] mb-2" />
                <p className="text-sm text-[color:var(--text-tertiary)]">
                  Kein Gebiet gefunden
                </p>
              </div>
            )}
          </div>

          {/* Sidebar footer */}
          <div className="p-3 border-t border-[var(--color-charcoal-100)] bg-[var(--surface-secondary)] shrink-0">
            <a
              href="tel:+4964418056544"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white rounded-xl text-[13px] font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              06441 8056544
            </a>
          </div>
        </div>

        {/* ── Map container ── */}
        <div className="flex-1 relative">
          {/* Loading state */}
          {!isLoaded && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-[var(--surface-secondary)]">
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--color-charcoal-200)] border-t-[var(--color-red-500)]" />
                <span className="text-sm font-medium text-[color:var(--text-tertiary)]">
                  Karte wird geladen...
                </span>
              </div>
            </div>
          )}

          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-lg border border-[var(--color-charcoal-100)] text-[13px] font-semibold text-[color:var(--text-primary)]"
          >
            <MapPin className="w-4 h-4 text-[var(--color-red-500)]" />
            <span>{allLocations.length} Gebiete</span>
          </button>

          {/* Legend */}
          <div className="absolute bottom-3 left-3 z-20 rounded-xl bg-white/90 backdrop-blur-md border border-[var(--color-charcoal-100)] p-3 shadow-lg hidden sm:block">
            <p className="text-[10px] font-bold text-[color:var(--text-primary)] uppercase tracking-wider mb-1.5">
              Anfahrtskosten
            </p>
            <div className="flex flex-col gap-1">
              {[
                { color: "#16a34a", label: "Keine" },
                { color: "#ca8a04", label: "Gering" },
                { color: "#ea580c", label: "N. Absprache" },
                { color: "#dc2626", label: "Erweitert" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[10px] text-[color:var(--text-secondary)]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={mapRef}
            className="w-full h-full"
            aria-label="Interaktive Karte aller Einsatzgebiete von MS Schlüsseldienst Wetzlar"
            role="application"
          />
        </div>
      </div>

      {/* Overlay to close sidebar on mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden absolute inset-0 z-20 bg-black/20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
