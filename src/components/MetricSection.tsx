"use client";
import React from "react";
import { Button } from "./ui/button";
import MetricCard from "./MetricCard";
import { metrics } from "@/data/metric"; // Assuming you have a metrics data file

export default function MetricSection() {
    return (
        <section className="flex flex-col items-start gap-[-96px]">
            <div className="flex flex-col items-center w-full gap-8 bg-blue-950 text-white py-16 px-8">
                <div className="flex flex-col items-center px-8 gap-8">
                    <div className="flex flex-col items-center self-stretch gap-7">
                        <h2 className="text-3xl font-bold text-center mb-8">Key Metrics</h2>
                        <p className="text-lg text-center mb-12">
                            Track your progress and stay on top of your game with our powerful metrics.
                        </p>
                        <div className="flex flex-row items-center gap-4">
                            <Button className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">
                                View All Metrics
                            </Button>
                            <Button className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">
                                Book Demo
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-row items-center pb-[96px] bg-white w-full">
                <div className="flex flex-col items-start w-full px-8">
                    <div className="flex justify-center self-stretch items-center bg-gray-400 h-[340px] gap-8 p-16">
                        {/* Metric cards go here */}
                        {metrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}