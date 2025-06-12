// src/components/FeatureCard.tsx
import React from "react";

export interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-primary mb-4 text-3xl">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                {description}
            </p>
        </div>
    );
}
