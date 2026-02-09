'use client'
import { Phone, FileText } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/nettoyage-facade-toiture-vapeur-thermo-pure.avif"
                    alt="Nettoyage de façade et toiture à la vapeur basse pression - THERMO PURE"
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                />
                {/* Overlay pour meilleure lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-sky-800/45 to-sky-900/20"></div>
            </div>

            {/* Contenu Principal */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
                {/* Titre Principal */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    <span className="block">Nettoyage de Toitures & Façades</span>
                    <span className="block bg-gradient-to-r from-sky-300 to-sky-200 bg-clip-text text-transparent">
                        à la vapeur basse pression
                    </span>
                </h1>

                {/* Sous-titre */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-sky-100 mb-4 max-w-3xl mx-auto">
                    Expert en nettoyage extérieur performant et respectueux des matériaux en Nouvelle-Aquitaine : toiture, façade, terrasse…
                </p>


                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
                    <a
                        href="#contact"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-bold text-sky-900 bg-white hover:bg-sky-50 rounded-full transition-all duration-300 shadow-2xl hover:shadow-sky-400/50 hover:scale-105 transform"
                    >
                        <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                        Devis Gratuit - Réponse en 2h
                        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">GRATUIT</span>
                    </a>
                    <a
                        href="tel:+33671558027"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-bold text-white bg-sky-600/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-sky-900 rounded-full transition-all duration-300 hover:scale-105 transform"
                    >
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse-gpu" />
                        06 71 55 80 27
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-white/80 text-sm">
                    <a
                        href="https://www.google.fr/maps/place/THERMO+PURE/@45.2765002,-2.6467083,7z/data=!3m1!4b1!4m6!3m5!1s0x5a601b9e7c64eb7:0xdb52701b873347d8!8m2!3d45.3069112!4d-0.0070925!16s%2Fg%2F11yr00_mfx?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="font-semibold text-white">5/5</span>
                        <span>Google</span>
                    </a>
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-300 text-xl">📍</span>
                        <span>Nouvelle-Aquitaine 79, 16, 17, 86</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-300 text-xl">🛡️</span>
                        <span>Assuré & Certifié</span>
                    </div>
                </div>

                {/* Scroll Indicator - Hidden on mobile to avoid conflicts with sticky CTA */}
                <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gpu">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
                        <div className="w-1.5 h-3 bg-white/60 rounded-full mx-auto animate-pulse-gpu"></div>
                    </div>
                </div>
            </div>

        </section>
    )
}
