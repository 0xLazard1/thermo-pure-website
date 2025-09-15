export const PresentationSection = () => {
    return (
        <section id="presentation" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        THERMO PURE
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Spécialistes du nettoyage de façades, murs et toitures, nous redonnons éclat et propreté
                        à vos bâtiments avec des techniques professionnelles et respectueuses de l&apos;environnement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🏢</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Nettoyage de Façades</h3>
                        <p className="text-gray-600">
                            Nettoyage professionnel de façades en pierre, béton, brique ou enduit pour redonner éclat à vos bâtiments.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🧽</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Nettoyage de Murs</h3>
                        <p className="text-gray-600">
                            Traitement spécialisé des murs intérieurs et extérieurs : démoussage, dégraissage et désinfection.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🏠</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Nettoyage de Toitures</h3>
                        <p className="text-gray-600">
                            Démoussage et nettoyage de toitures : tuiles, ardoises, zinc pour prolonger leur durée de vie.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Découvrir nos services
                    </a>
                </div>
            </div>
        </section>
    )
}