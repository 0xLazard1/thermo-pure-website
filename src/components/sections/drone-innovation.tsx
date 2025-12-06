export const DroneInnovationSection = () => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nettoyage vapeur basse pression
                        <br />
                        <span className="bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-transparent">
                            L&apos;Avenir du Nettoyage
                        </span>
                    </h2>
                    <p className="text-xl text-sky-100 max-w-3xl mx-auto">
                        Découvrez notre technologie révolutionnaire : nettoyage sans produits chimiques, doux et performant, adapté à tous les types de supports.
                    </p>
                </div>

                {/* Grid Avantages vs Traditionnel */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12">
                    {/* Méthode Traditionnelle */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <div className="text-3xl sm:text-4xl">🧪</div>
                            <h3 className="text-xl sm:text-2xl font-bold">Méthode Traditionnelle</h3>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Utilisation de produits chimiques (chlore, javel, soude…) nocifs pour l&apos;environnement et les matériaux.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Pression trop forte ou brosses abrasives pouvant abîmer les supports.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Interventions souvent limitées à certaines périodes de l&apos;année (gel, fortes chaleurs, météo instable).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Mise en place lourde : échafaudages, nacelles, temps de préparation important.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Gêne importante pour les occupants et le voisinage (bruit, odeurs, durée d&apos;intervention).</span>
                            </li>
                        </ul>
                    </div>

                    {/* Nettoyage Vapeur Basse Pression */}
                    <div className="bg-gradient-to-br from-sky-600/30 to-cyan-500/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-cyan-400 ring-4 ring-cyan-400/20">
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <div className="text-3xl sm:text-4xl">💨</div>
                            <h3 className="text-xl sm:text-2xl font-bold">Nettoyage Vapeur Basse Pression</h3>
                            <span className="bg-cyan-400 text-sky-900 text-xs font-bold px-3 py-1 rounded-full">INNOVANT</span>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-300 text-xl">✓</span>
                                <span className="font-semibold">Aucun produit chimique : uniquement de la vapeur d&apos;eau.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-300 text-xl">✓</span>
                                <span className="font-semibold">Intervention possible toute l&apos;année (hors météo extrême).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-300 text-xl">✓</span>
                                <span className="font-semibold">Respect des matériaux grâce à la basse pression.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-300 text-xl">✓</span>
                                <span className="font-semibold">Adapté à tout type de support : maisons, immeubles, châteaux, églises, bâtiments anciens…</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-300 text-xl">✓</span>
                                <span className="font-semibold">Matériel facilement déplaçable : accès partout, même dans les zones difficiles.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Stats / Chiffres Clés */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300 mb-2">3x</div>
                        <p className="text-sm sm:text-base text-sky-100">moins d&apos;eau</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300 mb-2">100%</div>
                        <p className="text-sm sm:text-base text-sky-100">sécurisé</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300 mb-2">0</div>
                        <p className="text-sm sm:text-base text-sky-100">produit chimique</p>
                    </div>
                </div>

                {/* CTA Final */}
                <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Intéressé par cette technologie ?</h3>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-bold text-sky-900 bg-white hover:bg-sky-50 rounded-full transition-all duration-300 shadow-2xl hover:scale-105"
                        >
                            📋 Demander un Devis
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
