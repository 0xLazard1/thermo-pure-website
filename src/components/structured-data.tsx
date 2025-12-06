export const StructuredData = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "THERMO PURE",
        "image": "https://www.thermo-pure.com/logo.jpg",
        "url": "https://www.thermo-pure.com",
        "telephone": "+33671558027",
        "email": "contact@thermo-pure.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "60 rue François Ier",
            "addressLocality": "Paris",
            "addressRegion": "Île-de-France",
            "postalCode": "75008",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.8698,
            "longitude": 2.3079
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
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/thermopure",
            "https://www.instagram.com/thermopure",
            "https://www.tiktok.com/@thermopure"
        ],
        "description": "Spécialiste du nettoyage extérieur à la vapeur basse pression : toitures, façades, terrasses et tout type d'extérieur. Intervention en Nouvelle-Aquitaine et départements voisins (79, 17, 85, 86).",
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
                        "name": "Nettoyage de Terrasses & Extérieurs",
                        "description": "Nettoyage de terrasses, allées, cours et espaces extérieurs à la vapeur basse pression"
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
                "item": "https://www.thermo-pure.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.thermo-pure.com#presentation"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Contact",
                "item": "https://www.thermo-pure.com#contact"
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
