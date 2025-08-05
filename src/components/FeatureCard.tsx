import React from "react";

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
            <div className="icon icon-lg md:icon-md sm:icon-sm icon-accent">{icon}</div>
            <h3 className="c_feature-card-title text-md-semibold md:text-sm-semibold sm:text-xs-semibold">
                {title}
            </h3>
            <p className="c_feature-card-description lg:text-sm-regular md:text-xs-regular sm:text-xs-regular">
                {description}
            </p>
        </div>
    );
};
