"use client"

import React, { useState, useEffect } from "react"
import { m, AnimatePresence } from "framer-motion"
import { ShieldCheck, Radar, Magnet, X, Check, Settings2, Info } from "lucide-react"
import { COOKIE_INVENTORY, CONSENT_CATEGORY_INFO, ConsentCategory, CONSENT_COOKIE_NAME, CONSENT_VERSION, ConsentState } from "@/lib/cookie-inventory"

export function PrivacyPreferenceCenter() {
    const [isOpen, setIsOpen] = useState(false)
    const [expandedCategory, setExpandedCategory] = useState<ConsentCategory | null>(null)
    
    // Default local states for preferences
    const [preferences, setPreferences] = useState({
        essential: true, // always true
        analytics: false,
        marketing: false
    })

    // Load saved preferences on mount
    useEffect(() => {
        try {
            const match = document.cookie.match(new RegExp('(^| )' + CONSENT_COOKIE_NAME + '=([^;]+)'))
            if (match?.[2]) {
                const savedConsent: ConsentState = JSON.parse(decodeURIComponent(match[2]))
                if (savedConsent.version === CONSENT_VERSION) {
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setPreferences({
                        essential: true,
                        analytics: savedConsent.analytics,
                        marketing: savedConsent.marketing
                    })
                }
            }
        } catch (e) {
            console.error("Error parsing consent cookie", e)
        }
    }, [])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => { document.body.style.overflow = "unset" }
    }, [isOpen])

    const handleToggle = (category: ConsentCategory) => {
        if (category === "essential") return; // cannot toggle essential
        setPreferences(prev => ({
            ...prev,
            [category]: !prev[category as keyof typeof prev]
        }))
    }

    const handleSave = () => {
        const consentData: ConsentState = {
            essential: true,
            analytics: preferences.analytics,
            marketing: preferences.marketing,
            timestamp: new Date().toISOString(),
            version: CONSENT_VERSION
        }
        document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consentData))}; max-age=${365 * 24 * 60 * 60}; path=/; SameSite=Lax`
        
        // Dispatch custom event for GTM / re-renders
        window.dispatchEvent(new CustomEvent('cookie_consent_updated', { detail: consentData }))
        
        setIsOpen(false)
    }

    const handleAcceptAll = () => {
        const newPrefs = { essential: true, analytics: true, marketing: true }
        setPreferences(newPrefs)
        
        const consentData: ConsentState = {
            essential: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString(),
            version: CONSENT_VERSION
        }
        document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consentData))}; max-age=${365 * 24 * 60 * 60}; path=/; SameSite=Lax`
        
        window.dispatchEvent(new CustomEvent('cookie_consent_updated', { detail: consentData }))
        
        setIsOpen(false)
    }

    const categoriesList: { id: ConsentCategory, icon: React.ReactNode, activeColor: string }[] = [
        { id: "essential", icon: <ShieldCheck className="w-6 h-6" />, activeColor: "bg-green-500" },
        { id: "analytics", icon: <Radar className="w-6 h-6" />, activeColor: "bg-blue-500" },
        { id: "marketing", icon: <Magnet className="w-6 h-6" />, activeColor: "bg-purple-500" },
    ]

    return (
        <div className="my-8 print:hidden">
            {/* Trigger Button inside the page */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 m-0 leading-tight">Datenschutz-Präferenzen</h3>
                    <p className="text-sm text-gray-500 mt-1 m-0">Verwalten Sie Ihre Einwilligungen und Cookie-Einstellungen transparent an einem Ort.</p>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex-shrink-0 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center gap-2"
                >
                    <Settings2 className="w-4 h-4" />
                    <span>Einstellungen öffnen</span>
                </button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
                        {/* Backdrop overlay */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
                        />

                        {/* Modal Container */}
                        <m.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                                <h2 className="text-xl font-bold text-gray-900 m-0">Datenschutz-Cockpit</h2>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Schließen"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 overflow-y-auto overflow-x-hidden flex-1 space-y-4">
                                <p className="text-sm text-gray-600 mb-6">
                                    Wir nutzen Cookies, um Ihnen das bestmögliche Erlebnis zu bieten. Hier können Sie transparente Kontrolle über den Datenfluss übernehmen.
                                </p>

                                {categoriesList.map((cat) => {
                                    const info = CONSENT_CATEGORY_INFO[cat.id]
                                    const isEnabled = preferences[cat.id]
                                    const isExpanded = expandedCategory === cat.id
                                    const relatedCookies = COOKIE_INVENTORY.filter(c => c.category === cat.id)

                                    return (
                                        <div key={cat.id} className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white">
                                            <div className="p-5 flex items-start gap-4">
                                                {/* Category Icon */}
                                                <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${isEnabled ? 'bg-gray-50 text-gray-900' : 'bg-gray-50 text-gray-400'}`}>
                                                    {cat.icon}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0 pt-0.5">
                                                    <div className="flex items-center justify-between gap-4">
                                                        <h4 className="text-base font-bold text-gray-900 m-0">{info.label}</h4>
                                                        
                                                        {/* iOS Style Toggle Switch */}
                                                        <button 
                                                            type="button"
                                                            disabled={info.required}
                                                            onClick={() => handleToggle(cat.id)}
                                                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isEnabled ? cat.activeColor : 'bg-gray-200'} ${info.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                            role="switch"
                                                            aria-checked={isEnabled}
                                                        >
                                                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                                                        </button>
                                                    </div>
                                                    
                                                    <p className="text-sm text-gray-500 mt-1 mb-3">{info.description}</p>
                                                    
                                                    {/* Expand Details Trigger */}
                                                    {relatedCookies.length > 0 && (
                                                        <button
                                                            onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                                                            className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline"
                                                        >
                                                            <Info className="w-3.5 h-3.5" />
                                                            {isExpanded ? 'Details ausblenden' : `${relatedCookies.length} Cookie(s) anzeigen`}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Expandable Details Container */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <m.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="border-t border-gray-100 bg-gray-50/50"
                                                    >
                                                        <div className="p-5 space-y-3">
                                                            {relatedCookies.map(cookie => (
                                                                <div key={cookie.name} className="bg-white border border-gray-100 rounded-lg p-3 text-sm">
                                                                    <div className="flex items-center justify-between mb-1">
                                                                        <span className="font-mono text-xs font-bold text-gray-900 px-2 py-0.5 bg-gray-100 rounded">{cookie.name}</span>
                                                                        <span className="text-xs text-gray-500">{cookie.duration}</span>
                                                                    </div>
                                                                    <p className="text-xs text-gray-600 my-1">{cookie.purpose}</p>
                                                                    <p className="text-xs text-gray-400">Anbieter: {cookie.provider}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </m.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleSave}
                                    className="px-6 py-2.5 rounded-xl font-semibold border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors sm:w-1/3"
                                >
                                    Auswahl speichern
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-6 py-2.5 rounded-xl font-bold border border-transparent text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm sm:w-2/3 flex items-center justify-center gap-2"
                                >
                                    <Check className="w-5 h-5" /> Alle akzeptieren
                                </button>
                            </div>
                        </m.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
