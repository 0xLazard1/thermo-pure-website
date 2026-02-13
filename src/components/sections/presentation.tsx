import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const services = [
    {
        title: "Nettoyage de Toitures",
        description: "Nettoyage à la vapeur basse pression, sans produits agressifs, pour traiter en profondeur mousses, algues, lichens et dépôts de pollution. Une solution écologique et maîtrisée.",
        image: "/nettoyage-terrasse-exterieure-thermo-pure.avif",
        alt: "Nettoyage de toiture à la vapeur",
        gradient: "from-sky-600 to-sky-400",
    },
    {
        title: "Nettoyage de Façades",
        description: "Nettoyage extérieur à la vapeur de façades en enduit, pierre, brique ou bardage. Élimination des mousses, taches noires et pollution pour redonner de l\u0027éclat à vos murs.",
        image: "/nettoyage-facade-vapeur-basse-pression.avif",
        alt: "Nettoyage de façade à la vapeur",
        gradient: "from-sky-500 to-sky-400",
    },
    {
        title: "Nettoyage de Terrasses & Extérieurs",
        description: "Nettoyage de terrasses, allées, cours, plages de piscine et espaces extérieurs à la vapeur basse pression. Résultat propre et homogène sans abîmer.",
        image: "/nettoyage-terrasse-vapeur-basse-pression.avif",
        alt: "Nettoyage de terrasse à la vapeur",
        gradient: "from-sky-400 to-cyan-400",
    },
]

export const PresentationSection = () => {
    return (
        <section id="presentation" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-sky-50 via-white to-sky-50/30 relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="text-sky-700">Nos Services de Nettoyage</span>
                        <span className="text-green-600"> à Niort et Nouvelle-Aquitaine</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed mt-4">
                        Spécialiste du nettoyage extérieur à la vapeur : toitures, façades, mobilier urbain et tout type d&apos;extérieur.
                    </p>
                    <p className="text-lg text-sky-600 font-semibold max-w-3xl mx-auto mb-8">
                        Intervention dans toute la Nouvelle-Aquitaine et dans les départements voisins (17, 85, 86).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-sky-100 hover:border-sky-300 relative"
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient}`} />
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    width={400}
                                    height={300}
                                    loading="lazy"
                                    quality={85}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-sky-700 transition-colors">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}