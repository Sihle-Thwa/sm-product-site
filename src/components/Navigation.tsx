"use client";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
    return (

        <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
                {["Products", "Features", "Pricing", "FAQ"].map((item) => (
                    <NavigationMenuItem key={item} className="flex items-center">
                        <NavigationMenuLink href={`#${item.toLowerCase()}`}>
                            {item}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
        </NavigationMenu>
    );
}