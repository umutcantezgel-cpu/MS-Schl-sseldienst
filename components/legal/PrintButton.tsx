"use client"
import React, { useState } from "react"
import { Printer, Download, Loader2 } from "lucide-react"

interface PrintButtonProps {
    className?: string
    targetId?: string
    fileName?: string
}

export function PrintButton({ 
    className = "", 
    targetId = "legal-content", 
    fileName = "Dokument" 
}: PrintButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false)

    const handlePrint = () => {
        if (typeof window !== "undefined") {
            window.print()
        }
    }

    const handlePdfExport = async () => {
        setIsGenerating(true)
        try {
            const element = document.getElementById(targetId)
            if (!element) throw new Error("Ziel-Element nicht gefunden")

            // Dynamischer Import zur Vermeidung von SSR-Fehlern
            // html2canvas & jspdf werden nur geladen, wenn der User den Button klickt.
            const html2canvas = (await import("html2canvas")).default
            const { jsPDF } = await import("jspdf")

            const originalMaxWidth = element.style.maxWidth
            element.style.maxWidth = "800px" // Normieren für konstante PDF-Breite
            
            const canvas = await html2canvas(element, {
                scale: 2, // Retina-Faktor für scharfe Schriften
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff",
                windowWidth: 800
            })
            
            // Reset styles
            element.style.maxWidth = originalMaxWidth

            const imgData = canvas.toDataURL("image/jpeg", 0.95)
            const pdf = new jsPDF("p", "mm", "a4")
            
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()
            
            // Proportional skalieren
            const imgProps = pdf.getImageProperties(imgData)
            const imgHeight = (imgProps.height * pdfWidth) / imgProps.width
            
            let heightLeft = imgHeight
            let position = 0

            // 1. Seite Header
            pdf.setFontSize(10)
            pdf.setTextColor(120)
            const dateStr = new Date().toLocaleDateString("de-DE")
            pdf.text(`Offizielles Dokument | MS Schlüsseldienst | Stand: ${dateStr}`, 10, 10)
            
            // 1. Seite Content
            pdf.addImage(imgData, "JPEG", 0, 15, pdfWidth, imgHeight)
            heightLeft -= (pdfHeight - 15)

            // Folgeseiten
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight
                pdf.addPage()
                pdf.text(`Offizielles Dokument | MS Schlüsseldienst | Stand: ${dateStr}`, 10, 10)
                // Content so verschieben, dass der nächste Abschnitt oben anliegt
                pdf.addImage(imgData, "JPEG", 0, position + 15, pdfWidth, imgHeight)
                heightLeft -= pdfHeight
            }
            
            pdf.save(`${fileName}_MS_Schluesseldienst.pdf`)
        } catch (error) {
            console.error("PDF generation failed", error)
            alert("Fehler beim Erstellen des PDFs. Bitte verwenden Sie den normalen Browser-Druck (rechtes Drucker-Icon).")
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <div className={`relative inline-flex items-center gap-2 print:hidden ${className}`}>
            <button
                onClick={handlePdfExport}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed border border-transparent"
                title="Dokument als PDF speichern"
            >
                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                <span>{isGenerating ? "Wird generiert..." : "Als PDF speichern"}</span>
            </button>
            
            <button
                onClick={handlePrint}
                disabled={isGenerating}
                className="p-2 border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50 bg-white rounded-lg transition-colors disabled:opacity-50"
                aria-label="Klassisch drucken"
                title="Klassisch drucken"
            >
                <Printer className="w-4 h-4" />
            </button>
        </div>
    )
}
