"use client";

import { useState, useMemo, useEffect } from "react";
import { allLocations } from "@/lib/data/allLocations";
import { Search, Monitor, Tablet, Smartphone, ExternalLink, ShieldCheck, AlertTriangle } from "lucide-react";

type Viewport = "desktop" | "tablet" | "mobile";

export default function LocalPreviewDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    // Select the first one by default if none selected
    if (allLocations.length > 0 && !selectedSlug) {
      setSelectedSlug(allLocations[0]?.slug ?? null);
    }
  }, [selectedSlug]);

  const filteredLocations = useMemo(() => {
    if (!searchTerm) return allLocations;
    const lower = searchTerm.toLowerCase();
    return allLocations.filter(loc => 
      loc.name.toLowerCase().includes(lower) || 
      loc.slug.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  const currentLoc = useMemo(() => {
    return allLocations.find(l => l.slug === selectedSlug);
  }, [selectedSlug]);

  if (!isMounted) return null; // Prevent hydration errors

  // Restrict access in production
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ALLOW_PREVIEW !== "true") {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-8 text-center flex-col">
        <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Access Denied</h1>
        <p className="text-slate-500 max-w-md">The local preview environment is disabled in production for security reasons.</p>
      </div>
    );
  }

  const iframeWidth = 
    viewport === "mobile" ? "375px" : 
    viewport === "tablet" ? "768px" : "100%";

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-100 flex overflow-hidden font-sans text-slate-900">
      
      {/* ── Sidebar: Search & List ── */}
      <aside className="w-[320px] bg-white border-r border-slate-200 flex flex-col shrink-0 shadow-xl z-20">
        <div className="p-4 border-b border-slate-100 bg-slate-50/80 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
              MS
            </div>
            <div>
              <h1 className="text-sm font-black tracking-tight leading-none">Mission Control</h1>
              <p className="text-xs text-slate-500 font-medium">Local Preview Env</p>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder={`Search ${allLocations.length} locations...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-9 pl-9 pr-3 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-1 custom-scrollbar">
          {filteredLocations.map(loc => {
            const isSelected = selectedSlug === loc.slug;
            return (
              <button
                key={loc.slug}
                onClick={() => setSelectedSlug(loc.slug)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all flex flex-col gap-0.5 group ${
                  isSelected 
                    ? "bg-red-50 text-red-700 font-bold" 
                    : "hover:bg-slate-50 text-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="truncate">{loc.name}</span>
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />}
                </div>
                <span className={`text-[10px] truncate ${isSelected ? "text-red-500/70" : "text-slate-400"}`}>
                  /{loc.slug}
                </span>
              </button>
            );
          })}
          {filteredLocations.length === 0 && (
            <div className="p-4 text-center text-sm text-slate-400">
              No locations found.
            </div>
          )}
        </div>
      </aside>

      {/* ── Main Panel: Iframe & Controls ── */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-100/50 relative">
        
        {/* Topbar */}
        <header className="h-[60px] bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button 
                onClick={() => setViewport("desktop")}
                className={`p-1.5 rounded-md transition-all ${viewport === "desktop" ? "bg-white shadow text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewport("tablet")}
                className={`p-1.5 rounded-md transition-all ${viewport === "tablet" ? "bg-white shadow text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewport("mobile")}
                className={`p-1.5 rounded-md transition-all ${viewport === "mobile" ? "bg-white shadow text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
            
            {currentLoc && (
              <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                <span className="font-mono text-xs text-slate-400">URL:</span>
                <span className="font-medium text-slate-700 text-sm">/{currentLoc.slug}</span>
                <a 
                  href={`/${currentLoc.slug}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="ml-2 text-red-500 hover:text-red-600 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>SEO Active</span>
            </div>
          </div>
        </header>

        {/* Iframe Stage */}
        <div className="flex-1 overflow-auto p-4 md:p-8 flex justify-center relative" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z' fill='%23f0f0f0' fill-opacity='0.4'/%3E%3C/svg%3E")` }}>
          
          {selectedSlug ? (
            <div 
              className="bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ width: iframeWidth, height: "100%", maxHeight: "1200px" }}
            >
              <iframe 
                src={`/${selectedSlug}`}
                className="w-full h-full border-0 bg-white"
                title={`Preview of ${selectedSlug}`}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              Select a location from the sidebar to preview.
            </div>
          )}
          
        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}} />
    </div>
  );
}
