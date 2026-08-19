import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import nextDynamic from "next/dynamic";
import StickyHeader from "@/components/StickyHeader";
import { getRootGraphSchema, siteUrl } from "@/lib/schema";
import { companyInfo } from "@/lib/data/company";
import { SkipNav } from "@/components/ui/SkipNav";
import MotionProvider from "@/components/providers/MotionProvider";
import ClientShell from "@/components/ClientShell";
import { UIProvider } from "@/lib/context/UIContext";
import { ToastContainer } from "@/components/ui/ToastContainer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// [PERF] Layout-Chrome: lazy-loaded (not needed for initial paint)
const StickyCtaBar = nextDynamic(() => import("@/components/trust/StickyCtaBar"));
const Footer = nextDynamic(() => import("@/components/Footer"));
const MobileBottomBar = nextDynamic(() => import("@/components/MobileBottomBar"));
const FloatingWhatsAppWidget = nextDynamic(() => import("@/components/FloatingWhatsAppWidget"));
const WebVitalsReporter = nextDynamic(() => import("@/components/analytics/WebVitalsReporter").then(mod => mod.WebVitalsReporter));

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

// ── GLOBAL METADATA (Layout-Level) ─────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Schlüssel Schmiede Wetzlar | 24 H Notdienst",
    template: "%s",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
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
    siteName: "Schlüssel Schmiede Wetzlar",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#DC2626",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="light" suppressHydrationWarning>
      <head>
        {/* [PERF] Manual Preload for LCP SVG Logo.
             Ensures the SVG is requested at high priority instantly. */}
        <link rel="preload" as="image" href="/images/logo-header.svg" type="image/svg+xml" fetchPriority="high" />
             
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getRootGraphSchema()) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} font-sans text-[color:var(--text-primary)] min-h-[100dvh] flex flex-col antialiased bg-gray-50 relative dark-focus`}
        itemScope 
        itemType="https://schema.org/WebPage"
        suppressHydrationWarning
      >
        <UIProvider>
          <MotionProvider>
            <ErrorBoundary>
              <SkipNav />
              <ClientShell />
              <StickyHeader />
              <main id="main-content" className="flex-grow" aria-label="Hauptinhalt">{children}</main>
              <Footer />
              <MobileBottomBar />
              <StickyCtaBar />
              <FloatingWhatsAppWidget />
              <WebVitalsReporter />
              <ToastContainer />
            </ErrorBoundary>
          </MotionProvider>
        </UIProvider>
      </body>
    </html>
  );
}
