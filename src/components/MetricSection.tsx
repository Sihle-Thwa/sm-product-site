"use client";

import React from "react";
import { Button } from "./ui/button";
import MetricCard from "./MetricCard";
import { metrics } from "@/data/metric";

export default function MetricSection() {
    return (
        <section className="flex flex-col items-center self-stretch gap-16 py-16 px-4 md:px-8">
            {/* Section Header */}
            <div className="w-full max-w-[1024px] flex flex-col items-center gap-6 text-center">
                <h2 className="heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold">Key Metrics</h2>
                <p className="text-lg-medium md:text-md-medium sm:text-sm-medium text-muted-foreground max-w-prose">
                    Track your progress and stay on top of your game with our powerful metrics.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="button button-lg md:button-md sm:button-sm button-accent">View All Metrics</Button>
                    <Button className="button button-lg md:button-md sm:button-sm button-primary">Book Demo</Button>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="w-full max-w-[1024px]">
                <div className="metric-bg-image flex flex-col sm:flex-row justify-between items-center gap-6 p-6 rounded-xl shadow-md">
                    {metrics.map((metric) => (
                        <MetricCard key={metric.title} {...metric} />
                    ))}
                </div>
            </div>
        </section>
    );
}
