"use client";
import React from "react";
import { tiers } from "@/data/pricing";
import PricingCard from "./PricingCard";

const PricingSection: React.FC = () => {
    return (
        <section className="bg-radial-gradient from-var(--primary) via-var(--secondary) to-var(--accent) flex flex-col items-center w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col items-center gap-8">
                <div className="flex flex-col items-start w-full gap-12">
                    <div className="flex flex-col gap-6 items-start">
                        <div className="text-sm-medium items-start px-3 py-1 text-[var(--accent)]">Pricing</div>
                        <h2 className="heading-md-semibold text-[var(--primary-foreground)]">Simple, transparent pricing</h2>
                        <p className="text-xl-regular text-[var(--primary-foreground)]">
                            We believe Untitled should be accessible to all companies, no matter the size.
                        </p>
                    </div>
                </div>

                <div className="container flex flex-row items-center gap-8 px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {tiers.map((tier, index) => (
                            <PricingCard key={tier.name} tier={tier} highlight={index === 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;