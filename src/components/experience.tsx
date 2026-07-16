"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "WALA ICT",
      period: "11/2025 - 06/2026",
      location: "Ho Chi Minh City, Vietnam",
      description: [
        "Developed and maintained frontend web applications for Korean clients using React and TypeScript.",
        "Built reusable UI components and shared layouts to improve consistency and maintainability.",
        "Integrated REST APIs, implemented new features, fixed production bugs, and refactored existing code.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "REST API",
        "Git",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "FPT Software",
      period: "01/2024 - 04/2024",
      location: "Ho Chi Minh City, Vietnam",
      description: [
        "Worked in an Agile team to develop frontend features following enterprise coding standards.",
        "Participated in sprint planning, code reviews, and collaborated with backend developers and QA engineers.",
      ],
      technologies: ["React", "TypeScript", "Redux Toolkit", "REST API", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-accent/20 py-20 lg:py-32"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Work Experience
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary" />

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Professional experience building modern web applications with React
            and TypeScript.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`relative mb-12 flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 z-10 h-4 w-4 -translate-x-2 rounded-full border-4 border-background bg-primary lg:left-1/2 lg:-translate-x-1/2" />

              {/* Card */}
              <div
                className={`ml-6 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-2xl border border-border bg-background p-6 shadow-lg transition-all duration-300 hover:border-primary/30"
                >
                  {/* Header */}
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {exp.title}
                      </h3>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="mb-6 space-y-3">
                    {exp.description.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-accent px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
