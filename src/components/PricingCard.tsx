import React from "react";
import "@/styles/tokens/pricingsection.css";
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
            {highlight && <span className="pricing-card-badge ">Most Popular</span>}

            <div className="text-center space-y-2">
                <div className="heading-sm-semibold md:text-md-semibold sm:text-sm-semibold">{tier.name}</div>
                <div className="flex flex-row items-baseline justify-center gap-2">
                    <div className="heading-lg-semibold md:text-md-semibold sm:text-sm-semibold">{tier.price}</div>
                    <span className="text-sm-medium md:text-xs-medium sm:text-xs-regular">/mo</span>
                </div>
                <div className="text-sm-medium md:text-xs-medium sm:text-xs-regular">{tier.description}</div>
            </div>

            <ul className="feature-list">
                {tier.features.map((feature, index) => (
                    <li key={index}>
                        <CheckCircle className="w-5 h-5 text-[--accent]" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="text-center w-full">
                <Button className="button button-lg md:button-md sm:button-sm button-primary w-full">
                    <a href={tier.cta.href} className="block w-full">{tier.cta.label}</a>
                </Button>
            </div>
        </div>
    );
};

export default PricingCard;
