import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import { Badge } from "../ui/badge"

export const FAQSection = () => {
    return (
        <section id="faq" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                        ❓ Questions Fréquentes
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Vos questions, nos réponses
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Retrouvez les réponses aux questions les plus fréquemment posées concernant nos services de nettoyage.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-3">
                    <AccordionItem value="item-1" className="bg-gray-50 rounded-lg px-6 border">
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                            Quels types de surfaces pouvez-vous nettoyer ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-2">
                            <div className="h-auto">
                                Nous intervenons sur tous types de surfaces : façades en crépi, pierre, brique, métal, toitures en tuiles, ardoise, fibrociment, terrasses, cours, murs extérieurs et intérieurs. Nous adaptons nos techniques selon le matériau pour garantir un résultat optimal.
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-gray-50 rounded-lg px-6 border">
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                            Le nettoyage haute pression peut-il endommager ma façade ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-2">
                            Non, nous utilisons des équipements professionnels avec réglage de pression adapté à chaque surface. Nos techniciens sont formés pour identifier le bon niveau de pression et la distance appropriée pour nettoyer efficacement sans abîmer vos revêtements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-gray-50 rounded-lg px-6 border">
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                            Combien de temps faut-il pour nettoyer une façade ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-2">
                            La durée dépend de la taille de la surface, du niveau d'encrassement et du type de traitement nécessaire. Généralement, comptez une journée pour une maison individuelle standard et 2-3 jours pour un petit immeuble. Nous vous fournirons un planning précis lors du devis.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-gray-50 rounded-lg px-6 border">
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                            Proposez-vous un traitement anti-mousse ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-2">
                            Oui, nous proposons des traitements préventifs anti-mousse et anti-lichen après le nettoyage. Ces traitements permettent de prolonger la propreté de vos surfaces et de réduire la fréquence des interventions. Durée d'efficacité : 2 à 3 ans selon l'exposition.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-gray-50 rounded-lg px-6 border">
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                            Intervenez-vous en urgence ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-2">
                            Oui, nous proposons un service d'intervention d'urgence pour les professionnels (restaurants, commerces, bureaux) qui ont besoin d'un nettoyage rapide. Contactez-nous directement par téléphone pour vérifier nos disponibilités et obtenir un devis express.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="bg-gray-50 rounded-lg px-6 border">
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                            Vos tarifs sont-ils transparents ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-2">
                            Absolument. Nous établissons des devis détaillés et transparents sans frais cachés. Le prix est fixé avant intervention et ne change pas, sauf demande de prestations supplémentaires de votre part. Tous nos devis sont gratuits et sans engagement.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" className="bg-gray-50 rounded-lg px-6 border">
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                            Êtes-vous assurés et certifiés ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-2">
                            Oui, nous sommes entièrement assurés (responsabilité civile professionnelle et décennale) et nos techniciens sont formés aux techniques de nettoyage professionnel. Nous respectons toutes les normes de sécurité et utilisons des équipements certifiés.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8" className="bg-gray-50 rounded-lg px-6 border">
                        <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:text-blue-600 hover:no-underline">
                            Quelle est la meilleure période pour nettoyer sa façade ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-2">
                            Le printemps et l'automne sont les périodes idéales : températures douces, moins de pollen et conditions météo stables. Nous intervenons toute l'année sauf en cas de gel ou de pluie intense. Un nettoyage tous les 2-3 ans est généralement suffisant.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="mt-12 text-center">
                    <div className="bg-blue-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Une autre question ?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            N'hésitez pas à nous contacter directement pour toute question spécifique à votre projet.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+33123456789"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                            >
                                📞 Appelez-nous
                            </a>
                            <a
                                href="#contact"
                                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                            >
                                ✉️ Écrivez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}