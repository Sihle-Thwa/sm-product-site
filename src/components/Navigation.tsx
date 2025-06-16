"use client";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
    return (

        <NavigationMenu >
            <NavigationMenuList className="flex items-center justify-between">
                <NavigationMenuItem className="flex items-center gap-2">
                    <NavigationMenuLink href="#products">Products</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center gap-2">
                    <NavigationMenuLink href="#features">Features</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center gap-2">
                    <NavigationMenuLink href="#pricing">Pricing</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center gap-2">
                    <NavigationMenuLink href="#faq">FAQ</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
        </NavigationMenu>

    );
}