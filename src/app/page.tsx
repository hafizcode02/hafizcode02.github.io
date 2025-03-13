/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Rss,
  Mail,
  ExternalLink,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Portfolio() {
  // At the beginning of your component
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            |HC|
          </a>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="cursor-pointer"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Hi, I&apos;m Hafiz Caniago
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full-Stack Developer | Cloud & AI Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="animate-fade-in cursor-pointer"
                style={{ animationDelay: "200ms" }}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="animate-fade-in cursor-pointer"
                style={{ animationDelay: "400ms" }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src="/img/me.jpg"
                  alt="John Doe"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <p className="text-lg mb-6">
                I&apos;m a full-stack web developer with 3+ years of freelance
                experience building scalable applications and cloud solutions. I
                specialize in PHP, Laravel, Node.js, TypeScript, and PostgreSQL,
                with a strong focus on performance and reliability.
              </p>
              <p className="text-lg mb-6">
                Now, I&apos;m expanding my skills in React, Next.js and Nest.js to
                strengthen my development expertise, while also exploring DevOps
                practices to improve deployment and infrastructure management. I
                thrive on learning new technologies, solving complex problems,
                and building impactful solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  PHP
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  Typescript
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  Python
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  Google Cloud
                </div>
                <div className="bg-background rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                  Docker
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-center mb-16">Discover my featured projects, completed individually and as a team.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Code className="h-4 w-4" />
                      <span>View Code</span>
                    </Button>
                    {project.demo && (
                      <Button size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">
                DevOps & Cloud
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {devopsSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out if you&apos;re looking for a developer,
                have a question, or just want to connect.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:hafizcode02@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>hafizcode02@gmail.com</span>
                </a>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/hafizcode02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/hafiz-caniago"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://medium.com/@hafizcaniago"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:text-primary transition-colors"
                  >
                    <Rss className="h-5 w-5" />
                    <span className="sr-only">Medium</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Hafiz Caniago. All rights reserved.
            </p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">Built with</span>
              <i>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Next.js
                </a>
              </i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sample data
const projects = [
  {
    title: "SIAPPMI",
    description:
      "An information system for managing and tracking overseas worker deployment, covering registration, document processing, and status monitoring.",
    image: "./img/siappmi.png",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "tFPDF",
      "Bootstrap CSS",
      "jQuery",
    ],
    demo: false,
  },
  {
    title: "Palomade",
    description:
      "An Palm fruit sorting app that helps farmers and processors identify ripe fruit, reduce waste, and track palm oil shipments efficiently.",
    image: "/img/palomade.png",
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Google Maps API",
      "Cloud Run",
      "Python",
      "Tensorflow",
      "Flask",
      "Jetpack Compose",
      "Docker",
    ],
    demo: false,
  },
  {
    title: "Commodity Price Predict",
    description:
      "A website dashboard serving a TensorFlow model to predict commodity prices, developed as part of my college final project.",
    image: "./img/commodity-price-predict.png",
    technologies: ["Python", "Flask", "Jinja2", "Tensorflow", "Bootstrap CSS"],
    demo: true,
  },
  {
    title: "LPK BKJ Website",
    description:
      "A company profile website for a Japan job training institution.",
    image: "./img/lpk-bkj.png",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap CSS", "jQuery"],
    demo: false,
  },
  {
    title: "Baznas Kuningan Website",
    description:
      "A web app for donations, infaq, zakat payments, and information about BAZNAS Kuningan.",
    image: "./img/baznas-kuningan.png",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "Bootstrap CSS",
      "jQuery",
      "Midtrans API",
    ],
    demo: false,
  },
  {
    title: "SIM-SURAT",
    description:
      "A web-based application for managing and tracking incoming and outgoing mail, including document scanning and archiving.",
    image: "./img/sim-surat.png",
    technologies: ["PHP", "Laravel", "Boostrap CSS", "MySQL"],
    demo: false,
  },
  {
    title: "Kejawanan Beach Website",
    description:
      "An informational website about Kejawanan Beach, Cirebon, Indonesia, created for the HIMIT PENS Event 2022.",
    image: "./img/kejawanan.png",
    technologies: ["HTML", "CSS", "Bootstrap CSS", "JavaScript", "Figma"],
    demo: false,
  },
  {
    title: "Carougen",
    description:
      "A content generator tool for creating and customizing carousels for instagram and other social media platforms.",
    image: "./img/carougen.png",
    technologies: ["Python", "Flask", "Jinja2", "OpenAI API", "Tailwind CSS"],
    demo: true,
  },
  {
    title: "SIAKAD INVADA",
    description:
      "An Academic Information System for managing student data, course schedules, course enrollment, and exam results.",
    image: "./img/siakad.png",
    technologies: ["PHP", "Codeigniter 3", "Boostrap CSS", "MySQL"],
    demo: false,
  },
];

// Sample skills with icons
import {
  Server,
  Database,
  FileJson,
  LayoutGrid,
  Palette,
  Globe,
  Cloud,
  GitBranch,
  Terminal,
} from "lucide-react";

const backendSkills = [
  { name: "PHP", icon: FileJson },
  { name: "Python", icon: FileJson },
  { name: "Node.js", icon: FileJson },
  { name: "Typescript", icon: FileJson },
  { name: "Express", icon: Server },
  { name: "Laravel", icon: Server },
  { name: "Flask", icon: Server },
  { name: "Nest.js", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
];

const frontendSkills = [
  { name: "React", icon: LayoutGrid },
  { name: "TypeScript", icon: FileJson },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Next.js", icon: Globe },
  { name: "Bootstrap CSS", icon: Palette },
  { name: "jQuery", icon: FileJson },
];

const devopsSkills = [
  { name: "Google Cloud", icon: Cloud },
  { name: "Docker", icon: Terminal },
  { name: "CI/CD", icon: GitBranch },
  { name: "Linux", icon: Terminal },
];
