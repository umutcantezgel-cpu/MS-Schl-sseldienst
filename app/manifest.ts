import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MS Schlüsseldienst Wetzlar',
    short_name: 'Schlüsseldienst Wetzlar',
    description: '24/7 Schlüsselnotdienst in Wetzlar, Gießen, Marburg und im gesamten Lahn-Dill-Kreis.',
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
