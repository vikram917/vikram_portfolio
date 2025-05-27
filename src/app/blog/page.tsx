import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts }  from '@/lib/data/blog-posts'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest thoughts on web development, programming, and technology.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Heading as="h1" size="2xl" className="mb-4">
            Blog
          </Heading>
          <p className="text-lg text-muted-foreground">
            Thoughts on web development, programming, and technology.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="p-6 hover:shadow-lg transition-shadow">
                <article>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span>•</span>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="group">
                    <Heading 
                      as="h2" 
                      size="lg" 
                      className="mb-3 group-hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Heading>
                  </Link>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:underline font-medium"
                    >
                      Read more →
                    </Link>
                    
                    {post.readingTime && (
                      <span className="text-sm text-muted-foreground">
                        {post.readingTime} min read
                      </span>
                    )}
                  </div>
                </article>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}