"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const About = () => {
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "FPT University",
      period: "2020 - 2025",
    },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary" />
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-8"
          >
            <h3 className="mb-5 text-xl font-semibold">About</h3>

            <div className="space-y-5 leading-8 text-muted-foreground">
              <p>
                I&apos;m a{" "}
                <span className="font-mono text-primary">
                  Frontend Developer
                </span>{" "}
                based in Ho Chi Minh City.
              </p>

              <p>
                I build modern web applications using{" "}
                <span className="font-mono">React</span>,{" "}
                <span className="font-mono">Next.js</span>, and{" "}
                <span className="font-mono">TypeScript</span>. I focus on
                building reusable UI components, integrating REST APIs, and
                creating maintainable frontend applications.
              </p>

              <p>
                I enjoy solving UI challenges, improving user experiences, and
                continuously learning modern frontend technologies to build
                better products.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-accent/30 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap size={24} className="text-primary" />

              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            {education.map((edu) => (
              <div key={edu.degree}>
                <h4 className="mb-1 text-lg font-semibold">{edu.degree}</h4>

                <p className="mb-2 text-muted-foreground">{edu.school}</p>

                <span className="font-mono text-sm text-primary">
                  {edu.period}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
