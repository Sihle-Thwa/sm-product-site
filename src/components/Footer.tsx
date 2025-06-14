"use client";
import React from "react";
import Image from "next/image";
import FooterItem from "./FooterItem";
import { footerItems } from "../data/footer";


export default function Footer() {
    return (
        <footer className="bg-gray-100 flex flex-col items-center self-stretch gap-16 py-8 px-4">
            <div className="flex flex-col items-center self-stretch gap-8 px-16">
                <div className="flex items-center justify-between self-stretch">
                    {footerItems.map((item) => (
                        <FooterItem key={item.title} title={item.title} items={item.items} />
                    ))}
                </div>

            </div>
            <hr className="w-full border-gray-300" />
            <div className="flex flex-row items-center self-stretch justify-between px-16">
                <div className="flex flex-col items-start justify-start">
                    {/*SBM Concepts Logo */}
                    <Image src="/Logo_title.png" alt="SBM Concepts Logo" width={120} height={40} />
                </div>
                <div className="flex flex-col items-end justify-end">
                    <p>&copy; {new Date().getFullYear()} SBM Concepts. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}