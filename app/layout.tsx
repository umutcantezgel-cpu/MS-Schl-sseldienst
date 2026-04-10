import type { Metadata, Viewport } from"next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from"next/font/google";
import { DeviceProvider } from "@/components/providers/DeviceProvider";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
import"./globals.css";
import nextDynamic from "next/dynamic";
import StickyHeader from"@/components/StickyHeader";
import StickyCtaBar from "@/components/trust/StickyCtaBar";

const Footer = nextDynamic(() => import("@/components/Footer"));
const MobileBottomBar = nextDynamic(() => import("@/components/MobileBottomBar"));
import { generateLocalBusinessSchema, generateWebSiteSchema, siteUrl } from"@/lib/schema";
import { companyInfo } from "@/lib/data/company";
import { SkipNav } from "@/components/ui/SkipNav";
import { AnnouncerProvider } from "@/components/providers/Announcer";
import MotionProvider from "@/components/providers/MotionProvider";
import ClientShell from "@/components/ClientShell";
import JsonLd from "@/components/seo/JsonLd";
import BackToTop from "@/components/ui/BackToTop";
import FloatingWhatsAppWidget from "@/components/FloatingWhatsAppWidget";
import { AppProvider } from "@/lib/context/AppContext";
import { UIProvider } from "@/lib/context/UIContext";
import { ToastContainer } from "@/components/ui/ToastContainer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const plusJakarta = Plus_Jakarta_Sans({
 subsets: ["latin", "latin-ext"],
 display:"swap",
 variable:"--font-display",
});

const dmSans = DM_Sans({
 subsets: ["latin", "latin-ext"],
 display:"swap",
 variable:"--font-body",
});

const jetbrainsMono = JetBrains_Mono({
 subsets: ["latin", "latin-ext"],
 display:"swap",
 variable:"--font-mono",
});

// ── GLOBAL METADATA (Layout-Level) ─────────────────────────────────────────
// [FIX: Seobility #1] title.template caps all child page titles via "%s" pattern.
// [FIX: Seobility #2] NO `description` here und only pages set description.
//                      This prevents Next.js from merging two <meta name="description"> tags.
// [FIX: Seobility #3] metadataBase forces absolute canonical URLs → production domain.
// [FIX: Seobility #4] alternates.languages provides self-referencing hreflang.
export const metadata: Metadata = {
 // Title: default is used when a child page does NOT export its own `metadata.title`.
 // template: appended to every child page title (e.g. "Preise | Schlüssel Schmiede Wetzlar").
 title: {
   default: "Schlüssel Schmiede Wetzlar | 24 H Notdienst",   // ≤50 chars, ≤580px
   template: "%s",
 },
 // ⚠️  NO description here und set only on individual pages to avoid Seobility #2 (duplicate).
 metadataBase: new URL(siteUrl),
 alternates: {
   canonical: siteUrl,
   languages: {
     "de-DE": siteUrl,
     "x-default": siteUrl,
   },
 },
 icons: {
   icon: [
     { url: '/icon.svg', type: 'image/svg+xml' }
   ],
   apple: [
     { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
   ],
   shortcut: [
     { url: '/icon.svg', type: 'image/svg+xml' }
   ]
 },
 robots: {
   index: true,
   follow: true,
   googleBot: {
     index: true,
     follow: true,
     "max-video-preview": -1,
     "max-image-preview": "large",
     "max-snippet": -1,
   },
 },
 openGraph: {
   siteName: "Schlüssel Schmiede Wetzlar",
   locale: "de_DE",
   type: "website",
   images: [
     {
       url: `${siteUrl}/og-image.png`,
       width: 1200,
       height: 630,
       alt: "Schlüssel Schmiede Wetzlar und 24 Stunden Notdienst für Schlüssel & Sicherheitstechnik",
     },
   ],
 },
 twitter: {
   card: "summary_large_image",
 },
 other: {
   "geo.region": "DE-HE",
   "geo.placename": "Wetzlar",
   "geo.position": `${companyInfo.geo.latitude};${companyInfo.geo.longitude}`,
   "ICBM": `${companyInfo.geo.latitude}, ${companyInfo.geo.longitude}`,
 },
};

// ── [FIX] Viewport exported separately (Next.js 14+ requirement) ──────────
export const viewport: Viewport = {
 width:"device-width",
 initialScale: 1,
 maximumScale: 5,
 themeColor:"#DC2626",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
     <html lang="de" className="light">
   <head>
    {/* next/font self-hosts und no preconnect to Google Fonts CDN needed */}
    <link rel="preconnect" href="https://www.google-analytics.com" />
    <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    <link rel="preconnect" href="https://maps.googleapis.com" />
    <link rel="dns-prefetch" href="https://maps.googleapis.com" />
    {/* [PERF] Preload LCP element (logo) so it starts fetching during HTML parse,
         independent of JS hydration. Without this, the logo waits for Next.js
         App Router JS to execute before it can even start loading. */}
    <link rel="preload" as="image" type="image/svg+xml" href="/images/logo-neu.svg" fetchPriority="high" />
    {/* ⚠️ Fallback Favicon-Link. Dient als Backup, falls Cache-Nodes
         die Metadata.icons API verzögert ausliefern. */}
    <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
    <link rel="apple-touch-icon" href="/apple-icon.png" />
   </head>
   <body
    className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-foreground font-sans flex flex-col antialiased`}
   >
     <AppProvider>
      <UIProvider>
       <DeviceProvider>
        <AnnouncerProvider>
         <MotionProvider>
          <ErrorBoundary>
           <div className="flex flex-col min-h-screen relative dark-focus">
            <SkipNav />
            <ClientShell />
            <JsonLd data={generateLocalBusinessSchema()} />
            <JsonLd data={generateWebSiteSchema()} />
            <StickyHeader />
            <main id="main-content" className="flex-grow" aria-label="Hauptinhalt">{children}</main>
            <Footer />
            <MobileBottomBar />
            <StickyCtaBar />
            <BackToTop />
            <FloatingWhatsAppWidget />
            <WebVitalsReporter />
            <ToastContainer />
           </div>
          </ErrorBoundary>
         </MotionProvider>
        </AnnouncerProvider>
       </DeviceProvider>
      </UIProvider>
     </AppProvider>
   </body>
  </html>
 );
}
