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
    ignoreDuringBuilds: false,
  },
  serverExternalPackages: ["pino", "pino-pretty"],
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 960, 1280, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [],
  },
  // ─── SEO: Trailing slash behavior (DEFCON-1 LOCKED) ───
  // Production confirmed: /preise → 200, /preise/ → 308 redirect
  // Canonicals in metadata.ts match this behavior (no trailing slash)
  trailingSlash: false,
  // ─── SEO: 301 Redirect Matrix (LINK-JUICE FORTRESS) ───
  // Captures all legacy URL patterns to prevent 404s and preserve backlink equity
  async redirects() {
    return [
      // Legacy index files
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.htm', destination: '/', permanent: true },
      // Legacy .php page patterns
      { source: '/kontakt.php', destination: '/kontakt', permanent: true },
      { source: '/preise.php', destination: '/preise', permanent: true },
      { source: '/leistungen.php', destination: '/leistungen', permanent: true },
      { source: '/impressum.php', destination: '/impressum', permanent: true },
      { source: '/datenschutz.php', destination: '/datenschutz', permanent: true },
      { source: '/faq.php', destination: '/faq', permanent: true },
      { source: '/about.php', destination: '/ueber-uns', permanent: true },
      { source: '/ueber-uns.php', destination: '/ueber-uns', permanent: true },
      // Legacy .html page patterns
      { source: '/kontakt.html', destination: '/kontakt', permanent: true },
      { source: '/preise.html', destination: '/preise', permanent: true },
      { source: '/leistungen.html', destination: '/leistungen', permanent: true },
      { source: '/impressum.html', destination: '/impressum', permanent: true },
      { source: '/datenschutz.html', destination: '/datenschutz', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/about.html', destination: '/ueber-uns', permanent: true },
      { source: '/ueber-uns.html', destination: '/ueber-uns', permanent: true },
      // Common CMS/WordPress legacy paths
      { source: '/wp-admin', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/feed/:path*', destination: '/', permanent: true },
      { source: '/xmlrpc.php', destination: '/', permanent: true },
      // German legacy URL aliases
      { source: '/tueroeffnung', destination: '/leistungen/turoeffnung', permanent: true },
      { source: '/tuer-oeffnung', destination: '/leistungen/turoeffnung', permanent: true },
      { source: '/turoeffnung', destination: '/leistungen/turoeffnung', permanent: true },
      { source: '/auto-oeffnung', destination: '/leistungen/autooeffnung', permanent: true },
      { source: '/autoöffnung', destination: '/leistungen/autooeffnung', permanent: true },
      { source: '/schluessel', destination: '/leistungen/schluessel-nachmachen', permanent: true },
      { source: '/sicherheitstechnik', destination: '/leistungen/sicherheitstechnik', permanent: true },
      { source: '/schliessanlagen', destination: '/leistungen/schliessanlagen', permanent: true },
      { source: '/schliesssysteme', destination: '/leistungen/schliessanlagen', permanent: true },
      // Service area legacy aliases
      { source: '/wetzlar', destination: '/schluesseldienst-wetzlar', permanent: true },
      { source: '/schluesseldienst-in-wetzlar', destination: '/schluesseldienst-wetzlar', permanent: true },
      // Catch-all .php and .html (must be last — less specific)
      { source: '/:path*.php', destination: '/:path*', permanent: true },
      { source: '/:path*.html', destination: '/:path*', permanent: true },
      { source: '/:path*.htm', destination: '/:path*', permanent: true },
    ];
  },
  async headers() {
    return [

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
