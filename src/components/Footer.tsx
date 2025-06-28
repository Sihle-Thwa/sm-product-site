"use client";
import React from "react";
import Image from "next/image";
import FooterItem from "./FooterItem";
import { footerItems } from "../data/footer";
import SectionDivider from "./SectionDivider";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center w-full py-16 bg-gray-100">
            <div className="container mx-auto flex flex-col items-center gap-8">
                {/* Top Links */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl gap-8 px-4">
                    {footerItems.map((item) => (
                        <FooterItem key={item.title} title={item.title} items={item.items} />
                    ))}
                </div>

                {/* Divider */}
                <SectionDivider />

                {/* Bottom Logo + Copy */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-4 px-4">
                    <Image
                        src="/Logo_title.png"
                        alt="SBM Concepts company logo"
                        width={120}
                        height={40}
                        className="object-contain"
                    />
                    <p className="w-full text-sm-regular text-center md:text-right">
                        &copy; {new Date().getFullYear()} SBM Concepts. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
