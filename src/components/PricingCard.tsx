import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

interface Tier {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: {
        label: string;
        href: string;
    };
}

interface PricingCardProps {
    tier: Tier;
    highlight?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, highlight = false }) => {
    return (
        <div className={`pricing-card ${highlight ? "highlight" : ""}`}>
            {highlight && <span className="pricing-card-badge">Most Popular</span>}

            <div className="text-center space-y-2">
                <div className="heading-sm-semibold md:text-md-semibold sm:text-sm-semibold">{tier.name}</div>
                <div className="flex flex-row items-baseline justify-center gap-2">
                    <div className="heading-lg-semibold md:text-md-semibold sm:text-sm-semibold">{tier.price}</div>
                    <span className="text-md-medium md:text-md-medium sm:text-sm-medium">/mo</span>
                </div>
                <div className="xl:text-xl-regular lg:text-lg-regular md:text-md-regular sm:text-sm-regular">{tier.description}</div>
            </div>

            <ul className="feature-list">
                {tier.features.map((feature, index) => (
                    <li key={index}>
                        <CheckCircle className="w-5 h-5 text-[--accent]" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="text-center">
                <Button className="button button-primary">
                    <a href={tier.cta.href} className="">{tier.cta.label}</a>
                </Button>
            </div>
        </div>
    );
};

export default PricingCard;
