'use client'
import { useState, useEffect } from 'react'
import { Button } from './button'
import { ChevronUp } from 'lucide-react'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 h-12 w-12 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 hover:shadow-xl transition-all duration-300 lg:bottom-28 lg:right-8"
                    size="icon"
                >
                    <ChevronUp size={20} />
                </Button>
            )}
        </>
    )
}