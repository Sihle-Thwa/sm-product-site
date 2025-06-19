// src/sections/HeroSection.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        //Hero Section
        <section className="flex flex-col items-center w-full">
            { /*Section */}
            <div className="flex flex-col items-center w-full gap-16 pt-24">
                { /*Container */}
                <div className="container mx-auto flex flex-col items-center gap-8 px-8">
                    { /*Content */}
                    <div className="flex flex-col items-center w-full gap-12">
                        { /*Heading and Subheading */}
                        <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
                            { /*Heading/Display */}
                            <h1 className="heading-xl-semibold w-full">
                                The Complete Sports Management Solution
                            </h1>
                            { /*Subheading */}
                            <p className="text-xl-regular max-w-2xl">
                                Streamline team management, player development, and operations in one uniformed platform.
                            </p>
                        </div>
                        { /*CTA-Buttons */}
                        <div className="flex items-start gap-3">
                            <Button className="">Book Demo</Button>
                            <Button className="">Sign up</Button>
                        </div>
                    </div>
                </div>
                { /*Image-Container */}
                <div className="container mx-auto flex flex-col items-center gap-8 px-8">
                    { /*Image-Content */}
                    <div className="flex justify-center w-full">
                        { /*Hero-Image */}
                        <Image
                            src="/HeroSection.png"
                            alt="Hero Image"
                            width={1220}
                            height={710}
                            className="w-full max-w-[1220px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
