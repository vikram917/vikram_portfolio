// app/error.tsx
'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="rounded-full bg-destructive/10 p-6 text-destructive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <div className="space-y-3">
          <Heading level="h1" className="text-4xl md:text-5xl font-bold">
            Something went wrong!
          </Heading>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            An unexpected error occurred. Please try again or return to the homepage.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={reset} variant="default" size="lg">
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}