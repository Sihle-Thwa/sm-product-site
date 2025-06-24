"use client";
import React from "react";
import { Button } from "./ui/button";
import MetricCard from "./MetricCard";
import { metrics } from "@/data/metric";

export default function MetricSection() {
    return (
        //Metric Section
        <section className="flex flex-col items-center w-full">
            {/* Top section with dark background */}
            <div className="bg-[var(--primary)] text-[var(--primary-foreground)] flex flex-col items-center w-full gap-16 pt-24">
                {/*Container 1 */}
                <div className="container mx-auto flex flex-col items-center gap-8 px-8">
                    { /*Content */}
                    <div className="flex flex-col items-center w-full gap-12">
                        {/*Heading and Subheading */}
                        <div className="flex flex-col items-center gap-6 text-center">
                            { /*Heading/Display */}
                            <h2 className="heading-md-semibold w-full">Key Metrics</h2>
                            { /*Subheading */}
                            <p className="text-lg-regular ">
                                Track your progress and stay on top of your game with our powerful metrics.
                            </p>
                        </div>
                        {/*CTA-Buttons */}
                        <div className="flex items-start gap-3">

                            <Button className="button button-lg button-outline-secondary">
                                View All Metrics
                            </Button>
                            <Button className="button button-lg button-accent">
                                Book Demo
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom section with metric cards - overlapping the top section */}
            <div className="container mx-auto flex flex-col items-center gap-8 px-8">
                <div className="flex flex-col items-center w-full gap-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                        {metrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}