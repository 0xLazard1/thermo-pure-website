export const StructuredData = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "THERMO PURE",
        "image": "https://www.thermopure.fr/logo.png",
        "url": "https://www.thermopure.fr",
        "telephone": "+33-1-23-45-67-89",
        "email": "contact@thermo-pure.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Niort",
            "addressRegion": "Deux-Sèvres",
            "postalCode": "79000",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 46.3236,
            "longitude": -0.4597
        },
        "priceRange": "€€",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/thermopure",
            "https://www.instagram.com/thermopure"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "500"
        },
        "description": "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, mobilier urbain et tout type d'extérieur à Niort et Nouvelle-Aquitaine.",
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
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de nettoyage",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Nettoyage de Façades",
                        "description": "Nettoyage professionnel de façades en pierre, béton, brique ou enduit"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Nettoyage de Toitures",
                        "description": "Démoussage et nettoyage de toitures : tuiles, ardoises, zinc"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Nettoyage de Murs",
                        "description": "Traitement spécialisé des murs intérieurs et extérieurs"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Imperméabilisation",
                        "description": "Imperméabilisation de toitures, façades et terrasses avec produit hydrofuge garantie jusqu'à 10 ans"
                    }
                }
            ]
        }
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.thermopure.fr"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.thermopure.fr#presentation"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Contact",
                "item": "https://www.thermopure.fr#contact"
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    )
}
