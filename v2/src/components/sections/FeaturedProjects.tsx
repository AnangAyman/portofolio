"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "Custom OIDC Identity Provider",
        description: "Engineered a centralized authentication system for Digital Agri Solutions. I translated business requirements into a secure OAuth 2.0 implementation, enabling Single Sign-On (SSO) for internal tools.",
        techStack: ["Flask", "Authlib", "Docker", "MySQL"],
        imageSrc: "/static/OpenID_Connect.png",
        tag: "Professional Experience",
        tagColor: "#d97706", // Orange-ish matching the original style
        confidentialNote: "*Source code is proprietary. Case study focuses on system architecture and standards compliance.",
    },
    {
        title: "SignLingo AI",
        description: "An interactive sign language learning platform powered by computer vision. I led a 10-person team to build a hybrid CNN-LSTM model that recognizes hand gestures in real-time through the browser, making accessibility education scalable.",
        techStack: ["Python", "TensorFlow", "Computer Vision", "CNN-LSTM Architecture"],
        imageSrc: "/static/Signlingo_thumbnail.png",
        tag: "Flagship Project",
        tagColor: "#10b981", // Green matching the accent
    },
    {
        title: "Flux Budget App",
        description: "A comprehensive digital financial wallet designed to unify personal finance management. I collaborated with a 5-person team to build a robust platform featuring real-time expense tracking, automated recurring bills, and interactive analytics.",
        techStack: ["Laravel", "PHP", "MySQL", "Railway"],
        imageSrc: "/static/flux_budget_app.jpg",
        tag: "Web Development",
        tagColor: "#3b82f6", // Blue
    }
];

export function FeaturedProjects() {
    return (
        <section id="work" className="relative max-w-7xl mx-auto px-4 py-32 z-10">
            <div className="mb-24 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                    Featured <span className="text-[#10b981]">Projects</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                    Selected works spanning secure enterprise architecture, applied artificial intelligence, and full-stack web development.
                </p>
            </div>

            <div className="flex flex-col gap-32">
                {PROJECTS.map((project, i) => {
                    const isEven = i % 2 !== 0;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 group relative ${isEven ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Background Blob */}
                            <div
                                className={`absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-10 blur-[60px] md:blur-[80px] -z-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none ${isEven ? 'right-0 lg:-right-32' : 'left-0 lg:-left-32'}`}
                                style={{
                                    background: `radial-gradient(circle, ${project.tagColor} 0%, transparent 70%)`
                                }}
                            />

                            {/* Browser Mockup Visual Side */}
                            <div
                                className="w-full lg:flex-1 relative perspective-1000 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-5 group-hover:scale-[1.02]"
                            >
                                <div
                                    className="rounded-xl overflow-hidden backdrop-blur-md bg-gray-900/80 border border-white/10 transition-shadow duration-500"
                                    style={{
                                        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 20px 50px -10px rgba(0, 0, 0, 0.5)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = `0 0 0 1px ${project.tagColor}4D, 0 30px 60px -15px ${project.tagColor}33`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 0 0 1px rgba(255, 255, 255, 0.1), 0 20px 50px -10px rgba(0, 0, 0, 0.5)';
                                    }}
                                >
                                    {/* Browser Header */}
                                    <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80" />
                                    </div>
                                    {/* Image wrapper */}
                                    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={project.imageSrc}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-center opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                            sizes="(max-width: 1024px) 100vw, 60vw"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:flex-[0.9] text-left">
                                <span
                                    className="block text-xs md:text-sm uppercase tracking-[0.15em] font-bold mb-4"
                                    style={{ color: project.tagColor, textShadow: `0 0 10px ${project.tagColor}66` }}
                                >
                                    {project.tag}
                                </span>

                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-[#4ade80]/15 hover:text-[#a5b4fc] hover:border-[#4ade80]/40 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(74,222,128,0.25)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.confidentialNote && (
                                    <div className="mb-6 text-xs text-white/40 italic flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {project.confidentialNote}
                                    </div>
                                )}

                                <a
                                    href="#"
                                    className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/10 mt-auto"
                                >
                                    View Details
                                </a>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-32 text-center">
                <a
                    href="#"
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                >
                    View All Projects
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
