"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import  navConfig  from '@/config/nav';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex gap-6', className)}>
      {navConfig.mainNav.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-foreground',
              isActive ? 'text-foreground' : 'text-muted-foreground'
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}