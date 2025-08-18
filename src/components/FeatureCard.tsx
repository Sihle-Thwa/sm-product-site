import React from "react";
import "../styles/tokens/featurescard.css";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description,
}) => {
    return (
        <div className="c_feature-card">
            <div className="icon icon-accent">{icon}</div>
            <div className="c_feature-card-title">
                {title}
            </div>
            <div className="c_feature-card-description">
                {description}
            </div>
        </div>
    );
};
