import { getAllPages, getAllExperiences, getAllProjects, getAllPosts } from '@/lib/mdx'
import { Card } from '@/components/card'

export default function Home() {
  const pages = getAllPages()
  const aboutPage = pages.find((page) => page.slug === 'sobre')

  const experiences = getAllExperiences()
  const projects = getAllProjects().filter((p) => p.featured)
  const recentPosts = getAllPosts().slice(0, 5)

  return (
    <Card
      aboutContent={aboutPage?.content}
      experiences={experiences}
      projects={projects}
      posts={recentPosts}
    />
  )
}
