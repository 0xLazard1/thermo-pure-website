import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {post.thumbnail && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.thumbnailAlt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          <time className="text-sm text-gray-500" dateTime={post.date}>
            {formattedDate}
          </time>
          <CardTitle className="text-lg text-gray-900 line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3 text-gray-600">
            {post.description}
          </CardDescription>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag) => (
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
        </CardContent>
      </Card>
    </Link>
  )
}
