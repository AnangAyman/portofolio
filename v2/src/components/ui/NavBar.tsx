"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#work" },
    { name: "Credentials", href: "/#credentials" },
    { name: "Contact", href: "/#contact" },
];

export function NavBar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("/");

    useEffect(() => {
        if (pathname !== "/") {
            setActiveSection(pathname);
            return;
        }

        // On the home page, we want to track the sections to enable the liquid glass effect
        const handleScroll = () => {
            const sections = ["contact", "credentials", "work", "experience"]; // check reverse order (bottom-up)
            let current = "/";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is somewhat in the top half of the screen
                    if (rect.top <= window.innerHeight / 3) {
                        current = `/#${section}`;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="glass-nav flex items-center gap-1 px-2 py-2">
                {navItems.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveSection(item.href)}
                            className={clsx(
                                "relative px-5 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 rounded-full",
                                isActive ? "text-white" : "text-white/60 hover:text-white"
                            )}
                        >
                            <span className="relative z-10">{item.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.2)] border border-white/10 z-0"
                                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                                />
                            )}
                        </Link>
                    );
                })}

                {/* Vertical Divider */}
                <div className="w-[1px] h-6 bg-white/10 mx-2 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

                {/* My Journey Link */}
                <Link
                    href="/journey"
                    onClick={() => setActiveSection("/journey")}
                    className={clsx(
                        "relative px-5 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 rounded-full flex items-center gap-2",
                        activeSection === "/journey" ? "text-white" : "text-white/60 hover:text-white"
                    )}
                >
                    <span className="relative z-10">My Journey</span>
                    {activeSection === "/journey" && (
                        <motion.div
                            layoutId="nav-indicator"
                            className="absolute inset-0 bg-[#10b981]/15 rounded-full backdrop-blur-md shadow-[inset_0_1px_1px_rgba(16,185,129,0.3),0_4px_12px_rgba(16,185,129,0.2)] border border-[#10b981]/30 z-0"
                            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                        />
                    )}
                </Link>
            </div>
        </motion.nav>
    );
}
