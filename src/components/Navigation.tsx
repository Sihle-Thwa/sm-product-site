"use client";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
                {navItems.map(({ label, href }) => (
                    <NavigationMenuItem key={label}>
                        <NavigationMenuLink
                            href={href}
                            className="text-sm-medium"
                        >
                            {label}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
