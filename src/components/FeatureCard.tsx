// src/components/FeatureCard.tsx
import React from "react";
import { Button } from "./ui/button";
import "../styles/tokens/icons.css";
// Ensure this path is correct based on your project structure
export interface FeatureCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="p-8 text-start">
            <div className="mb-4">
                <Icon className="icon icon-md icon-accent" />
            </div>
            <h2 className="text-lg-semibold">
                {title}
            </h2>
            <p className="text-xs-regular mt-2">
                {description}
            </p>
            <div>
                <Button className="button button-outline">Learn More</Button>
            </div>
        </div>
    );
}