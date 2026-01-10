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
                "name": "Quels types de surfaces pouvez-vous nettoyer ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous intervenons sur tous types de surfaces : façades en crépi, pierre, brique, bac acier, tuiles terre cuite, béton, ardoise, fibrociment non amianté, terrasses, cours, murs extérieurs et intérieurs. Nous adaptons nos techniques selon les matériaux pour garantir un résultat optimal."
                }
            },
            {
                "@type": "Question",
                "name": "Le nettoyeur vapeur basse pression peut-il endommager ma façade ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non, nous utilisons des équipements professionnels avec réglage de pression et de température adapté à chaque surface. Nos techniciens sont formés pour identifier le bon niveau de pression et la distance appropriée pour nettoyer efficacement sans abîmer vos revêtements. (Nous travaillons maximum à 70 bars de pression)"
                }
            },
            {
                "@type": "Question",
                "name": "Combien de temps faut-il pour nettoyer une façade ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La durée dépend de la taille de la surface, du niveau d'encrassement et du type de traitement nécessaire, ainsi que de l'accessibilité"
                }
            },
            {
                "@type": "Question",
                "name": "Intervenez-vous en urgence ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, nous proposons un service d'intervention d'urgence pour les professionnels (restaurants, commerces, bureaux) qui ont besoin d'un nettoyage rapide. Contactez-nous directement par téléphone pour vérifier nos disponibilités et obtenir un devis express."
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
                "name": "Êtes-vous assurés et certifiés ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, nous sommes entièrement assurés (responsabilité civile professionnelle) et nos techniciens sont formés aux techniques de nettoyage professionnel. Nous respectons toutes les normes de sécurité et utilisons des équipements certifiés."
                }
            },
            {
                "@type": "Question",
                "name": "Quelle est la meilleure période pour nettoyer votre patrimoine ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Il n'existe pas de saison spécifique pour entretenir votre toiture : un entretien régulier et efficace est nécessaire toute l'année afin de prévenir les dégradations importantes causées par les conditions climatiques, notamment hivernales."
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
