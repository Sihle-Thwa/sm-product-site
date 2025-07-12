import React from "react";
import "@/styles/tokens/pricing-card.css";
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

            <div className="text-center">
                <div className="heading-sm-semibold">{tier.name}</div>
                <div className="flex flex-row items-baseline justify-center gap-2">
                    <div className="heading-lg-semibold">{tier.price}</div>
                    <span className="text-sm-medium">/mo</span>
                </div>

                <div className="text-sm-medium">{tier.description}</div>
            </div>

            <ul className="flex flex-col gap-4">
                {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[--accent]" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="py-3 text-center">
                <Button className="button button-lg button-primary">
                    <a href={tier.cta.href} >
                        {tier.cta.label}
                    </a>
                </Button>
            </div>


        </div>
    );
};

export default PricingCard;