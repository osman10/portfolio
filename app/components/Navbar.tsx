'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Me" },
        { href: "/skils", label: "Skils" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <div
            className={`w-full z-50 transition-all duration-300 ${
                isSticky
                    ? "fixed top-0 left-0 bg-black shadow-lg py-5 translate-y-0 opacity-100"
                    : "absolute top-0 left-0 bg-transparent py-5"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
                <Logo />
                <div className="flex gap-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors ${
                                    isActive
                                        ? "text-dark-orange font-semibold"
                                        : "text-white hover:text-dark-orange"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;