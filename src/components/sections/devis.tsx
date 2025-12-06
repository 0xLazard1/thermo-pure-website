import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import Link from "next/link"

export const DevisSection = () => {
    return (
        <section id="devis" className="py-12 md:py-16 lg:py-20 bg-white relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Obtenez votre devis gratuit personnalisé
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
                        Diagnostic gratuit et sans engagement : nous analysons vos surfaces pour vous proposer la solution de nettoyage à la vapeur la plus sûre et la plus performante.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                    {/* Étape 1 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="text-4xl mb-3">🔍</div>
                            <CardTitle className="text-lg sm:text-xl">1. Analyse des besoins</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm sm:text-base text-gray-600">
                                Nous étudions vos surfaces en détail : type de matériaux, degré d&apos;encrassement, accessibilité et points singuliers (abergements de cheminée, faîtage, tuiles gelées, etc.).
                            </p>
                        </CardContent>
                    </Card>

                    {/* Étape 2 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="text-4xl mb-3">🏠</div>
                            <CardTitle className="text-lg sm:text-xl">2. Visite technique</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm sm:text-base text-gray-600">
                                Déplacement gratuit de nos techniciens pour évaluer l&apos;état des surfaces et définir la méthode de nettoyage, ainsi que les mesures de prévention et de sécurité du chantier.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Étape 3 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="text-4xl mb-3">📋</div>
                            <CardTitle className="text-lg sm:text-xl">3. Devis détaillé</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm sm:text-base text-gray-600">
                                Proposition complète avec détail du nettoyage à la vapeur basse pression, durée prévisionnelle du chantier, délais d&apos;intervention et tarifs.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8 sm:mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                    >
                        Obtenir votre devis gratuit
                        <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}