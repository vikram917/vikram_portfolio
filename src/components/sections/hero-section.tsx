import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TypingAnimation } from "@/lib/typing-animation";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("py-12 md:py-24", className)}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex flex-col items-start gap-4 md:gap-6 md:max-w-lg">
            <Heading
              as="h1"
              size="h1"
              className="animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
            >
              Hi, I'm <span className="text-primary">Vikram Baghel</span>
              <br />
              <TypingAnimation
                texts={[
                  "Web Application Developer",
                  "Mobile Application Developer",
                  "Full Stack Developer",
                  "React Developer",
                ]}
                speed={100}
                deleteSpeed={50}
                pauseDuration={2000}
                className="text-foreground"
              />
            </Heading>

            <p
              className="text-lg text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
            >
              I build accessible, user-friendly websites and applications with
              modern technologies. Focused on creating clean, efficient
              solutions for real-world problems.
            </p>

            <div
              className="flex flex-wrap gap-4 mt-2 animate-fade-up"
              style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
            >
              <Button asChild size="lg">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          <div
            className="relative w-full max-w-md aspect-square animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border bg-muted">
              <Image
                src="/images/vikram.png"
                alt="Profile Photo"
                width={500}
                height={250}
                // fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
