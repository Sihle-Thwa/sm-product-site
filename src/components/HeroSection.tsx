"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            className="s_hero-wrap"
            aria-label="Hero section"
            data-theme="default"
        >
            <div className="c_hero-container">
                {/* Hero Content */}
                <div className="_hero-content">
                    <div className="_hero-heading">
                        The Complete Sports Management Solution
                    </div>
                    <div className="_hero-subtitle">
                        Streamline team management, player development, and operations in one uniformed platform.
                    </div>

                    <div className="_hero-content-cta">
                        <Button className="button  button-accent">
                            Book Demo
                        </Button>
                        <Button className="button  button-primary">
                            Sign Up
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="c_hero-image">
                    <Image
                        src="/HeroSection.png"
                        alt="Athletes using the sports management platform"
                        width={1024}
                        height={710}
                        className="_hero-image"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
