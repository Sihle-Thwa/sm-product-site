"use client";
import React from "react";
import Image from "next/image";
import features from "@/data/features";
import { FeatureCard } from "./FeatureCard";

export default function FeatureSection() {
    return (
        <section className="flex flex-col items-center w-full py-16">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Intro */}
                <div className="text-left space-y-4">
                    <h2 className="text-lg-semibold tracking-wider">
                        Features
                    </h2>
                    <h3 className="text-md-semibold">
                        Overflowing with useful features
                    </h3>
                    <p className="text-xs-medium">
                        Sports management has evolved dramatically in the digital age.
                        Organizations that embrace comprehensive platforms like this one
                        gain a competitive advantage both on and off the field.
                    </p>
                </div>

                {/* Feature Content */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Features List */}
                    <div className="flex flex-col w-full gap-8">
                        {features.map((f, index) => (
                            <FeatureCard
                                key={`${f.title}-${index}`}
                                icon={f.icon}
                                title={f.title}
                                description={f.description}
                            />
                        ))}
                    </div>

                    {/* Feature Illustration */}
                    <div className="w-full lg:w-[100%] flex justify-end lg:justify-end">
                        <Image
                            src="/FeatureSection.png"
                            alt="Platform feature illustration"
                            width={500}
                            height={500}
                            className="w-full max-w-lg object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
