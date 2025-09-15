import Image from "next/image"

export const ExamplesSection = () => {
    return (
        <section id="examples" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nos Réalisations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez quelques exemples de nos interventions récentes de nettoyage et de rénovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            {/* Placeholder pour image */}
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🏢</div>
                                <p className="text-sm">Façade immeuble</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Nettoyage Façade Immeuble
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nettoyage complet de la façade d'un immeuble de 8 étages avec traitement anti-mousse et protection.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Lyon</span>
                                <span>⏱️ 3 jours</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🏠</div>
                                <p className="text-sm">Toiture résidentielle</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Démoussage Toiture
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Démoussage complet d'une toiture de maison avec traitement préventif et nettoyage des gouttières.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Paris</span>
                                <span>⏱️ 1 jour</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🧽</div>
                                <p className="text-sm">Nettoyage murs</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Nettoyage Murs Industriels
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nettoyage haute pression des murs d'un entrepôt industriel avec dégraissage complet.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Marseille</span>
                                <span>⏱️ 3 jours</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 4 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🏪</div>
                                <p className="text-sm">Façade commerciale</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Façade Centre Commercial
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nettoyage et remise en état de la façade d'un centre commercial avec traitement anti-graffiti.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Toulouse</span>
                                <span>⏱️ 2 semaines</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 5 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">🏥</div>
                                <p className="text-sm">Établissement médical</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Nettoyage Hôpital
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nettoyage spécialisé des murs et façades d'un établissement de santé selon normes sanitaires.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Nice</span>
                                <span>⏱️ 1 mois</span>
                            </div>
                        </div>
                    </div>

                    {/* Example 6 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="text-4xl mb-2">⚡</div>
                                <p className="text-sm">Intervention express</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Nettoyage Express
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Intervention d'urgence pour nettoyer une façade taguée avant événement important.
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-4">📍 Strasbourg</span>
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
                        className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Voir plus de projets
                    </a>
                </div>
            </div>
        </section>
    )
}