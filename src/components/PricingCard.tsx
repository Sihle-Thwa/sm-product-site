"use client";
import React from "react";
import { ProductPricing } from "../data/types";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import "../styles/tokens/pricing-card.css";

interface PricingProps {
    tier: ProductPricing;
    highlight?: boolean;
}
export default function PricingCard({ tier }: PricingProps) {
    const { name, price, features, featured } = tier;

    return (
        /*Pricing Card  */
        <div className={`pricing-card`}>
            {/* Pricing Card Header */}
            <div className="pricing-card-header">
                {/* Pricing Card Price */}
                <div className="pricing-card-price">
                    <div className="pricing-card-price-value">
                        R{price}/Month
                    </div>
                </div>
                {/* Pricing Card Heading and Subtext */}
                <div className="pricing-card-heading-container">
                    {/* Pricing Card Heading */}
                    <div className="pricing-card-heading">
                        {name}
                    </div>
                    {/* Pricing Card Subtext */}
                    <div className="pricing-card-subtext">
                        {featured ? "Most Popular" : ""}
                    </div>
                </div>
            </div>
            {/* Pricing Card Body-Content */}
            <div className="pricing-card-content">
                {/* Pricing Card Content-Features List */}
                <div className="pricing-card-content-list">
                    {/* Pricing Card Content-Features List Items */}
                    {features.map((feature, idx) => (
                        <div className="pricing-card-content-items" key={idx}>
                            {/* Pricing Card Content-Feature Item Icon */}
                            <div className="pricing-card-content-item-icon">
                                <CheckCircle />
                            </div>
                            {/* Pricing Card Content Item Text */}
                            <div className="pricing-card-content-item-text">
                                {feature}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Pricing Card Footer */}
            <div className="pricing-card-footer">
                {/* Pricing Card Footer Actions */}
                <div className="pricing-card-footer-actions">
                    <div className="pricing-card-footer-action">
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}