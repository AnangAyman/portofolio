"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import React from "react";

const EXPERIENCES = [
    {
        role: "Back-end Engineer Intern",
        company: "Digital Agri Solutions",
        location: "Melbourne, Australia (Remote)",
        date: "Oct 2024 – Nov 2025",
        description: "Engineered enterprise-grade OAuth 2.0 infrastructure from the ground up. Transitioned legacy authentication systems to modern microservices by deploying \"Zero-Downtime\" password migrations and advanced PKCE cryptographic protocols.",
        badges: ["Python 3.11", "Flask", "OIDC", "Docker", "MySQL", "Zero-Downtime"],
        isFeatured: true,
        colSpan: "md:col-span-2 md:row-span-1",
        delay: 0.1
    },
    {
        role: "Manager of Academic Events",
        company: "HIMTI Binus",
        location: "Jakarta, Indonesia",
        date: "Mar 2025 – Dec 2025",
        description: "Spearheaded cross-campus operations and strategic corporate partnerships for Greater Jakarta's premier academic tech initiatives. Directed a distributed 60+ person team across 3 campuses.",
        badges: ["Project Management", "B2B Relations", "Leadership"],
        isFeatured: false,
        colSpan: "md:col-span-1 md:row-span-1",
        delay: 0.2
    }
];

export function Experience() {
    return (
        <section id="experience" className="relative max-w-6xl mx-auto px-4 py-32 z-10">
            <div className="mb-16 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                    Experience & <span className="text-[#d4af37]">Leadership</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl">
                    A timeline of my professional journey, bridging complex technical engineering with high-impact community leadership.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                {EXPERIENCES.map((exp, i) => (
                    <BentoCard key={i} delay={exp.delay} className={exp.colSpan}>
                        {exp.isFeatured && (
                            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold uppercase tracking-wider w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
                                </span>
                                Featured Professional Experience
                            </div>
                        )}

                        <div className="flex flex-col justify-between h-full gap-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                    {exp.role}
                                </h3>
                                <div className="text-[#10b981] font-medium text-lg md:text-xl mb-6">
                                    @ {exp.company}
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-white/50 mb-6 pb-6 border-b border-white/5">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {exp.date}
                                    </span>
                                    <span className="hidden sm:block text-white/20">•</span>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {exp.location}
                                    </span>
                                </div>

                                <p className="text-white/70 leading-relaxed text-base">
                                    {exp.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6">
                                {exp.badges.map(badge => (
                                    <span key={badge} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs font-medium backdrop-blur-sm">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
