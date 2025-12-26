import { NextResponse } from 'next/server'

const baseUrl = 'https://thermo-pure.com'

// Date de build (figée au moment du déploiement)
const buildDate = new Date().toISOString().split('T')[0]

const images = [
  {
    loc: `${baseUrl}/hero-bg.webp`,
    title: 'Nettoyage de façade et toiture à la vapeur basse pression - THERMO PURE',
    caption: 'Service professionnel de nettoyage extérieur à la vapeur basse pression en Nouvelle-Aquitaine',
  },
  {
    loc: `${baseUrl}/logo.webp`,
    title: 'Logo THERMO PURE - Spécialiste nettoyage vapeur',
    caption: 'THERMO PURE, entreprise de nettoyage à la vapeur basse pression à Niort',
  },
  {
    loc: `${baseUrl}/Image_Nettoyage_1.webp`,
    title: 'Nettoyage de toiture avant/après - THERMO PURE Niort',
    caption: 'Résultat de nettoyage de toiture à la vapeur basse pression dans les Deux-Sèvres',
  },
  {
    loc: `${baseUrl}/Image_Nettoyage_2.webp`,
    title: 'Nettoyage de façade en pierre à la vapeur basse pression',
    caption: 'Nettoyage professionnel de façade en pierre dans les Deux-Sèvres',
  },
  {
    loc: `${baseUrl}/Image_Nettoyage_3.webp`,
    title: 'Résultat de nettoyage de terrasse extérieure - THERMO PURE',
    caption: 'Terrasse nettoyée à la vapeur basse pression en Nouvelle-Aquitaine',
  },
  {
    loc: `${baseUrl}/Image_Nettoyage_4.webp`,
    title: 'Démoussage de toiture à la vapeur - Nouvelle-Aquitaine',
    caption: 'Démoussage et nettoyage de toiture par vapeur basse pression',
  },
  {
    loc: `${baseUrl}/Image_Nettoyage_5.webp`,
    title: 'Nettoyage professionnel de mur extérieur - THERMO PURE',
    caption: 'Nettoyage de mur extérieur à la vapeur basse pression à Niort',
  },
  {
    loc: `${baseUrl}/Image_Nettoyage_6.webp`,
    title: 'Nettoyage de façade commerciale à Niort',
    caption: 'Nettoyage de façade commerciale à la vapeur basse pression',
  },
  {
    loc: `${baseUrl}/Image_Nettoyage_7.webp`,
    title: 'Rénovation de surface extérieure par nettoyage vapeur',
    caption: 'Rénovation et nettoyage de surfaces extérieures par THERMO PURE',
  },
  {
    loc: `${baseUrl}/Image_Façade_Presentation.webp`,
    title: 'Nettoyage de façade à la vapeur - THERMO PURE',
    caption: 'Service de nettoyage de façade à la vapeur basse pression',
  },
  {
    loc: `${baseUrl}/Image_Terrace_Presentation.webp`,
    title: 'Nettoyage de terrasse à la vapeur - THERMO PURE',
    caption: 'Service de nettoyage de terrasse à la vapeur basse pression',
  },
]

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${buildDate}</lastmod>
${images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
