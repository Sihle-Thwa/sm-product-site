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
            <div className="s_header-wrap">
                <div className="c_header-container ">
                    <div className="c_header-content">
                        <Link
                            href="/"
                            className="_brand-link"
                            aria-label="Homepage"
                        >
                            <Image
                                src="/Logo_title.png"
                                alt="SBM Concepts logo"
                                width={100}
                                height={40}
                                className="_header-logo"

                            />
                        </Link>

                        <div className="_nav-wrap" aria-label="Primary navigation">
                            <Navigation />
                        </div>

                        <div className="_mobile-nav-wrap">
                            <MobileMenu />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
