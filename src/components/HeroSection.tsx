"use client";
// src/sections/HeroSection.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-white flex flex-col pt-24 gap-16 items-center justify-center self-stretch">
            <div className="flex flex-col pb-0 pl-8 g-8 items-center">
                <div className="flex flex-col items-center gap-12 self-center">
                    <h1 className="text-4xl font-bold text-gray-900">The Complete Sports Management Solution</h1>
                    <p className="mt-4 text-lg text-gray-600">Streamline team management, player development, and operations in one uniformed platform.</p>
                    <div className="flex items-start gap-3">
                        <button className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">Book Demo</button>
                        <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100">Sign up</button>
                    </div>

                </div>

            </div>
            <div className="flex flex-col items-center gap-8 px-0 py-8">
                <Image src="/HeroSection.png" alt="Hero Image" width={1200} height={700} />
            </div>
        </section >
    );
}
