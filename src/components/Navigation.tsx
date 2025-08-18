"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
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
