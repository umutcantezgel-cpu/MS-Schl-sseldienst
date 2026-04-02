"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { m, useScroll, useSpring } from "framer-motion"

export interface TableOfContentsItem {
    id: string
    title: string
}

interface LegalLayoutProps {
    children: React.ReactNode
    tocItems: TableOfContentsItem[]
    heroTitle: string
    heroSubtitle?: string
    lastUpdated?: string
}

const LEGAL_PAGES = [
    { label: "AGB", href: "/agb" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Impressum", href: "/impressum" },
]

export function LegalLayout({ children, tocItems, heroTitle, heroSubtitle, lastUpdated }: LegalLayoutProps) {
    const pathname = usePathname()
    const [activeId, setActiveId] = useState<string>("")

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Handle intersection observer to highlight active ToC item
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "-20% 0px -80% 0px" } // Adjust margins so it triggers near the top
        )

        tocItems.forEach((item) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => {
            tocItems.forEach((item) => {
                const el = document.getElementById(item.id)
                if (el) observer.unobserve(el)
            })
        }
    }, [tocItems])

    // Print media print hide classes are used here and defined in globals.css
    return (
        <div className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-[#d1d5db] selection:bg-primary/20 dark:selection:bg-primary/40 min-h-screen relative transition-colors duration-300">
            {/* Reading Progress Bar */}
            <m.div 
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50 print:hidden" 
                style={{ scaleX }}
            />

            {/* Legal Hero */}
            <header className="bg-gray-50 dark:bg-[#111111] border-b border-gray-200 dark:border-[#27272a] pt-32 pb-16 print:pt-0 print:border-none print:bg-white text-center sm:text-left px-6 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-[#e5e7eb] tracking-tight">
                                {heroTitle}
                            </h1>
                            {heroSubtitle && (
                                <p className="mt-4 text-xl text-gray-600 dark:text-[#9ca3af] max-w-2xl print:text-black">
                                    {heroSubtitle}
                                </p>
                            )}
                        </div>
                        {lastUpdated && (
                            <p className="text-sm font-medium text-gray-500 dark:text-[#9ca3af] bg-white dark:bg-[#18181b] border border-gray-200 dark:border-[#27272a] px-4 py-2 rounded-full shadow-sm print:shadow-none print:border-none print:p-0">
                                Stand: {lastUpdated}
                            </p>
                        )}
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 xl:gap-24 relative">
                
                {/* Sidebar */}
                <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-32 h-fit print:hidden">
                    {/* Navigation between legal pages */}
                    <div className="mb-10">
                        <h4 className="text-xs font-bold text-gray-400 dark:text-[#71717a] uppercase tracking-wider mb-4">Rechtliches</h4>
                        <nav className="flex flex-col gap-1">
                            {LEGAL_PAGES.map((page) => {
                                const isActive = pathname === page.href
                                return (
                                    <Link 
                                        key={page.href} 
                                        href={page.href}
                                        className={`group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0a0a] ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'text-gray-600 dark:text-[#a1a1aa] hover:bg-gray-50 dark:hover:bg-[#18181b] hover:text-gray-900 dark:hover:text-[#e5e7eb]'}`}
                                    >
                                        {page.label}
                                        {isActive && <ChevronRight className="w-4 h-4 text-primary" />}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    {/* Table of Contents */}
                    {tocItems.length > 0 && (
                        <div>
                            <h4 className="text-xs font-bold text-gray-400 dark:text-[#71717a] uppercase tracking-wider mb-4">Inhaltsverzeichnis</h4>
                            <nav className="flex flex-col border-l-2 border-gray-100 dark:border-[#27272a]">
                                {tocItems.map((item) => {
                                    const isActive = activeId === item.id
                                    return (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`block pl-4 py-1.5 text-sm transition-colors border-l-2 -ml-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0a0a] ${isActive ? 'border-primary text-primary font-semibold' : 'border-transparent text-gray-500 dark:text-[#8b8b93] hover:text-gray-900 dark:hover:text-[#d1d5db] hover:border-gray-300 dark:hover:border-[#3f3f46]'}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            {item.title}
                                        </a>
                                    )
                                })}
                            </nav>
                        </div>
                    )}
                </aside>

                {/* Main Content Area */}
                <main id="legal-content" className="flex-1 w-full prose prose-lg md:prose-xl prose-gray dark:prose-invert leading-relaxed md:leading-loose tracking-wide max-w-[65ch] prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-[#f3f4f6] prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-gray-900 dark:prose-strong:text-[#f3f4f6] print:prose-a:text-black">
                    {children}
                </main>
            </div>
        </div>
    )
}
