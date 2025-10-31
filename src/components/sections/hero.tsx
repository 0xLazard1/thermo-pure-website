'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import { Phone, FileText } from "lucide-react"

export const HeroSection = () => {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900">
            {/* Background Image Placeholder - REMPLACER PAR VRAIE IMAGE */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/95 to-green-900/95 z-0">
                {/* Placeholder pour image de drone en action */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <div className="text-center">
                        <div className="text-9xl mb-4">🚁</div>
                        <p className="text-xl font-semibold">Insérer photo/vidéo drone ici</p>
                        <p className="text-sm mt-2">(1920x1080px recommandé)</p>
                    </div>
                </div>
                {/* Overlay pour meilleure lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/50 to-transparent"></div>
            </div>

            {/* Contenu Principal */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
                {/* Badge Innovation */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6 animate-fade-in">
                    <span className="text-2xl">🚁</span>
                    <span className="text-white font-semibold">Nettoyage par Drone - Innovation 2024</span>
                </div>

                {/* Titre Principal */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Nettoyage de Façades
                    <br />
                    <span className="bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                        Sans Échafaudage
                    </span>
                </h1>

                {/* Sous-titre */}
                <p className="text-xl md:text-2xl text-green-100 mb-4 max-w-3xl mx-auto">
                    Technologie drone pour un nettoyage rapide, sûr et économique à Niort et région
                </p>

                {/* Points clés */}
                <div className="flex flex-wrap justify-center gap-6 mb-10 text-white">
                    <div className="flex items-center gap-2">
                        <span className="text-green-400 text-2xl">✓</span>
                        <span className="font-semibold">Intervention sous 48h</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-400 text-2xl">✓</span>
                        <span className="font-semibold">Économisez jusqu&apos;à 40%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-400 text-2xl">✓</span>
                        <span className="font-semibold">Sans risque ni gêne</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <a
                        href="#devis"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-green-900 bg-white hover:bg-green-50 rounded-full transition-all duration-300 shadow-2xl hover:shadow-green-400/50 hover:scale-105 transform"
                    >
                        <FileText className="w-6 h-6" />
                        Devis Gratuit - Réponse en 2h
                        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">GRATUIT</span>
                    </a>
                    <a
                        href="tel:+33123456789"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-green-600/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-green-900 rounded-full transition-all duration-300 hover:scale-105 transform"
                    >
                        <Phone className="w-6 h-6 animate-pulse" />
                        Appeler maintenant
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                        <span>5/5 sur 500+ avis</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-400 text-xl">🛡️</span>
                        <span>Assuré & Certifié</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-400 text-xl">📍</span>
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
                        <p className="text-white text-2xl mb-4">Vidéo du drone en action</p>
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
