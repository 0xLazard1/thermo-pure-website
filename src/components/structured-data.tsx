export const StructuredData = () => {
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Démonstration de nettoyage vapeur basse pression - THERMO PURE",
        "description": "Découvrez notre technique de nettoyage à la vapeur basse pression en action. Nettoyage efficace et écologique de toitures, façades et terrasses sans produits chimiques.",
        "thumbnailUrl": "https://thermo-pure.com/nettoyage-facade-toiture-vapeur-thermo-pure.webp",
        "uploadDate": "2024-12-01T00:00:00Z",
        "contentUrl": "https://thermo-pure.com/video_presentation.webm",
        "embedUrl": "https://thermo-pure.com/video_presentation.webm",
        "duration": "PT1M"
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Pourquoi choisir la vapeur basse pression plutôt que le karcher ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le karcher haute pression casse les tuiles, érode les matériaux et réduit la durée de vie de votre toiture. La vapeur basse pression (maximum 70 bars) nettoie en profondeur grâce à la chaleur, sans abîmer les surfaces. Le résultat est plus durable car la vapeur élimine mousses et lichens à la racine, là où le karcher ne fait que les arracher en surface."
                }
            },
            {
                "@type": "Question",
                "name": "Est-ce que c'est écologique ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, c'est notre engagement principal. La vapeur basse pression n'utilise aucun produit chimique : uniquement de l'eau chauffée à haute température. Pas de javel, pas d'anti-mousse, pas de produits polluants. Vos sols, vos plantations et les nappes phréatiques sont préservés."
                }
            },
            {
                "@type": "Question",
                "name": "Quels types de surfaces pouvez-vous nettoyer ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous intervenons sur les toitures (tuiles terre cuite, ardoise, béton, fibrociment non amianté, bac acier), les façades (crépi, pierre, brique), les terrasses, les murs extérieurs et intérieurs. Nous adaptons la pression et la température selon chaque matériau."
                }
            },
            {
                "@type": "Question",
                "name": "La vapeur basse pression peut-elle endommager ma toiture ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non. Nous travaillons à maximum 70 bars de pression avec un réglage de température adapté à chaque surface. Nos techniciens sont formés pour identifier le bon niveau de pression et la distance appropriée. C'est justement l'avantage par rapport au karcher : on nettoie sans fragiliser."
                }
            },
            {
                "@type": "Question",
                "name": "Quelle est la meilleure période pour nettoyer sa toiture ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Il n'existe pas de saison spécifique : un entretien régulier est nécessaire toute l'année pour prévenir les dégradations causées par les mousses et les conditions climatiques. Cependant, le printemps et l'automne sont des périodes idéales pour traiter les accumulations hivernales ou préparer l'hiver."
                }
            },
            {
                "@type": "Question",
                "name": "Vos tarifs sont-ils transparents ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument. Nous établissons des devis détaillés et transparents sans frais cachés. Le prix est fixé avant intervention et ne change pas, sauf demande de prestations supplémentaires de votre part. Tous nos devis sont gratuits et sans engagement."
                }
            },
            {
                "@type": "Question",
                "name": "Où intervenez-vous ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous intervenons principalement dans les Deux-Sèvres (79) autour de Niort, et dans les départements voisins : Charente-Maritime (17), Vendée (85) et Vienne (86). Contactez-nous pour vérifier si votre commune est dans notre zone d'intervention."
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    )
}
