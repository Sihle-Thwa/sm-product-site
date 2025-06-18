"use client";
import React from "react";
import { tiers } from "@/data/pricing";
import PricingCard from "./PricingCard";

// PricingSection Component
// This component renders the pricing section of the product site, including a header and a list of pricing cards.

export default function PricingSection() {
    return (
        /* Header Section */
        <section className="flex flex-col items-center self-stretch">
            {/* Header Container */}
            <div className="flex flex-col items-center self-stretch gap-16 pt-24 pb-24">
                {/* Header Content*/}
                <div className="flex flex-col max-w-[1280px] items-start self-stretch pl-8 pr-8 gap-8">
                    {/* Heading and Description */}
                    <div className="flex flex-col items-start self-stretch gap-10">
                        {/* Heading and Sub Heading */}
                        <div className="flex flex-col items-start gap-6 max-w-[768px]">
                            {/* Main Heading and Subheading */}
                            <div className="flex flex-col items-start self-stretch gap-3">
                                {/* Main Heading */}
                                <div className="text-md-semibold self-stretch">
                                    Pricing Plans
                                </div>
                                {/* Subheading */}
                                <div className="heading-lg-semibold self-stretch">
                                    Choose the plan that fits your needs.
                                </div>
                            </div>
                            {/* Description */}
                            <div className="text-xl-regular self-stretch">
                                Choose the plan that fits your needs. All plans come with a 30-day money-back guarantee.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Cards Section */}
            <div className="flex flex-col items-center self-stretch gap-16 pt-24 pb-24">
                {/* Pricing Cards Container */}
                <div className="flex flex-col max-w-[1280px] items-start pl-8 pr-8 gap-8">
                    {/* Pricing Cards Content - Render PricingCard.tsx */}
                    <div className="flex items-start justify-center self-stretch gap-8">
                        {/* PricingCard Component*/}
                        {tiers.map((tier, index) => (
                            <PricingCard key={tier.name} tier={tier} highlight={index === 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}