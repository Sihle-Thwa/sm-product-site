"use client";
import React from "react";
import { ProductPricing } from "../data/types";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
interface PricingProps {
    tier: ProductPricing;
    highlight?: boolean;
}
export default function PricingCard({ tier }: PricingProps) {
    const { name, price, features } = tier;
    return (
        <Card className="card flex flex-col items-start p-6 shadow-lg rounded-lg transition-transform hover:scale-105">
            <CardContent>
                <div className="text-xl-semibold">{name}</div>
                <div className="text-xl-medium md:text-5xl font-bold mb-6">
                    <span className="text-md-regular">
                        {typeof price === 'number' ? `R${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-sm-regular">/mo</span>}
                </div>
                <div className="p-6 mt-1">
                    <div className="text-sm-semibold mb-2">FEATURES</div>
                    { /* Work on this ul and items spacing */}
                    <ul className="space-y-4 mb-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-white mr-2 bg-amber-300 rounded-full" />
                                <span className="text-xs-regular">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <CardFooter className="mt-4 text-xs-regular text-gray-500">
                    <Button>
                        Get Started
                    </Button>
                </CardFooter>
            </CardContent>
        </Card >
    );
}