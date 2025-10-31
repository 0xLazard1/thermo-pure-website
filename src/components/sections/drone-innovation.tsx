export const DroneInnovationSection = () => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                        <span className="text-3xl">🚁</span>
                        <span className="font-semibold">Innovation 2024</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nettoyage par Drone
                        <br />
                        <span className="bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                            L&apos;Avenir du Nettoyage
                        </span>
                    </h2>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        Découvrez notre technologie révolutionnaire : nettoyer façades et toitures sans échafaudage,
                        plus rapide et plus économique !
                    </p>
                </div>

                {/* Grid Avantages vs Traditionnel */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Méthode Traditionnelle */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-4xl">🏗️</div>
                            <h3 className="text-2xl font-bold">Méthode Traditionnelle</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Échafaudage nécessaire (coût élevé)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Intervention longue (1-2 semaines)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Gêne pour les occupants</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Risques pour les ouvriers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 text-xl">✗</span>
                                <span className="text-green-100">Difficile sur bâtiments hauts</span>
                            </li>
                        </ul>
                    </div>

                    {/* Méthode Drone */}
                    <div className="bg-gradient-to-br from-green-600/30 to-green-500/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-400 ring-4 ring-green-400/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-4xl">🚁</div>
                            <h3 className="text-2xl font-bold">Nettoyage par Drone</h3>
                            <span className="bg-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full">NOUVEAU</span>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 text-xl">✓</span>
                                <span className="font-semibold">Sans échafaudage = Économies</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 text-xl">✓</span>
                                <span className="font-semibold">Intervention rapide (1-2 jours)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 text-xl">✓</span>
                                <span className="font-semibold">Zéro gêne pour les occupants</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 text-xl">✓</span>
                                <span className="font-semibold">100% sécurisé (pas d&apos;ouvrier en hauteur)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-400 text-xl">✓</span>
                                <span className="font-semibold">Accès partout, même zones difficiles</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Stats / Chiffres Clés */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="text-center">
                        <div className="text-5xl font-bold text-green-400 mb-2">40%</div>
                        <p className="text-green-100">d&apos;économies</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-green-400 mb-2">3x</div>
                        <p className="text-green-100">plus rapide</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
                        <p className="text-green-100">sécurisé</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-green-400 mb-2">0</div>
                        <p className="text-green-100">échafaudage</p>
                    </div>
                </div>

                {/* Placeholder Vidéo */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center border-2 border-green-400/50 mb-12">
                    <div className="aspect-video bg-gray-800/50 rounded-xl flex items-center justify-center mb-6">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🎥</div>
                            <p className="text-xl font-semibold mb-2">Vidéo : Drone en action</p>
                            <p className="text-sm text-gray-400">Insérer vidéo YouTube/Vimeo ici</p>
                            <p className="text-xs text-gray-500 mt-2">(Montrer le drone nettoyant une façade)</p>
                        </div>
                    </div>
                    <p className="text-green-100">
                        Regardez notre drone professionnel nettoyer une façade de 10 étages en seulement quelques heures !
                    </p>
                </div>

                {/* CTA Final */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Intéressé par cette innovation ?</h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#devis"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-green-900 bg-white hover:bg-green-50 rounded-full transition-all duration-300 shadow-2xl hover:scale-105"
                        >
                            📋 Demander un Devis Drone
                        </a>
                        <a
                            href="tel:+33123456789"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-green-600/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-green-900 rounded-full transition-all duration-300 hover:scale-105"
                        >
                            📞 Poser une question
                        </a>
                    </div>
                    <p className="text-sm text-green-200 mt-4">
                        ⚡ Réponse sous 2h • 🎁 Devis gratuit • 🚁 Premier en Deux-Sèvres
                    </p>
                </div>
            </div>
        </section>
    )
}
