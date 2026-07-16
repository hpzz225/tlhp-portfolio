"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      title: "Tara",
      type: "Company Project",
      description:
        "Enterprise platform for managing printing orders, products, customers, user roles, and ERP integration. Contributed to developing reusable UI components, integrating REST APIs, and implementing frontend features for the admin system.",
      image: "/images/projects/tara.png",
      technologies: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS",
        "Zod",
        "i18n",
      ],
      links: [],
    },
    {
      title: "Moon",
      type: "Personal Project",
      description:
        "Web application for a startup that digitizes traditional on-demand laundry services for local customers.",
      image: "/images/moon.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
      links: [
        {
          label: "Live Demo",
          url: "https://tiemgiatmoon.vercel.app/",
        },
      ],
    },
    {
      title: "FAMS",
      type: "Academic Project",
      description:
        "Academic management system developed in an Agile team for managing training activities and learner information.",
      image: "/images/projects/fams.png",
      technologies: ["React", "TypeScript", "Redux Toolkit", "REST API"],
      links: [],
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary" />

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A selection of company, personal, and academic projects
            demonstrating my experience in building modern frontend
            applications.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-border bg-accent/20 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border bg-background px-3 py-1 font-mono text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary"
                      >
                        <ExternalLink size={16} />
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
