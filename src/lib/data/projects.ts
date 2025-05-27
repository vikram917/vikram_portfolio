// lib/data/projects.ts

import { Project } from '@/types/project';

/**
 * Sample project data
 * In a real application, this might come from a CMS or API
 */
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    slug: 'e-commerce-platform',
    description: 'A modern e-commerce platform built with Next.js, Stripe, and a headless CMS.',
    content: 'Detailed description of the e-commerce project...',
    thumbnail: '/images/projects/project-1.jpg',
    images: [
      '/images/projects/project-1-detail-1.jpg',
      '/images/projects/project-1-detail-2.jpg',
    ],
    technologies: ['React', 'Next.js', 'Stripe', 'Tailwind CSS', 'Prisma'],
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    featured: true,
    publishedAt: '2024-03-15',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    slug: 'task-management-app',
    description: 'A productivity app for managing tasks and projects with team collaboration features.',
    content: 'Detailed description of the task management app...',
    thumbnail: '/images/projects/project-2.jpg',
    images: [
      '/images/projects/project-2-detail-1.jpg',
      '/images/projects/project-2-detail-2.jpg',
    ],
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    demoUrl: 'https://task-app.example.com',
    githubUrl: 'https://github.com/yourusername/task-management',
    featured: true,
    publishedAt: '2024-02-10',
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    description: 'A personal portfolio website showcasing projects and blog posts.',
    content: 'Detailed description of this portfolio website...',
    thumbnail: '/images/projects/project-3.jpg',
    images: [
      '/images/projects/project-3-detail-1.jpg',
      '/images/projects/project-3-detail-2.jpg',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: true,
    publishedAt: '2024-04-20',
  },
  {
    id: 'project-4',
    title: 'Weather Dashboard',
    slug: 'weather-dashboard',
    description: 'A weather application showing forecasts and historical weather data.',
    content: 'Detailed description of the weather dashboard...',
    thumbnail: '/images/projects/project-4.jpg',
    images: [
      '/images/projects/project-4-detail-1.jpg',
      '/images/projects/project-4-detail-2.jpg',
    ],
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
    demoUrl: 'https://weather-app.example.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    featured: false,
    publishedAt: '2024-01-05',
  },
  {
    id: 'project-5',
    title: 'Recipe Finder',
    slug: 'recipe-finder',
    description: 'A recipe application that helps users find recipes based on available ingredients.',
    content: 'Detailed description of the recipe finder app...',
    thumbnail: '/images/projects/project-5.jpg',
    images: [
      '/images/projects/project-5-detail-1.jpg',
      '/images/projects/project-5-detail-2.jpg',
    ],
    technologies: ['Vue.js', 'Vuex', 'Spoonacular API', 'Sass'],
    demoUrl: 'https://recipe-finder.example.com',
    githubUrl: 'https://github.com/yourusername/recipe-finder',
    featured: false,
    publishedAt: '2023-12-12',
  },
];

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

/**
 * Get project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}