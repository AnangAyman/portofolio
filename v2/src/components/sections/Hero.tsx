"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const TECH_STACK = [
    { name: "Python", color: "#3776AB" },
    { name: "SQL", color: "#00758F" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Flask", color: "#FFF" },
    { name: "Django", color: "#44B78B" },
    { name: "FastAPI", color: "#009688" },
    { name: "React.js", color: "#61DAFB" },
    { name: "Next.js", color: "#FFF" },
    { name: "Tailwind CSS", color: "#38B2AC" },
    { name: "TensorFlow", color: "#FF6F00" },
    { name: "Docker", color: "#2496ED" }
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Motion values for the 3D tilt effect on the card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement using springs
    // Increased damping for an even smoother return to center
    const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };

    // Subtle tilt (max 4 degrees)
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

    // Lighting effect based on mouse position
    const lightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, 90]), springConfig);
    const lightY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, 90]), springConfig);
    const background = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255, 255, 255, 0.08) 0%, transparent 80%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate mouse position relative to center of the card (-0.5 to 0.5 range)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20"
        >
            {/* Heavy glowing orb behind the card for volumetric depth - now accented */}
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#d4af37]/15 via-white/5 to-[#10b981]/15 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="w-full max-w-5xl" style={{ perspective: 1200 }}>
                {/* Entrance Animation Wrapper to isolate transform properties from the hover tilt */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Hover Tilt Wrapper */}
                    <motion.div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="glass-panel relative flex flex-col md:flex-row items-center gap-12 p-10 md:p-14 mb-20 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                    >
                        {/* Subtle dynamic overlay light */}
                        <motion.div
                            className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-50 max-md:hidden"
                            style={{ background }}
                        />

                        {/* Left Column: Bio & Tech Stack */}
                        <div className="flex-1 relative z-10" style={{ transform: "translateZ(30px)" }}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                            >
                                <h2 className="text-xl md:text-2xl font-medium text-[#d4af37] mb-2">Hello, I&apos;m</h2>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                                    Anang Ayman
                                </h1>
                                <h3 className="text-xl md:text-2xl font-medium text-[#10b981] mb-6">
                                    Backend Engineer & ML Enthusiast
                                </h3>

                                <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
                                    Specializing in robust API architectures, Applied Machine Learning, and translating complex business logic into secure, scalable enterprise infrastructure.
                                </p>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {TECH_STACK.map(({ name, color }, i) => (
                                        <motion.span
                                            key={name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.03, duration: 0.3 }}
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: `${color}1A`,
                                                borderColor: color,
                                                transition: { duration: 0.1 }
                                            }}
                                            className="px-4 py-1.5 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] cursor-default"
                                            style={{
                                                textShadow: `0 0 10px ${color}66`
                                            }}
                                        >
                                            {name}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-4">
                                    <a href="#projects" className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_#d4af37]">
                                        View Projects
                                    </a>
                                    <a href="/static/CV_Resume.pdf" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold backdrop-blur-md hover:bg-white/10 hover:border-[#10b981] active:scale-95 transition-all duration-300">
                                        Download Resume
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: 3D Floating Profile Card */}
                        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 shrink-0" style={{ transform: "translateZ(50px)" }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                                className="w-full h-full relative rounded-squircle overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 pointer-events-none" />
                                <Image
                                    src="/images/profile_pic.png"
                                    alt="Anang Ayman"
                                    fill
                                    sizes="(max-width: 768px) 256px, 320px"
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </div>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
