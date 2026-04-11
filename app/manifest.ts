import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Schlüssel Schmiede Wetzlar',
    short_name: 'Schlüssel Schmiede',
    description: 'Schlüssel Schmiede Wetzlar und Ihr 24 Stunden Notdienst für Schlüssel, Schlösser & Sicherheit. 24/7 Notdienst in Wetzlar, Gießen, Marburg und im gesamten Lahn-Dill-Kreis.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#B31B1B', // Red-500
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}
