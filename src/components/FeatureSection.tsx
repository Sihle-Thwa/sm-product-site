"use client";

import React from "react";
import Image from "next/image";
import features from "@/data/features";
import { FeatureCard } from "./FeatureCard";

export default function FeatureSection() {
    return (
        <section className="s_features-wrap" aria-labelledby="features-heading">
            <div className="c_feature-wrap">
                {/* Section Intro */}
                <div className="c_feature-intro">
                    <h2 id="features-heading" className="c_feature-heading heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold tracking-wider">
                        Features
                    </h2>
                    <p className="c_feature-subheading text-lg-semibold md:text-md-semibold text-muted-foreground">
                        Overflowing with useful features
                    </p>
                    <p className="c_feature-description text-sm-medium md:text-xs-medium text-muted-foreground">
                        Sports management has evolved dramatically in the digital age.
                        Organizations that embrace comprehensive platforms like this one
                        gain a competitive advantage both on and off the field.
                    </p>
                </div>

                {/* Content Section */}
                <div className="c_feature-content">
                    <div className="c_feature-list">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={`${feature.title}-${index}`}
                                icon={<feature.icon />}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>

                    <div className="c_feature-illustration">
                        <Image
                            src="/FeatureSection.png"
                            alt="Platform feature illustration"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover rounded-xl shadow-md"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
