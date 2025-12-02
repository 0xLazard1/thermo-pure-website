'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselImages = [
    {
        id: 1,
        src: "/Image_Nettoyage_1.jpg",
    },
    {
        id: 2,
        src: "/Image_Nettoyage_2.jpg",
    },
    {
        id: 3,
        src: "/Image_Nettoyage_3.jpg",
    },
    {
        id: 4,
        src: "/Image_Nettoyage_4.jpg",
    },
    {
        id: 5,
        src: "/Image_Nettoyage_5.jpg",
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
                                poster="/test.mp4"
                            >
                                <source src="/test.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas les vidéos HTML5.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Carousel Section - Exemples */}
                <div className="relative">
                    {/* Main Image - Full Size with Enhanced Styling */}
                    <div className="flex justify-center mb-8">
                        <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-sky-200 hover:border-sky-400 transition-all duration-300 w-full max-w-4xl">
                            <div className="relative w-full bg-gray-100 overflow-hidden h-96 flex items-center justify-center">
                                <img
                                    src={currentImage.src}
                                    alt={`Exemple ${currentIndex + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-8 mb-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            aria-label="Image précédente"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Indicators */}
                        <div className="flex gap-3">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index)
                                        setAutoPlay(false)
                                    }}
                                    className={`rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-sky-600 w-8 h-3'
                                            : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                                    }`}
                                    aria-label={`Aller à l'image ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            aria-label="Image suivante"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                        >
                            Demander une démonstration
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}