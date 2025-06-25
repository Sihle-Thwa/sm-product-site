import React from "react";
import { Button } from "./ui/button";

export interface FeatureCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    showButton?: boolean;
}

export function FeatureCard({
    icon: Icon,
    title,
    description,
    showButton = true,
}: FeatureCardProps) {
    return (
        <div className="p-8 text-left">
            <div className="mb-4">
                <Icon className="icon icon-md icon-accent" />
            </div>
            <h2 className="text-md-semibold">{title}</h2>
            <p className="mt-2 text-sm-regular">{description}</p>
            {showButton && (
                <div className="mt-4">
                    <Button className="button button-sm button-outline-accent">
                        Learn More
                    </Button>
                </div>
            )}
        </div>
    );
}
