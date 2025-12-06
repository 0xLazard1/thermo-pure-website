'use client'
import { useState, useEffect } from 'react'
import { Phone, FileText, X } from 'lucide-react'

export const StickyCtaMobile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Afficher le CTA après avoir scrollé 300px
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <>
            {/* Version Mobile uniquement (caché sur desktop) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
                {/* Options dépliées */}
                {showOptions && (
                    <div className="bg-white border-t border-gray-200 shadow-2xl p-4 space-y-3">
                        <button
                            onClick={() => setShowOptions(false)}
                            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Bouton Appeler */}
                        <a
                            href="tel:+33671558027"
                            className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg"
                        >
                            <Phone className="w-5 h-5 animate-pulse" />
                            Appeler maintenant
                        </a>

                        {/* Bouton Devis */}
                        <a
                            href="#devis"
                            onClick={() => setShowOptions(false)}
                            className="flex items-center justify-center gap-3 w-full bg-white hover:bg-gray-50 text-emerald-600 font-bold py-4 rounded-xl border-2 border-emerald-600 transition-all duration-300"
                        >
                            <FileText className="w-5 h-5" />
                            Devis Gratuit
                        </a>
                    </div>
                )}

                {/* Barre principale toujours visible */}
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-3 flex items-center justify-between shadow-2xl">
                    {!showOptions ? (
                        <>
                            <div className="text-white">
                                <p className="font-bold text-sm">Besoin d&apos;un devis ?</p>
                                <p className="text-xs text-emerald-100">Réponse en 2h - Gratuit</p>
                            </div>
                            <button
                                onClick={() => setShowOptions(true)}
                                className="bg-white text-emerald-600 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-all duration-300 shadow-lg flex items-center gap-2"
                            >
                                <FileText className="w-4 h-4" />
                                Obtenir
                            </button>
                        </>
                    ) : (
                        <div className="w-full text-center text-white font-semibold">
                            Choisissez une action
                        </div>
                    )}
                </div>
            </div>

            {/* Version Desktop - CTA Flottant coin droit */}
            <div className="hidden lg:block fixed bottom-8 right-8 z-50 space-y-3 animate-slide-up">
                {/* Bouton Devis */}
                <a
                    href="#contact"
                    className="group flex items-center gap-3 bg-white hover:bg-gray-50 text-emerald-600 font-bold px-6 py-4 rounded-full shadow-2xl border-2 border-emerald-600 transition-all duration-300 hover:scale-105"
                >
                    <FileText className="w-5 h-5" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">
                        Devis Gratuit
                    </span>
                </a>
            </div>
        </>
    )
}
