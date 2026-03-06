"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { stadtgebiete, Stadtgebiet } from "@/lib/stadtgebiete";

const WETZLAR_CENTER = { lat: 50.5607, lng: 8.5046 };
const SERVICE_RADIUS_KM = 50;
const DEFAULT_ZOOM = 10;

let isInitialized = false;

export default function InteractiveServiceMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            setError("Google Maps API Key fehlt.");
            return;
        }

        if (!isInitialized) {
            setOptions({ key: apiKey, v: "weekly" });
            isInitialized = true;
        }

        async function initMap() {
            try {
                const { Map } = await importLibrary("maps") as google.maps.MapsLibrary;
                const { Marker } = await importLibrary("marker") as google.maps.MarkerLibrary;

                if (!mapRef.current) return;

                const map = new Map(mapRef.current, {
                    center: WETZLAR_CENTER,
                    zoom: DEFAULT_ZOOM,
                    disableDefaultUI: false,
                    zoomControl: true,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: true,
                    gestureHandling: "cooperative",
                    styles: [
                        {
                            featureType: "poi",
                            elementType: "labels",
                            stylers: [{ visibility: "off" }],
                        },
                        {
                            featureType: "transit",
                            elementType: "labels",
                            stylers: [{ visibility: "off" }],
                        },
                    ],
                });

                // Serviceradius-Kreis (50km)
                new google.maps.Circle({
                    map,
                    center: WETZLAR_CENTER,
                    radius: SERVICE_RADIUS_KM * 1000,
                    fillColor: "#B91C1C",
                    fillOpacity: 0.06,
                    strokeColor: "#B91C1C",
                    strokeOpacity: 0.3,
                    strokeWeight: 2,
                });

                // Marker für jedes Stadtgebiet
                const infoWindow = new google.maps.InfoWindow();

                stadtgebiete.forEach((gebiet: Stadtgebiet) => {
                    const marker = new Marker({
                        position: { lat: gebiet.lat, lng: gebiet.lng },
                        map,
                        title: gebiet.name,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 8,
                            fillColor: "#B91C1C",
                            fillOpacity: 0.9,
                            strokeColor: "#FFFFFF",
                            strokeWeight: 2,
                        },
                    });

                    marker.addListener("click", () => {
                        infoWindow.setContent(`
                            <div style="font-family: system-ui, sans-serif; padding: 4px 0;">
                                <strong style="font-size: 15px; color: #1a1a1a;">${gebiet.name}</strong>
                                <div style="margin-top: 4px; font-size: 13px; color: #666;">
                                    PLZ: ${gebiet.plz}
                                </div>
                                <div style="margin-top: 4px; font-size: 13px; color: #B91C1C; font-weight: 600;">
                                    ⏱ 15–30 Min. Anfahrt
                                </div>
                                <a href="/${gebiet.slug}" style="display: inline-block; margin-top: 8px; font-size: 13px; color: #B91C1C; font-weight: 600; text-decoration: none;">
                                    Mehr erfahren →
                                </a>
                            </div>
                        `);
                        infoWindow.open(map, marker);
                    });
                });

                // Wetzlar Hauptstandort hervorheben
                new Marker({
                    position: WETZLAR_CENTER,
                    map,
                    title: "Schlüsseldienst Wetzlar – Hauptstandort",
                    icon: {
                        url: "data:image/svg+xml," + encodeURIComponent(`
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="18" fill="#B91C1C" stroke="white" stroke-width="3"/>
                                <text x="20" y="26" text-anchor="middle" fill="white" font-size="18" font-weight="bold" font-family="system-ui">🔑</text>
                            </svg>
                        `),
                        scaledSize: new google.maps.Size(44, 44),
                        anchor: new google.maps.Point(22, 22),
                    },
                    zIndex: 10,
                });

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
            <div className="flex items-center justify-center rounded-[var(--space-4)] bg-[var(--color-surface-subtle)] p-12 text-center">
                <p className="text-[var(--color-text-muted)]">{error}</p>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden rounded-[var(--space-4)] ring-1 ring-[var(--color-border)] elevation-2">
            {/* Loading Skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--color-surface-subtle)]">
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-border)] border-t-[var(--color-brand)]" />
                        <span className="text-sm font-medium text-[var(--color-text-muted)]">Karte wird geladen…</span>
                    </div>
                </div>
            )}
            <div
                ref={mapRef}
                className="h-[400px] w-full sm:h-[500px] lg:h-[550px]"
                aria-label="Interaktive Karte unserer Einsatzgebiete"
                role="application"
            />
        </div>
    );
}
