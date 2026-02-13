import Link from "next/link"
import Image from "next/image"

export const BlogHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.avif"
            alt="THERMO PURE"
            width={48}
            height={48}
            className="h-12 w-auto rounded-lg"
          />
          <span className="text-xl font-bold text-sky-700">THERMO PURE</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
          >
            ← Retour au site
          </Link>
        </div>
      </div>
    </header>
  )
}
