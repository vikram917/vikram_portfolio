// types/project.ts

/**
 * Project type definitions
 */

export type ProjectStatus = 'draft' | 'published' | 'archived';

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  /**
   * Full project content (may be Markdown/MDX or HTML)
   */
  content: string;
  /**
   * Main project thumbnail image
   */
  thumbnail: string;
  /**
   * Additional project images
   */
  images?: string[];
  /**
   * Technologies used in the project
   */
  technologies: string[];
  /**
   * URL to live demo
   */
  demoUrl?: string;
  /**
   * URL to GitHub repository
   */
  githubUrl?: string;
  /**
   * Whether this is a featured project
   */
  featured: boolean;
  /**
   * Project publish date
   */
  publishedAt: string;
  /**
   * Project update date
   */
  updatedAt?: string;
  /**
   * Project status
   * @default 'published'
   */
  status?: ProjectStatus;
  /**
   * Project category
   */
  category?: string;
  /**
   * Client name (if applicable)
   */
  client?: string;
  /**
   * Project duration
   */
  duration?: string;
  /**
   * Project role
   */
  role?: string;
  /**
   * Project team members
   */
  team?: string[];
  /**
   * Project testimonial
   */
  testimonial?: {
    content: string;
    author: string;
    role?: string;
  };
  /**
   * Project challenges and solutions
   */
  challenges?: {
    challenge: string;
    solution: string;
  }[];
  /**
   * Project outcomes or results
   */
  outcomes?: string[];
  /**
   * Custom metadata
   */
  metadata?: Record<string, any>;
};

export type ProjectsFilter = {
  featured?: boolean;
  technology?: string;
  category?: string;
  search?: string;
  status?: ProjectStatus;
};