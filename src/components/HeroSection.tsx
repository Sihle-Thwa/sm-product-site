"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            className="s_hero-wrap w-full flex justify-center bg-background"
            aria-label="Hero section"
            data-theme="default"
        >
            <div className="c_hero-container w-full max-w-[1024px] px-4 md:px-8 flex flex-col gap-12 md:gap-16 py-12 md:py-24">
                {/* Hero Content */}
                <div className="_hero-content flex flex-col gap-6 md:gap-8 text-center md:text-left">
                    <h1 className="heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold text-balance">
                        The Complete Sports Management Solution
                    </h1>
                    <p className="text-md-medium md:text-sm-medium sm:text-xs-medium text-muted-foreground max-w-prose mx-auto md:mx-0">
                        Streamline team management, player development, and operations in one uniformed platform.
                    </p>

                    <div className="_hero-content-cta flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Button
                            className="button button-lg md:button-md sm:button-sm button-accent"
                            aria-label="Book a product demo"
                        >
                            Book Demo
                        </Button>
                        <Button
                            className="button button-lg md:button-md sm:button-sm button-primary"
                            aria-label="Sign up now"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="c_hero-image w-full flex justify-center">
                    <Image
                        src="/HeroSection.png"
                        alt="Athletes using the sports management platform"
                        width={1024}
                        height={710}
                        className="_hero-image w-full h-auto object-cover rounded-xl shadow-md"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
