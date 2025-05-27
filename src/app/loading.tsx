// app/loading.tsx
import { Container } from '@/components/ui/container';

export default function Loading() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="relative flex flex-col items-center">
        <div className="absolute animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
        <div className="h-16 w-16 rounded-full"></div>
      </div>
      <p className="mt-6 text-muted-foreground">Loading...</p>
    </Container>
  );
}