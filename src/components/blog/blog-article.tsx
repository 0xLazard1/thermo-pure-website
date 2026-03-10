import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Image from "next/image"
import Link from "next/link"
import { BlogCta } from "./blog-cta"

interface BlogArticleProps {
  content: string
}

export const BlogArticle = ({ content }: BlogArticleProps) => {
  return (
    <article className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4 space-y-2">
              {children}
            </ol>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900">{children}</strong>
          ),
          a: ({ href, children }) => {
            const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
            if (isInternal) {
              return (
                <Link
                  href={href}
                  className="text-sky-600 hover:text-sky-700 underline"
                >
                  {children}
                </Link>
              )
            }
            return (
              <a
                href={href}
                className="text-sky-600 hover:text-sky-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          },
          img: ({ src, alt }) => (
            <span className="block my-6">
              <Image
                src={String(src || "")}
                alt={alt || ""}
                width={800}
                height={450}
                className="rounded-xl shadow-md w-full h-auto"
              />
            </span>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-sky-500 pl-4 italic text-gray-600 my-6">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
      <BlogCta />
    </article>
  )
}
