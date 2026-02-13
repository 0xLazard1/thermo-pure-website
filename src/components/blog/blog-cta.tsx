import Link from "next/link"

export const BlogCta = () => {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl border border-sky-100 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Besoin d&apos;un nettoyage professionnel ?
      </h3>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
        THERMO PURE intervient dans toute la Nouvelle-Aquitaine pour le
        nettoyage de vos toitures, façades et terrasses à la vapeur basse
        pression.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/#contact"
          className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
        >
          Demander un devis gratuit
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
        <Link
          href="/#examples"
          className="inline-flex items-center px-6 py-3 text-base font-semibold text-sky-600 border-2 border-sky-600 hover:bg-sky-50 rounded-full transition-all duration-300"
        >
          Voir nos réalisations
        </Link>
      </div>
    </div>
  )
}
