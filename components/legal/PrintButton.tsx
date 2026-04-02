"use client"
import React from "react"
import { Printer } from "lucide-react"

interface PrintButtonProps {
    className?: string
    targetId?: string
}

export function PrintButton({ 
    className = "", 
    targetId = "legal-content" 
}: PrintButtonProps) {

    const handlePrint = () => {
        if (typeof window !== "undefined") {
            window.print()
        }
    }

    return (
        <div className={`relative inline-flex items-center gap-2 print:hidden ${className}`}>
            <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors border border-transparent"
                title="Dokument drucken oder als PDF speichern"
            >
                <Printer className="w-4 h-4" />
                <span>Dokument drucken</span>
            </button>
        </div>
    )
}
