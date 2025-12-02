export const PresentationSection = () => {
    return (
        <section id="presentation" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-sky-50 via-white to-sky-50/30 relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="text-sky-700">THERMO</span>
                        <span className="text-sky-600"> PURE</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed mt-4">
                        Spécialiste du nettoyage extérieur à la vapeur : toitures, façades, mobilier urbain et tout type d&apos;extérieur.
                    </p>
                    <p className="text-lg text-sky-600 font-semibold max-w-3xl mx-auto mb-8">
                        Intervention dans toute la Nouvelle-Aquitaine et dans les départements voisins (17, 85, 86).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Service 1 - Nettoyage de Toitures */}
                    <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-sky-100 hover:border-sky-300 relative">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-600 to-sky-400"></div>
                        <div className="p-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-sky-200 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-4xl">🏠</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">Nettoyage de Toitures</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Nettoyage à la vapeur basse pression, sans produits agressifs, pour traiter en profondeur mousses, algues, lichens et dépôts de pollution. Une solution écologique et maîtrisée.
                            </p>
                            <div className="mt-5 flex items-center text-sky-600 font-semibold text-sm">
                                <span>En savoir plus</span>
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 - Nettoyage de Façades */}
                    <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-sky-100 hover:border-sky-300 relative">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 to-sky-400"></div>
                        <div className="p-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-sky-200 to-sky-300 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-4xl">🏢</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">Nettoyage de Façades</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Nettoyage extérieur à la vapeur de façades en enduit, pierre, brique ou bardage. Élimination des mousses, taches noires et pollution pour redonner de l&apos;éclat à vos murs.
                            </p>
                            <div className="mt-5 flex items-center text-sky-600 font-semibold text-sm">
                                <span>En savoir plus</span>
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 - Nettoyage de Terrasses & Extérieurs */}
                    <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-sky-100 hover:border-sky-300 relative">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-cyan-400"></div>
                        <div className="p-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-sky-300 to-cyan-300 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-4xl">💧</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">Nettoyage de Terrasses & Extérieurs</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Nettoyage de terrasses, allées, cours, plages de piscine et espaces extérieurs à la vapeur basse pression. Résultat propre et homogène sans abîmer.
                            </p>
                            <div className="mt-5 flex items-center text-sky-600 font-semibold text-sm">
                                <span>En savoir plus</span>
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 - Imperméabilisation */}
                    <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-sky-100 hover:border-sky-300 relative">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-sky-400"></div>
                        <div className="p-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-300 to-sky-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-4xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">Imperméabilisation</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Imperméabilisation de toitures, façades et terrasses avec un produit hydrofuge en phase aqueuse, labellisé EXCEL+, garanti jusqu&apos;à 10 ans.
                            </p>
                            <div className="mt-5 flex items-center text-sky-600 font-semibold text-sm">
                                <span>En savoir plus</span>
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}