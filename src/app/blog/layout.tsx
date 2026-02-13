import { BlogHeader } from "@/components/blog/blog-header"
import { Footer } from "@/components/components/footer"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <BlogHeader />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 md:py-16 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}
