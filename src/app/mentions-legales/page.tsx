import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mentions Légales - THERMO PURE | Nettoyage Façades & Toitures Niort',
  description: 'Mentions légales de THERMO PURE, spécialiste du nettoyage de façades et toitures à la vapeur basse pression à Niort (79). SIRET: 991 013 038 00013',
  alternates: {
    canonical: 'https://thermo-pure.com/mentions-legales',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.avif" alt="THERMO PURE" width={48} height={48} className="h-12 w-auto rounded-lg" />
            <span className="text-xl font-bold text-sky-700">THERMO PURE</span>
          </Link>
          <Link
            href="/"
            className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
          >
            ← Retour au site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Mentions Légales
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* 1. Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <p className="mb-2"><strong>Raison sociale :</strong> THERMO PURE</p>
              <p className="mb-2"><strong>Forme juridique :</strong> Entreprise Individuelle</p>
              <p className="mb-2"><strong>SIRET :</strong> 991 013 038 00013</p>
              <p className="mb-2"><strong>Siège social :</strong> 60 rue François Ier, 75008 Paris, France</p>
              <p className="mb-2"><strong>Téléphone :</strong> <a href="tel:+33671558027" className="text-sky-600 hover:text-sky-700">06 71 55 80 27</a></p>
              <p className="mb-2"><strong>Email :</strong> <a href="mailto:contact@thermo-pure.com" className="text-sky-600 hover:text-sky-700">contact@thermo-pure.com</a></p>
              <p className="mb-2"><strong>Directeur de la publication :</strong> Gérant de THERMO PURE</p>
            </div>
          </section>

          {/* 2. Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement du site</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <p className="mb-2"><strong>Hébergeur :</strong> Hostinger International Ltd.</p>
              <p className="mb-2"><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
              <p className="mb-2"><strong>Site web :</strong> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">https://www.hostinger.fr</a></p>
            </div>
          </section>

          {/* 3. Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logo, charte graphique, etc.) est la propriété exclusive de THERMO PURE, sauf mention contraire.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l&apos;accord écrit préalable de THERMO PURE.
            </p>
          </section>

          {/* 4. Données personnelles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Données personnelles</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Pour exercer ces droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
              <li>Par email : <a href="mailto:contact@thermo-pure.com" className="text-sky-600 hover:text-sky-700">contact@thermo-pure.com</a></li>
              <li>Par téléphone : <a href="tel:+33671558027" className="text-sky-600 hover:text-sky-700">06 71 55 80 27</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Pour plus d&apos;informations, consultez notre <Link href="/politique-confidentialite" className="text-sky-600 hover:text-sky-700 font-medium">Politique de confidentialité</Link>.
            </p>
          </section>

          {/* 5. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site n&apos;utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          {/* 6. Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation de responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              THERMO PURE s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, THERMO PURE ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              THERMO PURE ne pourra être tenue responsable des dommages directs ou indirects qui pourraient résulter de l&apos;accès au site ou de l&apos;utilisation du site et de ses informations.
            </p>
          </section>

          {/* 7. Droit applicable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Droit applicable et juridiction</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d&apos;accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
            </p>
          </section>

          {/* Date de mise à jour */}
          <section className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">
              <strong>Dernière mise à jour :</strong> Décembre 2025
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} THERMO PURE - Tous droits réservés
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
