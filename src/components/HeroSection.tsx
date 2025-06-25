"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="w-full py-20 bg-[--surface-base]">
            <div className="max-w-7xl mx-auto px-4 space-y-16 text-center">
                {/* Hero Content */}
                <div className="space-y-8 max-w-4xl mx-auto">
                    <h1 className="heading-xl-bold md:heading-lg-bold ">
                        The Complete Sports Management Solution
                    </h1>
                    <p className="text-lg-medium md:text-md-medium max-w-2xl mx-auto">
                        Streamline team management, player development, and operations in one uniformed platform.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button className="button button-accent">Book Demo</Button>
                        <Button className="button button-primary">Sign Up</Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center">
                    <Image
                        src="/HeroSection.png"
                        alt="Athletes using the sports management platform"
                        width={1220}
                        height={710}
                        className="w-full max-w-5xl h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
