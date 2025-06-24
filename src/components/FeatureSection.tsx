// File: /src/components/FeatureSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import features from "@/data/features";
import { FeatureCard } from "../components/FeatureCard";


export default function FeatureSection() {
    return (
        // Feature Section
        <section className="flex flex-col items-center w-full py-12 px-4 sm:px-6 lg:px-8">
            { /*Container Intro*/}
            <div className="container mx-auto flex flex-col items-center gap-8">
                {/* Intro Content */}
                <div className="flex flex-col items-start w-full gap-12">
                    {/* Heading and Subheading */}
                    <div className="flex flex-col gap-6 items-start">
                        <h2 className="text-md-semibold uppercase tracking-wide">
                            Features
                        </h2>
                        <h3 className="heading-sm-semibold w-full">Overflowing with useful features</h3>
                        <p className="text-sm-regular w-full">
                            Sports management has evolved dramatically in the digital age.
                            Organizations that embrace comprehensive platforms like this one
                            gain a competitive advantage both on and off the field.
                        </p>
                    </div>
                </div>
            </div>
            {/* Feature Content */}
            <div className="container mx-auto flex flex-row items-start gap-8 px-8 py-8">
                {/* Left: Feature List */}
                <div className="flex flex-col items-start w-full gap-8">
                    {features.map((f) => (
                        <FeatureCard
                            key={f.title}
                            icon={f.icon}
                            title={f.title}
                            description={f.description} />
                    ))}
                </div>
                {/* Right: Illustration */}
                <div className="flex flex-col items-end w-full gap-8">
                    {/* Feature Illustration */}
                    <div className=" flex justify-end">
                        <Image
                            src="/FeatureSection.png"
                            alt="Illustration showcasing platform features"
                            width={500}
                            height={500}
                            className="w-full max-w-md object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
