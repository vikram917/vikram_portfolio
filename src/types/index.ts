// types/index.ts

/**
 * Common types used throughout the application
 */

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage?: string;
    links: {
      github: string;
      linkedin?: string;
      twitter?: string;
      [key: string]: string | undefined;
    };
    author: {
      name: string;
      email?: string;
    };
  };
  
  export type SeoProps = {
    title?: string;
    description?: string;
    image?: string;
    canonicalUrl?: string;
    publishedTime?: string;
    modifiedTime?: string;
    type?: 'website' | 'article' | 'profile';
    tags?: string[];
  };
  
  export type MetadataProps = {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    themeColor?: string;
  };
  
  export type Pagination = {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
  
  export type SortOrder = 'asc' | 'desc';
  
  export type SortOptions = {
    field: string;
    order: SortOrder;
  };