"use client";
import React from "react";

interface MetricProps {
    title: string;
    value: string | number;
    description: string;
}

export default function MetricCard({ title, value, description }: MetricProps) {
    return (
        <div className="container metrics-card">
            <div className="metrics-card-content">
                <div className="metrics-card-value heading-lg-semibold">
                    {value}
                </div>
                <div className="metrics-card-supporting">
                    <div className="text-md-semibold">
                        {title}
                    </div>
                    <div className="text-sm-regular ">
                        {description}
                    </div>
                </div>

            </div>
        </div>
    );
}
