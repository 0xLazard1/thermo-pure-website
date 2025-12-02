export const TrustBadgesSection = () => {
    return (
        <section className="py-8 bg-gradient-to-r from-sky-50 via-white to-sky-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {/* Badge 1 - Note */}
                    <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all">
                            <div className="text-4xl mb-2">⭐</div>
                            <div className="text-3xl font-bold text-sky-600 mb-1">5.0/5</div>
                            <p className="text-sm text-gray-600">500+ avis clients</p>
                        </div>
                    </div>

                    {/* Badge 2 - Intervention Rapide */}
                    <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all">
                            <div className="text-4xl mb-2">⚡</div>
                            <div className="text-3xl font-bold text-sky-600 mb-1">48h</div>
                            <p className="text-sm text-gray-600">Intervention rapide</p>
                        </div>
                    </div>

                    {/* Badge 3 - Assurance */}
                    <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all">
                            <div className="text-4xl mb-2">🛡️</div>
                            <div className="text-xl font-bold text-sky-600 mb-1">Responsabilité civile</div>
                            <p className="text-sm text-gray-600">MAF</p>
                        </div>
                    </div>

                    {/* Badge 4 - Devis Gratuit */}
                    <div className="group hover:scale-105 transition-transform duration-300">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all">
                            <div className="text-4xl mb-2">🎁</div>
                            <div className="text-xl font-bold text-sky-600 mb-1">Gratuit</div>
                            <p className="text-sm text-gray-600">Devis sans engagement</p>
                        </div>
                    </div>
                </div>

                {/* Garanties supplémentaires */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span className="text-sky-600">✓</span>
                        <span>Paiement sécurisé</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span className="text-sky-600">✓</span>
                        <span>Satisfait ou remboursé</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span className="text-sky-600">✓</span>
                        <span>Service client 7j/7</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span className="text-sky-600">✓</span>
                        <span>Matériel professionnel</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
