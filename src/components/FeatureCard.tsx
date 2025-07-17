import React from "react";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="c_feature-card">
            <div className="c_feature-card-icon">{icon}</div>
            <div className="c_feature-card-title text-md-semibold md:text-sm-semibold">{title}</div>
            <div className="c_feature-card-description text-sm-regular md:text-xs-regular">{description}</div>
        </div>
    );
};
