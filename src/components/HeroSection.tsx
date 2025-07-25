"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (

        <section className="s_hero-wrap" data-theme="default" >
            <div className="c_hero-container w-full max-w-[1024px] px-4 md:px-8">
                {/* Hero Content */}
                <div className="_hero-content">
                    {/* Hero Title */}
                    <div className="_hero-content-title heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold ">
                        The Complete Sports Management Solution
                    </div>
                    {/* Hero Description */}
                    <div className="_hero-content-description text-md-medium md:text-sm-medium sm:text-xs-medium">
                        Streamline team management, player development, and operations in one uniformed platform.
                    </div>

                    <div className="_hero-content-cta">
                        <Button className="button button-lg md:button-md sm:button-sm button-accent">Book Demo</Button>
                        <Button className="button button-lg md:button-md sm:button-sm button-primary">Sign Up</Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="c_hero-image">
                    <Image
                        src="/HeroSection.png"
                        alt="Athletes using the sports management platform"
                        width={1220}
                        height={710}
                        className="_hero-image"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
