'use client';
import { useState } from "react";
import { useMediaQuery } from '@/hooks/use-media-query'
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerHeader,
    DrawerTitle,
} from "../ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        setIsDrawerOpen(false);

        // Petit délai pour laisser le drawer se fermer avant de naviguer
        setTimeout(() => {
            if (href && href.startsWith('#')) {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 300);
    };

    return isDesktop
    ? <header className="bg-white border-b border-green-100 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-green-600">
                    Logo
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
                    THERMO PURE
                </div>
            </div>
            <nav className="flex space-x-8">
                <Link href="#presentation" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:scale-105">
                    Présentation
                </Link>
                <Link href="#examples" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:scale-105">
                    Exemples
                </Link>
                <Link href="#devis" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:scale-105">
                    Devis
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:scale-105">
                    Qui sommes-nous
                </Link>
                <Link href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:scale-105">
                    Témoignages
                </Link>
                <Link href="#faq" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:scale-105">
                    FAQ
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-200 hover:scale-105">
                    Contact
                </Link>
            </nav>
        </div>
    </header> 
    : <header className="bg-white border-b border-green-100 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center space-x-2">
                <div className="text-lg font-bold text-green-600">
                    Logo
                </div>
                <div className="text-lg font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
                    THERMO PURE
                </div>
            </div>
            <Drawer direction="right" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-green-700 hover:text-green-600 hover:bg-green-50">
                        <MenuIcon size={24} />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="h-full bg-white">
                    <DrawerHeader className="border-b border-green-100">
                        <DrawerTitle className="text-center text-xl font-bold text-green-700">Menu</DrawerTitle>
                    </DrawerHeader>
                    <nav className="p-6 flex flex-col space-y-4">
                        <Link href="#presentation" className="text-lg font-medium text-gray-700 hover:text-green-600 py-3 border-b border-green-100 transition-colors" onClick={handleLinkClick}>
                           Présentation
                        </Link>
                        <Link href="#examples" className="text-lg font-medium text-gray-700 hover:text-green-600 py-3 border-b border-green-100 transition-colors" onClick={handleLinkClick}>
                            Exemples
                        </Link>
                        <Link href="#devis" className="text-lg font-medium text-gray-700 hover:text-green-600 py-3 border-b border-green-100 transition-colors" onClick={handleLinkClick}>
                            Devis
                        </Link>
                        <Link href="#about" className="text-lg font-medium text-gray-700 hover:text-green-600 py-3 border-b border-green-100 transition-colors" onClick={handleLinkClick}>
                            Qui sommes-nous
                        </Link>
                        <Link href="#testimonials" className="text-lg font-medium text-gray-700 hover:text-green-600 py-3 border-b border-green-100 transition-colors" onClick={handleLinkClick}>
                            Témoignages
                        </Link>
                        <Link href="#faq" className="text-lg font-medium text-gray-700 hover:text-green-600 py-3 border-b border-green-100 transition-colors" onClick={handleLinkClick}>
                            FAQ
                        </Link>
                        <Link href="#contact" className="text-lg font-medium text-gray-700 hover:text-green-600 py-3 border-b border-green-100 transition-colors" onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </nav>
                </DrawerContent>
            </Drawer>
        </div>
    </header>
}