"use client";
import React from "react";
import { tiers } from "@/data/pricing";
import PricingCard from "./PricingCard";

// PricingSection Component
// This component renders the pricing section of the product site, including a header and a list of pricing cards.

export default function PricingSection() {
    return (
        /* Pricing Section */
        <section className="flex flex-col items-center w-full py-12 px-4 sm:px-6 lg:px-8">
            {/* PricingPage Container */}
            <div className="container mx-auto flex flex-col items-center gap-8">
                {/* Pricing Content*/}
                <div className="flex flex-col items-start w-full gap-12">
                    {/* Heading and Subheading */}
                    <div className="flex flex-col gap-6 items-start">
                        <div className="text-sm-medium items-start px-3 py-1 ">
                            Pricing
                        </div>
                        {/* Main Heading */}
                        <h2 className="heading-md-semibold">
                            Simple, transparent pricing
                        </h2>
                        {/* Description */}
                        <p className="text-xl-regular">
                            We believe Untitled should be accessible to all companies, no matter the size.
                        </p>
                    </div>
                </div>
                {/* Pricing Cards Section */}
                <div className="container flex flex-row items-center gap-8 px-8 py-8">
                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {/* PricingCard Components*/}
                        {tiers.map((tier, index) => (
                            <PricingCard key={tier.name} tier={tier} highlight={index === 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}