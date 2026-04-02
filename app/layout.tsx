import type { Metadata, Viewport } from"next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from"next/font/google";
import { DeviceProvider } from "@/components/providers/DeviceProvider";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
import"./globals.css";
import StickyHeader from"@/components/StickyHeader";
import Footer from"@/components/Footer";
import MobileBottomBar from"@/components/MobileBottomBar";
import StickyCtaBar from "@/components/trust/StickyCtaBar";
import { generateLocalBusinessSchema, generateWebSiteSchema, siteUrl } from"@/lib/schema";
import { SkipNav } from "@/components/ui/SkipNav";
import { AnnouncerProvider } from "@/components/providers/Announcer";
import MotionProvider from "@/components/providers/MotionProvider";
import ClientShell from "@/components/ClientShell";
import JsonLd from "@/components/seo/JsonLd";
import BackToTop from "@/components/ui/BackToTop";
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
// [FIX: Seobility #2] NO `description` here — only pages set description.
//                      This prevents Next.js from merging two <meta name="description"> tags.
// [FIX: Seobility #3] metadataBase forces absolute canonical URLs → production domain.
// [FIX: Seobility #4] alternates.languages provides self-referencing hreflang.
export const metadata: Metadata = {
 // Title: default is used when a child page does NOT export its own `metadata.title`.
 // template: appended to every child page title (e.g. "Preise | MS Schlüsseldienst Wetzlar").
 title: {
   default: "Schlüsseldienst Wetzlar | 24h Türöffnung ab 99€",   // ≤50 chars → <580px
   template: "%s | MS Schlüsseldienst Wetzlar",
 },
 // ⚠️  NO description here — set only on individual pages to avoid Seobility #2 (duplicate).
 metadataBase: new URL(siteUrl),
 alternates: {
   canonical: siteUrl,
   languages: {
     "de-DE": siteUrl,
     "x-default": siteUrl,
   },
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
   siteName: "MS Schlüsseldienst Wetzlar",
   locale: "de_DE",
   type: "website",
   images: [
     {
       url: `${siteUrl}/og-image.png`,
       width: 1200,
       height: 630,
       alt: "Schlüsseldienst Wetzlar – 24/7 Notdienst mit Festpreisen",
     },
   ],
 },
 twitter: {
   card: "summary_large_image",
 },
 // [SEO: Apple Touch Icon & Favicon Fixed — Seobility Mobile Optimization]
 icons: {
   icon: [
     { url: "/favicon.ico", sizes: "any" },
   ],
   apple: [
     { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
   ],
 },
 other: {
   "geo.region": "DE-HE",
   "geo.placename": "Wetzlar",
   "geo.position": "50.5606;8.5048",
   "ICBM": "50.5606, 8.5048",
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
    {/* next/font self-hosts — no preconnect to Google Fonts CDN needed */}
    <link rel="preconnect" href="https://www.google-analytics.com" />
    <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    {/* ⚠️  Icons are now handled by the Metadata API `icons` object above.
         NO hardcoded <meta>, <link rel="icon">, or <link rel="alternate"> here.
         Duplicating them in JSX would conflict with the Metadata API output. */}
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
