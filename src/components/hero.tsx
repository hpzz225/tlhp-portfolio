"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { icon: Github, href: "https://github.com/hpzz225", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/phuoc-tlh2205/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:tranlehuuphuoc22502@gmail.com", label: "Email" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
      <div
        className="absolute top-3/4 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/50 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent/40 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-primary/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative mx-auto group"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative w-72 h-72 lg:w-80 lg:h-80 bg-muted rounded-2xl border border-border shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <div className="absolute inset-0">
                  <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12 group-hover:translate-x-96 transition-transform duration-1000 z-10"></div>
                </div>

                <div className="relative w-full h-full">
                  <Image
                    src="/images/phuoc.png"
                    alt="Phuoc - Frontend Developer"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 288px, 320px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl z-10"></div>

                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full border-2 border-background z-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-muted-foreground text-lg">Hi, I&apos;m</p>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Trần Lê Hữu Phước
              </h1>
              <div className="relative inline-block">
                <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                  Frontend Developer
                </h2>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </div>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Frontend Developer specializing in React, Next.js, and TypeScript.
              I enjoy building scalable web applications with reusable
              components, clean architecture, and intuitive user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-foreground text-background font-mono text-sm uppercase tracking-wider transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  backgroundColor: "#fafafa",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-border font-mono text-sm uppercase tracking-wider hover:border-foreground hover:bg-accent transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-muted rounded-xl border border-border hover:border-primary hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ y: -6, scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-sm text-muted-foreground uppercase tracking-wider font-mono font-medium">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-7 h-7 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
