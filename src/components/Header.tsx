// components/Header.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        /** Dropdown Header Nav */
        <header >
            {/*Header Container */}
            <div className="header-container" >
                {/* Logo with link to home */}
                <div >
                    <Link href="/" >
                        <Image src="/logo_title.png" alt="Logo" width={100} height={80} />
                    </Link>
                </div>

                {/* Desktop nav */}
                <div>
                    <Navigation />
                </div>

                {/* Mobile menu trigger */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetTitle className="sr-only">Main navigation</SheetTitle>
                        <nav>
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
