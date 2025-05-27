// types/post.ts

/**
 * Blog post type definitions
 */

export type PostStatus = 'draft' | 'published' | 'archived';

export type Post = {
  id: string;
  title: string;
  slug: string;
  /**
   * Short excerpt or summary
   */
  excerpt: string;
  /**
   * Full post content (may be Markdown/MDX or HTML)
   */
  content: string;
  /**
   * Cover image for the post
   */
  coverImage: string;
  /**
   * Post category
   */
  category: string;
  /**
   * Post tags
   */
  tags: string[];
  /**
   * Post publish date
   */
  publishedAt: string;
  /**
   * Post update date
   */
  updatedAt?: string;
  /**
   * Whether this is a featured post
   */
  featured: boolean;
  /**
   * Estimated reading time
   */
  readingTime: string;
  /**
   * Post author (if different from site author)
   */
  author?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  /**
   * SEO-specific meta description (if different from excerpt)
   */
  metaDescription?: string;
  /**
   * Post status
   * @default 'published'
   */
  status?: PostStatus;
  /**
   * Related posts
   */
  relatedPosts?: string[];
  /**
   * Custom metadata
   */
  metadata?: Record<string, any>;
};

export type PostsFilter = {
  featured?: boolean;
  category?: string;
  tag?: string;
  search?: string;
  status?: PostStatus;
  authorId?: string;
};