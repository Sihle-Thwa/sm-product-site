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
        <div className="c_feature-card">
            <div className="_feature-card-icon">
                <Icon className="icon icon-md icon-accent" />
            </div>
            <div className="_feature-card-title text-md-semibold">{title}</div>
            <div className="_feature-card-description text-sm-regular">{description}</div>
            {showButton && (
                <div className="_feature-card-button">
                    <Button className="button button-lg button-outline-accent">
                        Learn More
                    </Button>
                </div>
            )}
        </div>
    );
}
