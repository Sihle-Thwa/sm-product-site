"use client";
import React from "react";
import { Button } from "./ui/button";
import MetricCard from "./MetricCard";
import { metrics } from "@/data/metric";

export default function MetricSection() {
    return (
        <section className="w-full">
            {/* Top CTA */}
            <div className="py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-xl-bold">Key Metrics</h2>
                    <p className="text-lg-regular">
                        Track your progress and stay on top of your game with our powerful metrics.
                    </p>
                    <div className="mt-6 flex justify-center gap-4 flex-wrap">
                        <Button className="button button-lg button-accent">
                            View All Metrics
                        </Button>
                        <Button className="button button-lg button-primary">
                            Book Demo
                        </Button>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="relative z-[1] -mt-12 px-4 pb-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metrics.map((metric) => (
                        <MetricCard key={metric.title} {...metric} />
                    ))}
                </div>
            </div>
        </section>
    );
}
