'use client'
import { useState } from "react"
import { Badge } from "../ui/badge"
import { ChevronDown } from "lucide-react"

const faqData = [
    {
        question: "Quels types de surfaces pouvez-vous nettoyer ?",
        answer: "Nous intervenons sur tous types de surfaces : façades en crépi, pierre, brique, bac acier, tuiles terre cuite, béton, ardoise, fibrociment non amianté, terrasses, cours, murs extérieurs et intérieurs. Nous adaptons nos techniques selon les matériaux pour garantir un résultat optimal."
    },
    {
        question: "Le nettoyeur vapeur basse pression peut-il endommager ma façade ?",
        answer: "Non, nous utilisons des équipements professionnels avec réglage de pression  et de température adapté à chaque surface. Nos techniciens sont formés pour identifier le bon niveau de pression et la distance appropriée pour nettoyer efficacement sans abîmer vos revêtements. (Nous travaillons maximum à 70 bars de pression )"
    },
    {
        question: "Combien de temps faut-il pour nettoyer une façade ?",
        answer: "La durée dépend de la taille de la surface, du niveau d'encrassement et du type de traitement nécessaire, ainsi que de l'accessibilité"
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
        answer: "Oui, nous sommes entièrement assurés (responsabilité civile professionnelle) et nos techniciens sont formés aux techniques de nettoyage professionnel. Nous respectons toutes les normes de sécurité et utilisons des équipements certifiés. "
    },
    {
        question: "Quelle est la meilleure période pour nettoyer votre patrimoine ?",
        answer: "Il n’existe pas de saison spécifique pour entretenir votre toiture : un entretien régulier et efficace est nécessaire toute l’année afin de prévenir les dégradations importantes causées par les conditions climatiques, notamment hivernales."


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
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Vos questions, nos réponses
                    </h2>
                </div>

                <div className="space-y-2 sm:space-y-3">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg border">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-4 py-3 sm:px-6 sm:py-4 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-gray-800 hover:text-sky-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-inset rounded-lg"
                            >
                                <span className="pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-out ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-4 pt-2 pb-4 sm:px-6 sm:pt-2 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}