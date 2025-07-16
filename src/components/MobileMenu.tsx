"use client";
import React from "react";

const navItems = [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function MobileMenu() {
    return (
        <nav className="flex space-x-4">
            {navItems.map(({ label, href }) => (
                <a
                    key={label}
                    href={href}
                    className="text-sm-medium hover:text-accent transition-colors"
                >
                    {label}
                </a>
            ))}
        </nav>
    );
}
