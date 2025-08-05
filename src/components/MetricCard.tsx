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
                <div className="metrics-card-value heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold">{value}</div>
                <div className="metrics-card-supporting">
                    <div className="text-md-semibold md:text-sm-semibold sm:text-xs-semibold">{title}</div>
                    <div className="text-sm-medium md:text-sm-regular sm:text-xs-regular">{description}</div>
                </div>
            </div>
        </div>
    );
}
