import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  // Remove console.log from production bundles (Phase 17)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  // Timeout for static page generation (Phase 17)
  staticPageGenerationTimeout: 60,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 960, 1280, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    // ─── Security Headers (Phase 16) ───
    const cspDirectives = [
      "default-src 'self'",
      // Scripts: self + Google Analytics + Google Maps
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com",
      // Styles: self + unsafe-inline (required for Tailwind/CSS-in-JS) + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Images: self + data URIs + blob + HTTPS (for external images/maps)
      "img-src 'self' data: blob: https: http:",
      // Fonts: self + Google Fonts CDN
      "font-src 'self' https://fonts.gstatic.com",
      // Connect (API calls): self + Formspree + Google Analytics + Vercel Analytics + Google Maps
      "connect-src 'self' https://formspree.io https://www.google-analytics.com https://vitals.vercel-insights.com https://maps.googleapis.com",
      // Frames: Google Maps only
      "frame-src https://www.google.com https://maps.google.com",
      // Base URI: self only
      "base-uri 'self'",
      // Form actions: self + Formspree
      "form-action 'self' https://formspree.io",
      // Prevent iframe embedding of this site
      "frame-ancestors 'none'",
      // Upgrade HTTP to HTTPS
      "upgrade-insecure-requests",
      // CSP violation reports
      "report-uri /api/csp-report",
    ].join("; ");

    const securityHeaders = [
      // HSTS: Force HTTPS for 2 years + subdomains + preload
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      // Prevent MIME-type sniffing
      { key: "X-Content-Type-Options", value: "nosniff" },
      // Prevent clickjacking
      { key: "X-Frame-Options", value: "DENY" },
      // Disable browser XSS filter (CSP is better)
      { key: "X-XSS-Protection", value: "0" },
      // Control referrer information
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // Restrict browser features
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), bluetooth=()" },
      // CSP Enforcing mode (Phase 17 — switched from Report-Only after 48h monitoring)
      { key: "Content-Security-Policy", value: cspDirectives },
      // DNS prefetch control
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];

    return [
      // Apply security headers to ALL routes
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Static asset caching
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Page caching (non-API)
      {
        source: "/((?!api).*)",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=86400, stale-while-revalidate=43200" },
        ],
      },
      // API no-cache
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
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === "true") {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
