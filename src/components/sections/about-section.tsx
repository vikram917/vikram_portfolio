import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  const skills = [
    'React.js', 'Next.js', 'TypeScript', 'Node.js', 
    'Tailwind CSS', 'UI/UX Design', 'RESTful APIs', 'Git'
  ];

  return (
    <section id="about" className={cn('py-16 md:py-24 bg-muted/50', className)}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 -rotate-6 transform" />
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/about-me.jpg"
                alt="About Me"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm uppercase tracking-widest text-primary font-medium">
                About Me
              </h2>
              <Heading as="h2" size="h2">
                Passionate Web Developer With 5+ Years Experience
              </Heading>
            </div>
            
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p>
                I'm a web developer and designer with a passion for creating beautiful, 
                functional, and user-centered digital experiences. I am always looking to 
                learn new technologies and stay on top of the latest trends.
              </p>
              <p>
                With 5+ years of experience in the field, I am proficient in creating 
                responsive websites and applications using modern technologies and best practices. 
                I focus on writing clean, optimized code and creating intuitive user experiences.
              </p>
            </div>
            
            <div className="mt-2">
              <h3 className="font-medium mb-3">Skills & Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm bg-background border border-border rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4">
              <Button asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}