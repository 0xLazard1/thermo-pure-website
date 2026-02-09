import { NextResponse } from 'next/server'

const baseUrl = 'https://thermo-pure.com'

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <video:video>
      <video:thumbnail_loc>${baseUrl}/nettoyage-facade-toiture-vapeur-thermo-pure.webp</video:thumbnail_loc>
      <video:title>Nettoyage à la vapeur basse pression - THERMO PURE Niort</video:title>
      <video:description>Découvrez notre technique de nettoyage à la vapeur basse pression pour toitures, façades et terrasses. THERMO PURE, spécialiste du nettoyage extérieur écologique en Nouvelle-Aquitaine (79, 17, 85, 86).</video:description>
      <video:content_loc>${baseUrl}/video_presentation.webm</video:content_loc>
      <video:player_loc allow_embed="yes">${baseUrl}/#examples</video:player_loc>
      <video:duration>10</video:duration>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
      <video:tag>nettoyage vapeur</video:tag>
      <video:tag>nettoyage toiture</video:tag>
      <video:tag>nettoyage façade</video:tag>
      <video:tag>démoussage</video:tag>
      <video:tag>Niort</video:tag>
      <video:tag>Deux-Sèvres</video:tag>
      <video:tag>Nouvelle-Aquitaine</video:tag>
      <video:category>Services professionnels</video:category>
    </video:video>
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
