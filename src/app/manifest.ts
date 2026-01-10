import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'THERMO PURE - Nettoyage Professionnel',
    short_name: 'THERMO PURE',
    description: "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86). Devis gratuit. SIRET: 991 013 038 00013",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/favicon.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
