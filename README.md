# MS Schlüsseldienst Wetzlar

Professional website for a local locksmith service in Wetzlar and surroundings. Built with Next.js 15, optimized for local SEO, performance, and high conversion rates.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** CSS Modules / Vanilla CSS (Custom Properties)
- **Animations:** Framer Motion
- **Icons:** Material Symbols & Lucide React
- **Maps:** Google Maps JS API Integration
- **Deployment:** Vercel / Netlify ready

## Key Features

- **Local SEO & Geo-Targeting:** Dynamic routes for 20+ service locations (stadtgebiete) with unique metadata.
- **Service Integration:** Detailed landing pages for Emergency Door Openings, Car Openings, Security Systems, etc.
- **Interactive Map:** Real-time service area visualization on the `/servicegebiet` page.
- **Conversion Focused:** Sticky header CTA, mobile bottom bar, and optimized pricing calculators.
- **Performance:** Optimized LCP images, lazy-loaded interactive components, and lean CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Set up your environment variables by creating a `.env.local` file:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
```

The build output is static-ready and optimized for zero-config deployment on Vercel or Netlify.
