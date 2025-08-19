"use client";

import React from "react";
import Image from "next/image";
import features from "@/data/features";
import { FeatureCard } from "./FeatureCard";

export default function FeatureSection() {
    return (
        <section className="s_features-wrap" aria-labelledby="features-heading" id="features">
            <div className="c_feature-container">
                {/* Section Intro */}
                <div className="c_feature-intro">
                    <div id="features-heading" className="_features-heading">Features</div>
                    <div className="_features-subheading">Overflowing with useful features</div>
                    <div className="_features-subtitle">
                        Sports management has evolved dramatically in the digital age.
                        Organizations that embrace comprehensive platforms like this one
                        gain a competitive advantage both on and off the field.
                    </div>
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

                    <div className="c_feature-illustration-container">
                        <div className="c_feature-image-content">
                            <Image
                                src="/FeatureSection.png"
                                alt="Platform feature illustration"
                                className="feature-image"
                                loading="lazy"
                                fill
                                sizes="(max-width: 767px) 100vw, 40vw"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
