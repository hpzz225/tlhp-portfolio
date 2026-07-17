"use client";

import { motion } from "framer-motion";
import { Code, Layers, Database, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      icon: Layers,
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TanStack Query",
        "Redux Toolkit",
        "Zustand",
        "Zod",
        "shadcn/ui",
      ],
    },
    {
      icon: Database,
      title: "Tools",
      skills: ["Git", "GitHub", "GitLab", "Postman", "Figma", "Vite"],
    },
    {
      icon: Cloud,
      title: "Frontend Expertise",
      skills: [
        "Reusable Components",
        "REST API Integration",
        "Responsive Design",
        "State Management",
        "Performance Optimization",
        "Internationalization (i18n)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-accent/20 py-20 lg:py-32"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Technical Skills
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary" />

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Technologies and tools I use to build modern, scalable web
            applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-6 shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <category.icon size={22} className="text-primary" />
                </div>

                <h3 className="text-xl font-semibold tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.04,
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="font-mono">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="italic text-muted-foreground">
            Continuously improving my frontend skills through real-world
            projects and modern web technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
