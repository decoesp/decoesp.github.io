import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Page {
  slug: string
  title: string
  description?: string
  content: string
}

export interface Experience {
  slug: string
  company: string
  role: string
  year: string
  skills: string[]
  order: number
  content: string
}

export interface Project {
  slug: string
  title: string
  description: string
  url?: string
  github?: string
  tags?: string[]
  featured?: boolean
  order: number
  content: string
}

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  content: string
}

function getMdxFiles(dir: string): string[] {
  const fullPath = path.join(contentDirectory, dir)
  if (!fs.existsSync(fullPath)) return []
  return fs.readdirSync(fullPath).filter((file) => file.endsWith('.mdx'))
}

function readMdxFile<T>(dir: string, filename: string): T & { slug: string; content: string } {
  const fullPath = path.join(contentDirectory, dir, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const slug = filename.replace(/\.mdx$/, '')
  return { ...data, slug, content } as T & { slug: string; content: string }
}

export function getAllPages(): Page[] {
  const files = getMdxFiles('pages')
  return files.map((file) => readMdxFile<Page>('pages', file))
}

export function getPage(slug: string): Page | undefined {
  try {
    return readMdxFile<Page>('pages', `${slug}.mdx`)
  } catch {
    return undefined
  }
}

export function getAllExperiences(): Experience[] {
  const files = getMdxFiles('experiences')
  return files
    .map((file) => readMdxFile<Experience>('experiences', file))
    .sort((a, b) => (b.order || 0) - (a.order || 0))
}

export function getAllProjects(): Project[] {
  const files = getMdxFiles('projects')
  return files
    .map((file) => readMdxFile<Project>('projects', file))
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

export function getAllPosts(): Post[] {
  const files = getMdxFiles('blog')
  return files
    .map((file) => readMdxFile<Post>('blog', file))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | undefined {
  try {
    return readMdxFile<Post>('blog', `${slug}.mdx`)
  } catch {
    return undefined
  }
}
