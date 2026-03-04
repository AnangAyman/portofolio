"use client";

import { motion } from "framer-motion";
import { HeartHandshake, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

const VOLUNTEERING_DATA = [
    {
        title: "Computer Teacher",
        organization: "Dompet Dhuafa Hong Kong",
        period: "June 2022 – Oct 2022",
        description: "Taught digital literacy and essential computer skills to Indonesian domestic helpers. Developed tailored curriculum to enhance their employability and technical independence.",
        icon: <Users className="w-5 h-5 text-[#d4af37]" />,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", // Placeholder: Teaching/Computers
        colSpan: "md:col-span-2",
        delay: 0.1
    },
    {
        title: "Teaching Scholarship",
        organization: "BINUS University",
        period: "Academic Year",
        description: "Awarded a teaching scholarship where I mentored and tutored peers in core Computer Science subjects to improve collective academic performance.",
        icon: <GraduationCap className="w-5 h-5 text-white/80" />,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", // Placeholder: Mentorship/Students
        colSpan: "md:col-span-1",
        delay: 0.2
    },
    {
        title: "Volunteer Educator",
        organization: "Orphanage Initiatives",
        period: "Community Service",
        description: "Organized educational activities and provided entertainment and mentorship for orphans (anak yatim), fostering a supportive and engaging learning environment.",
        icon: <HeartHandshake className="w-5 h-5 text-[#10b981]" />,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop", // Placeholder: Volunteer/Kids
        colSpan: "md:col-span-3",
        delay: 0.3
    }
];

export function VolunteeringMentorship() {
    return (
        <section className="relative max-w-6xl mx-auto px-4 py-24 mb-12 z-10">
            <div className="mb-16 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                    Volunteering & <span className="text-[#10b981]">Mentorship</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl">
                    Dedicated to community growth, digital literacy, and empowering the next generation of technologists.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VOLUNTEERING_DATA.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: item.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
                        whileHover={{
                            y: -4,
                            scale: 1.01,
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
                        }}
                        className={`rounded-3xl bg-white/[0.015] border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full relative overflow-hidden group ${item.colSpan}`}
                        style={{ backdropFilter: "blur(20px)" }}
                    >
                        {/* Soft interior highlight */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                        {/* Image Header with Gradient Fade */}
                        <div className="relative h-48 w-full overflow-hidden shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                unoptimized // For external placeholder URLs
                            />
                            {/* Overlay gradient to blend image smoothly into the dark card background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060913] to-transparent/20 opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Card Content Area - Offset negatively to overlap the fade */}
                        <div className="p-8 pt-0 flex flex-col flex-grow relative z-10 -mt-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-[#060913]/80 backdrop-blur-md border border-white/10 shadow-lg">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white tracking-tight leading-tight shadow-sm">{item.title}</h3>
                                    <div className="text-white/70 text-sm font-medium mt-1">{item.organization}</div>
                                </div>
                            </div>

                            <p className="text-white/60 leading-relaxed text-sm lg:text-base flex-grow font-normal mt-2">
                                {item.description}
                            </p>

                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-xs font-semibold tracking-wider text-white/40 uppercase">
                                {item.period}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
