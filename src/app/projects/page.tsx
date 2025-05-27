import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProjects } from '@/lib/data/projects'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my latest web development projects and applications.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <Container className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <Heading as="h1" size="2xl" className="mb-4">
            Projects
          </Heading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, ranging from web applications 
            to open-source contributions.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects to show yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {project.featured && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground rounded-md text-xs font-medium">
                        Featured
                      </span>
                    )}
                    {project.status && (
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                        project.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : project.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                      }`}>
                        {project.status.replace('-', ' ')}
                      </span>
                    )}
                  </div>

                  <Heading as="h3" size="md" className="mb-2">
                    {project.title}
                  </Heading>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Link href={`/projects/${project.id}`}>
                      <Button variant="default" size="sm">
                        View Details
                      </Button>
                    </Link>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary text-sm"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}