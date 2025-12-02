'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import { Phone, FileText } from "lucide-react"

export const HeroSection = () => {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{backgroundImage: 'url(/hero-bg.jpg)'}}
            >
                {/* Overlay pour meilleure lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-sky-800/30 to-transparent"></div>
            </div>

            {/* Contenu Principal */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
                {/* Badge Innovation */}
                <div className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-300/40 rounded-full px-6 py-2 mb-6 animate-fade-in">
                    <span className="text-2xl">💨</span>
                    <span className="text-white font-semibold">Nettoyage vapeur basse pression spécialisé en extérieur</span>
                </div>

                {/* Titre Principal */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Nettoyage de Toitures & Façades
                    <br />
                    <span className="bg-gradient-to-r from-sky-300 to-sky-200 bg-clip-text text-transparent">
                        à la vapeur basse pression
                    </span>
                </h1>

                {/* Sous-titre */}
                <p className="text-xl md:text-2xl text-sky-100 mb-4 max-w-3xl mx-auto">
                    Spécialiste du nettoyage extérieur doux et efficace dans toute la Nouvelle-Aquitaine : toitures, façades, terrasses…
                </p>


                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <a
                        href="#contact"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-sky-900 bg-white hover:bg-sky-50 rounded-full transition-all duration-300 shadow-2xl hover:shadow-sky-400/50 hover:scale-105 transform"
                    >
                        <FileText className="w-6 h-6" />
                        Devis Gratuit - Réponse en 2h
                        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">GRATUIT</span>
                    </a>
                    <a
                        href="tel:+33671558027"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-sky-600/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-sky-900 rounded-full transition-all duration-300 hover:scale-105 transform"
                    >
                        <Phone className="w-6 h-6 animate-pulse" />
                        Appeler maintenant
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-300 text-xl">⭐⭐⭐⭐⭐</span>
                        <span>5/5 sur 500+ avis</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-300 text-xl">🛡️</span>
                        <span>Assuré & Certifié</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-300 text-xl">📍</span>
                        <span>Deux-Sèvres & Régions voisines</span>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
                        <div className="w-1.5 h-3 bg-white/60 rounded-full mx-auto animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Placeholder Vidéo Modal (optionnel) */}
            {showVideo && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowVideo(false)}
                >
                    <div className="max-w-4xl w-full bg-gray-900 rounded-2xl p-8 text-center">
                        <p className="text-white text-2xl mb-4">Vidéo de nettoyage à la vapeur</p>
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-white/40">
                                <div className="text-6xl mb-2">🎥</div>
                                <p>Insérer vidéo YouTube/Vimeo ici</p>
                            </div>
                        </div>
                        <Button
                            onClick={() => setShowVideo(false)}
                            className="mt-6"
                            variant="outline"
                        >
                            Fermer
                        </Button>
                    </div>
                </div>
            )}
        </section>
    )
}
