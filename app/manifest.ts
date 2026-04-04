import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Schlüssel Schmiede Wetzlar',
    short_name: 'Schlüssel Schmiede',
    description: 'Schlüssel Schmiede Wetzlar — Ihr Schlüsseldienst & Werkstatt. 24/7 Notdienst in Wetzlar, Gießen, Marburg und im gesamten Lahn-Dill-Kreis.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#B31B1B', // Red-500
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
  }
}
