import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import  ThemeSwitcher  from '@/components/theme/theme-switcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faTwitter, 
  faLinkedin, 
  faDribbble 
} from '@fortawesome/free-brands-svg-icons';

// Map icon names to FontAwesome icons
const iconMap = {
  github: faGithub,
  twitter: faTwitter,
  linkedin: faLinkedin,
  dribbble: faDribbble
};

const Footer = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('border-t border-border py-8 md:py-12', className)}>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Link href="/" className="font-medium text-lg">
              {siteConfig.name}
            </Link>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-4">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FontAwesomeIcon 
                    icon={iconMap[link.icon as keyof typeof iconMap]} 
                    className="h-4 w-4" 
                  />
                </a>
              ))}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export { Footer };