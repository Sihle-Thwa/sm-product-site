"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {

    return (
        <header>
            <div className="container max-w-7xl w-full  mx-auto px-4 py-4 flex flex-row items-center justify-between ">
                {/* Logo */}
                <div className="flex items-start">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/Logo_title.png"
                            alt="SBM Concepts logo"
                            width={100}
                            height={80}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className=" items-end w-full hidden md:flex  ">
                    <Navigation />
                </div>

                {/* Mobile Menu */}
                <div className="items-end md:hidden">
                    <MobileMenu />
                </div>
            </div>
        </header >
    );
}
