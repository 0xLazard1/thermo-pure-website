import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.avif"
                alt="THERMO PURE Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                THERMO PURE
              </h3>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed mb-4">
              Spécialistes du nettoyage de façades, murs et toitures. Service
              professionnel et respectueux de l&apos;environnement.
            </p>
            <div className="flex space-x-4">
              <Link
                href="mailto:contact@thermo-pure.com"
                className="hover:text-emerald-300 transition-all duration-300 hover:scale-110 transform"
              >
                <Mail size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/people/Thermopure/61584787320006/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-all duration-300 hover:scale-110 transform"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/thermo_pure"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-all duration-300 hover:scale-110 transform"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
                          </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#presentation"
                  className="text-emerald-100 hover:text-emerald-300 transition-colors"
                >
                  Présentation
                </Link>
              </li>
              <li>
                <Link
                  href="#examples"
                  className="text-emerald-100 hover:text-emerald-300 transition-colors"
                >
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-emerald-100 hover:text-emerald-300 transition-colors"
                >
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-emerald-100 hover:text-emerald-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-emerald-100 hover:text-emerald-300 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Informations légales */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Informations légales
            </h3>
            <div className="text-sm text-emerald-100 space-y-1">
              <p className="font-semibold text-white">THERMO PURE</p>
              <p>SIRET : 991 013 038 00013</p>
              <p>RCS Paris 991 013 038</p>
              <p>TVA : FR87991013038</p>
              <p className="pt-2">
                <Link
                  href="/mentions-legales"
                  className="hover:text-emerald-300 transition-colors underline"
                >
                  Mentions légales
                </Link>
              </p>
              <p>
                <Link
                  href="/politique-confidentialite"
                  className="hover:text-emerald-300 transition-colors underline"
                >
                  Politique de confidentialité
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-emerald-700/50 text-center text-sm text-emerald-100">
          <p>© {new Date().getFullYear()} THERMO PURE - Tous droits réservés</p>
          <p className="mt-2 text-xs">
            Nettoyage courant des bâtiments - Code NAF 81.21Z
          </p>
        </div>
      </div>
    </footer>
  );
};
