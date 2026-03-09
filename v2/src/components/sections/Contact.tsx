"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="relative max-w-7xl mx-auto px-4 py-24 z-10">
            <div className="mb-16 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                    Let&apos;s <span className="text-[#10b981]">Connect</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl">
                    Feel free to reach out for collaborations, freelance projects, or just a friendly chat.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Available for select freelance opportunities
                    </h3>
                    <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
                        Have an exciting project you need help with? Send me an email or contact me via instant message! I&apos;m always open to discussing web development work or machine learning research.
                    </p>

                    <div className="flex flex-col gap-6 mb-12">
                        <a href="mailto:anang.ayman@gmail.com" className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors w-fit">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#10b981]/50 group-hover:bg-[#10b981]/10 transition-colors">
                                <Mail className="w-5 h-5 group-hover:text-[#10b981] transition-colors" />
                            </div>
                            <span className="text-lg font-medium group-hover:text-[#10b981] transition-colors">anang.ayman@gmail.com</span>
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/muhammad-anang-ayman-ramadhana" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/AnangAyman" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/anang.ayman/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <form className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col gap-6 relative overflow-hidden group">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-white/60 ml-1">Your Name</label>
                                <input type="text" id="name" placeholder="John Doe" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:border-[#10b981] transition-all" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-white/60 ml-1">Your Email</label>
                                <input type="email" id="email" placeholder="john@example.com" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:border-[#10b981] transition-all" required />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 relative z-10">
                            <label htmlFor="subject" className="text-sm font-medium text-white/60 ml-1">Subject</label>
                            <input type="text" id="subject" placeholder="Project Inquiry" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:border-[#10b981] transition-all" required />
                        </div>

                        <div className="flex flex-col gap-2 relative z-10">
                            <label htmlFor="message" className="text-sm font-medium text-white/60 ml-1">Message</label>
                            <textarea id="message" rows={5} placeholder="Tell me about your project..." className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:border-[#10b981] transition-all resize-none" required></textarea>
                        </div>

                        <motion.button
                            type="button" // UI only for now
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-2 w-full py-4 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] font-bold text-lg hover:bg-[#10b981]/20 hover:border-[#10b981]/50 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2 relative z-10"
                            onClick={(e) => {
                                e.preventDefault();
                                alert("Message sending is not hooked up to a backend yet.");
                            }}
                        >
                            <span>Send Message</span>
                            <Send className="w-5 h-5" />
                        </motion.button>

                    </form>
                </motion.div>
            </div>
        </section>
    );
}
