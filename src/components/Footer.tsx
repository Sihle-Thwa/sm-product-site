"use client";

import React from "react";
import Image from "next/image";
import FooterItem from "./FooterItem";
import { footerItems } from "../data/footer";

export default function Footer() {
    return (
        <div className="s_footer-wrap">
            <div className="c_footer-container">
                {/* Top Links */}
                <div className="_footer-content">
                    {footerItems.map((item) => (
                        <FooterItem key={item.title} title={item.title} items={item.items} />
                    ))}
                </div>
            </div>

            {/* Bottom Area */}
            <div className="_footer-bottom-container">
                <div className="_footer-bottom-content">
                    <Image
                        src="/Logo_title.png"
                        alt="SBM Concepts company logo"
                        width={150}
                        height={50}
                        className="_footer-logo"
                    />
                    <div className="_footer-bottom-text text-sm-regular md:text-xs-regular sm:text-xs-regular">
                        &copy; {new Date().getFullYear()} SBM Concepts. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
