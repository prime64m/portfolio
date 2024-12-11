'use client'

import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Folder } from 'lucide-react';
import Image from 'next/image';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
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
            description: "A group project we built that helps farmers sell their products directly to businesses. ",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/prime64m/krishibazaar",
            external: "https://krishibazar.vercel.app/",
        },
        {
            title: "Project Two",
            description: "A Portfolio website for myself, ",
            tech: ["Next.js", "React", "JavaScript", "Tailwind"],
            github: "https://github.com/prime64m/portfolio",
            external: "https://prime64m.vercel.app/",
        }
    ];

    const otherProjects = [
        {
            title: "Bookshelf Haven",
            description: "In making process",
            tech: ["______", "______"],
            github: "#",
            external: "#", // Add external link
        },
        {
            title: "Markrtplace for farmer",
            description: "Real-time project listing",
            tech: ["React", "Vite", "JaveScript"],
            github: "https://github.com/prime64m/marketplace",
            external: "https://krishi-marketplace.vercel.app/", // Add external link
        },
        {
            title: "Portfolio v1",
            description: "First iteration of my personal website",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/prime64m/priyansh",
            external: "https://alokk.vercel.app/", // Add external link
        }
    ];

    const experiences = [
        {
            title: "Hackathon Participant",
            period: "2023 - Present",
            points: [
                "Created a website for farmers during a hackathon, aiming to eliminate middlemen and promote direct sales.",
                "Improved application performance by 40%",
                "designed a app for the rapid medicine delivery on figma"
            ]
        },
        {
            title: "Self-Learner",
            period: "2024 - Present",
            points: [
                "Strengthening foundational programming concepts through C++ while solving real-world problems.",
                "Explored advanced video editing techniques",
                "Gained hands-on experience in creating a portfolio website to showcase projects and skills."
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
                            <div className="flex items-center space-x-4">
                                <a href="#" className="text-green-400 font-mono text-xl">
                                    portfolio
                                </a>
                                <Image
                                    src="/profile-pic.jpg"
                                    alt="Your Name"
                                    width={145}
                                    height={145}
                                    className="rounded-full"
                                />

                            </div>

                        </div>
                        <div className="hidden md:flex space-x-8">
                            <NavLink href="#about">About</NavLink>
                            <NavLink href="#experience">Experience</NavLink>
                            <NavLink href="#work">Work</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                            <a
                                href="/resume.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
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
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4">Priyanshu Mishra.</h1>
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
                                Hi! I am Priyanshu, a passionate third-semester engineering student
                                who loves bringing ideas to life on the web. My journey into web development
                                began just last year, and it is been an exciting ride of learning and creating
                                ever since!
                            </p>
                            <p>
                                From building projects that solve real-world problems to collaborating in hackathons,
                                I have embraced every opportunity to grow as a developer. These experiences have not
                                only sharpened my technical skills but also fueled my curiosity to explore new tools
                                and technologies.
                                Right now, I am focused on crafting functional, user-friendly web experiences and
                                discovering the endless possibilities of coding.
                            </p>
                            <p>Here are a few technologies I have been working with recently:</p>
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
                        Experience

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
                                        <a href={project.external} className="text-gray-400 hover:text-green-400">
                                            <ExternalLink size={20} />
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
                        <a href="https://www.github.com/prime64m" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/priyansh64" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:priyanshumishra3263@gmail.com" className="text-gray-400 hover:text-green-400">
                            <Mail size={24} aria-label="Email" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "mailto:priyanshumishra3263@gmail.com";
                            }} />
                        </a>
                        <a href="https://www.instagram.com/priyansh.64" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://wa.me/916209389212" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </a>
                    </div>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=priyanshumishra3263@gmail.com&su=Hello%20from%20your%20portfolio&body=Hi%20Priyanshu,%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-green-400 text-green-400 rounded hover:bg-green-400/10 transition-colors duration-300"
                    >
                        Say Hello
                    </a>
                </section>

                {/* Footer */}
                <footer className="py-6 text-center text-sm text-gray-400">
                    <p>2024 - Priyanshu Mishra</p>
                </footer>
            </main>
        </div>
    );
};

export default Portfolio;

