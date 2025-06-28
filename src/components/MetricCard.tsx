"use client";
import React from "react";

interface MetricProps {
    title: string;
    value: string | number;
    description: string;
}

export default function MetricCard({ title, value, description }: MetricProps) {
    return (
        <div className=" flex flex-col px-8 py-6 items-center gap-5 flex-1">
            <div className="p-0 flex flex-col items-center text-center gap-4">
                <div className="text-xl-bold lg:text-lg-bold mb-2">
                    {value}
                </div>
                <div className="text-md-semibold mb-1">
                    {title}
                </div>
                <div className="text-sm-regular leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
}
