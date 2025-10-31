export const PresentationSection = () => {
    return (
        <section id="presentation" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-green-50/30 relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent mb-6">
                        THERMO PURE
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed">
                        Spécialistes du nettoyage de façades, murs et toitures par drone à Niort et dans les Deux-Sèvres (79).
                    </p>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Intervention dans les départements voisins : Charente-Maritime (17), Vendée (85), Vienne (86)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Service 1 */}
                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">🏢</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">Nettoyage de Façades</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Nettoyage professionnel de façades en pierre, béton, brique ou enduit pour redonner éclat à vos bâtiments.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">🧽</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">Nettoyage de Murs</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Traitement spécialisé des murs intérieurs et extérieurs : démoussage, dégraissage et désinfection.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">🏠</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">Nettoyage de Toitures</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Démoussage et nettoyage de toitures : tuiles, ardoises, zinc pour prolonger leur durée de vie.
                        </p>
                    </div>

                    {/* Service 4 - Nettoyage par Drone */}
                    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100 ring-2 ring-green-500 ring-offset-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">🚁</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">Nettoyage par Drone</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Technologie innovante pour nettoyer façades et toitures en hauteur sans échafaudage. Rapide, sûr et efficace.
                        </p>
                        <div className="mt-4 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            Innovation
                        </div>
                    </div>
                </div>

                {/* CTA Section Optimisée */}
                <div className="text-center mt-16">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#devis"
                            className="group inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                        >
                            📋 Demander un Devis Gratuit
                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="tel:+33123456789"
                            className="inline-flex items-center px-10 py-4 text-lg font-bold text-green-600 bg-white border-2 border-green-600 hover:bg-green-50 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                        >
                            📞 Appeler maintenant
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">⚡ Réponse sous 2h • 🎁 Devis gratuit sans engagement</p>
                </div>
            </div>
        </section>
    )
}