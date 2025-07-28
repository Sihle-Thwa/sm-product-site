"use client";

import React from "react";
import { Button } from "./ui/button";
import MetricCard from "./MetricCard";
import { metrics } from "@/data/metric";

export default function MetricSection() {
    return (
        <section className="s_metric-wrap">
            {/* Section Header */}
            <div className="c_metric-header">
                <h2 className="heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold">Key Metrics</h2>
                <p className="text-lg-medium md:text-md-medium sm:text-sm-medium text-muted-foreground ">
                    Track your progress and stay on top of your game with our powerful metrics.
                </p>
                <div className="c_metric-cta">
                    <Button className="button button-lg md:button-md sm:button-sm button-accent">View All Metrics</Button>
                    <Button className="button button-lg md:button-md sm:button-sm button-primary">Book Demo</Button>
                </div>
            </div>

            {/* Metric Cards */}
            <div className="c_metric-board">
                <div className="metric-bg-image">
                    {metrics.map((metric) => (
                        <MetricCard key={metric.title} {...metric} />
                    ))}
                </div>
            </div>
        </section>
    );
}
