import type { Metadata, Viewport } from"next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from"next/font/google";
import MotionProvider from "@/components/providers/MotionProvider";
import { DeviceProvider } from "@/components/providers/DeviceProvider";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
import dynamic from"next/dynamic";
import"./globals.css";
import StickyHeader from"@/components/StickyHeader";
import Footer from"@/components/Footer";
import MobileBottomBar from"@/components/MobileBottomBar";
import { generateLocalBusinessSchema, generateWebSiteSchema } from"@/lib/schema";
import { generateSharedMetadata } from"@/lib/metadata";
import { SkipNav } from "@/components/ui/SkipNav";

import { AnnouncerProvider } from "@/components/providers/Announcer";

/* Framer-Motion-Komponenten aus dem kritischen Pfad entfernt — eigene JS-Chunks */
const GlobalBackground = dynamic(() => import("@/components/GlobalBackground"));
const ScrollIndicator = dynamic(() => import("@/components/ui/ScrollIndicator"));
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"));
const ExitIntentBanner = dynamic(() => import("@/components/ui/ExitIntentBanner"));
const ScrollDepthTracker = dynamic(() => import("@/components/analytics/ScrollDepthTracker"));
const CookieConsent = dynamic(() => import("@/components/ui/CookieConsent"));
const ReturnVisitorBanner = dynamic(() => import("@/components/growth/ReturnVisitorBanner"));
const RouteChangeIndicator = dynamic(() => import("@/components/ui/RouteChangeIndicator"));
const OfflineBanner = dynamic(() => import("@/components/ui/OfflineBanner"));
const RouteAnnouncer = dynamic(() => import("@/components/ui/RouteAnnouncer").then(m => ({ default: m.RouteAnnouncer })));
const ErrorHandlers = dynamic(() => import("@/components/monitoring/ErrorHandlers"));
const SpeculativePrefetch = dynamic(() => import("@/components/performance/SpeculativePrefetch"));

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

export const metadata: Metadata = generateSharedMetadata({
 title:"Schlüsseldienst Wetzlar — Türöffnung ab 99€ Festpreis | 24/7 Notdienst",
 description:"MS Schlüsseldienst Wetzlar öffnet Ihre Tür — ohne Schäden, zum Festpreis ab 99€. 24/7 Notdienst, in 20-30 Min. vor Ort. Jetzt anrufen: 06441-8056544",
 path:"/",
 exactTitle: true,
});

export const viewport: Viewport = {
 width:"device-width",
 initialScale: 1,
 maximumScale: 5,
 themeColor:"#DC2626", // Red-500
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
     <html lang="de" className="light">
   <head>

    <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    <link rel="alternate" hrefLang="de-DE" href="https://www.schluesseldienst-wetzlar.de" />
    <link rel="alternate" hrefLang="x-default" href="https://www.schluesseldienst-wetzlar.de" />
   </head>
   <body
    className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-foreground font-sans flex flex-col antialiased`}
   >
     <DeviceProvider>
      <AnnouncerProvider>
       <MotionProvider>
      <div className="flex flex-col min-h-screen relative dark-focus">
       {/* Aller-erstes DOM-Element für Screenreader/Keyboard-User: Skip-Link */}
       <SkipNav />
        <RouteAnnouncer />
         <RouteChangeIndicator />
         <OfflineBanner />

       {/* === Globale Fixierte Hintergrund-Animation === */}
       <GlobalBackground />

       <ScrollIndicator />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
       />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
       />
       <StickyHeader />
       <main id="main-content" className="flex-grow" aria-label="Hauptinhalt">{children}</main>
       <Footer />
       <MobileBottomBar />
       <BackToTop />
        <ExitIntentBanner />
        <ReturnVisitorBanner />
       <ScrollDepthTracker />
       <WebVitalsReporter />
       <CookieConsent />
       <ErrorHandlers />
       <SpeculativePrefetch />
      </div>
      </MotionProvider>
      </AnnouncerProvider>
     </DeviceProvider>
   </body>
  </html>
 );
}
