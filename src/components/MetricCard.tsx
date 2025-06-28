"use client";
import React from "react";

interface MetricProps {
    title: string;
    value: string | number;
    description: string;
}

export default function MetricCard({ title, value, description }: MetricProps) {
    return (
        <div className="metrics-card">
            <div className="metrics-card-content">
                <div className="metrics-card-value heading-xl-bold lg:text-lg-bold ">
                    {value}
                </div>
                <div className="metrics-card-supporting">
                    <div className="text-md-semibold  self-stretch">
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
