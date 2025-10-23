// ❌ no "use client" here — this is a Server Component
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import BlogPostView from "./BlogPostView" // client component below

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        (p.category === post.category ||
          p.tags.some((t) => post.tags.includes(t)))
    )
    .slice(0, 3)

  return <BlogPostView post={post} relatedPosts={relatedPosts} />
}
