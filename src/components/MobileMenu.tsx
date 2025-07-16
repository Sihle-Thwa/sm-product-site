"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);


    return (

        <div className="block md:hidden">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button
                        className="button button-icon button-accent-outline"
                        size="icon"
                        variant="outline"
                        aria-label="Open mobile menu"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu className="w-5 h-5" />
                    </Button>
                </PopoverTrigger>
                {isOpen && (
                    <PopoverContent
                        side="bottom"
                        align="end"
                        className="fixed inset-0 bg-secondary bg-opacity-50 z-50"
                        sideOffset={4}
                        onClick={() => setIsOpen(false)}
                    >
                        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="px-4 py-3 text-sm-regular text-secondary hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </PopoverContent>
                )}
            </Popover>
        </div>

    );
}