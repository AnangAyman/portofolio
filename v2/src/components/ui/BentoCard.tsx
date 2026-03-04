"use client";

import { motion } from "framer-motion";
import React from "react";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function BentoCard({ children, className = "", delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-panel p-8 md:p-10 flex flex-col h-full ${className}`}
        >
            {children}
        </motion.div>
    );
}
