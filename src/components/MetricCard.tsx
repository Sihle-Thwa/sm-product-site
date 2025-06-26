"use client";
import React from "react";

interface MetricProps {
    title: string;
    value: string | number;
    description: string;
}

export default function MetricCard({ title, value, description }: MetricProps) {
    return (
        <div className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-8 max-w-sm w-full">
            <div className="p-0 flex flex-col items-center text-center gap-4">
                <div className="text-xl-bold lg:text-lg-bold mb-2">
                    {value}
                </div>
                <h3 className="text-md-semibold mb-1">
                    {title}
                </h3>
                <p className="text-sm-regular leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
