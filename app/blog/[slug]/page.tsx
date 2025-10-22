"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { blogPosts } from "@/lib/blog-data"
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 rounded-xl overflow-hidden border border-slate-700/50"
        >
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-96 object-cover" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
            {post.content.split("\n\n").map((paragraph, index) => (
              <div key={index} className="mb-6 last:mb-0">
                {paragraph.startsWith("-") ? (
                  <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i} className="text-slate-300">
                        {item.replace(/^-\s*/, "")}
                      </li>
                    ))}
                  </ul>
                ) : paragraph.match(/^\d+\./) ? (
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i} className="text-slate-300">
                        {item.replace(/^\d+\.\s*/, "")}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-slate-300 leading-relaxed">{paragraph}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 pb-12 border-b border-slate-700/50"
        >
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg hover:border-emerald-500/50 transition-colors cursor-pointer"
              >
                <Tag className="w-4 h-4" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 pb-12 border-b border-slate-700/50"
        >
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Share this article:</span>
            <button className="p-2 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-emerald-500/50 transition-colors">
              <Share2 className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="group bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
                    <div className="relative h-40 overflow-hidden bg-slate-700/50">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-2">{relatedPost.readTime} min read</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
