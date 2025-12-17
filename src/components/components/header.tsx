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
import Image from "next/image";
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
    ? <header className="bg-white border-b border-emerald-100 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
                <Image src="/logo.jpg" alt="THERMO PURE Logo" width={96} height={96} className="h-24 w-auto" priority />
            </div>
            <nav className="flex space-x-8">
                <Link href="#presentation" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105">
                    Présentation
                </Link>
                <Link href="#examples" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105">
                    Exemples
                </Link>
                <Link href="#devis" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105">
                    Devis
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105">
                    Qui sommes-nous
                </Link>
                <Link href="#faq" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105">
                    FAQ
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 hover:scale-105">
                    Contact
                </Link>
            </nav>
        </div>
    </header> 
    : <header className="bg-white border-b border-emerald-100 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center space-x-2">
                <Image src="/logo.jpg" alt="THERMO PURE Logo" width={64} height={64} className="h-16 w-auto" priority />
            </div>
            <Drawer direction="right" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-emerald-700 hover:text-emerald-600 hover:bg-emerald-50">
                        <MenuIcon size={24} />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="h-full bg-white">
                    <DrawerHeader className="border-b border-emerald-100">
                        <DrawerTitle className="text-center text-xl font-bold text-emerald-700">Menu</DrawerTitle>
                    </DrawerHeader>
                    <nav className="p-6 flex flex-col space-y-4">
                        <Link href="#presentation" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-3 border-b border-emerald-100 transition-colors" onClick={handleLinkClick}>
                           Présentation
                        </Link>
                        <Link href="#examples" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-3 border-b border-emerald-100 transition-colors" onClick={handleLinkClick}>
                            Exemples
                        </Link>
                        <Link href="#devis" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-3 border-b border-emerald-100 transition-colors" onClick={handleLinkClick}>
                            Devis
                        </Link>
                        <Link href="#about" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-3 border-b border-emerald-100 transition-colors" onClick={handleLinkClick}>
                            Qui sommes-nous
                        </Link>
                        <Link href="#faq" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-3 border-b border-emerald-100 transition-colors" onClick={handleLinkClick}>
                            FAQ
                        </Link>
                        <Link href="#contact" className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-3 border-b border-emerald-100 transition-colors" onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </nav>
                </DrawerContent>
            </Drawer>
        </div>
    </header>
}