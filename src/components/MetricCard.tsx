"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";

interface MetricProps {
    title: string;
    value: string | number;
    description: string;
}

export default function MetricCard({ title, value, description }: MetricProps) {
    return (
        <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 max-w-sm w-full hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0 flex flex-col items-center text-center gap-4">
                {/* Large Value */}
                <div className="text-5xl lg:text-6xl font-bold text-slate-700 mb-2">
                    {value}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-700 mb-1">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}