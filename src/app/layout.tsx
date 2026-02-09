import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thermo-pure.com"),
  alternates: {
    canonical: "/",
  },
  title: "THERMO PURE - Nettoyage Vapeur Toiture & Façade Niort (79)",
  description:
    "THERMO PURE : nettoyage vapeur basse pression de toitures, façades et terrasses à Niort (79). Sans produits chimiques, sans abîmer. Devis Gratuit.",
  keywords: [
    // Mots-clés principaux
    "nettoyage façade Niort",
    "nettoyage toiture Deux-Sèvres",
    "nettoyage vapeur basse pression",
    "démoussage Niort",
    "nettoyage écologique",
    // Zones géographiques
    "Charente-Maritime",
    "Vendée",
    "Vienne",
    "La Rochelle",
    "Poitiers",
    "Niort",
    "Nouvelle-Aquitaine",
    // Services spécifiques
    "nettoyage terrasse",
    "démoussage toiture",
    "traitement anti-mousse",
    "nettoyage haute pression",
    "ravalement façade",
    "hydrogommage",
    "nettoyage mur extérieur",
    "nettoyage dallage",
    "nettoyage pavés",
    // Nettoyage toiture - variations
    "nettoyage toiture Niort",
    "nettoyage toiture tuiles",
    "nettoyage toiture ardoise",
    "nettoyage toiture fibrociment",
    "nettoyage toit",
    "entretien toiture",
    "rénovation toiture",
    "mousse toiture",
    "lichen toiture",
    "algues toiture",
    "nettoyage gouttières",
    "traitement hydrofuge toiture",
    "imperméabilisation toiture",
    "nettoyage toiture maison",
    "nettoyage couverture",
    "démoussage toit",
    "anti-mousse toiture",
    "nettoyage toiture prix",
    "entreprise démoussage toiture",
    "professionnel toiture Niort",
    // Mots-clés locaux
    "nettoyage façade 79",
    "nettoyage toiture 17",
    "nettoyage toiture 85",
    "nettoyage toiture 86",
    "entreprise nettoyage Niort",
    "professionnel nettoyage façade",
    // Mots-clés longue traîne
    "nettoyage façade sans karcher",
    "nettoyage toiture écologique",
    "démoussage sans produit chimique",
    "nettoyage vapeur professionnel",
    "devis nettoyage façade gratuit",
    "prix nettoyage toiture m2",
  ],
  authors: [{ name: "THERMO PURE" }],
  creator: "THERMO PURE",
  publisher: "THERMO PURE",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-192.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://thermo-pure.com",
    title: "THERMO PURE - Nettoyage Vapeur Toiture & Façade Niort (79)",
    description:
      "THERMO PURE : nettoyage vapeur basse pression de toitures, façades et terrasses à Niort (79). Sans produits chimiques, sans abîmer. Devis Gratuit.",
    siteName: "THERMO PURE",
    images: ["https://thermo-pure.com/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "THERMO PURE - Nettoyage Vapeur Toiture & Façade Niort (79)",
    description:
      "THERMO PURE : nettoyage vapeur basse pression de toitures, façades et terrasses à Niort (79). Sans produits chimiques, sans abîmer. Devis Gratuit.",
    images: ["https://thermo-pure.com/logo.webp"],
  },
  other: {
    "msapplication-TileColor": "#0ea5e9",
    "msapplication-config": "/browserconfig.xml",
  },
};

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
              name: "THERMO PURE",
              logo: "https://thermo-pure.com/logo.webp",
              image: [
                "https://thermo-pure.com/logo.webp",
                "https://thermo-pure.com/nettoyage-facade-toiture-vapeur-thermo-pure.webp",
                "https://thermo-pure.com/nettoyage-toiture-avant-apres-niort.webp",
                "https://thermo-pure.com/nettoyage-facade-pierre-deux-sevres.webp",
                "https://thermo-pure.com/nettoyage-terrasse-exterieure-thermo-pure.webp",
              ],
              description:
                "THERMO PURE : nettoyage vapeur basse pression de toitures, façades et terrasses à Niort (79). Sans produits chimiques, sans abîmer. Devis Gratuit.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Niort",
                addressRegion: "Deux-Sèvres",
                postalCode: "79000",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "46.323889",
                longitude: "-0.464444",
              },
              url: "https://thermo-pure.com",
              telephone: "+33671558027",
              email: "contact@thermo-pure.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33671558027",
                contactType: "customer service",
                availableLanguage: "French",
                areaServed: "FR",
              },
              priceRange: "€€",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              areaServed: [
                {
                  "@type": "State",
                  name: "Deux-Sèvres",
                },
                {
                  "@type": "State",
                  name: "Charente-Maritime",
                },
                {
                  "@type": "State",
                  name: "Vendée",
                },
                {
                  "@type": "State",
                  name: "Vienne",
                },
              ],
              sameAs: [
                "https://www.facebook.com/people/Thermopure/61584787320006/",
                "https://www.instagram.com/thermo_pure",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de nettoyage",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nettoyage de Façades",
                      description:
                        "Nettoyage professionnel de façades en pierre, béton, brique ou enduit à la vapeur basse pression",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nettoyage de Toitures",
                      description:
                        "Démoussage et nettoyage de toitures : tuiles, ardoises, zinc à la vapeur basse pression",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nettoyage de Terrasses & Extérieurs",
                      description:
                        "Nettoyage de terrasses, allées, cours et espaces extérieurs à la vapeur basse pression",
                    },
                  },
                ],
              },
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
