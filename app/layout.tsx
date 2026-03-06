import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema";
import { generateSharedMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = generateSharedMetadata({
  title: "Schlüsseldienst Wetzlar | 24/7 Notdienst ab 50€ Festpreis",
  description: "Schlüsseldienst Wetzlar: 24/7-Notdienst mit Festpreisen ab 50€. Türöffnung in 15–30 Min in Wetzlar, Gießen, Marburg und Lahn-Dill-Kreis. 4.9 Sterne bei 127+ Bewertungen.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="alternate" hrefLang="de-DE" href="https://schluesseldienst-wetzlar-24.de" />
        <link rel="alternate" hrefLang="x-default" href="https://schluesseldienst-wetzlar-24.de" />
      </head>
      <body
        className={`${inter.variable} min-h-screen bg-background text-foreground font-sans  flex flex-col`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-brand)] focus:px-4 focus:py-2 focus:text-white focus:font-bold focus:shadow-lg focus:outline-none">
          Zum Hauptinhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
        <StickyHeader />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
