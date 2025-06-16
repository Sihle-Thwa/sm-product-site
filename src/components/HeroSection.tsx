"use client";
// src/sections/HeroSection.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col pt-16 items-center gap-8 self-stretch">
            <div className="flex flex-col items-center gap-8 px-8 max-w-[1280px]">
                <div className="flex flex-col items-center self-stretch gap-12">
                    <div className="flex flex-col items-center max-w-[1024px] gap-6">
                        <div className="heading-xl">The Complete Sports Management Solution</div>
                        <div className="heading-sm">Streamline team management, player development, and operations in one uniformed platform.</div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Button className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">Book Demo</Button>
                        <Button className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100">Sign up</Button>
                    </div>

                </div>

            </div>
            <div className="flex flex-col items-center max-w-[1280px] gap-8 px-0 py-8">
                <div className="flex items-center justify-center self-stretch">
                    <Image src="/HeroSection.png" alt="Hero Image" width={1200} height={700} />
                </div>
            </div>
        </section >
    );
}
