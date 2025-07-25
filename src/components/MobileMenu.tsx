"use client";

import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Menu } from "lucide-react";
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
                    className="z-[100] w-[320px] mt-2 p-4 bg-background rounded-lg shadow-lg border animate-fade-in"
                >
                    <nav className="flex flex-col" aria-label="Mobile navigation">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="px-4 py-3 text-sm-medium text-foreground hover:bg-muted transition-colors border-b last:border-b-0"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </PopoverContent>
            </Popover>
        </div>
    );
}
