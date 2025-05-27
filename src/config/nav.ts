// config/nav.ts

/**
 * Navigation configuration for the portfolio website
 */

export type NavItem = {
    title: string;
    href: string;
    /**
     * Whether this is an external link that should open in a new tab
     * @default false
     */
    external?: boolean;
    /**
     * Optional icon name if using an icon library
     */
    icon?: string;
  };
  
  export type NavSection = {
    title?: string;
    items: NavItem[];
  };
  
  /**
   * Main navigation items shown in the header
   */
  export const mainNav: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  
  /**
   * Footer navigation sections
   */
  export const footerNav: NavSection[] = [
    {
      title: "Pages",
      items: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Projects",
          href: "/projects",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "Contact",
          href: "/contact",
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "GitHub",
          href: "https://github.com/yourusername",
          external: true,
          icon: "github",
        },
        {
          title: "LinkedIn",
          href: "https://linkedin.com/in/yourprofile",
          external: true,
          icon: "linkedin",
        },
        {
          title: "Twitter",
          href: "https://twitter.com/yourusername",
          external: true,
          icon: "twitter",
        },
      ],
    },
    {
      title: "Legal",
      items: [
        {
          title: "Privacy Policy",
          href: "/privacy",
        },
        {
          title: "Terms of Service",
          href: "/terms",
        },
      ],
    },
  ];
  
  /**
   * Mobile navigation items (optional if different from main nav)
   */
  export const mobileNav: NavItem[] = mainNav;
  
  export default {
    mainNav,
    footerNav,
    mobileNav,
  };