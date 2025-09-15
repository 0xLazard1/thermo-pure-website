'use client';
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

    return isDesktop
    ? <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-blue-600">
                    Logo
                </div>
                <div className="text-2xl font-bold text-gray-800">
                    THERMO PURE
                </div>
            </div>
            <nav className="flex space-x-8">
                <Link href="#presentation" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    Présentation
                </Link>
                <Link href="#examples" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    Exemples
                </Link>
                <Link href="#devis" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    Devis
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    Qui sommes-nous 
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    Contact
                </Link>
            </nav>
        </div>
    </header> 
    : <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center space-x-2">
                <div className="text-lg font-bold text-blue-600">
                    Logo
                </div>
                <div className="text-lg font-bold text-gray-800">
                    THERMO PURE
                </div>
            </div>
            <Drawer direction="right">
                <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-700">
                        <MenuIcon size={24} />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="h-full">
                    <DrawerHeader className="border-b">
                        <DrawerTitle className="text-center text-xl font-bold">Menu</DrawerTitle>
                    </DrawerHeader>
                    <nav className="p-6 flex flex-col space-y-4">
                        <Link href="#presentation" className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                           Présentation
                        </Link>
                        <Link href="#examples" className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                            Exemples
                        </Link>
                        <Link href="#devis" className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                            Devis
                        </Link>
                        <Link href="#about" className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                            Qui sommes-nous 
                        </Link>
                        <Link href="#contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2 border-b border-gray-200">
                            Contact
                        </Link>
                    </nav>
                </DrawerContent>
            </Drawer>
        </div>
    </header>
}