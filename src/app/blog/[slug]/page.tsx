import { getAllPosts, getPost } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { Metadata } from 'next'
import { MDXRenderer } from '@/components/mdx-renderer'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['André Filho'],
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="w-full max-w-sm sm:max-w-lg mx-auto flex flex-col bg-white rounded-xl shadow-[0_0_0_8px_rgba(255,255,255,0.2)] overflow-hidden min-h-[500px] max-h-[90vh]">
      <header className="relative flex-shrink-0 w-full py-6 px-4 bg-gradient-to-br from-primary via-primary-dark to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-2 left-6 w-16 h-16 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-2 right-8 w-12 h-12 bg-white/10 rounded-full blur-lg" />
        </div>
        <div className="relative flex flex-col items-center justify-center text-center">
          <h1 className="text-base sm:text-lg font-bold text-white drop-shadow-lg leading-tight max-w-full">
            {post.title}
          </h1>
          <h2 className="text-xs text-white/70 mt-2">
            {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
          </h2>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide p-5">
        {post.tags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-gray-100 text-card-muted px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <article className="prose prose-sm max-w-none text-card-muted font-dm-sans leading-relaxed prose-headings:text-card-text prose-strong:text-card-text prose-a:text-primary">
          <MDXRenderer source={post.content} />
        </article>
      </main>

      <nav className="flex-shrink-0 bg-white border-t border-gray-100 grid grid-cols-2">
        <Link
          href="/blog"
          className="py-3 text-center text-sm font-medium text-card-muted hover:text-card-text hover:bg-gray-50 transition-colors border-r border-gray-100"
        >
          ← BLOG
        </Link>
        <Link
          href="/"
          className="py-3 text-center text-sm font-medium text-card-muted hover:text-card-text hover:bg-gray-50 transition-colors"
        >
          HOME
        </Link>
      </nav>
    </div>
  )
}
