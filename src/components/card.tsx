'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { cn } from '@/lib/utils'
import type { Experience, Project, Post } from '@/lib/mdx'

type Section = 'about' | 'experience' | 'projects' | 'blog' | 'freela' | 'contact'

interface CardProps {
  aboutContent?: string
  experiences: Experience[]
  projects: Project[]
  posts: Post[]
}

const SECTIONS: { id: Section; label: string; shortLabel: string }[] = [
  { id: 'about', label: 'SOBRE', shortLabel: 'Sobre' },
  { id: 'experience', label: 'EXPERIÊNCIA', shortLabel: 'Exp.' },
  { id: 'projects', label: 'PROJETOS', shortLabel: 'Proj.' },
  { id: 'blog', label: 'BLOG', shortLabel: 'Blog' },
  { id: 'freela', label: 'TRABALHOS', shortLabel: 'Trab.' },
  { id: 'contact', label: 'CONTATO', shortLabel: 'Cont.' },
]

export function Card({
  aboutContent,
  experiences,
  projects,
  posts,
}: CardProps) {
  const [activeSection, setActiveSection] = useState<Section>('about')

  const isCompact = activeSection !== 'about'

  return (
    <div className="w-full max-w-sm sm:max-w-lg flex flex-col bg-white rounded-xl shadow-[0_0_0_8px_rgba(255,255,255,0.2)] overflow-hidden h-[520px] sm:h-[580px]">
      <header
        className={cn(
          'relative flex-shrink-0 w-full transition-all duration-300',
          isCompact ? 'h-20' : 'h-48 sm:h-52'
        )}
      >
        <div
          className={cn(
            'absolute left-0 w-full bg-cover bg-center blur-[30px] scale-110 transition-all duration-500',
            isCompact ? 'h-24' : 'h-40'
          )}
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/originals/09/23/8b/09238b9751842690254d07bf36b432b3.jpg')",
          }}
        />

        <Image
          src="https://user-images.githubusercontent.com/20960544/156263022-6bbfa564-bd2a-49b5-bfe4-e282870fc665.gif"
          alt="André Filho"
          width={100}
          height={100}
          unoptimized
          className={cn(
            'absolute rounded-full shadow-lg object-cover transition-all duration-300',
            isCompact
              ? 'w-12 h-12 left-5 bottom-2'
              : 'w-20 h-20 sm:w-24 sm:h-24 left-1/2 -translate-x-1/2 bottom-8 sm:bottom-10'
          )}
        />

        <h1
          className={cn(
            'absolute font-bold text-card-text whitespace-nowrap transition-all duration-300',
            isCompact
              ? 'text-lg left-20 bottom-5'
              : 'text-xl sm:text-2xl left-1/2 -translate-x-1/2 bottom-1'
          )}
        >
          André Filho
        </h1>

        <h2
          className={cn(
            'absolute font-medium text-card-muted uppercase tracking-wider transition-all duration-300',
            isCompact
              ? 'text-[10px] left-20 bottom-2'
              : 'text-xs left-1/2 -translate-x-1/2 -bottom-4 opacity-0'
          )}
        >
          Software Engineer
        </h2>
      </header>

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <section
            className={cn(
              'animate-slide-up',
              activeSection === 'about' ? 'block' : 'hidden'
            )}
          >
            <div className="p-5">
              <h3 className="font-bold text-sm mb-2 text-card-text">SOBRE</h3>
              <p className="text-sm leading-relaxed text-card-muted font-dm-sans">
                {aboutContent ||
                  'Bacharel em Ciência da computação, com experiência voltada para o front-end e cloud, estudos aplicados em web, mobile e programação funcional, participando atualmente da comunidade Funcional@ssa.'}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 px-5 pb-6">
              <a
                href="https://www.linkedin.com/in/decoesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://github.com/decoesp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </section>

          <section
            className={cn(
              'animate-slide-up',
              activeSection === 'experience' ? 'block' : 'hidden'
            )}
          >
            <div className="p-5">
              <h3 className="font-bold text-sm mb-4 text-card-text">EXPERIÊNCIA</h3>
              {experiences.length > 0 ? (
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <div key={exp.slug} className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                      <span className="text-xs text-card-muted">{exp.year}</span>
                      <h4 className="font-medium text-sm mt-1">
                        {exp.role} na{' '}
                        <span className="text-primary font-semibold">{exp.company}</span>
                      </h4>
                      <p className="text-xs text-card-muted mt-2 leading-relaxed font-dm-sans">
                        {exp.content}
                      </p>
                      <div className="mt-2">
                        <span className="text-xs text-primary font-medium">Competências:</span>
                        <p className="text-xs text-card-muted mt-1">
                          {exp.skills.join(' · ')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-card-muted">Nenhuma experiência cadastrada.</p>
              )}
            </div>
          </section>

          <section
            className={cn(
              'animate-slide-up',
              activeSection === 'projects' ? 'block' : 'hidden'
            )}
          >
            <div className="p-5">
              <h3 className="font-bold text-sm mb-4 text-card-text">PROJETOS</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.slug} className="pb-4 border-b border-gray-100 last:border-0">
                    <h4 className="font-semibold text-sm text-card-text">{project.title}</h4>
                    <p className="text-xs text-card-muted mt-1 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-3 mt-2">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          Ver projeto
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                    {project.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-gray-100 text-card-muted px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/decoesp"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 mt-2 text-sm text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                Ver mais no GitHub →
              </a>
            </div>
          </section>

          <section
            className={cn(
              'animate-slide-up',
              activeSection === 'blog' ? 'block' : 'hidden'
            )}
          >
            <div className="p-5">
              <h3 className="font-bold text-sm mb-4 text-card-text">BLOG</h3>
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
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-card-muted">Em breve novos posts...</p>
              )}
            </div>
          </section>

          <section
            className={cn(
              'animate-slide-up',
              activeSection === 'freela' ? 'block' : 'hidden'
            )}
          >
            <div className="p-5">
              <h3 className="font-bold text-sm mb-4 text-card-text">TRABALHOS</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-medium text-sm">Desenvolvimento do site da Carbone</h4>
                  <a
                    href="https://carbonecomercio.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline mt-1 inline-block"
                  >
                    carbonecomercio.com.br
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Desenvolvimento do site da Grana Preta</h4>
                  <a
                    href="https://granapreta.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline mt-1 inline-block"
                  >
                    pretagrana.site
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            className={cn(
              'animate-slide-up',
              activeSection === 'contact' ? 'block' : 'hidden'
            )}
          >
            <div className="p-5">
              <h3 className="font-bold text-sm mb-4 text-card-text">CONTATO</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://img.icons8.com/bubbles/50/000000/phone.png"
                    alt="Telefone"
                    width={40}
                    height={40}
                  />
                  <span className="text-sm text-card-muted font-dm-sans">
                    (71) 99385-1873
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="https://img.icons8.com/bubbles/50/000000/important-mail.png"
                    alt="Email"
                    width={40}
                    height={40}
                  />
                  <a
                    href="mailto:decoesp@gmail.com"
                    className="text-sm text-card-muted font-dm-sans hover:text-primary transition-colors"
                  >
                    decoesp@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <nav className="flex-shrink-0 bg-white border-t border-gray-100 sticky bottom-0">
          <div className="grid grid-cols-6 w-full">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  'py-3 px-1 text-[10px] sm:text-xs font-medium transition-all duration-200 border-b-2 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-inset',
                  activeSection === section.id
                    ? 'text-card-text border-primary-light bg-gradient-to-t from-indigo-50 to-transparent'
                    : 'text-card-muted border-transparent hover:text-card-text hover:bg-gray-50'
                )}
              >
                <span className="hidden sm:inline">{section.label}</span>
                <span className="sm:hidden">{section.shortLabel}</span>
              </button>
            ))}
          </div>
        </nav>
      </main>
    </div>
  )
}
