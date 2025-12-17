
import "./globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'THERMO PURE - Nettoyage Façades, Toitures  à Niort (79) - Deux-Sèvres',
  description: "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86). Devis gratuit. SIRET: 991 013 038 00013",
  keywords: ['nettoyage façade Niort', 'nettoyage toiture Deux-Sèvres', 'nettoyage vapeur basse pression', 'démoussage Niort', 'nettoyage écologique', 'Charente-Maritime', 'Vendée', 'Vienne', 'La Rochelle', 'Poitiers', 'Niort', 'Nouvelle-Aquitaine'],
  authors: [{ name: 'THERMO PURE' }],
  creator: 'THERMO PURE',
  publisher: 'THERMO PURE',
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
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
    images: ['https://thermo-pure.com/logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THERMO PURE - Nettoyage Façades & Toitures - Niort (79)',
    description: "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86). Devis gratuit. SIRET: 991 013 038 00013",
    images: ['https://thermo-pure.com/logo.jpg'],
  },
  verification: {
    // Ajoutez vos codes de vérification ici une fois disponibles
    // google: 'votre-code-google',
    // yandex: 'votre-code-yandex',
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
        <link rel="canonical" href="https://thermo-pure.com" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-78SNLPQ1LW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-78SNLPQ1LW');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "THERMO PURE",
              "image": "https://thermo-pure.com/logo.jpg",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
