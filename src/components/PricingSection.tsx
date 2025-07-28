import React from "react";
import { tiers } from "@/data/pricing";
import PricingCard from "./PricingCard";

const PricingSection: React.FC = () => {
    return (
        <section className="bg-[var(--pricing-surface-light)] flex flex-col items-center w-full sm:px-4 md:px-6 lg:px-8">
            <div className="w-full flex flex-col gap-12 py-16">
                {/* Section Header */}
                <div className="text-left space-y-4">
                    <div className="text-lg-semibold text-[var(--accent)]">Pricing</div>
                    <h2 className="heading-md-medium">Simple, transparent pricing</h2>
                    <p className="text-sm-medium text-muted-foreground max-w-prose">
                        We believe Untitled should be accessible to all companies, no matter the size.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {tiers.map((tier, index) => (
                        <PricingCard key={tier.name} tier={tier} highlight={index === 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
