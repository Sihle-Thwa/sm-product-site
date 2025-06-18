"use client";
// src/sections/HeroSection.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        //Hero Section
        <section className="flex flex-col items-center self-stretch">
            { /*Section */}
            <div className="flex flex-col items-center self-stretch gap-16 pt-[96px]">
                { /*Container */}
                <div className="flex flex-col items-center max-w-[1280px] gap-8 pl-[32px] pr-[32px]">
                    { /*Content */}
                    <div className="flex flex-col items-center self-stretch gap-12">
                        { /*Heading and Subheading */}
                        <div className="flex flex-col items-center gap-6 max-w-[1024px]">
                            { /*Heading/Display */}
                            <div className="flex flex-col items-center self-stretch gap-4">
                                <div className="heading-xl-semibold self-stretch text-center">
                                    The Complete Sports Management Solution
                                </div>
                            </div>
                            { /*Subheading */}
                            <div className="text-xl-regular text-center max-w-[768px]">
                                Streamline team management, player development, and operations in one uniformed platform.
                            </div>
                        </div>
                        { /*CTA-Buttons */}
                        <div className="flex items-start gap-3">
                            <Button className="flex items-center">Book Demo</Button>
                            <Button className="flex items-center">Sign up</Button>
                        </div>
                    </div>
                </div>
                { /*Image-Container */}
                <div className="flex flex-col items-center max-w-[1280px] pl-[32px] pr-[32px] gap-8">
                    { /*Image-Content */}
                    <div className="flex justify-center items-center self-stretch">
                        { /*Hero-Image */}
                        <Image src="/HeroSection.png" alt="Hero Image" width={1220} height={710} />
                    </div>
                </div>
            </div>
        </section >
    );
}
