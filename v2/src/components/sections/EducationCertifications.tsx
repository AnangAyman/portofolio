"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Building2, ShieldCheck } from "lucide-react";

export function EducationCertifications() {
    const education = [
        {
            school: "BINUS University",
            degree: "Bachelor of Computer Science",
            period: "2023 - 2027",
            location: "Jakarta, ID",
            score: "GPA: 3.88 / 4.00",
            highlights: "Specializing in Artificial Intelligence & Web Development. Developing a strong foundation in algorithms, data structures, and software engineering principles."
        },
        {
            school: "Delia School of Canada",
            degree: "High School Diploma",
            period: "2020 - 2023",
            location: "Hong Kong",
            score: "Score: 86 / 100",
            highlights: "Completed the rigorous Ontario curriculum with distinction. Established strong analytical skills through advanced coursework in Calculus and Computer Science."
        }
    ];

    const certifications = [
        {
            name: "Alibaba Cloud Associate (Cloud Engineer)",
            issuer: "Alibaba Cloud",
            date: "May 2025",
            credentialId: "IACA13250500210461L",
            viewUrl: "#",
            verifyUrl: "#"
        },
        {
            name: "Building Conversational AI Applications",
            issuer: "NVIDIA",
            date: "Aug 2025",
            credentialId: "C8GNGRZhTAicYiL42FWjVw",
            viewUrl: "#",
            verifyUrl: "#"
        },
        {
            name: "Samsung Innovation Campus",
            issuer: "Samsung",
            date: "Sep 2024",
            credentialId: "SKILVUL/CERT/SIC5/2024.IX/2488",
            viewUrl: "#"
        },
        {
            name: "CS50's Introduction to Programming with Python",
            issuer: "Harvard University",
            date: "Sep 2024",
            credentialId: "a641def1-b538-4318-a477-9156e8f09941",
            viewUrl: "#"
        },
        {
            name: "AWS Intro to Compute",
            issuer: "Amazon Web Services (AWS)",
            date: "Jan 2024",
            viewUrl: "#",
            verifyUrl: "#"
        },
        {
            name: "AWS Educate Cloud 101",
            issuer: "Amazon Web Services (AWS)",
            date: "Jan 2024",
            viewUrl: "#",
            verifyUrl: "#"
        }
    ];

    return (
        <section id="credentials" className="relative z-10 py-24 mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                <GraduationCap className="w-5 h-5 text-white/80" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-white">Education</h2>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-1">{edu.school}</h3>
                                    <p className="text-[#10b981] text-sm font-medium mb-4">{edu.degree}</p>
                                    <p className="text-white/60 text-sm leading-relaxed mb-6">{edu.highlights}</p>

                                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white/40 uppercase tracking-wider font-semibold">Period</span>
                                            <span className="text-white/80">{edu.period}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white/40 uppercase tracking-wider font-semibold">Location</span>
                                            <span className="text-white/80">{edu.location}</span>
                                        </div>
                                        <div className="col-span-2 flex flex-col gap-1 pt-2 border-t border-white/5">
                                            <span className="text-white/40 uppercase tracking-wider font-semibold">Achievement</span>
                                            <span className="text-white font-medium">{edu.score}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                <Award className="w-5 h-5 text-white/80" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-white">Licenses & Certifications</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ y: -2 }}
                                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full relative overflow-hidden group"
                                >
                                    {/* Hover Soft Glow Background Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="flex-grow relative z-10">
                                        <h3 className="text-sm font-semibold text-white leading-snug mb-2 pr-2">{cert.name}</h3>
                                        <div className="flex items-center gap-1.5 text-white/60 text-xs mb-3">
                                            <Building2 className="w-3.5 h-3.5" />
                                            <span>{cert.issuer}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-white/5 text-xs relative z-10">
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-white/40">Issued</span>
                                            <span className="text-white/80">{cert.date}</span>
                                        </div>
                                        {cert.credentialId && (
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-white/40">ID</span>
                                                <span className="text-white/60 font-mono truncate ml-4" title={cert.credentialId}>
                                                    {cert.credentialId}
                                                </span>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-auto pt-2">
                                            {cert.viewUrl && (
                                                <motion.a
                                                    href={cert.viewUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white transition-colors text-xs font-medium backdrop-blur-sm"
                                                >
                                                    <span>View</span>
                                                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                                                </motion.a>
                                            )}

                                            {cert.verifyUrl && (
                                                <motion.a
                                                    href={cert.verifyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.03, backgroundColor: "rgba(16, 185, 129, 0.15)" }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] hover:text-[#10b981] hover:border-[#10b981]/50 transition-colors text-xs font-semibold backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                                                >
                                                    <span>Verify</span>
                                                    <ShieldCheck className="w-3.5 h-3.5" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
