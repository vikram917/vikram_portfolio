"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import  navConfig  from '@/config/nav';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-10 w-10"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      {open && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-background p-6 pb-32 shadow-md animate-in slide-in-from-top-80">
          <div className="relative z-20 flex flex-col gap-4">
            <nav className="flex flex-col gap-4">
              {navConfig.mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-foreground",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-4 mt-4">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={close}>
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}