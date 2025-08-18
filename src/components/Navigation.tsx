"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Pricing", href: "#pricing" },
    { label: "Metrics", href: "#metrics" },
];

export default function Navigation() {
    return (
        <NavigationMenu className="nav">
            <NavigationMenuList className="nav-list">
                {NAV_ITEMS.map(({ label, href }) => (
                    <NavigationMenuItem key={label} className="nav-item">
                        <NavigationMenuLink href={href} className="nav-link">
                            {label}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
