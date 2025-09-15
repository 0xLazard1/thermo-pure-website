import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

export const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-12 md:py-16 lg:py-20 bg-white relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                        ⭐ Témoignages Clients
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ils nous font confiance
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez les retours de nos clients satisfaits qui ont fait appel à nos services de nettoyage professionnel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Témoignage 1 */}
                    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {'★'.repeat(5)}
                                </div>
                            </div>
                            <blockquote className="text-gray-700 mb-4">
                                &ldquo;Excellent travail ! La façade de notre immeuble a retrouvé son éclat d&apos;origine. Service rapide et professionnel.&rdquo;
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">ML</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Marie Leblanc</p>
                                    <p className="text-sm text-gray-500">Syndic de copropriété, Lyon</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Témoignage 2 */}
                    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {'★'.repeat(5)}
                                </div>
                            </div>
                            <blockquote className="text-gray-700 mb-4">
                                &ldquo;Intervention d&apos;urgence pour notre restaurant. Équipe réactive et efficace. Je recommande vivement !&rdquo;
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">PD</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Pierre Dubois</p>
                                    <p className="text-sm text-gray-500">Restaurateur, Marseille</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Témoignage 3 */}
                    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {'★'.repeat(5)}
                                </div>
                            </div>
                            <blockquote className="text-gray-700 mb-4">
                                &ldquo;Démoussage de toiture impeccable. Travail soigné et tarifs transparents. Très satisfaite du résultat.&rdquo;
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">CM</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Catherine Martin</p>
                                    <p className="text-sm text-gray-500">Particulier, Nice</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Témoignage 4 */}
                    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {'★'.repeat(5)}
                                </div>
                            </div>
                            <blockquote className="text-gray-700 mb-4">
                                &ldquo;Partenaire de confiance pour nos bureaux. Nettoyage régulier de qualité depuis 2 ans.&rdquo;
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">JM</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Jean Moreau</p>
                                    <p className="text-sm text-gray-500">Directeur d&apos;entreprise, Toulouse</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Témoignage 5 */}
                    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {'★'.repeat(5)}
                                </div>
                            </div>
                            <blockquote className="text-gray-700 mb-4">
                                &ldquo;Nettoyage de façade commerciale parfait. Clients et équipes sont ravis du résultat !&rdquo;
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">SL</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Sophie Leroux</p>
                                    <p className="text-sm text-gray-500">Gérante de magasin, Bordeaux</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Témoignage 6 */}
                    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {'★'.repeat(5)}
                                </div>
                            </div>
                            <blockquote className="text-gray-700 mb-4">
                                &ldquo;Équipe professionnelle et matériel de qualité. Résultat au-delà de nos attentes !&rdquo;
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold text-lg">AD</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Antoine Durand</p>
                                    <p className="text-sm text-gray-500">Propriétaire, Strasbourg</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Statistiques */}
                <div className="mt-16 bg-blue-50 rounded-2xl p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                            <p className="text-gray-600">Clients satisfaits</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                            <p className="text-gray-600">Taux de satisfaction</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                            <p className="text-gray-600">Interventions réalisées</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">5⭐</div>
                            <p className="text-gray-600">Note moyenne</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}