"use client";
import React from "react";
import { Button } from "./ui/button";

// This component renders a call-to-action section with a heading, description, and button.
// It is styled to be responsive and visually appealing, encouraging users to start a free trial.

export default function CTASection() {
    return (
        <section
            className="w-full bg-[--surface-primary] py-12 px-4 text-center"
            aria-labelledby="cta-heading"
        >
            <div className="mx-auto max-w-3xl">
                <h2 id="cta-heading" className="text-3xl font-bold text-[--text-primary]">
                    Start your free trial
                </h2>
                <p className="mt-4 text-lg text-[--text-secondary]">
                    Join over 500+ organizations already growing with us.
                </p>
                <div className="mt-8 flex justify-center">
                    <Button className="rounded-xl px-6 py-3 font-medium">
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    );
}
