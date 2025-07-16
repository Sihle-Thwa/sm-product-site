"use client";
import React from "react";
import Image from "next/image";
import FooterItem from "./FooterItem";
import { footerItems } from "../data/footer";
import SectionDivider from "./SectionDivider";

export default function Footer() {
    return (
        <footer className="s_footer-wrap">
            <section className="c_footer-container">
                {/* Top Links */}
                <div className="_footer-content">
                    {footerItems.map((item) => (
                        <FooterItem key={item.title} title={item.title} items={item.items} />
                    ))}
                </div>



            </section>
            {/* Divider */}
            <SectionDivider />
            {/* Bottom Logo + Copy */}
            <section className="_footer-bottom-wrap ">
                <Image
                    src="/Logo_title.png"
                    alt="SBM Concepts company logo"
                    width={120}
                    height={40}
                    className="object-cover"
                />
                <div className="_footer-bottom-text text-sm-regular">
                    &copy; {new Date().getFullYear()} SBM Concepts. All rights reserved.
                </div>
            </section>
        </footer>
    );
}
