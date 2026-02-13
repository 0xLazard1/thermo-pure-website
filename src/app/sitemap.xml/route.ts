import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog'

const baseUrl = 'https://thermo-pure.com'

// Date de build (figée au moment du déploiement, pas à chaque requête)
const buildDate = new Date().toISOString().split('T')[0]

export async function GET() {
  const posts = getAllPosts()

  const blogUrls = posts
    .map(
      (post) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>${blogUrls}
  <url>
    <loc>${baseUrl}/mentions-legales</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/politique-confidentialite</loc>
    <lastmod>${buildDate}</lastmod>
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
