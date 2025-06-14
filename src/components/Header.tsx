// components/Header.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold">
                    <Image src="/logo_title.png" alt="Logo" width={100} height={40} />
                </Link>

                {/* Desktop nav */}
                <Navigation />

                {/* Mobile menu trigger */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="mt-6 flex flex-col gap-4 text-base font-medium">
                            <Link href="/products">Products</Link>
                            <Link href="/resources">Resources</Link>
                            <Link href="/pricing">Pricing</Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
