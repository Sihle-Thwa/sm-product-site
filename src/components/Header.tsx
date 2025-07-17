"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {

    return (
        <header>
            <div className="_header-container">
                {/* Logo */}

                <Link href="/" className="flex items-center shrink-0">
                    <Image
                        src="/Logo_title.png"
                        alt="SBM Concepts logo"
                        width={100}
                        height={80}
                        className="_header-logo object-contain h-10"
                    />
                </Link>
                {/* Desktop Navigation */}
                <div className="hidden md:flex w-full items-end justify-end">
                    <Navigation />
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    <MobileMenu />
                </div>
            </div>
        </header >
    );
}
