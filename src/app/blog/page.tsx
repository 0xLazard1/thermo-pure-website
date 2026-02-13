import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"

export const metadata: Metadata = {
  title: "Blog - THERMO PURE | Conseils Nettoyage Toiture & Façade",
  description:
    "Découvrez nos articles et conseils sur le nettoyage de toitures, façades et terrasses. Astuces, techniques et actualités par THERMO PURE à Niort (79).",
  alternates: {
    canonical: "https://thermo-pure.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://thermo-pure.com/blog",
    title: "Blog - THERMO PURE | Conseils Nettoyage Toiture & Façade",
    description:
      "Articles et conseils sur le nettoyage de toitures, façades et terrasses par THERMO PURE.",
    siteName: "THERMO PURE",
    images: ["https://thermo-pure.com/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - THERMO PURE | Conseils Nettoyage Toiture & Façade",
    description:
      "Articles et conseils sur le nettoyage de toitures, façades et terrasses par THERMO PURE.",
    images: ["https://thermo-pure.com/logo.webp"],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://thermo-pure.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://thermo-pure.com/blog",
              },
            ],
          }),
        }}
      />
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-700 to-sky-600 bg-clip-text text-transparent mb-4">
          Nos articles & conseils
        </h1>
        <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto">
          Nettoyage de toitures, façades et terrasses en Nouvelle-Aquitaine.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          Aucun article pour le moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  )
}
