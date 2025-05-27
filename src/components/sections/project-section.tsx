import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data/projects';

interface ProjectsSectionProps {
  className?: string;
  limit?: number;
}

export function ProjectsSection({ className, limit = 3 }: ProjectsSectionProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className={cn('py-16 md:py-24', className)}>
      <Container>
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-2">
            Portfolio
          </h2>
          <Heading as="h2" size="h2" className="mb-4">
            Featured Projects
          </Heading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work. Each project represents challenges I've overcome
            and the technologies I've mastered along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">
                  <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                    {project.title}
                  </Link>
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-full bg-muted">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-muted">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/projects/${project.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {limit && projects.length > limit && (
          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}