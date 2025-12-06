import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos sobre desenvolvimento, carreira e tecnologia',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col bg-white rounded-xl shadow-[0_0_0_8px_rgba(255,255,255,0.2)] overflow-hidden min-h-[500px]">
      <header className="relative flex-shrink-0 w-full h-28 bg-gradient-to-br from-primary via-primary-dark to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-8 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-2 right-12 w-16 h-16 bg-white/10 rounded-full blur-lg" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg">
            Blog
          </h1>
          <h2 className="text-xs text-white/80 uppercase tracking-widest mt-1">
            Artigos e Reflexões
          </h2>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide p-5">
        <h3 className="font-bold text-sm mb-4 text-card-text">POSTS</h3>
        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug} className="pb-4 border-b border-gray-100 last:border-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-sm text-card-text hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
                <span className="block text-[11px] text-gray-400 mt-1">
                  {format(new Date(post.date), "d 'de' MMMM, yyyy", {
                    locale: ptBR,
                  })}
                </span>
                <p className="text-xs text-card-muted mt-1 leading-relaxed">
                  {post.description}
                </p>
                {post.tags && (
                  <div className="flex flex-wrap gap-1 mt-2">
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
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-card-muted">Em breve novos posts...</p>
        )}
      </main>

      <nav className="flex-shrink-0 bg-white border-t border-gray-100">
        <Link
          href="/"
          className="block w-full py-3 text-center text-sm font-medium text-card-muted hover:text-card-text hover:bg-gray-50 transition-colors"
        >
          ← VOLTAR
        </Link>
      </nav>
    </div>
  )
}
