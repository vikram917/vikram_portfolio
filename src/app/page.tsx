// // app/page.tsx

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Container } from '@/components/ui/container';
// import { Button } from '@/components/ui/button';
// import { Heading } from '@/components/ui/heading';
// import { HeroSection } from '@/components/sections/hero-section';
// import { AboutSection } from '@/components/sections/about-section';
// import { getFeaturedProjects } from '@/lib/data/projects';
// import { getFeaturedPosts } from '@/lib/data/blog-posts';
// import { siteConfig } from '@/config/site';
// import { ProjectsSection } from '@/components/sections/project-section';
// import { ContactSection } from '@/components/sections/contacts-section';

// export const metadata = {
//   title: siteConfig.name,
//   description: siteConfig.description,
//   keywords: siteConfig.keywords,
// };

// export default function HomePage() {
//   // Get featured projects and posts
//   const featuredProjects = getFeaturedProjects();
//   const featuredPosts = getFeaturedPosts();

//   return (
//     <main className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Featured Projects Section */}
//       <section className="py-16 md:py-24 bg-background" id="featured-projects">
//         <Container>
//           <div className="grid grid-cols-1 gap-8">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//               <div>
//                 <Heading level="h2" className="text-3xl md:text-4xl font-bold">
//                   Featured Projects
//                 </Heading>
//                 <p className="mt-2 text-muted-foreground max-w-2xl">
//                   Explore some of my recent work that showcases my skills and expertise.
//                 </p>
//               </div>
//               <Link href="/projects">
//                 <Button variant="outline">View All Projects</Button>
//               </Link>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
//               <ProjectsSection projects={featuredProjects.slice(0, 3)} />
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* About Section */}
//       <AboutSection />

//       {/* Blog Section */}
//       <section className="py-16 md:py-24 bg-background" id="blog">
//         <Container>
//           <div className="grid grid-cols-1 gap-8">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//               <div>
//                 <Heading level="h2" className="text-3xl md:text-4xl font-bold">
//                   From the Blog
//                 </Heading>
//                 <p className="mt-2 text-muted-foreground max-w-2xl">
//                   Thoughts, ideas, and insights about web development and design.
//                 </p>
//               </div>
//               <Link href="/blog">
//                 <Button variant="outline">Read All Posts</Button>
//               </Link>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//               {featuredPosts.slice(0, 3).map((post) => (
//                 <article key={post.id} className="flex flex-col h-full overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-card/80">
//                   <div className="relative h-48 w-full overflow-hidden">
//                     <Image
//                       src={post.coverImage}
//                       alt={post.title}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       priority={false}
//                     />
//                   </div>
//                   <div className="flex flex-col flex-1 p-6">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
//                         {post.category}
//                       </span>
//                       <span className="text-xs text-muted-foreground">
//                         {post.readingTime}
//                       </span>
//                     </div>
//                     <Link href={`/blog/${post.slug}`}>
//                       <h3 className="text-xl font-semibold hover:underline">{post.title}</h3>
//                     </Link>
//                     <p className="mt-2 text-muted-foreground line-clamp-2">
//                       {post.excerpt}
//                     </p>
//                     <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
//                       <span className="text-sm text-muted-foreground">
//                         {new Date(post.publishedAt).toLocaleDateString('en-US', {
//                           month: 'short',
//                           day: 'numeric',
//                           year: 'numeric',
//                         })}
//                       </span>
//                       <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
//                         Read more →
//                       </Link>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Contact Section */}
//       <ContactSection />
//     </main>
//   );
// }

// app/page.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { getFeaturedProjects } from '@/lib/data/projects';
import { getFeaturedPosts } from '@/lib/data/blog-posts';
import { siteConfig } from '@/config/site';
import { ProjectsSection } from '@/components/sections/project-section';
import { ContactSection } from '@/components/sections/contacts-section';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function HomePage() {
  // Get featured projects and posts
  const featuredProjects = getFeaturedProjects();
  const featuredPosts = getFeaturedPosts();

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section - Using ProjectsSection component directly */}
      <ProjectsSection limit={3} />

      {/* About Section */}
      <AboutSection />

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-background" id="blog">
        <Container>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-2">
              Writing
            </h2>
            <Heading as="h2" size="h2" className="mb-4">
              From the Blog
            </Heading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts, ideas, and insights about web development and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="flex flex-col h-full overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-card/80 group hover:border-primary/50">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-muted-foreground line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {featuredPosts.length > 3 && (
            <div className="flex justify-center mt-12">
              <Button asChild size="lg">
                <Link href="/blog">
                  Read All Posts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}