import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

export const AboutSection = () => {
    return (
        <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-green-50/30 to-white relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent mb-6">
                        Qui sommes nous ?
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Une entreprise dirigée par deux associés passionnés par la propreté et la valorisation du patrimoine bâti.
                        Découvrez les gérants qui ont créé THERMO PURE.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-stretch">
                    {/* Personne 1 */}
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border-2 border-green-100 hover:border-green-300 group">
                        <div className="lg:flex h-full">
                            <div className="md:w-1/2">
                                <div className="h-64 md:h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:from-green-500 group-hover:to-green-700 transition-all duration-300">
                                    <div className="text-white text-center">
                                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                            <span className="text-4xl">👨‍💼</span>
                                        </div>
                                        <p className="text-sm opacity-90 font-medium">Photo professionnelle</p>
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
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border-2 border-green-100 hover:border-green-300 group">
                        <div className="lg:flex h-full">
                            <div className="md:w-1/2">
                                <div className="h-64 md:h-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center group-hover:from-emerald-500 group-hover:to-emerald-700 transition-all duration-300">
                                    <div className="text-white text-center">
                                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                            <span className="text-4xl">👨‍💼</span>
                                        </div>
                                        <p className="text-sm opacity-90 font-medium">Photo professionnelle</p>
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
                <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 border-2 border-green-100 shadow-lg">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-center mb-10">Nos valeurs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-3">Qualité</h4>
                            <p className="text-gray-600">Résultats impeccables garantis</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-3">Proximité</h4>
                            <p className="text-gray-600">Service personnalisé et à l&apos;écoute</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🌱</span>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-3">Éco-responsabilité</h4>
                            <p className="text-gray-600">Produits et méthodes respectueux</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}