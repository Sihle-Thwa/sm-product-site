"use client";

import React, { useState } from "react";
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
    const [open, setOpen] = useState(false);

    return (
        <div className="block md:hidden">
            <Popover open={open} onOpenChange={setOpen}>
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
                    sideOffset={0}
                    asChild
                    className="!p-0 !border-0 !shadow-none z-12"
                >
                    <div
                        className="fixed inset-0 bg-[oklch(0 0 0 / 0.7)] backdrop-blur-sm z-12"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex flex-col justify-start items-end h-full w-full">
                            <div className="w-full max-w-lg bg-background h-full shadow-lg p-[var(--space-lg)] flex flex-col gap-[var(--space-md)]">
                                {/* Close Button */}
                                <div className="flex justify-end">
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="button button-icon"
                                        aria-label="Close menu"
                                        onClick={() => setOpen(false)}
                                    >
                                        <X className="w-5 h-5" />
                                    </Button>
                                </div>

                                {/* Nav List */}
                                <nav
                                    className="flex flex-col gap-[var(--space-md)]"
                                    aria-label="Mobile Fullscreen Navigation"
                                >
                                    {navItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className="text-lg-medium text-foreground hover:text-accent transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
