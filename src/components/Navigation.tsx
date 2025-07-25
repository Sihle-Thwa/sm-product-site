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
        <NavigationMenu className="hidden md:flex w-full justify-end">
            <NavigationMenuList className="flex gap-6">
                {navItems.map(({ label, href }) => (
                    <NavigationMenuItem key={label}>
                        <NavigationMenuLink
                            href={href}
                            className="navMenuLink text-sm-regular "
                        >
                            {label}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
