import { NextResponse } from 'next/server'

const baseUrl = 'https://thermo-pure.com'

// Dates de dernière modification réelles (mettre à jour quand le contenu change)
const lastModified = {
  home: '2025-12-26',
  mentionsLegales: '2025-12-26',
  politiqueConfidentialite: '2025-12-26',
}

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${lastModified.home}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/mentions-legales</loc>
    <lastmod>${lastModified.mentionsLegales}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/politique-confidentialite</loc>
    <lastmod>${lastModified.politiqueConfidentialite}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
