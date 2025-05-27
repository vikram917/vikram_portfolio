// app/about/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, skills, and experience",
};

export default function AboutPage() {
  // Skills array
  // const skills = [
  //   { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  //   { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'] },
  //   { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
  //   { category: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX Design', 'Wireframing'] },
  //   { category: 'DevOps', items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel'] },
  // ];
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
        { name: "Framer Motion", icon: "/icons/framer.svg" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Express", icon: "/icons/express.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "Django", icon: "/icons/django.svg" },
        { name: "GraphQL", icon: "/icons/graphql.svg" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "Redis", icon: "/icons/redis.svg" },
      ],
    },
    // {
    //   category: "Design",
    //   items: [
    //     { name: "Figma", icon: "/icons/figma.svg" },
    //     { name: "Adobe XD", icon: "/icons/xd.svg" },
    //     { name: "Photoshop", icon: "/icons/photoshop.svg" },
    //     { name: "UI/UX Design", icon: "/icons/uiux.svg" },
    //     { name: "Wireframing", icon: "/icons/wireframe.svg" },
    //   ],
    // },
    {
      category: "DevOps",
      items: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "Docker", icon: "/icons/docker.svg" },
        { name: "CI/CD", icon: "/icons/cicd.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "Vercel", icon: "/icons/vercel.svg" },
      ],
    },
  ];

  // Experience array
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Lead frontend development for enterprise SaaS products, improving performance and accessibility. Implemented design systems and component libraries used across multiple projects.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Lab",
      period: "2019 - 2022",
      description:
        "Developed and maintained web applications for clients in various industries. Worked on both frontend and backend systems, from database design to user interface implementation.",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      period: "2017 - 2019",
      description:
        "Created user interfaces and experiences for web and mobile applications. Conducted user research and testing to improve usability and design outcomes.",
    },
  ];

  // Education array
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      period: "2015 - 2017",
    },
    {
      degree: "Bachelor of Design",
      institution: "Design Academy",
      period: "2011 - 2015",
    },
  ];

  return (
    <main className="py-16 md:py-24">
      <Container>
        {/* Header section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm a passionate full-stack developer and UI/UX designer with over
              a years of experience building beautiful, functional websites and
              applications.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <p>
                I specialize in creating responsive, user-friendly web
                applications using modern technologies. My approach combines
                clean code practices with thoughtful design to deliver
                exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design
                trends, contributing to open-source projects, or sharing
                knowledge through technical writing and mentoring.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt={siteConfig.author}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Skills section */}
        <section className="mt-24">
          <Heading level="h2" className="text-3xl font-bold">
            Skills & Expertise
          </Heading>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                <ul className="mt-4 space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill.name} className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg> */}
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={20}
                        height={20}
                        className="grayscale hover:grayscale-0 transition"
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience section */}
        <section className="mt-24">
          <Heading level="h2" className="text-3xl font-bold">
            Work Experience
          </Heading>
          <div className="mt-8 space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mt-1">
                  <span>{job.company}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{job.period}</span>
                </div>
                <p className="mt-3">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education section */}
        <section className="mt-24">
          <Heading level="h2" className="text-3xl font-bold">
            Education
          </Heading>
          <div className="mt-8 space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mt-1">
                  <span>{edu.institution}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
