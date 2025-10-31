
export const ExamplesSection = () => {
    return (
        <section id="examples" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-green-50/30 to-white relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent mb-6">
                        Nos Réalisations
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Découvrez quelques exemples de nos interventions récentes de nettoyage et de rénovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Example 1 */}
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                        <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:from-green-500 group-hover:to-green-700 transition-all duration-300">
                            {/* Placeholder pour image */}
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🏢</div>
                                <p className="text-sm font-medium">Façade immeuble</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Nettoyage Façade Immeuble
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nettoyage complet de la façade d&apos;un immeuble de 8 étages avec traitement anti-mousse et protection.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Niort</span>
                                <span>⏱️ 3 jours</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 2 */}
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                        <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center group-hover:from-emerald-500 group-hover:to-emerald-700 transition-all duration-300">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🏠</div>
                                <p className="text-sm font-medium">Toiture résidentielle</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Démoussage Toiture
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Démoussage complet d&apos;une toiture de maison avec traitement préventif et nettoyage des gouttières.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 La Rochelle</span>
                                <span>⏱️ 1 jour</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 3 */}
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                        <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center group-hover:from-teal-500 group-hover:to-teal-700 transition-all duration-300">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🧽</div>
                                <p className="text-sm font-medium">Nettoyage murs</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Nettoyage Murs Industriels
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nettoyage haute pression des murs d&apos;un entrepôt industriel avec dégraissage complet.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Parthenay</span>
                                <span>⏱️ 2 jours</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 4 */}
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                        <div className="h-48 bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center group-hover:from-lime-500 group-hover:to-lime-700 transition-all duration-300">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🏪</div>
                                <p className="text-sm font-medium">Façade commerciale</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Façade Centre Commercial
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nettoyage et remise en état de la façade d&apos;un centre commercial avec traitement anti-graffiti.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Poitiers</span>
                                <span>⏱️ 1 semaine</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 5 - Nettoyage Drone */}
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-green-100 ring-2 ring-green-400">
                        <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center group-hover:from-green-600 group-hover:to-green-800 transition-all duration-300">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🚁</div>
                                <p className="text-sm font-medium">Nettoyage par drone</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Façade par Drone
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nettoyage innovant d&apos;une façade de 10 étages par drone. Rapide, sans échafaudage et économique.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Niort</span>
                                <span>⏱️ 1 jour</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 6 */}
                    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                        <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center group-hover:from-emerald-600 group-hover:to-emerald-800 transition-all duration-300">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">⚡</div>
                                <p className="text-sm font-medium">Intervention express</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Nettoyage Express
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Intervention d&apos;urgence pour nettoyer une façade taguée avant événement important.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Bressuire</span>
                                <span>⏱️ 24h</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Note about images */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm mb-6">
                        * Images de projets réels disponibles sur demande pour respecter la confidentialité clients
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                    >
                        Voir plus de projets
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
            </div>
        </section>
    )
}