"use client";
import React from "react";
import { ProductPricing } from "../data/types";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PricingProps {
    tier: ProductPricing;
    highlight?: boolean;
}

export default function PricingCard({ tier, highlight }: PricingProps) {
    const { name, price, features, featured, highlight: tierHighlight } = tier;

    return (
        /*Pricing Card  */
        <div className={`
            pricing-card flex flex-col items-center p-8 rounded-2xl border
            ${highlight || featured || tierHighlight ? 'pricing-card featured' : 'pricing-card'}
        `}>
            {/* Pricing Card Header */}
            <div className="pricing-card-header flex flex-col items-center mb-8">
                {/* Pricing Card Price */}
                <div className="mb-4">
                    <div className="heading-lg-semibold mb-2">
                        R{price}<span className="text-md-regular">/mo</span>
                    </div>
                </div>
                {/* Pricing Card Heading and Subtext */}
                <div className="flex flex-col items-center">
                    {/* Pricing Card Heading */}
                    <h3 className="text-xl-semibold mb-2">
                        {name}
                    </h3>
                    {/* Pricing Card Subtext */}
                    <p className="text-sm-regular">
                        Billed annually.
                    </p>
                </div>
            </div>

            {/* Pricing Card Body-Content */}
            <div className="flex-1 mb-8">
                {/* Pricing Card Content-Features List */}
                <div className="space-y-4">
                    {/* Pricing Card Content-Features List Items */}
                    {features.map((feature, idx) => (
                        <div className="flex items-start gap-3" key={idx}>
                            {/* Pricing Card Content-Feature Item Icon */}
                            <div className="flex-shrink-0">
                                <Check className="icon icon-sm icon-accent" />
                            </div>
                            {/* Pricing Card Content Item Text */}
                            <div className="text-xs-regular ">
                                {feature}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing Card Footer */}
            <div className="pricing-card-footer">
                {/* Pricing Card Footer Actions */}
                <div className="pricing-card-footer-actions mb-6">
                    <Button
                        className={`button button-accent w-full py-3 px-6
                        ${highlight
                                ? 'button button-primary'
                                : 'button button-primary'
                            }
                    `}
                    >
                        Get started
                    </Button>
                </div>

            </div>
        </div>
    );
}