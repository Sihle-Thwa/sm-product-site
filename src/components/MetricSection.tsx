"use client";
import React from "react";
import { Button } from "./ui/button";
import MetricCard from "./MetricCard";
import { metrics } from "@/data/metric";

export default function MetricSection() {
    return (
        /*Metric Section   */
        <section className="flex flex-col items-center self-stretch gap-16">
            {/*Section 1*/}
            <div className="flex flex-col max-w-[1280px] w-full gap-8">
                { /*Container 1 */}
                <div className="container flex flex-col max-w-[1280px] items-center">
                    {/*Content 1- Heading + CTA */}
                    <div className="flex flex-col items-center gap-6">
                        {/*Heading and Subheading */}
                        <div className="heading-lg-semibold">Key Metrics</div>
                        <div className="text-lg-medium text-center">
                            Track your progress and stay on top of your game with our powerful metrics.
                        </div>
                        {/*CTA */}
                        <div className="flex flex-start gap-4">
                            <Button className="button button-lg button-accent">
                                View All Metrics
                            </Button>
                            <Button className="button button-lg button-primary">
                                Book Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Section 2 - Cards */}
            <div className="flex flex-col max-w-[1280px] w-full items-center">
                {/*Container 2 */}
                <div className="container flex flex-col ">
                    { /*Container Metrics-Cards */}
                    <div className="metric-bg-image flex flex-row w-full h-[380px] items-center justify-between gap-8 rounded-lg shadow-lg transition-shadow duration-300"
                    >
                        {metrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
