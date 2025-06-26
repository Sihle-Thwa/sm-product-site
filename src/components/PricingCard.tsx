import React from "react";
import "@/styles/tokens/pricing-card.css";
import { CheckCircle } from "lucide-react";

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
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="price text-4xl font-bold">{tier.price}</p>
                <p className="description">{tier.description}</p>
            </div>

            <ul className="mt-6 flex flex-col gap-4">
                {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[--accent]" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <a href={tier.cta.href} className="cta mt-6 block text-center font-semibold rounded-md px-6 py-3">
                {tier.cta.label}
            </a>
        </div>
    );
};

export default PricingCard;