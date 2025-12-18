import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'THERMO PURE - Nettoyage Professionnel',
    short_name: 'THERMO PURE',
    description: "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86). Devis gratuit. SIRET: 991 013 038 00013",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    icons: [
      {
        src: '/logo.avif',
        sizes: '192x192',
        type: 'image/avif',
      },
      {
        src: '/logo.avif',
        sizes: '512x512',
        type: 'image/avif',
      },
    ],
  }
}
