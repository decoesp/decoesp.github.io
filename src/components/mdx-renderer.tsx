import { MDXRemote } from 'next-mdx-remote/rsc'

interface MDXRendererProps {
  source: string
}

export function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <MDXRemote source={source} />
  )
}
