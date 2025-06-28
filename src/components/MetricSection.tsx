"use client";
import React from "react";
import { Button } from "./ui/button";
import MetricCard from "./MetricCard";
import { metrics } from "@/data/metric";
import Image from "next/image";

export default function MetricSection() {
    return (
        /*Metric Section   */
        <section className="flex flex-col items-center self-stretch gap-16">
            {/*Section 1*/}
            <div className="flex flex-col items-center max-w-[1440px] gap-16">
                { /*Container 1 */}
                <div className="container flex flex-col max-w-[1280px] items-center gap-8">
                    {/*Content 1- Heading + CTA */}
                    <div className="flex flex-col items-center self-stretch gap-10">
                        {/*Heading and Subheading */}
                        <div className="heading-xl-bold">Key Metrics</div>
                        <div className="text-lg-regular">
                            Track your progress and stay on top of your game with our powerful metrics.
                        </div>
                        {/*CTA */}
                        <div className="flex flex-start gap-3">
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
            <div className="flex flex-col max-w-[1440px] items-center pb-24">
                {/*Container 2 */}
                <div className="container flex flex-col max-w-[1280px] py-8 items-start">
                    { /*Container Metrics-Cards */}
                    <div className="flex max-h-[336px] p-16 justify-center items-center gap-8 self-stretch rounded-lg">
                        <Image
                            src=""
                            alt="Metrics Board"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full rounded-lg"
                            priority
                        />
                        {metrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
