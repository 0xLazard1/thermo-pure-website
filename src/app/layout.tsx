
import "./globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'THERMO PURE - Nettoyage Façades, Toitures & Drone à Niort (79) - Deux-Sèvres',
  description: 'Spécialistes du nettoyage de façades, murs et toitures par drone à Niort et Deux-Sèvres (79). Intervention Charente-Maritime (17), Vendée (85), Vienne (86). Devis gratuit. SIRET: 991 013 038 00013',
  keywords: ['nettoyage façade Niort', 'nettoyage toiture Deux-Sèvres', 'nettoyage drone 79', 'démoussage Niort', 'nettoyage haute pression', 'Charente-Maritime', 'Vendée', 'Vienne', 'La Rochelle', 'Poitiers', 'Niort', 'Nouvelle-Aquitaine'],
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
    url: 'https://www.thermopure.fr',
    title: 'THERMO PURE - Nettoyage Façades & Toitures par Drone - Niort (79)',
    description: 'Spécialistes du nettoyage de façades, murs et toitures par drone à Niort. Intervention Deux-Sèvres, Charente-Maritime, Vendée, Vienne.',
    siteName: 'THERMO PURE',
    images: ['/logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THERMO PURE - Nettoyage par Drone Niort',
    description: 'Nettoyage de façades et toitures par drone à Niort et Deux-Sèvres.',
    images: ['/logo.jpg'],
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
        <link rel="canonical" href="https://www.thermopure.fr" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
