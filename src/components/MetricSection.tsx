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
                    <h2 className="xl:heading-xl-semibold lg:heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold heading-xs-semibold">Key Metrics</h2>
                    <p className="xl:text-xl-medium lg:text-lg-medium md:text-md-medium sm:text-sm-medium text-xs-medium">
                        Track your progress and stay on top of your game with our powerful metrics.
                    </p>
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
