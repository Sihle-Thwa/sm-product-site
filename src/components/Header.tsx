"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header aria-label="Site header" className="s_header">
            <div className="c_header">
                <div className="c_header-content">
                    <Link href="/" aria-label="Homepage" className="c_header-brand">
                        <Image
                            src="/Logo_title.png"
                            alt="SBM Concepts logo"
                            width={120}
                            height={40}
                            className="c_header-logo"
                            priority
                        />
                    </Link>

                    <nav aria-label="Primary navigation" className="c_header-nav">
                        <Navigation />
                    </nav>

                    <div className="c_header-mobile">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}
