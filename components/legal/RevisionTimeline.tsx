"use client"
import React from "react"
import { History } from "lucide-react"

const REVISION_HISTORY = [
    { version: "v2.0", date: "März 2026", desc: "Design-Evolution & Integration des interaktiven Legal Hubs." },
    { version: "v1.2", date: "Januar 2026", desc: "Präzisierung der Ausfallpauschalen und Distanzstaffelungen." },
    { version: "v1.0", date: "Oktober 2025", desc: "Initiale Veröffentlichung der Notdienst-Bedingungen nach neuem Fernabsatzrecht." }
]

export function RevisionTimeline() {
    return (
        <div className="mt-16 pt-8 border-t border-gray-100 print:hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <History className="w-5 h-5 text-gray-400" />
                Versionshistorie (Changelog)
            </h3>
            <div className="relative border-l-2 border-gray-100 ml-[9px] space-y-6">
                {REVISION_HISTORY.map((item, i) => (
                    <div key={item.version} className="relative pl-6">
                        {/* Dot Indicator */}
                        <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full transition-colors ${i === 0 ? 'bg-primary ring-4 ring-primary/20' : 'bg-gray-300'}`} />
                        
                        <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3 mb-1.5">
                                <span className="font-mono text-xs font-bold text-gray-900 bg-white border border-gray-200 shadow-sm px-2 py-0.5 rounded">
                                    {item.version}
                                </span>
                                <span className="text-sm font-medium text-gray-500">{item.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 m-0 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-xs text-gray-400 mt-6 ml-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Revisionssicher protokolliert
            </p>
        </div>
    )
}
