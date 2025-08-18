"use client";

import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Pricing", href: "#pricing" },
    { label: "Metrics", href: "#metrics" },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="mobile-nav">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <button
                        className="mobile-nav-trigger"
                        aria-label={open ? "Close mobile menu" : "Open mobile menu"}
                        aria-expanded={open}
                        aria-controls="mobilemenu-panel"
                    >
                        <Menu className="mobile-nav-triggerIcon" />
                    </button>
                </PopoverTrigger>

                <PopoverContent asChild sideOffset={0} className="mobile-nav-content">
                    <div
                        role="dialog"
                        aria-modal="true"
                        id="mobilemenu-panel"
                        className="mobile-nav-overlay"
                    >
                        <div className="mobile-nav-panel">
                            <div className="mobile-nav-panelHeader">
                                <button
                                    className="mobile-nav-close"
                                    aria-label="Close menu"
                                    onClick={() => setOpen(false)}
                                >
                                    <X className="mobile-nav-close-icon" />
                                </button>
                            </div>

                            <nav
                                className="mobile-nav-list"
                                aria-label="Mobile fullscreen navigation"
                            >
                                {NAV_ITEMS.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="mobile-nav-link"
                                        onClick={() => setOpen(false)}
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
