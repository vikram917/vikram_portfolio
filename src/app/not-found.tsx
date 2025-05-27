// app/not-found.tsx
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="rounded-full bg-muted p-6">
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
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.77L12 20.65l7.65-7.65.77-.77a5.4 5.4 0 0 0 0-7.65Z" />
          </svg>
        </div>
        <div className="space-y-3">
          <Heading level="h1" className="text-4xl md:text-5xl font-bold">
            404 - Page Not Found
          </Heading>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </Container>
  );
}