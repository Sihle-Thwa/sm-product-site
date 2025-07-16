"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (

        <section className="w-full flex flex-col items-center justify-center py-8" data-theme="default" >
            <div className="container mx-auto max-w-7xl space-y-12 flex flex-col  gap-8 px-8">
                {/* Hero Content */}
                <div className="flex flex-col items-center gap-4 text-center ">
                    {/* Hero Title */}
                    <div className="heading-xl-semibold md:heading-lg-semibold ">
                        The Complete Sports Management Solution
                    </div>
                    {/* Hero Description */}
                    <div className="text-md-medium md:text-sm-medium mx-auto">
                        Streamline team management, player development, and operations in one uniformed platform.
                    </div>

                    <div className="flex justify-center gap-4">
                        <Button className="button button-lg button-accent">Book Demo</Button>
                        <Button className="button button-lg button-primary">Sign Up</Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center">
                    <Image
                        src="/HeroSection.png"
                        alt="Athletes using the sports management platform"
                        width={1220}
                        height={710}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
