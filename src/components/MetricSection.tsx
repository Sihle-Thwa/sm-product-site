"use client";

import React from "react";
import { Button } from "./ui/button";
import MetricCard from "./MetricCard";
import { metrics } from "@/data/metric";

export default function MetricSection() {
    return (
        <section className="s_metric-wrap">
            {/* Section Container */}
            <div className="c_metric-container">
                {/* Header */}
                <div className="c_metric-header">
                    <div className="_metric-header-heading">Key Metrics</div>
                    <div className="_metric-header-description">
                        Track your progress and stay on top of your game with our powerful metrics.
                    </div>
                    <div className="c_metric-cta">
                        <Button className="button button-accent">View Metrics</Button>
                        <Button className="button button-primary">Book Demo</Button>
                    </div>
                </div>

                {/* Metric Cards */}

                    <div className="metric-bg-image">
                        {metrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>

            </div>
        </section>
    );
}
