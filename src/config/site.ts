// Site configuration
// config/site.ts

// Properly import icon types without direct React components
export const siteConfig = {
  name: "Vikram Baghel | Portfolio",
  description: "Full-stack developer & UI/UX designer with a passion for creating beautiful, functional websites and applications.",
  url: "https://janedoe-portfolio.com",
  ogImage: "https://janedoe-portfolio.com/images/og-image.jpg",
  author: "Vikram Baghel",
  twitterHandle: "@vikrambaghel068",
  email: "baghelvikram917@gmail.com",
  keywords: [
    "portfolio",
    "developer",
    "designer",
    "frontend",
    "backend",
    "full-stack",
    "UI/UX",
    "web development",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript"
  ],
  mainNav: [
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
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/janedoe",
      icon: "github"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jane_doe_dev",
      icon: "twitter"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/janedoe",
      icon: "linkedin"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/janedoe",
      icon: "dribbble"
    },
  ],
  footerLinks: [
    {
      title: "Social",
      links: [
        { title: "GitHub", href: "https://github.com/janedoe" },
        { title: "Twitter", href: "https://twitter.com/jane_doe_dev" },
        { title: "LinkedIn", href: "https://linkedin.com/in/janedoe" },
        { title: "Dribbble", href: "https://dribbble.com/janedoe" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Resume", href: "/resume.pdf" },
        { title: "Style Guide", href: "/style-guide" },
        { title: "Uses", href: "/uses" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
      ],
    },
  ],
};