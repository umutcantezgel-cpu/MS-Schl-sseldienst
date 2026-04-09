import type { NextConfig } from "next";

// ══════════════════════════════════════════════════════════════════════════════
// PRODUCTION DOMAIN: www.wetzlar-schlüsseldienst.de
// PUNYCODE:          www.xn--wetzlar-schlsseldienst-3lc.de
//
// Verified via Python encodings.idna.ToASCII('wetzlar-schlüsseldienst')
// → "xn--wetzlar-schlsseldienst-3lc"
// ══════════════════════════════════════════════════════════════════════════════
const PUNYCODE_HOST = "xn--wetzlar-schlsseldienst-3lc.de";
const PUNYCODE_WWW  = `www.${PUNYCODE_HOST}`;

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // [SEO: Removed X-Powered-By Header — Seobility Server Configuration Fix]
  // Prevents Next.js from sending "X-Powered-By: Next.js" in response headers.
  poweredByHeader: false,

  compress: true,

  // Remove console.log from production bundles
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  // Timeout for static page generation
  staticPageGenerationTimeout: 60,

  eslint: {
    ignoreDuringBuilds: false,
  },

  serverExternalPackages: ["pino", "pino-pretty"],

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 960, 1280, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [],
  },

  // ─── SEO: Trailing slash behavior ───
  trailingSlash: false,

  // ═══════════════════════════════════════════════════════════════════════════
  // [SEO: Resolved "WWW/non-WWW duplicate content" via 301 Punycode Redirect]
  //
  // DIRECTION: non-www → www (canonical is www.wetzlar-schlüsseldienst.de)
  // This eliminates the Seobility "duplicate content" error that occurs when
  // both www and non-www resolve to the same content without a redirect.
  // ═══════════════════════════════════════════════════════════════════════════
  async redirects() {
    return [
      // ═════════════════════════════════════════════════════════════════════
      // [SEO: WWW Enforcer — non-www to www canonical redirect]
      // ═════════════════════════════════════════════════════════════════════
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: PUNYCODE_HOST,
          },
        ],
        destination: `https://${PUNYCODE_WWW}/:path*`,
        permanent: true,
      },

      // ═════════════════════════════════════════════════════════════════════
      // [SEO: Backlink Protection - 301 Migration Map]
      //
      // Maps all known old Squarespace URLs to new Next.js routes.
      // ZERO-404-TOLERANCE: Every existing backlink MUST resolve.
      // permanent: true = HTTP 301 = passes full link equity to new URL.
      //
      // Source: Old Squarespace sitemap + backlink audit
      // ═════════════════════════════════════════════════════════════════════

      // ── Price page rename ──
      {
        source: "/preisliste",
        destination: "/preise",
        permanent: true,
      },

      // ── Schlüsselschmiede (old spelling without hyphen) ──
      {
        source: "/schluesselschmiede",
        destination: "/schluessel-schmiede",
        permanent: true,
      },

      // ── Service areas (old long-form URL) ──
      {
        source: "/einsatzgebiete-schluesseldienst-wetzlar",
        destination: "/servicegebiet",
        permanent: true,
      },

      // ── Service subpages (old flat structure → new nested routes) ──
      {
        source: "/ms-schliessanlagen",
        destination: "/leistungen/schliessanlagen",
        permanent: true,
      },
      {
        source: "/sicherheitsloesungen",
        destination: "/leistungen/sicherheitstechnik",
        permanent: true,
      },

      // ── Legal pages (old combined page → separate pages) ──
      {
        source: "/Impressum-und-datenschutz",
        destination: "/impressum",
        permanent: true,
      },
      // Case-insensitive variant (Squarespace was case-insensitive)
      {
        source: "/impressum-und-datenschutz",
        destination: "/impressum",
        permanent: true,
      },

      // ── Trailing slash variants (catch-all safety net) ──
      // Next.js trailingSlash: false strips them automatically,
      // but explicit redirects ensure Squarespace backlinks with
      // trailing slashes don't 404 on edge cases.
      {
        source: "/preisliste/",
        destination: "/preise",
        permanent: true,
      },
      {
        source: "/schluesselschmiede/",
        destination: "/schluessel-schmiede",
        permanent: true,
      },
      {
        source: "/einsatzgebiete-schluesseldienst-wetzlar/",
        destination: "/servicegebiet",
        permanent: true,
      },
      {
        source: "/ms-schliessanlagen/",
        destination: "/leistungen/schliessanlagen",
        permanent: true,
      },
      {
        source: "/sicherheitsloesungen/",
        destination: "/leistungen/sicherheitstechnik",
        permanent: true,
      },
      {
        source: "/Impressum-und-datenschutz/",
        destination: "/impressum",
        permanent: true,
      },
      {
        source: "/impressum-und-datenschutz/",
        destination: "/impressum",
        permanent: true,
      },

      // ── KfW Förderung (redirect to official KfW page) ──
      {
        source: "/kfw-foerderung",
        destination: "https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestandsimmobilien/Einbruchschutz/",
        permanent: false,
      },
      {
        source: "/kfw",
        destination: "https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestandsimmobilien/Einbruchschutz/",
        permanent: false,
      },
    ];
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // [SEO: Security Headers — Seobility Server Configuration Hardening]
  //
  // Injects premium security headers on all responses to maximize the
  // "Server configuration" score and harden the site against common attacks.
  // ═══════════════════════════════════════════════════════════════════════════
  async headers() {
    return [
      // ── Global Security Headers (all routes) ──
      {
        source: "/(.*)",
        headers: [
          // [SEO: HSTS — forces HTTPS for 1 year, including subdomains, preload-eligible]
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // [SEO: Prevents MIME-type sniffing attacks]
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // [SEO: Prevents clickjacking by disallowing iframe embedding from other origins]
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // [SEO: Controls Referer header — sends origin only on cross-origin requests]
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // [SEO: Permissions Policy — restricts browser feature access]
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), browsing-topics=(), interest-cohort=(), payment=(), usb=(), bluetooth=()",
          },
          // [SEO: Advanced Security Headers Migration]
          {
            key: "X-XSS-Protection",
            value: "0",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
        ],
      },

      // ── Static asset immutable caching (1 year) ──
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // ── Public folder images caching (1 year) ──
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:all*(png|jpg|jpeg|gif|svg|avif|webp|ico|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // ── Page caching (non-API, revalidation-aware) ──
      {
        source: "/((?!api).*)",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=86400, stale-while-revalidate=43200" },
        ],
      },

      // ── API no-cache ──
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        ],
      },
    ];
  },

  transpilePackages: [],

  webpack: (config, { dev }) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    if (dev && process.env.DISABLE_HMR === "true") {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
