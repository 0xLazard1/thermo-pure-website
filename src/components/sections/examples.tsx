'use client'
import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from '@/components/ui/carousel'

const carouselImages = [
    {
        id: 1,
        src: "/nettoyage-toiture-avant-apres-niort.avif",
        alt: "Nettoyage de toiture avant/après - THERMO PURE Niort"
    },
    {
        id: 2,
        src: "/nettoyage-facade-pierre-deux-sevres.avif",
        alt: "Nettoyage de façade en pierre à la vapeur basse pression - Deux-Sèvres"
    },
    {
        id: 3,
        src: "/nettoyage-terrasse-exterieure-thermo-pure.avif",
        alt: "Résultat de nettoyage de terrasse extérieure - THERMO PURE"
    },
    {
        id: 4,
        src: "/demoussage-toiture-vapeur-nouvelle-aquitaine.avif",
        alt: "Démoussage de toiture à la vapeur - Nouvelle-Aquitaine"
    },
    {
        id: 5,
        src: "/nettoyage-mur-exterieur-niort.avif",
        alt: "Nettoyage professionnel de mur extérieur - THERMO PURE"
    },
    {
        id: 6,
        src: "/nettoyage-facade-commerciale-niort.avif",
        alt: "Nettoyage de façade commerciale à Niort - Vapeur basse pression"
    },
    {
        id: 7,
        src: "/renovation-surface-exterieure-vapeur.avif",
        alt: "Rénovation de surface extérieure par nettoyage vapeur - THERMO PURE"
    }
]

export const ExamplesSection = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    const onSelect = useCallback(() => {
        if (!api) return
        setCurrent(api.selectedScrollSnap())
    }, [api])

    useEffect(() => {
        if (!api) return
        onSelect()
        api.on('select', onSelect)
        return () => { api.off('select', onSelect) }
    }, [api, onSelect])


    return (
        <section id="examples" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative">
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"></div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-700 to-sky-600 bg-clip-text text-transparent mb-6">
                        Exemples de Nettoyage Toiture et Façade
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

                {/* Carousel Section */}
                <div className="relative max-w-4xl mx-auto px-12">
                    <Carousel
                        setApi={setApi}
                        opts={{ loop: true }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {carouselImages.map((image) => (
                                <CarouselItem key={image.id}>
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden">
                                        <div className="relative w-full bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden flex items-center justify-center p-3 sm:p-4 min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={800}
                                                height={600}
                                                loading="lazy"
                                                quality={85}
                                                className="w-full h-auto object-contain rounded-lg max-h-[250px] sm:max-h-[400px] md:max-h-[600px]"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="h-10 w-10 bg-sky-600 hover:bg-sky-700 text-white border-none shadow-lg" />
                        <CarouselNext className="h-10 w-10 bg-sky-600 hover:bg-sky-700 text-white border-none shadow-lg" />
                    </Carousel>

                    {/* Indicators */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 mb-8">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`rounded-full transition-all duration-300 ${
                                    index === current
                                        ? 'bg-sky-600 w-6 h-2.5 sm:w-8 sm:h-3'
                                        : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5 sm:w-3 sm:h-3'
                                }`}
                                aria-label={`Aller à l'image ${index + 1}`}
                            />
                        ))}
                    </div>
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
        </section>
    )
}
