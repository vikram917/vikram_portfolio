// lib/constants.ts

/**
 * Site-wide constants
 */

// Site metadata
export const SITE_NAME = "Portfolio";
export const SITE_URL = "https://your-portfolio.com";
export const SITE_DESCRIPTION = "Professional portfolio and blog showcasing my work and thoughts";

// Social media
export const SOCIAL_GITHUB = "https://github.com/yourusername";
export const SOCIAL_TWITTER = "https://twitter.com/yourusername";
export const SOCIAL_LINKEDIN = "https://linkedin.com/in/yourprofile";

// Contact information
export const CONTACT_EMAIL = "baghelvikram917@gmail.com";

// Content limits
export const POSTS_PER_PAGE = 6;
export const FEATURED_PROJECTS_LIMIT = 3;
export const RECENT_POSTS_LIMIT = 3;

// Animation durations (in ms)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

// Breakpoints (matching tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
};

// API rate limiting
export const MAX_CONTACT_SUBMISSIONS = 5; // Maximum contact form submissions per day
export const CONTACT_COOLDOWN = 60 * 1000; // 1 minute between submissions