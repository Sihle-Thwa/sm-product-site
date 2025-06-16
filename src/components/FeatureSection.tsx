// File: /src/components/FeatureSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Feature } from "@/data/types";
import features from "@/data/features";
import { Button } from "./ui/button";

export default function FeatureSection() {
    return (
        <section className="flex flex-col pt-16 items-center self-stretch gap-8 px-4 md:px-8">
            {/* Intro Text */}
            <div className="flex flex-col items-center gap-8 px-8 max-w-[1280px] ">
                <div className="flex flex-col gap-4 max-w-[768px]">
                    <h2 className="text-md-semibold">Features</h2>
                    <h3 className="heading-md">Overflowing with useful features</h3>
                    <p className="text-xl-regular">
                        Sports management has evolved dramatically in the digital age.
                        Organizations that embrace comprehensive platforms like this one
                        gain a competitive advantage both on and off the field.
                    </p>
                </div>
            </div>

            {/* Feature Content */}
            <div className="flex flex-col md:flex-row gap-12 max-w-[1280px]">
                {/* Left: Feature List */}
                <div className="basis-1/2 flex flex-col gap-8">
                    {features.map((f) => (
                        <div key={f.title} className="flex items-start gap-4">
                            <div className="flex flex-col gap-5">
                                <h4 className="text-xl-semibold">{f.title}</h4>
                                <p className="text-md-regular">{f.description}</p>
                                <div className="flex gap-2">
                                    <Button aria-label={`Learn more about ${f.title}`}>
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Illustration */}
                <div className="basis-1/2 flex items-center justify-end">
                    <Image
                        src="/FeatureSection.png"
                        alt="Illustration showcasing platform features"
                        width={500}
                        height={500}
                        className="object-fill"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
