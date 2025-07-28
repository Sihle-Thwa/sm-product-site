"use client";

import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function MobileMenu() {
    return (
        <div className="block md:hidden">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        className="button button-icon button-accent-outline"
                        aria-label="Toggle mobile menu"
                    >
                        <Menu className="w-5 h-5" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    side="bottom"
                    align="end"
                    sideOffset={8}
                    className="!p-0 !border-0 z-[var(--z-overlay)]"
                    asChild
                >
                    <div className="fixed inset-0 bg-[oklch(0 0 0 / 0.7)] backdrop-blur-sm flex flex-col justify-start items-end">
                        <div className="w-full max-w-lg bg-background h-full shadow-lg p-[var(--space-lg)] flex flex-col gap-[var(--space-md)]">
                            <div className="flex justify-end">
                                <PopoverTrigger asChild>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="button button-icon"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </Button>
                                </PopoverTrigger>
                            </div>
                            <nav className="flex flex-col gap-[var(--space-md)]" aria-label="Mobile Fullscreen Navigation">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-lg-medium text-foreground hover:text-accent transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
