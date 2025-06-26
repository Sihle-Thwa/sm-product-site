"use client";
import React from "react";
import Image from "next/image";
import FooterItem from "./FooterItem";
import { footerItems } from "../data/footer";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Top Links */}
                <div className="flex flex-wrap justify-between gap-8">
                    {footerItems.map((item) => (
                        <FooterItem key={item.title} title={item.title} items={item.items} />
                    ))}
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-300 w-full" />

                {/* Bottom Logo + Copy */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Image
                        src="/Logo_title.png"
                        alt="SBM Concepts company logo"
                        width={120}
                        height={40}
                        className="object-contain"
                    />
                    <p className="text-sm-regular text-center md:text-right">
                        &copy; {new Date().getFullYear()} SBM Concepts. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
