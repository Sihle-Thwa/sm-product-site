"use client";

import React from "react";
import Image from "next/image";
import FooterItem from "./FooterItem";
import { footerItems } from "../data/footer";
import SectionDivider from "./SectionDivider";

export default function Footer() {
    return (
        <footer className="s_footer-wrap">
            {/* Top Section */}
            <div className="c_footer-container">
                <div className="_footer-content">
                    {footerItems.map((item) => (
                        <FooterItem
                            key={item.title}
                            title={item.title}
                            items={item.items} />
                    ))}
                </div>
            </div>

            {/* Divider */}
            <SectionDivider />

            {/* Bottom Area */}
            <div className="_footer-bottom-container">
                <div className="_footer-bottom-content">
                    <div className="_footer-logo">
                        <Image
                            src="/Logo_title.png"
                            alt="SBM Concepts company logo"
                            width={160}
                            height={40}

                        />
                    </div>

                    <div className="_footer-bottom-text text-sm-medium">
                        &copy; {new Date().getFullYear()} SBM Concepts. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
