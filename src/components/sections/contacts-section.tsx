import React from 'react';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/contact-form';
import { Heading } from '@/components/ui/Heading';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className={cn('py-16 md:py-24 bg-muted/50', className)}>
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-2">
            Get In Touch
          </h2>
          <Heading as="h2" size="h2" className="mb-4">
            Let's Work Together
          </Heading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form below
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg border border-border p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-background rounded-lg border border-border p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-lg border border-border p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with my latest projects and articles.
              </p>
              <div className="flex gap-3">
                {/* Social media icons would go here */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}