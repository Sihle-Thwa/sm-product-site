"use client";
import React from "react";
import { tiers } from "@/data/pricing";
import PricingCard from "./PricingCard";

export default function PricingSection() {
    return (
        <section className="flex flex-col pt-16 items-center gap-8 self-stretch">
            <div className="text-xl-semibold ">Pricing</div>
            <div className="text-lg-regular">
                Choose the plan that fits your needs. All plans come with a 30-day money-back guarantee.
            </div>
            <div className="flex flex-col items-center gap-8 px-8 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <PricingCard key={tier.name} tier={tier} highlight={index === 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}