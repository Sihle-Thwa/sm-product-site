"use client";
import React from "react";
import { tiers } from "@/data/pricing";
import PricingCard from "./PricingCard";

export default function PricingSection() {
    return (
        <section className="flex flex-col items-center justify-center py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
            <p className="text-lg text-center mb-12">
                Choose the plan that fits your needs. All plans come with a 30-day money-back guarantee.
            </p>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <PricingCard key={tier.name} tier={tier} highlight={index === 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}