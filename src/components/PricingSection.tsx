import React from "react";
import { tiers } from "@/data/pricing";
import PricingCard from "./PricingCard";

const PricingSection: React.FC = () => {
    return (
        <section className="s_pricing-wrap">
            <div className="c_pricing-container">
                {/* Section Header */}
                <div className="c_pricing-header">
                    <div className="text-lg-semibold text-[var(--accent)]">Pricing</div>
                    <h2 className="heading-md-medium">Simple, transparent pricing</h2>
                    <p className="text-sm-medium text-muted-foreground max-w-prose">
                        We believe Untitled should be accessible to all companies, no matter the size.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="c_pricing-grid">
                    {tiers.map((tier, index) => (
                        <PricingCard key={tier.name} tier={tier} highlight={index === 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
