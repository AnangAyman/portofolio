"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface TimelineNodeProps {
    type: "polaroid" | "sticky";
    title: string;
    subtitle?: string;
    description?: string;
    bullets?: string[];
    imageSrc?: string;
    imageCaption?: string;
    icon?: string;
    isLeft: boolean;
    delay?: number;
}

export function TimelineNode({
    type,
    title,
    subtitle,
    description,
    bullets,
    imageSrc,
    imageCaption,
    icon,
    isLeft,
    delay = 0,
}: TimelineNodeProps) {
    // Animation variants
    const slideVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30, rotate: isLeft ? -5 : 5 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: isLeft ? -2 : 2,
            transition: { type: "spring", stiffness: 100, damping: 15, delay }
        },
    } as any;

    const dotVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: delay + 0.1, type: "spring" } },
    } as any;

    return (
        <div className="relative flex w-full mb-16 md:mb-24">
            {/* Center Dot connecting to the spine */}
            <motion.div
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                className="absolute left-[50%] top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#10b981] border-2 border-[#060913] shadow-[0_0_15px_rgba(16,185,129,0.5)] z-20 hidden md:block"
            />

            <div className={`w-full md:w-1/2 flex px-4 md:px-0 ${isLeft ? "md:justify-end md:pr-10 lg:pr-16" : "md:ml-auto md:justify-start md:pl-10 lg:pl-16"} relative z-10`}>
                <motion.div
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 30, transition: { duration: 0.2 } }}
                    className={`relative w-full max-w-[320px] lg:max-w-sm ${isLeft ? 'origin-right' : 'origin-left'} transition-shadow duration-300 shadow-xl`}
                >
                    {type === "polaroid" ? (
                        // --- POLAROID CARD ---
                        <div className="bg-[#f8f9fa] p-4 pb-6 rounded-sm rotate-1 hover:rotate-0 transition-transform shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/80">
                            {imageSrc && (
                                <div className="relative w-full aspect-square mb-4 overflow-hidden bg-black/10 border border-black/5">
                                    <Image
                                        src={imageSrc}
                                        alt={title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                    {imageCaption && (
                                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded font-medium">
                                            {imageCaption}
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="px-2 text-center">
                                <h4 className="font-bold text-gray-900 text-xl tracking-tight mb-1">{title}</h4>
                                {(subtitle || description) && (
                                    <p className="text-gray-600 font-medium text-sm border-t border-gray-200 pt-2 mt-2 font-handwriting">
                                        {subtitle || description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        // --- STICKY NOTE CARD ---
                        <div className={`relative p-6 px-8 rounded-sm shadow-[5px_5px_15px_rgba(0,0,0,0.4)] rotate-[-2deg] hover:rotate-0 transition-transform ${isLeft ? 'bg-[#fef08a]' : 'bg-[#a7f3d0]'} text-gray-900`}>
                            {/* Tape Strip */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-[-3deg]" />

                            <h4 className="font-bold text-xl mb-3 flex items-center gap-2 border-b border-black/10 pb-2">
                                {icon && <span>{icon}</span>}
                                {title}
                            </h4>

                            {bullets && bullets.length > 0 ? (
                                <ul className="list-disc pl-5 space-y-1.5 font-medium text-sm text-gray-800">
                                    {bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="font-medium text-sm text-gray-800">{description}</p>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
