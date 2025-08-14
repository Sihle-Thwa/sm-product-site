"use client";

import React from "react";
import Image from "next/image";
import features from "@/data/features";
import { FeatureCard } from "./FeatureCard";

export default function FeatureSection() {
    return (
        <section className="s_features-wrap" aria-labelledby="features-heading">
            <div className="c_feature-container">
                {/* Section Intro */}
                <div className="c_feature-intro">
                    <h2
                        id="features-heading"
                        className=" heading-xl-semibold lg:heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold w-xs:heading-xs-semibold"
                    >
                        Features
                    </h2>
                    <p className=" text-xl-semibold lg:text-lg-semibold md:text-md-semibold sm:text-sm-semibold w-xs:text-xs-semibold">
                        Overflowing with useful features
                    </p>
                    <p className="text-md-medium lg:text-sm-medium md:text-sm-regular sm:text-xs-regular">
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
                        <div className="c_feature-image-container">
                            <Image
                                src="/FeatureSection.png"
                                alt="Platform feature illustration"
                                width={440}
                                height={540}
                                className="feature-image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
