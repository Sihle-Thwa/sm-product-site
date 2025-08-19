"use client";

import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header aria-label="Site header" className="s_header">
            <div className="c_header">
                <div className="c_header-content">
                    <div className="c_header-brand" id="home"
                        style={{ position: "relative", objectFit: "contain", }}
                    >
                        <a href="" className="c_header-logo-link" id="home"> 
                        <Image
                            src="/Logo_title.png"
                            alt="SBM Concepts logo"
                            className="c_header-logo"
                            loading="lazy"
                            fill={true}

                            /></a>
                    </div>

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
