import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Navigation } from '@/components/layout/navigation';
import { MobileNav } from '@/components/layout/mobile-nav';
import  ThemeSwitcher  from '@/components/theme/theme-switcher';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60', className)}>
      <Container>
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
            <Navigation className="hidden md:flex" />
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button asChild variant="default" size="sm" className="hidden md:flex">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };