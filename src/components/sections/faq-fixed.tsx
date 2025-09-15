'use client'
import { useState } from "react"
import { Badge } from "../ui/badge"
import { ChevronDown } from "lucide-react"

const faqData = [
    {
        question: "Quels types de surfaces pouvez-vous nettoyer ?",
        answer: "Nous intervenons sur tous types de surfaces : façades en crépi, pierre, brique, métal, toitures en tuiles, ardoise, fibrociment, terrasses, cours, murs extérieurs et intérieurs. Nous adaptons nos techniques selon le matériau pour garantir un résultat optimal."
    },
    {
        question: "Le nettoyage haute pression peut-il endommager ma façade ?",
        answer: "Non, nous utilisons des équipements professionnels avec réglage de pression adapté à chaque surface. Nos techniciens sont formés pour identifier le bon niveau de pression et la distance appropriée pour nettoyer efficacement sans abîmer vos revêtements."
    },
    {
        question: "Combien de temps faut-il pour nettoyer une façade ?",
        answer: "La durée dépend de la taille de la surface, du niveau d'encrassement et du type de traitement nécessaire. Généralement, comptez une journée pour une maison individuelle standard et 2-3 jours pour un petit immeuble. Nous vous fournirons un planning précis lors du devis."
    },
    {
        question: "Proposez-vous un traitement anti-mousse ?",
        answer: "Oui, nous proposons des traitements préventifs anti-mousse et anti-lichen après le nettoyage. Ces traitements permettent de prolonger la propreté de vos surfaces et de réduire la fréquence des interventions. Durée d'efficacité : 2 à 3 ans selon l'exposition."
    },
    {
        question: "Intervenez-vous en urgence ?",
        answer: "Oui, nous proposons un service d'intervention d'urgence pour les professionnels (restaurants, commerces, bureaux) qui ont besoin d'un nettoyage rapide. Contactez-nous directement par téléphone pour vérifier nos disponibilités et obtenir un devis express."
    },
    {
        question: "Vos tarifs sont-ils transparents ?",
        answer: "Absolument. Nous établissons des devis détaillés et transparents sans frais cachés. Le prix est fixé avant intervention et ne change pas, sauf demande de prestations supplémentaires de votre part. Tous nos devis sont gratuits et sans engagement."
    },
    {
        question: "Êtes-vous assurés et certifiés ?",
        answer: "Oui, nous sommes entièrement assurés (responsabilité civile professionnelle et décennale) et nos techniciens sont formés aux techniques de nettoyage professionnel. Nous respectons toutes les normes de sécurité et utilisons des équipements certifiés."
    },
    {
        question: "Quelle est la meilleure période pour nettoyer sa façade ?",
        answer: "Le printemps et l'automne sont les périodes idéales : températures douces, moins de pollen et conditions météo stables. Nous intervenons toute l'année sauf en cas de gel ou de pluie intense. Un nettoyage tous les 2-3 ans est généralement suffisant."
    }
]

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-12 md:py-16 lg:py-20 bg-gray-50 relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
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

                <div className="space-y-3">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg border">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-out ${
                                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pt-2 pb-6 text-gray-600 text-base leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

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