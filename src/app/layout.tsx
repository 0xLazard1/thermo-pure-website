
import "./globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thermo-pure.com'),
  alternates: {
    canonical: '/',
  },
  title: 'THERMO PURE - Nettoyage Façades, Toitures  à Niort (79) - Deux-Sèvres',
  description: "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86). Devis gratuit. SIRET: 991 013 038 00013",
  keywords: ['nettoyage façade Niort', 'nettoyage toiture Deux-Sèvres', 'nettoyage vapeur basse pression', 'démoussage Niort', 'nettoyage écologique', 'Charente-Maritime', 'Vendée', 'Vienne', 'La Rochelle', 'Poitiers', 'Niort', 'Nouvelle-Aquitaine'],
  authors: [{ name: 'THERMO PURE' }],
  creator: 'THERMO PURE',
  publisher: 'THERMO PURE',
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://thermo-pure.com',
    title: 'THERMO PURE - Nettoyage Façades & Toitures - Niort (79)',
    description: "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86). Devis gratuit. SIRET: 991 013 038 00013",
    siteName: 'THERMO PURE',
    images: ['https://thermo-pure.com/logo.avif'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THERMO PURE - Nettoyage Façades & Toitures - Niort (79)',
    description: "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86). Devis gratuit. SIRET: 991 013 038 00013",
    images: ['https://thermo-pure.com/logo.avif'],
  },
  other: {
    'msapplication-TileColor': '#0ea5e9',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "THERMO PURE",
              "image": "https://thermo-pure.com/logo.avif",
              "description": "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86). Devis gratuit. SIRET: 991 013 038 00013",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Niort",
                "addressRegion": "Deux-Sèvres",
                "postalCode": "79000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "46.323889",
                "longitude": "-0.464444"
              },
              "url": "https://thermo-pure.com",
              "telephone": "+33671558027",
              "email": "contact@thermo-pure.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33671558027",
                "contactType": "customer service",
                "availableLanguage": "French",
                "areaServed": "FR"
              },
              "priceRange": "€€",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "20:00"
                }
              ],
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Deux-Sèvres"
                },
                {
                  "@type": "State",
                  "name": "Charente-Maritime"
                },
                {
                  "@type": "State",
                  "name": "Vendée"
                },
                {
                  "@type": "State",
                  "name": "Vienne"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/thermopure",
                "https://www.instagram.com/thermopure",
                "https://www.tiktok.com/@thermopure"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de nettoyage",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Nettoyage de Façades",
                      "description": "Nettoyage professionnel de façades en pierre, béton, brique ou enduit à la vapeur basse pression"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Nettoyage de Toitures",
                      "description": "Démoussage et nettoyage de toitures : tuiles, ardoises, zinc à la vapeur basse pression"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Nettoyage de Terrasses & Extérieurs",
                      "description": "Nettoyage de terrasses, allées, cours et espaces extérieurs à la vapeur basse pression"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-78SNLPQ1LW"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-78SNLPQ1LW', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <main>{children}</main>
      </body>
    </html>
  );
}
