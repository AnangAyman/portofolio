"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TimelineNode } from "@/components/ui/TimelineNode";

const MILESTONES = [
    // --- 2023 ---
    {
        era: "2023",
        events: [
            {
                type: "polaroid" as const,
                isLeft: true,
                title: "High School Grad",
                subtitle: "DSC International Class of '23. Honors Graduate.",
                imageSrc: "/static/Graduation.jpeg",
                imageCaption: "Graduated! 🎓",
            },
            {
                type: "sticky" as const,
                isLeft: false,
                icon: "🏆",
                title: "Awards",
                bullets: ["Ontario Scholar Graduate", "3rd: Harvard Stock Market", "Distinction: Top 15th(HK) Waterloo Exam"],
            },
            {
                type: "sticky" as const,
                isLeft: true,
                icon: "🎓",
                title: "Education",
                bullets: ["BINUS University", "Computer Science", "Global Class Program"],
            },
            {
                type: "polaroid" as const,
                isLeft: false,
                title: "Volunteer Educator",
                subtitle: "Educating orphaned children in the community.",
                imageSrc: "/static/teachforindonesia.jpeg",
                imageCaption: "Social Impact 🇮🇩",
            }
        ]
    },
    // --- 2024 ---
    {
        era: "2024",
        events: [
            {
                type: "polaroid" as const,
                isLeft: true,
                title: "Backend Intern",
                subtitle: "Digital Agri Solutions. Built secure OIDC providers.",
                imageSrc: "/static/OpenID_Connect.png",
                imageCaption: "First Intern 💻",
            },
            {
                type: "polaroid" as const,
                isLeft: false,
                title: "Event Chairman",
                subtitle: "Led the HIMTI x BCA Webinar collaboration.",
                imageSrc: "/static/Himti_ITB.jpeg",
                imageCaption: "Chairman 🎤",
            }
        ]
    },
    // --- 2025 ---
    {
        era: "2025",
        events: [
            {
                type: "polaroid" as const,
                isLeft: true,
                title: "Made SignLingo",
                subtitle: "AI Sign Language app using Hybrid CNN-LSTM.",
                imageSrc: "/static/Signlingo_thumbnail.png",
                imageCaption: "SignLingo 🚀",
            },
            {
                type: "polaroid" as const,
                isLeft: false,
                title: "Academic Manager",
                subtitle: "Leading initiatives for student-industry connection.",
                imageSrc: "/static/talkshow_himti_light.jpg",
                imageCaption: "Manager 👔",
            }
        ]
    }
];

export default function JourneyPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    // Fading the beam opacity in and out at extremes
    const beamOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    return (
        <main className="min-h-screen bg-[#060913] pt-32 pb-32 relative font-sans overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 max-w-5xl relative z-10" ref={containerRef}>
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white">
                        My <span className="text-[#10b981]">Journey</span>
                    </h1>
                    <p className="text-white/60 text-xl font-light">
                        Milestones, Memories & Code.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Scroll Spine (The track) */}
                    <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-white/5 border-l border-white/10 hidden md:block" />

                    {/* The Glowing Laser Beam measuring scroll */}
                    <motion.div
                        style={{ height: beamHeight, opacity: beamOpacity }}
                        className="absolute left-[20px] md:left-[50%] top-0 w-0.5 md:-translate-x-1/2 bg-[#10b981] hidden md:block shadow-[0_0_15px_#10b981,0_0_30px_#10b981]"
                    />

                    {MILESTONES.map((eraBlock, eraIndex) => (
                        <div key={eraBlock.era} className="mb-32">
                            {/* Era Badge */}
                            <div className="flex md:justify-center mb-16 relative z-10 pl-8 md:pl-0">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                >
                                    {eraBlock.era}
                                </motion.div>
                            </div>

                            {/* Events in this Era */}
                            <div className="space-y-12 md:space-y-0 pl-8 md:pl-0">
                                {eraBlock.events.map((event, eventIndex) => (
                                    <TimelineNode
                                        key={`${eraBlock.era}-${eventIndex}`}
                                        {...event}
                                        delay={0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Currently Cooking Badge */}
                    <div className="flex md:justify-center mt-32 relative z-10 pl-8 md:pl-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#10b981]/20 border border-[#10b981]/50 text-white font-bold text-lg"
                        >
                            <svg className="w-5 h-5 animate-spin text-[#10b981]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Currently Cooking...
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
