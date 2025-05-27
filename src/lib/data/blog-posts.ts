// lib/data/blog-posts.ts

import { Post } from '@/types/post';

/**
 * Sample blog post data
 * In a real application, this might come from a CMS or API
 */
export const blogPosts: Post[] = [
  {
    id: 'post-1',
    title: 'Getting Started with Next.js App Router',
    slug: 'getting-started-with-nextjs-app-router',
    excerpt: 'Learn how to use the new App Router in Next.js for better routing and layouts.',
    content: 'Full content of the blog post about Next.js App Router...',
    coverImage: '/images/blog/nextjs-app-router.jpg',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development'],
    publishedAt: '2024-03-10',
    featured: true,
    readingTime: '6 min read',
  },
  {
    id: 'post-2',
    title: 'Creating a Design System with Tailwind CSS',
    slug: 'creating-design-system-with-tailwind',
    excerpt: 'How to build a consistent design system using Tailwind CSS for your web projects.',
    content: 'Full content of the blog post about design systems with Tailwind...',
    coverImage: '/images/blog/tailwind-design-system.jpg',
    category: 'Design',
    tags: ['Tailwind CSS', 'Design System', 'UI/UX'],
    publishedAt: '2024-02-25',
    featured: true,
    readingTime: '8 min read',
  },
  {
    id: 'post-3',
    title: 'Server Components vs. Client Components in React',
    slug: 'server-components-vs-client-components',
    excerpt: 'Understanding the differences between server and client components in modern React.',
    content: 'Full content of the blog post about React components...',
    coverImage: '/images/blog/react-components.jpg',
    category: 'Development',
    tags: ['React', 'Server Components', 'Web Development'],
    publishedAt: '2024-02-05',
    featured: false,
    readingTime: '5 min read',
  },
  {
    id: 'post-4',
    title: 'Optimizing Images for Web Performance',
    slug: 'optimizing-images-web-performance',
    excerpt: 'Best practices for optimizing images to improve web performance and user experience.',
    content: 'Full content of the blog post about image optimization...',
    coverImage: '/images/blog/image-optimization.jpg',
    category: 'Performance',
    tags: ['Web Performance', 'Images', 'Optimization'],
    publishedAt: '2024-01-20',
    featured: false,
    readingTime: '4 min read',
  },
  {
    id: 'post-5',
    title: 'Building Accessible Web Forms',
    slug: 'building-accessible-web-forms',
    excerpt: 'How to create web forms that are accessible to all users, including those with disabilities.',
    content: 'Full content of the blog post about accessible forms...',
    coverImage: '/images/blog/accessible-forms.jpg',
    category: 'Accessibility',
    tags: ['Accessibility', 'Forms', 'HTML', 'ARIA'],
    publishedAt: '2024-01-05',
    featured: true,
    readingTime: '7 min read',
  },
];

/**
 * Get all blog posts
 */
export function getAllPosts(): Post[] {
  return blogPosts;
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts(): Post[] {
  return blogPosts.filter(post => post.featured);
}

/**
 * Get blog post by slug
 */
export function getPostBySlug(slug: string): Post | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Get blog posts by category
 */
export function getPostsByCategory(category: string): Post[] {
  return blogPosts.filter(post => post.category === category);
}

/**
 * Get blog posts by tag
 */
export function getPostsByTag(tag: string): Post[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

/**
 * Get all categories with post counts
 */
export function getAllCategories(): { name: string; count: number }[] {
  const categories = blogPosts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = 0;
    }
    acc[post.category]++;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(categories).map(([name, count]) => ({ name, count }));
}

/**
 * Get all tags with post counts
 */
export function getAllTags(): { name: string; count: number }[] {
  const tags = blogPosts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      if (!acc[tag]) {
        acc[tag] = 0;
      }
      acc[tag]++;
    });
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(tags).map(([name, count]) => ({ name, count }));
}