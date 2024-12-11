'use client'

import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Folder } from 'lucide-react';
import Image from 'next/image';

const NavLink = ({ href, children }) => (
  <a 
    href={href}
    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
  >
    {children}
  </a>
);

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredProjects = [
    {
      title: "Project One",
      description: "A featured project that showcases my ability to handle complex web applications. Built with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      external: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform built with Next.js and Stripe integration. Features a custom CMS and admin dashboard.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "#",
      external: "#",
    }
  ];

  const otherProjects = [
    {
      title: "CLI Tool",
      description: "Developer tool for automated project setup",
      tech: ["Node.js", "Commander.js"],
      github: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather tracking application",
      tech: ["React", "OpenWeather API"],
      github: "#",
    },
    {
      title: "Portfolio v1",
      description: "First iteration of my personal website",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
    }
  ];

  const experiences = [
    {
      company: "Tech Company",
      title: "Senior Frontend Developer",
      period: "2022 - Present",
      points: [
        "Led development of major features using React and TypeScript",
        "Improved application performance by 40%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "Startup",
      title: "Full Stack Developer",
      period: "2020 - 2022",
      points: [
        "Built and maintained multiple client projects",
        "Implemented CI/CD pipelines",
        "Developed RESTful APIs using Node.js"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-green-400 font-mono text-xl">
                portfolio
              </a>
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Profile Picture"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a 
                href="#"
                className="px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400/10 transition-colors duration-300 text-sm"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-green-400 font-mono mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4">John Doe.</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">I build things for the web.</h2>
            <p className="max-w-xl text-gray-400 mb-12">
              I&apos;m a software engineer specializing in building exceptional digital experiences.
              Currently, I&apos;m focused on building accessible, human-centered products.
            </p>
            <a 
              href="#work"
              className="px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400/10 transition-colors duration-300"
            >
              Check out my work!
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <span className="text-green-400 font-mono mr-2">01.</span>
              About Me
            </h2>
            <div className="text-gray-400 space-y-4">
              <p>
                Hello! My name is John and I enjoy creating things that live on the internet.
                My interest in web development started back in 2012 when I decided to try
                editing custom Tumblr themes — turns out hacking together a custom reblog
                button taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of working at various
                companies, a start-up, and a huge corporation. My main focus these days
                is building accessible, inclusive products and digital experiences.
              </p>
              <p>Here are a few technologies I&apos;ve been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▹</span>
                  JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▹</span>
                  React
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▹</span>
                  Node.js
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▹</span>
                  TypeScript
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
            <span className="text-green-400 font-mono mr-2">02.</span>
            Where I&apos;ve Worked
          </h2>
          <div className="max-w-3xl">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="mb-12 transform hover:-translate-x-2 transition-transform duration-300"
              >
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
                  <span className="mx-2 text-green-400">@</span>
                  <span className="text-green-400">{exp.company}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4 font-mono">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">▹</span>
                      <span className="text-gray-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="work" className="py-20">
          <h2 className="text-2xl font-bold text-gray-100 mb-12 flex items-center">
            <span className="text-green-400 font-mono mr-2">03.</span>
            Some Things I&apos;ve Built
          </h2>
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="relative z-10 bg-gray-800/90 p-6 md:p-8 rounded-lg backdrop-blur-sm
                              transform transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-100 mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-green-400 text-sm font-mono">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-gray-400 hover:text-green-400">
                      <Github size={20} />
                    </a>
                    <a href={project.external} className="text-gray-400 hover:text-green-400">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects Grid */}
        <section className="py-20">
          <h3 className="text-xl font-bold text-center text-gray-100 mb-12">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="text-green-400" size={40} />
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-gray-400 hover:text-green-400">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-green-400 text-sm font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center justify-center">
            <span className="text-green-400 font-mono mr-2">04.</span>
            What&apos;s Next?
          </h2>
          <h3 className="text-4xl font-bold text-gray-100 mb-6">Get In Touch</h3>
          <p className="max-w-md mx-auto text-gray-400 mb-8">
            Whether you have a question or just want to say hi, I&apos;ll try my best
            to get back to you!
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-gray-400 hover:text-green-400">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <Mail size={24} />
            </a>
          </div>
          <a 
            href="mailto:hello@example.com"
            className="px-8 py-4 border border-green-400 text-green-400 rounded hover:bg-green-400/10 transition-colors duration-300"
          >
            Say Hello
          </a>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-400">
          <p>Built with React & Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;

