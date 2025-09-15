import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

export const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Qui sommes nous ?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Une entreprise  dirigée par deux associés passionnés par la propreté et la valorisation du patrimoine bâti.
                        Découvrez les gérants qui ont créé THERMO PURE.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-stretch">
                    {/* Personne 1 */}
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="md:flex h-full">
                            <div className="md:w-1/2">
                                <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl">👨‍💼</span>
                                        </div>
                                        <p className="text-sm opacity-90">Photo professionnelle</p>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="md:w-1/2 p-6 flex flex-col">
                                <div className="flex-1">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Tom Desideri</h3>
                                        <div className="h-8 flex items-start">
                                            <Badge variant="secondary">Co-Gérant</Badge>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Fort de 2 ans d&apos;expérience dans le nettoyage industriel, Tom a travaillé chez TechniToit en tant que responsable d&apos;équipe. Ayant obtenu une vision et voulant offrir des services de nettoyage haut de gamme.
                                    </p>
                                </div>
                                <div className="space-y-2 mt-auto">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="mr-2">🎓</span>
                                        <span>BTS dans le Bâtiment</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="mr-2">🏆</span>
                                        <span>Certifié Cordiste Niveau 2</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="mr-2">🧽</span>
                                        <span>Expert nettoyage haute pression</span>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                    </Card>

                    {/* Personne 2 */}
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                        <div className="md:flex h-full">
                            <div className="md:w-1/2">
                                <div className="h-64 md:h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl">👨‍💼</span>
                                        </div>
                                        <p className="text-sm opacity-90">Photo professionnelle</p>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="md:w-1/2 p-6 flex flex-col">
                                <div className="flex-1">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Adrien Hubert</h3>
                                        <div className="h-8 flex items-start">
                                            <Badge variant="secondary">Co-Gérant</Badge>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Diplômé en BTS travaux, Adrien gère la relation client et le développement commercial. Passionné par la satisfaction client, il assure le suivi personnalisé de chaque projet.
                                    </p>
                                </div>
                                <div className="space-y-2 mt-auto">
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
                            </CardContent>
                        </div>
                    </Card>
                </div>

                {/* Section valeurs de l&apos;entreprise */}
                <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Nos valeurs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Qualité</h4>
                            <p className="text-gray-600 text-sm">Résultats impeccables garantis</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Proximité</h4>
                            <p className="text-gray-600 text-sm">Service personnalisé et à l&apos;écoute</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌱</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Éco-responsabilité</h4>
                            <p className="text-gray-600 text-sm">Produits et méthodes respectueux</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}