import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - THERMO PURE',
  description: 'Politique de confidentialité et protection des données personnelles de THERMO PURE',
  robots: {
    index: false,
    follow: true,
  },
}

export default function PolitiqueConfidentialitePage() {
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
          Politique de Confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                THERMO PURE s’engage à protéger la confidentialité de vos données personnelles. Cette politique vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </div>
          </section>

          {/* 1. Responsable du traitement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du traitement des données</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <p className="mb-2"><strong>Raison sociale :</strong> THERMO PURE</p>
              <p className="mb-2"><strong>SIRET :</strong> 991 013 038 00013</p>
              <p className="mb-2"><strong>Adresse :</strong> 60 rue François Ier, 75008 Paris, France</p>
              <p className="mb-2"><strong>Email :</strong> <a href="mailto:contact@thermo-pure.com" className="text-sky-600 hover:text-sky-700">contact@thermo-pure.com</a></p>
              <p className="mb-2"><strong>Téléphone :</strong> <a href="tel:+33671558027" className="text-sky-600 hover:text-sky-700">06 71 55 80 27</a></p>
            </div>
          </section>

          {/* 2. Données collectées */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données personnelles collectées</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous collectons uniquement les données nécessaires pour répondre à vos demandes via notre formulaire de contact :
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span><strong>Nom et prénom</strong> : pour vous identifier et personnaliser notre réponse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span><strong>Adresse email</strong> : pour vous répondre par email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span><strong>Numéro de téléphone (optionnel)</strong> : pour vous contacter si nécessaire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span><strong>Sujet et message</strong> : pour comprendre votre demande</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Finalités */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vos données personnelles sont collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Assurer le suivi de votre demande</li>
              <li>Améliorer la qualité de nos services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Nous ne vendons ni ne louons vos données personnelles à des tiers.</strong>
            </p>
          </section>

          {/* 4. Base légale */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base légale du traitement</h2>
            <p className="text-gray-700 leading-relaxed">
              Le traitement de vos données personnelles repose sur :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mt-4">
              <li><strong>Votre consentement</strong> : en remplissant le formulaire de contact</li>
              <li><strong>L&apos;exécution d&apos;un contrat</strong> : pour établir un devis et réaliser une prestation</li>
              <li><strong>Notre intérêt légitime</strong> : pour améliorer nos services</li>
            </ul>
          </section>

          {/* 5. Destinataires */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Destinataires des données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vos données personnelles sont destinées uniquement à :
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span><strong>THERMO PURE</strong> : notre équipe pour traiter vos demandes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span><strong>Prestataires techniques</strong> : Resend (service d&apos;envoi d&apos;emails) et Hostinger (hébergement du site)</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Ces prestataires sont tenus de respecter la confidentialité de vos données et de les utiliser uniquement pour les finalités définies.
            </p>
          </section>

          {/* 6. Durée de conservation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données personnelles sont conservées pendant :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mt-4">
              <li><strong>3 ans maximum</strong> après votre dernier contact avec nous</li>
              <li>Les données nécessaires à la comptabilité sont conservées 10 ans conformément aux obligations légales</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              À l&apos;issue de cette période, vos données sont supprimées de manière sécurisée.
            </p>
          </section>

          {/* 7. Vos droits */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-lg p-6 shadow-sm border border-sky-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2 text-xl">→</span>
                  <div>
                    <strong className="text-gray-900">Droit d&apos;accès :</strong>
                    <span className="text-gray-700"> obtenir une copie de vos données</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2 text-xl">→</span>
                  <div>
                    <strong className="text-gray-900">Droit de rectification :</strong>
                    <span className="text-gray-700"> corriger vos données inexactes</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2 text-xl">→</span>
                  <div>
                    <strong className="text-gray-900">Droit à l&apos;effacement :</strong>
                    <span className="text-gray-700"> demander la suppression de vos données</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2 text-xl">→</span>
                  <div>
                    <strong className="text-gray-900">Droit d&apos;opposition :</strong>
                    <span className="text-gray-700"> vous opposer au traitement de vos données</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2 text-xl">→</span>
                  <div>
                    <strong className="text-gray-900">Droit à la limitation :</strong>
                    <span className="text-gray-700"> limiter le traitement de vos données</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2 text-xl">→</span>
                  <div>
                    <strong className="text-gray-900">Droit à la portabilité :</strong>
                    <span className="text-gray-700"> récupérer vos données dans un format structuré</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <p className="text-gray-800 font-semibold mb-3">Pour exercer vos droits, contactez-nous :</p>
              <ul className="space-y-2 text-gray-700">
                <li>📧 Par email : <a href="mailto:contact@thermo-pure.com" className="text-sky-600 hover:text-sky-700 font-medium">contact@thermo-pure.com</a></li>
                <li>📞 Par téléphone : <a href="tel:+33671558027" className="text-sky-600 hover:text-sky-700 font-medium">06 71 55 80 27</a></li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Nous nous engageons à répondre à votre demande dans un délai maximum d&apos;un mois.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              Vous avez également le droit d&apos;introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-medium">CNIL (Commission Nationale de l&apos;Informatique et des Libertés)</a>.
            </p>
          </section>

          {/* 8. Sécurité */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>L&apos;accès non autorisé</li>
              <li>La modification, divulgation ou destruction non autorisée</li>
              <li>La perte accidentelle</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Nos mesures de sécurité incluent :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mt-2">
              <li>Chiffrement SSL/TLS pour les transmissions de données</li>
              <li>Hébergement sécurisé chez Hostinger</li>
              <li>Accès limité aux données personnelles</li>
              <li>Sauvegardes régulières</li>
            </ul>
          </section>

          {/* 9. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site n&apos;utilise pas de cookies de tracking, publicitaires ou analytiques. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés (ex: cookies de session).
            </p>
          </section>

          {/* 10. Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications de la politique</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Nous contacter</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
            </p>
            <div className="bg-gradient-to-br from-sky-600 to-sky-500 text-white rounded-lg p-6 shadow-lg">
              <p className="font-semibold text-lg mb-4">THERMO PURE</p>
              <div className="space-y-2">
                <p>📧 Email : <a href="mailto:contact@thermo-pure.com" className="underline hover:text-sky-100">contact@thermo-pure.com</a></p>
                <p>📞 Téléphone : <a href="tel:+33671558027" className="underline hover:text-sky-100">06 71 55 80 27</a></p>
                <p>📍 Adresse : 60 rue François Ier, 75008 Paris, France</p>
              </div>
            </div>
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
