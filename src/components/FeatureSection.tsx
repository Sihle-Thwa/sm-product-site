"use client";
import React from "react";
import Image from "next/image";
import features from "@/data/features";
import { FeatureCard } from "./FeatureCard";

export default function FeatureSection() {
    return (
        <section className="s_features-wrap">
            <div className="c_feature-wrap">
                {/* Section Intro */}
                <div className=".c_feature-intro">
                    <div className="heading-lg-semibold tracking-wider">
                        Features
                    </div>
                    <div className="_feature-subheading text-lg-medium">
                        Overflowing with useful features
                    </div>
                    <p className="_feature-description text-sm-medium">
                        Sports management has evolved dramatically in the digital age.
                        Organizations that embrace comprehensive platforms like this one
                        gain a competitive advantage both on and off the field.
                    </p>
                </div>

                {/* Feature Content */}
                <div className="_feature-content">
                    {/* Features List */}
                    <div className="_feature-list">
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
                    <div className="_feature-illustration">
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
