import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import Link from "next/link"

export const DevisSection = () => {
    return (
        <section id="devis" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                        🎯 Devis Gratuit
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Obtenez votre devis personnalisé
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Évaluation gratuite et sans engagement. Nos experts analysent vos surfaces
                        pour vous proposer la méthode de nettoyage la plus adaptée.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Étape 1 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📋</span>
                            </div>
                            <CardTitle className="text-xl">1. Analyse des besoins</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Nous étudions vos surfaces en détail : type de matériau, niveau d&apos;encrassement, accessibilité et budget.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Étape 2 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏠</span>
                            </div>
                            <CardTitle className="text-xl">2. Visite technique</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Déplacement gratuit de nos techniciens pour évaluer l&apos;état des surfaces et définir la méthode de nettoyage.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Étape 3 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💰</span>
                            </div>
                            <CardTitle className="text-xl">3. Devis détaillé</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Proposition complète avec détail des techniques de nettoyage, produits utilisés, délais et tarifs.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Services inclus */}
                <Card className="mb-12">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Ce qui est inclus dans votre devis gratuit</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="mr-3 text-green-600">✅</span>
                                    <span>Diagnostic complet de l&apos;état des surfaces</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3 text-green-600">✅</span>
                                    <span>Conseils pour l&apos;entretien préventif</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3 text-green-600">✅</span>
                                    <span>Choix des techniques adaptées</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3 text-green-600">✅</span>
                                    <span>Planning d&apos;intervention détaillé</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="mr-3 text-green-600">✅</span>
                                    <span>Information sur les traitements préventifs</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3 text-green-600">✅</span>
                                    <span>Délais d&apos;intervention garantis</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3 text-green-600">✅</span>
                                    <span>Garantie de résultat</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3 text-green-600">✅</span>
                                    <span>Service après-vente inclus</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA Section */}
                <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Prêt à commencer votre projet ?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Contactez-nous dès maintenant pour obtenir votre devis gratuit.
                        Nos experts vous recontactent sous 24h pour planifier la visite technique.
                    </p>
                    <Link href="#contact">
                        <Button size="lg" className="text-lg px-8 py-4">
                            📞 Demander mon devis gratuit
                        </Button>
                    </Link>
                    <p className="text-sm text-gray-500 mt-3">
                        Sans engagement • Réponse rapide • Visite gratuite
                    </p>
                </div>
            </div>
        </section>
    )
}