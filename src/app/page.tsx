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
  Menu,
  X,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip } from "@/components/ui/tooltip";
import { backendSkills, devopsSkills, frontendSkills } from "@/data/skills";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
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
    setMobileOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const message = (data.get("message") as string) || "";
    const subject = `Portfolio contact from ${name || "someone"}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:hafizcode02@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const menuItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[2px] border-foreground shadow-[0_2px_0_var(--foreground)]">
        <div className="container mx-auto px-4 py-3.5 md:py-4 flex justify-between items-center">
          <a
            href="#"
            className="bg-[var(--neo-yellow)] border-[2px] border-foreground px-3 py-1.5 rounded-[8px] shadow-[3px_3px_0_var(--foreground)] font-black font-display text-lg tracking-tight text-black leading-none"
          >
            HC
          </a>
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex gap-2 items-center">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                    className="inline-block font-display font-black uppercase text-sm tracking-wide px-3.5 py-1.5 rounded-[8px] border-[2px] border-transparent hover:border-foreground hover:bg-[var(--neo-pink)] hover:text-black hover:shadow-[3px_3px_0_var(--foreground)] transition-all"
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
              className="cursor-pointer bg-[var(--neo-cyan)] border-[2px] border-foreground shadow-[3px_3px_0_var(--foreground)] rounded-[8px] text-black hover:bg-[var(--neo-cyan)] hover:text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_var(--foreground)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden cursor-pointer bg-white dark:bg-card border-[2px] border-foreground shadow-[3px_3px_0_var(--foreground)] rounded-[8px] hover:bg-white"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t-[2px] border-foreground bg-background px-4 py-4 shadow-brutal">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                    className="block w-full text-left font-display font-black uppercase tracking-wide text-base px-4 py-3 rounded-[8px] border-[3px] border-foreground bg-white dark:bg-card shadow-brutal-sm hover:bg-[var(--neo-yellow)] hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" />
        {/* Decorative brutal shapes */}
        <div className="absolute top-24 right-[4%] hidden lg:block w-16 h-16 bg-[var(--neo-pink)] border-[2px] border-foreground rounded-[8px] shadow-brutal rotate-6" />
        <div className="absolute bottom-16 left-[3%] hidden lg:block w-12 h-12 bg-[var(--neo-lime)] border-[2px] border-foreground rounded-[8px] shadow-brutal-sm -rotate-12" />
        <div className="absolute top-32 left-[8%] hidden xl:block w-10 h-10 bg-[var(--neo-cyan)] border-[2px] border-foreground rounded-full shadow-brutal-sm" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <p className="inline-block font-mono font-bold uppercase tracking-widest text-xs md:text-sm bg-[var(--neo-lime)] text-black border-[3px] border-foreground rounded-[8px] px-3 py-1.5 shadow-brutal-sm mb-6">
              Available for freelance & full-time
            </p>
            <h1 className="font-display font-black uppercase tracking-tight leading-[0.95] md:leading-[0.9] text-[2.4rem] sm:text-[2.8rem] md:text-6xl lg:text-7xl mb-6 md:mb-8">
              Hi, I&apos;m{" "}
              <span className="bg-[var(--neo-yellow)] text-black border-b-[3px] md:border-b-[4px] border-foreground px-1.5 md:px-2 pb-1 inline-block">
                Hafiz Caniago
              </span>
            </h1>
            <p className="font-mono font-bold leading-relaxed text-[15px] md:text-lg lg:text-xl max-w-2xl mb-4">
              Full-Stack Developer{" "}
              {/* <span className="bg-[var(--neo-cyan)] text-black px-1.5 border-2 border-foreground rounded-[6px]">
                Cloud
              </span>{" "}
              &{" "}
              <span className="bg-[var(--neo-pink)] text-black px-1.5 border-2 border-foreground rounded-[6px]">
                AI
              </span>{" "}
              Enthusiast */}
            </p>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-2xl mb-8 md:mb-10 text-sm md:text-base">
              Building scalable apps & Impactful Solutions for your Business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="cursor-pointer bg-[var(--neo-pink)] text-black hover:bg-[var(--neo-pink)] text-base px-8"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer bg-white dark:bg-card text-base px-8"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-20 border-y-[3px] border-foreground bg-[var(--neo-cyan)] text-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-start gap-2 mb-10 md:mb-14">
            <span className="font-mono font-black uppercase tracking-widest text-xs bg-white border-[3px] border-foreground rounded-[8px] px-3 py-1 shadow-brutal-sm">
              01 — About
            </span>
            <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl leading-none">
              About Me
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center order-1">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-[8px] overflow-hidden border-[4px] border-foreground shadow-brutal bg-white rotate-[1.2deg] hover:rotate-0 transition-transform duration-300">
                <img
                  src="/img/me.jpg"
                  alt="Hafiz Caniago"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-2">
              <div className="bg-white border-[3px] border-foreground rounded-[8px] shadow-brutal p-6 md:p-7">
                <p className="text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Full-Stack Engineer focused on building dependable web applications and backend systems that solve real business problems. I handle everything from API integrations and database performance to deployment, making sure software runs smoothly and scales reliably.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {["System Analysis", "Web Development", "Backend Development", "CI/CD Deployment", "Docker"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-[var(--neo-yellow)] text-black border-[3px] border-foreground rounded-[8px] px-3 py-1 text-xs font-mono font-black uppercase tracking-wide shadow-brutal-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-20 border-y-[3px] border-foreground bg-background relative"
      >
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col gap-2 mb-10 md:mb-12">
            <span className="inline-block self-start font-mono font-black uppercase tracking-widest text-xs bg-[var(--neo-pink)] text-black border-[3px] border-foreground rounded-[8px] px-3 py-1 shadow-brutal-sm">
              02 — Work
            </span>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl leading-none">
                Featured Projects
              </h2>
              <Tooltip content="Featured projects will be updated soon — several newest projects are on the way. Stay tuned!">
                <button
                  type="button"
                  aria-label="More info about featured projects"
                  className="w-7 h-7 rounded-full bg-white border-[2px] border-foreground shadow-[2px_2px_0_var(--foreground)] flex items-center justify-center hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_var(--foreground)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all text-black shrink-0"
                >
                  <Info className="h-4 w-4" />
                </button>
              </Tooltip>
            </div>
            <p className="font-mono font-bold text-sm md:text-base max-w-2xl text-muted-foreground">
              Discover my featured projects, completed individually and as a
              team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const bg =
                index % 3 === 0
                  ? "bg-[var(--neo-yellow)]"
                  : index % 3 === 1
                    ? "bg-[var(--neo-pink)]"
                    : "bg-[var(--neo-cyan)]";
              return (
                <div
                  key={index}
                  className={`p-6 rounded-[8px] border-[3px] border-foreground shadow-brutal flex flex-col text-black ${bg}`}
                >
                  <div className="w-full aspect-video rounded-[8px] border-[3px] border-foreground shadow-brutal-sm bg-white overflow-hidden mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-display font-black uppercase tracking-tight text-lg md:text-xl border-b-[3px] border-foreground pb-2 inline-block mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-black/80 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white text-black border-2 border-foreground rounded-[6px] text-[11px] font-mono font-black uppercase tracking-wide px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2.5 flex-wrap">
                    {project.openSource && (
                      <Link href={project.repoUrl as string} target="_blank">
                        <Button
                          // variant="outline"
                          size="sm"
                          className="gap-1 cursor-pointer bg-white text-black border-[3px] shadow-brutal-sm hover:bg-white"
                        >
                          <Code className="h-4 w-4" />
                          <span>View Source</span>
                        </Button>
                      </Link>
                    )}
                    {project.demo && (
                      <Link href={project.demoUrl as string} target="_blank">
                        <Button
                          size="sm"
                          className="gap-1 cursor-pointer bg-white text-black border-[3px] shadow-brutal-sm hover:bg-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Preview</span>
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Button Load More Projects (Coming Soon) */}
            <div className="col-span-full flex justify-center mt-6">
              <Button
                size="lg"
                className="bg-[var(--neo-yellow)] text-black hover:bg-[var(--neo-yellow)]"
              >
                Load More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 md:py-20 border-y-[3px] border-foreground bg-background relative"
      >
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col gap-2 mb-10 md:mb-12">
            <span className="inline-block self-start font-mono font-black uppercase tracking-widest text-xs bg-[var(--neo-lime)] text-black border-[3px] border-foreground rounded-[8px] px-3 py-1 shadow-brutal-sm">
              03 — Stack
            </span>
            <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl leading-none">
              Skills & Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[var(--neo-yellow)] text-black p-6 rounded-[8px] border-[3px] border-foreground shadow-brutal">
              <h3 className="font-display font-black uppercase tracking-tight text-xl mb-4 border-b-[3px] border-foreground pb-2 inline-block">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-[8px] flex items-center justify-center bg-white border-[3px] border-foreground shadow-brutal-sm shrink-0">
                      <skill.icon className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-mono font-black text-sm uppercase tracking-wide leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--neo-pink)] text-black p-6 rounded-[8px] border-[3px] border-foreground shadow-brutal">
              <h3 className="font-display font-black uppercase tracking-tight text-xl mb-4 border-b-[3px] border-foreground pb-2 inline-block">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-[8px] flex items-center justify-center bg-white border-[3px] border-foreground shadow-brutal-sm shrink-0">
                      <skill.icon className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-mono font-black text-sm uppercase tracking-wide leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--neo-cyan)] text-black p-6 rounded-[8px] border-[3px] border-foreground shadow-brutal md:col-span-2 lg:col-span-1">
              <h3 className="font-display font-black uppercase tracking-tight text-xl mb-4 border-b-[3px] border-foreground pb-2 inline-block">
                DevOps & Cloud
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {devopsSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-[8px] flex items-center justify-center bg-white border-[3px] border-foreground shadow-brutal-sm shrink-0">
                      <skill.icon className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-mono font-black text-sm uppercase tracking-wide leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 mb-10 md:mb-12">
            <span className="inline-block self-start font-mono font-black uppercase tracking-widest text-xs bg-[var(--neo-orange)] text-black border-[3px] border-foreground rounded-[8px] px-3 py-1 shadow-brutal-sm">
              04 — Contact
            </span>
            <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl leading-none">
              Get In Touch
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[var(--neo-lime)] text-black p-6 md:p-7 rounded-[8px] border-[3px] border-foreground shadow-brutal">
              <h3 className="font-display font-black uppercase tracking-tight text-xl mb-3">
                Contact Information
              </h3>
              <p className="font-medium mb-6 text-sm md:text-base">
                Feel free to reach out if you&apos;re looking for a developer,
                have a question, or just want to connect.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:hafizcode02@gmail.com"
                  className="inline-flex items-center gap-3 bg-white border-[3px] border-foreground rounded-[8px] px-4 py-2.5 shadow-brutal-sm font-mono font-black text-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all text-black"
                >
                  <Mail className="h-5 w-5" />
                  <span>hafizcode02@gmail.com</span>
                </a>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://github.com/hafizcode02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-[8px] bg-white border-[3px] border-foreground flex items-center justify-center shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all text-black"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/hafiz-caniago"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-[8px] bg-white border-[3px] border-foreground flex items-center justify-center shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all text-black"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://medium.com/@hafizcaniago"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-[8px] bg-white border-[3px] border-foreground flex items-center justify-center shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal transition-all text-black"
                  >
                    <Rss className="h-5 w-5" />
                    <span className="sr-only">Medium</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-card p-6 md:p-7 rounded-[8px] border-[3px] border-foreground shadow-brutal">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono font-black uppercase tracking-wide text-xs mb-1.5"
                  >
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono font-black uppercase tracking-wide text-xs mb-1.5"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono font-black uppercase tracking-wide text-xs mb-1.5"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--neo-orange)] text-black hover:bg-[var(--neo-orange)]"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t-[3px] border-foreground bg-foreground text-background dark:bg-white dark:text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-mono font-bold text-sm">
              © 2025 Hafiz Caniago. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold">Built with</span>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--neo-yellow)] text-black border-2 border-foreground dark:border-black px-2 py-0.5 rounded-[6px] font-black font-display text-sm hover:shadow-brutal-sm transition-all"
              >
                Next.js
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
