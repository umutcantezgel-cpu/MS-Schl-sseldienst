import type { Metadata, Viewport } from"next";
import { Plus_Jakarta_Sans, DM_Sans } from"next/font/google";
import dynamic from"next/dynamic";
import"./globals.css";
import StickyHeader from"@/components/StickyHeader";
import Footer from"@/components/Footer";
import MobileBottomBar from"@/components/MobileBottomBar";
import { generateLocalBusinessSchema, generateWebSiteSchema } from"@/lib/schema";
import { generateSharedMetadata } from"@/lib/metadata";

/* Framer-Motion-Komponenten aus dem kritischen Pfad entfernt — eigene JS-Chunks */
const GlobalBackground = dynamic(() => import("@/components/GlobalBackground"));
const ScrollIndicator = dynamic(() => import("@/components/ui/ScrollIndicator"));
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"));

const plusJakarta = Plus_Jakarta_Sans({
 subsets: ["latin"],
 display:"swap",
 variable:"--font-display",
 weight: ["400","700","800"],
});

const dmSans = DM_Sans({
 subsets: ["latin"],
 display:"swap",
 variable:"--font-body",
 weight: ["400","500","700"],
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
  <html lang="de">
   <head>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    <link rel="alternate" hrefLang="de-DE" href="https://schluesseldienst-wetzlar-24.de" />
    <link rel="alternate" hrefLang="x-default" href="https://schluesseldienst-wetzlar-24.de" />
   </head>
   <body
    className={`${plusJakarta.variable} ${dmSans.variable} min-h-screen bg-background text-foreground font-sans flex flex-col`}
   >
    {/* === Globale Fixierte Hintergrund-Animation === */}
    <GlobalBackground />

    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-red-500)] focus:px-4 focus:py-2 focus:text-white focus:font-bold focus:shadow-lg focus:outline-none">
     Zum Hauptinhalt springen
    </a>
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
   </body>
  </html>
 );
}
