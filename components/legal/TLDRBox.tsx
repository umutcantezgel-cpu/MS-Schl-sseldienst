import React from "react"
import { Info, HelpCircle } from "lucide-react"

interface TLDRBoxProps {
    title?: string
    children: React.ReactNode
    className?: string
    icon?: "info" | "help"
}

export function TLDRBox({ title = "Kurz gesagt (TL;DR)", children, className = "", icon = "info" }: TLDRBoxProps) {
    return (
        <div className={`my-8 p-6 bg-primary/5 border border-primary/20 rounded-xl flex gap-4 print:border-gray-300 print:bg-transparent ${className}`}>
            <div className="flex-shrink-0 mt-1">
                {icon === "info" ? (
                    <Info className="w-6 h-6 text-primary print:text-gray-700" />
                ) : (
                    <HelpCircle className="w-6 h-6 text-primary print:text-gray-700" />
                )}
            </div>
            <div>
                <h4 className="text-primary font-bold text-base m-0 mb-2 print:text-gray-900">{title}</h4>
                <div className="text-gray-700 text-sm md:text-base leading-relaxed print:text-gray-800 m-0 [&>p]:m-0 [&>p+p]:mt-2">
                    {children}
                </div>
            </div>
        </div>
    )
}
