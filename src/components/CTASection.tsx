"use client";
import React from "react";
import { Button } from "./ui/button";

export default function CTASection() {
    return (
        <section
            className="flex flex-col items-center self-stretch gap-16"
            aria-labelledby="cta-section"
        >
            <section className="flex flex-col max-w-[1280px] w-full gap-8">
                <div className="container flex flex-col max-w-[1280px] items-center">
                    <div className="flex flex-col items-center gap-6">
                        <div id="cta-heading" className="heading-lg-medium">
                            Start your free trial
                        </div>
                        <div className="text-md-medium self-stretch">
                            Join over 500+ organizations already growing with us.
                        </div>
                        <div className="flex flex-start gap-4">
                            <Button className="button button-lg button-primary">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
