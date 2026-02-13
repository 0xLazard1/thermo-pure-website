import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { BlogArticle } from "@/components/blog/blog-article"
import { getAllSlugs, getPostBySlug } from "@/lib/blog"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Article non trouvé - THERMO PURE" }
  }

  return {
    title: `${post.title} - THERMO PURE`,
    description: post.description,
    alternates: {
      canonical: `https://thermo-pure.com/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    keywords: post.tags || [],
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: `https://thermo-pure.com/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      siteName: "THERMO PURE",
      images: post.thumbnail
        ? [`https://thermo-pure.com${post.thumbnail}`]
        : ["https://thermo-pure.com/logo.webp"],
      publishedTime: post.date,
      authors: [post.author || "THERMO PURE"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.thumbnail
        ? [`https://thermo-pure.com${post.thumbnail}`]
        : ["https://thermo-pure.com/logo.webp"],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "THERMO PURE",
      url: "https://thermo-pure.com",
    },
    publisher: {
      "@type": "Organization",
      name: "THERMO PURE",
      logo: {
        "@type": "ImageObject",
        url: "https://thermo-pure.com/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thermo-pure.com/blog/${post.slug}`,
    },
    ...(post.thumbnail && {
      image: `https://thermo-pure.com${post.thumbnail}`,
    }),
  }

  const breadcrumbSchema = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://thermo-pure.com/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-sky-600">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-sky-600">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>

      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-500">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>par {post.author || "THERMO PURE"}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-sky-50 text-sky-700 border-sky-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      {/* Hero image */}
      {post.thumbnail && (
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
          <Image
            src={post.thumbnail}
            alt={post.thumbnailAlt || post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      {/* Article body */}
      <BlogArticle content={post.content} />
    </>
  )
}
