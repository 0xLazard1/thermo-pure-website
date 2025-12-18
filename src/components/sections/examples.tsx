'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const carouselImages = [
    {
        id: 1,
        src: "/Image_Nettoyage_1.avif",
        alt: "Nettoyage de toiture avant/après - THERMO PURE Niort"
    },
    {
        id: 2,
        src: "/Image_Nettoyage_2.avif",
        alt: "Nettoyage de façade en pierre à la vapeur basse pression - Deux-Sèvres"
    },
    {
        id: 3,
        src: "/Image_Nettoyage_3.avif",
        alt: "Résultat de nettoyage de terrasse extérieure - THERMO PURE"
    },
    {
        id: 4,
        src: "/Image_Nettoyage_4.avif",
        alt: "Démoussage de toiture à la vapeur - Nouvelle-Aquitaine"
    },
    {
        id: 5,
        src: "/Image_Nettoyage_5.avif",
        alt: "Nettoyage professionnel de mur extérieur - THERMO PURE"
    },
    {
        id: 6,
        src: "/Image_Nettoyage_6.avif",
        alt: "Nettoyage de façade commerciale à Niort - Vapeur basse pression"
    },
    {
        id: 7,
        src: "/Image_Nettoyage_7.avif",
        alt: "Rénovation de surface extérieure par nettoyage vapeur - THERMO PURE"
    }
]

export const ExamplesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    useEffect(() => {
        if (!autoPlay) return
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [autoPlay])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
        setAutoPlay(false)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
        setAutoPlay(false)
    }

    const currentImage = carouselImages[currentIndex]

    return (
        <section id="examples" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-700 to-sky-600 bg-clip-text text-transparent mb-6">
                        Notre Travail en Action
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Regardez notre démonstration de nettoyage vapeur basse pression en action.
                    </p>
                </div>

                {/* Video Section */}
                <div className="relative mb-16">
                    <div className="group bg-white rounded-2xl shadow-2xl overflow-hidden border border-sky-100 mb-8">
                        <div className="relative w-full bg-black rounded-2xl overflow-hidden">
                            <video
                                className="w-full h-auto"
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/video_presentation.webm" type="video/webm" />
                                Votre navigateur ne supporte pas les vidéos HTML5.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Text Section between Video and Carousel */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-700 to-sky-600 bg-clip-text text-transparent mb-6">
                        Découvrez nos réalisations
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Parcourez notre galerie de projets réalisés. Chaque intervention témoigne de notre expertise en nettoyage vapeur basse pression pour toitures, façades et terrasses dans toute la Nouvelle-Aquitaine.
                    </p>
                </div>

                {/* Carousel Section - Exemples */}
                <div className="relative">
                    {/* Main Image with Side Navigation Buttons */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4 mb-8">
                        {/* Main Image - Full Size with Enhanced Styling */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl order-2 md:order-2">
                            <div className="relative w-full bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden flex items-center justify-center p-3 sm:p-4 min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
                                <Image
                                    src={currentImage.src}
                                    alt={currentImage.alt}
                                    width={800}
                                    height={600}
                                    loading="lazy"
                                    quality={85}
                                    className="w-full h-auto object-contain rounded-lg max-h-[250px] sm:max-h-[400px] md:max-h-[600px]"
                                />
                            </div>
                        </div>

                        {/* Navigation Buttons - Side by side on mobile, vertical on desktop */}
                        <div className="flex md:hidden gap-4 order-3 mt-4 mb-4">
                            {/* Left Navigation Button - Mobile */}
                            <button
                                onClick={prevSlide}
                                className="p-2 sm:p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex-shrink-0"
                                aria-label="Image précédente"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            {/* Right Navigation Button - Mobile */}
                            <button
                                onClick={nextSlide}
                                className="p-2 sm:p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex-shrink-0"
                                aria-label="Image suivante"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>

                        {/* Left Navigation Button - Desktop */}
                        <button
                            onClick={prevSlide}
                            className="hidden md:block p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex-shrink-0 order-1"
                            aria-label="Image précédente"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Right Navigation Button - Desktop */}
                        <button
                            onClick={nextSlide}
                            className="hidden md:block p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex-shrink-0 order-3"
                            aria-label="Image suivante"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Indicators - Centered Below */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index)
                                    setAutoPlay(false)
                                }}
                                className={`rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-sky-600 w-6 h-2.5 sm:w-8 sm:h-3'
                                        : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5 sm:w-3 sm:h-3'
                                }`}
                                aria-label={`Aller à l'image ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                        >
                            Demander une démonstration
                            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}