'use client'
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
    {
        question: "Pourquoi choisir la vapeur basse pression plutôt que le karcher ?",
        answer: "Le karcher haute pression casse les tuiles, érode les matériaux et réduit la durée de vie de votre toiture. La vapeur basse pression (maximum 70 bars) nettoie en profondeur grâce à la chaleur, sans abîmer les surfaces. Le résultat est plus durable car la vapeur élimine mousses et lichens à la racine, là où le karcher ne fait que les arracher en surface."
    },
    {
        question: "Est-ce que c'est écologique ?",
        answer: "Oui, c'est notre engagement principal. La vapeur basse pression n'utilise aucun produit chimique : uniquement de l'eau chauffée à haute température. Pas de javel, pas d'anti-mousse, pas de produits polluants. Vos sols, vos plantations et les nappes phréatiques sont préservés."
    },
    {
        question: "Quels types de surfaces pouvez-vous nettoyer ?",
        answer: "Nous intervenons sur les toitures (tuiles terre cuite, ardoise, béton, fibrociment non amianté, bac acier), les façades (crépi, pierre, brique), les terrasses, les murs extérieurs et intérieurs. Nous adaptons la pression et la température selon chaque matériau."
    },
    {
        question: "La vapeur basse pression peut-elle endommager ma toiture ?",
        answer: "Non. Nous travaillons à maximum 70 bars de pression avec un réglage de température adapté à chaque surface. Nos techniciens sont formés pour identifier le bon niveau de pression et la distance appropriée. C'est justement l'avantage par rapport au karcher : on nettoie sans fragiliser."
    },
    {
        question: "Quelle est la meilleure période pour nettoyer sa toiture ?",
        answer: "Il n'existe pas de saison spécifique : un entretien régulier est nécessaire toute l'année pour prévenir les dégradations causées par les mousses et les conditions climatiques. Cependant, le printemps et l'automne sont des périodes idéales pour traiter les accumulations hivernales ou préparer l'hiver."
    },
    {
        question: "Vos tarifs sont-ils transparents ?",
        answer: "Absolument. Nous établissons des devis détaillés et transparents sans frais cachés. Le prix est fixé avant intervention et ne change pas, sauf demande de prestations supplémentaires de votre part. Tous nos devis sont gratuits et sans engagement."
    },
    {
        question: "Où intervenez-vous ?",
        answer: "Nous intervenons principalement dans les Deux-Sèvres (79) autour de Niort, et dans les départements voisins : Charente-Maritime (17), Vendée (85) et Vienne (86). Contactez-nous pour vérifier si votre commune est dans notre zone d'intervention."
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