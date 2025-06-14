"use client";
import React from "react";
import { ProductPricing } from "../data/types";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import clsx from "clsx";

interface PricingProps {
    tier: ProductPricing;
    highlight?: boolean;
}

export default function PricingCard({ tier, highlight }: PricingProps) {

    const { name, price, features } = tier;

    return (
        <div
            className={`bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ${highlight ? "transform scale-105" : ""
                }`}
        >
            <h3 className="text-xl font-semibold mb-4">{name}</h3>
            <p className="text-3xl md:text-5xl font-bold mb-6">
                <span className={clsx({ "text-secondary": highlight })}>
                    {typeof price === 'number' ? `R${price}` : price}
                </span>
                {typeof price === 'number' && <span className="text-lg font-normal text-gray-600">/mo</span>}
            </p>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">FEATURES</p>
                <p className="text-foreground-accent mb-5">Everything in basic, plus...</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-white mr-2 bg-amber-300 rounded-full " />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Button className={clsx("w-full py-3 px-4 rounded-full transition-colors", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-gray-200": !highlight })}>
                Get Started
            </Button>
        </div>
    );
}