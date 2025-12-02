import { Badge } from "../ui/badge"

export const AboutSection = () => {
    return (
        <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-700 to-sky-600 bg-clip-text text-transparent mb-6">
                        Qui sommes nous ?
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Une entreprise dirigée par deux associés passionnés par la propreté et la valorisation du patrimoine bâti.
                        Découvrez les gérants qui ont créé THERMO PURE.
                    </p>
                </div>

                <div className="space-y-12 mb-16">
                    {/* Personne 1 */}
                    <div>
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Tom Desideri</h3>
                            <div className="h-8 flex items-start">
                                <Badge variant="secondary">Co-Gérant</Badge>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Fort de plus de 2 ans d&apos;expérience en nettoyage auprès de particuliers et en milieu industriel, Tom a encadré des équipes sur différents types de chantiers. Cette expérience lui a donné une vision globale du nettoyage haut de gamme et de l&apos;entretien durable des bâtiments. Convaincu par l&apos;efficacité de la vapeur basse pression, il développe aujourd&apos;hui des solutions techniques adaptées à chaque projet avec THERMO PURE.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-2">🎓</span>
                                <span>BTS Économiste de la construction</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-2">🏆</span>
                                <span>Formation travail en hauteur – R408</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-2">💨</span>
                                <span>Expert technique en nettoyage vapeur basse pression</span>
                            </div>
                        </div>
                    </div>

                    {/* Personne 2 */}
                    <div>
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Adrien Hubert</h3>
                            <div className="h-8 flex items-start">
                                <Badge variant="secondary">Co-Gérant</Badge>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Diplômé en BTS travaux, Adrien gère la relation client et le développement commercial. Passionné par la satisfaction client, il assure le suivi personnalisé de chaque projet.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-2">🎓</span>
                                <span>BTS dans le Bâtiment</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-2">🏆</span>
                                <span>Certification CQP Propreté</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-2">📞</span>
                                <span>Expert relation client</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}