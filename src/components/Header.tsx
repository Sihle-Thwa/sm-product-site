"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header
            className="sticky top-0 z-[var(--z-header)] border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            aria-label="Site header"
        >
            <div className="w-full flex justify-center">
                <div className="_header-container w-full max-w-[1024px] px-4 md:px-8 flex items-center justify-between py-4">
                    <Link
                        href="/"
                        className="flex items-center shrink-0"
                        aria-label="Homepage"
                    >
                        <Image
                            src="/Logo_title.png"
                            alt="SBM Concepts logo"
                            width={100}
                            height={80}
                            className="_header-logo object-contain h-10"
                            priority
                        />
                    </Link>

                    <nav className="hidden md:flex" aria-label="Primary navigation">
                        <Navigation />
                    </nav>

                    <div className="md:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}
