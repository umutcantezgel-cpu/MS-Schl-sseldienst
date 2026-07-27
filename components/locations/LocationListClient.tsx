"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ChevronDown } from "lucide-react";
import { allLocations } from "@/lib/data/allLocations";

export default function LocationListClient() {
  const primaryLocations = allLocations.slice(0, 12);
  const remainingLocations = allLocations.slice(12);
  
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-[var(--border-subtle)] shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[var(--color-red-500)]" />
          Haupt-Einsatzgebiete & Kernstädte
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {primaryLocations.map((gebiet) => (
            <Link key={gebiet.slug} href={`/${gebiet.slug}`} className="group flex items-center justify-between p-3 bg-gray-50 hover:bg-red-50 hover:border-[var(--value-primary)] transition-all border border-gray-200 rounded-xl">
              <span className="font-bold text-sm text-gray-900 group-hover:text-[var(--value-primary)]">
                {gebiet.name} ({gebiet.plz})
              </span>
              <span className="text-xs font-semibold text-gray-600">
                {gebiet.logistics.drivingTimeMinutes} Min.
              </span>
            </Link>
          ))}
        </div>
      </div>

      {showAll && (
        <div className="bg-white p-6 rounded-2xl border border-[var(--border-subtle)] shadow-sm space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[var(--color-red-500)]" />
            Weitere Gemeinden & Regionale Ortsteile
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {remainingLocations.map((gebiet) => (
              <Link key={gebiet.slug} href={`/${gebiet.slug}`} className="group flex items-center justify-between p-3 bg-gray-50 hover:bg-red-50 hover:border-[var(--value-primary)] transition-all border border-gray-200 rounded-xl">
                <span className="font-semibold text-sm text-gray-900 group-hover:text-[var(--value-primary)]">
                  {gebiet.name} ({gebiet.plz})
                </span>
                <span className="text-xs font-medium text-gray-500">
                  {gebiet.logistics.drivingTimeMinutes} Min.
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {!showAll && (
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[var(--color-red-500)] text-gray-700 hover:text-[var(--color-red-500)] px-6 py-3 rounded-full font-semibold transition-all shadow-sm"
          >
            Alle weiteren {remainingLocations.length} Orte anzeigen
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
