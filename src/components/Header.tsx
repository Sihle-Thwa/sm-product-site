"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header
            aria-label="Site header"
        >
            <div className="flex flex-row w-full">
                <div className="_header-container">
                    <Link
                        href="/"
                        className="flex shrink-0 items-center"
                        aria-label="Homepage"
                    >
                        <Image
                            src="/Logo_title.png"
                            alt="SBM Concepts logo"
                            width={100}
                            height={80}
                            className="_header-logo object-contain"
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
