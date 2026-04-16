import type { Metadata, Viewport } from"next";
import { Plus_Jakarta_Sans, DM_Sans } from"next/font/google";
import { DeviceProvider } from "@/components/providers/DeviceProvider";
import"./globals.css";
import nextDynamic from "next/dynamic";
import StickyHeader from"@/components/StickyHeader";
import { generateLocalBusinessSchema, generateWebSiteSchema, generateProductSchema, siteUrl } from"@/lib/schema";
import { companyInfo } from "@/lib/data/company";
import { SkipNav } from "@/components/ui/SkipNav";
import { AnnouncerProvider } from "@/components/providers/Announcer";
import MotionProvider from "@/components/providers/MotionProvider";
import ClientShell from "@/components/ClientShell";
import JsonLd from "@/components/seo/JsonLd";
import { AppProvider } from "@/lib/context/AppContext";
import { UIProvider } from "@/lib/context/UIContext";
import { ToastContainer } from "@/components/ui/ToastContainer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// [PERF] Layout-Chrome: lazy-loaded (not needed for initial paint)
const StickyCtaBar = nextDynamic(() => import("@/components/trust/StickyCtaBar"));
const Footer = nextDynamic(() => import("@/components/Footer"));
const MobileBottomBar = nextDynamic(() => import("@/components/MobileBottomBar"));
const BackToTop = nextDynamic(() => import("@/components/ui/BackToTop"));
const FloatingWhatsAppWidget = nextDynamic(() => import("@/components/FloatingWhatsAppWidget"));
const WebVitalsReporter = nextDynamic(() => import("@/components/analytics/WebVitalsReporter").then(mod => mod.WebVitalsReporter));

const plusJakarta = Plus_Jakarta_Sans({
 subsets: ["latin", "latin-ext"],
 display:"optional",
 variable:"--font-display",
});

const dmSans = DM_Sans({
 subsets: ["latin", "latin-ext"],
 display:"optional",
 variable:"--font-body",
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
   languages: {
     "de-DE": siteUrl,
     "x-default": siteUrl,
   },
 },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: [
      { url: '/favicon.ico' }
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
     <html lang="de" className="light" suppressHydrationWarning>
   <head>
     {/* [PERF] Manual Preload for LCP WebP Logo.
          We use native <img> in StickyHeader instead of next/image for critical LCP.
          This ensures the WebP is requested at high priority instantly. */}
     <link rel="preload" as="image" href="/images/logo-brand.svg" type="image/svg+xml" fetchPriority="high" />
          
     {/* [PERF] Removed: preconnect to google-analytics.com (no GA script loaded → wasted TLS handshake) */}
     <link rel="preconnect" href="https://maps.googleapis.com" />
     <link rel="dns-prefetch" href="https://maps.googleapis.com" />
     {/* [PERF] Logo preload removed: was pointing to wrong file (logo-neu.svg vs logo-header.svg used by StickyHeader).
          The Next/Image priority prop in StickyHeader handles preloading correctly. */}
     {/* ⚠️ Fallback Favicon-Link. Dient als Backup, falls Cache-Nodes
          die Metadata.icons API verzögert ausliefern. */}
     <link rel="icon" href="/favicon.ico" sizes="48x48" />
     <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
     <link rel="apple-touch-icon" href="/apple-icon.png" />
     <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema()) }}
     />
   </head>
   <body
      className={`${plusJakarta.variable} ${dmSans.variable} font-sans text-[color:var(--text-primary)] min-h-[100dvh] flex flex-col antialiased bg-gray-50`}
      itemScope 
      itemType="https://schema.org/WebPage"
      suppressHydrationWarning
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
