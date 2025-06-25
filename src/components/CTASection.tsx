"use client";
import React from "react";
import { Button } from "./ui/button";

/**
 * CTASection Component
 *
 * Description:
 * This is the `CTASection` component used in the UI.
 *
 * Props:
 *  * - None
 *
 * Usage:
 * ```tsx
 * <CTASection  />
 * ```
 */

/**
 * CTASection Component
 *
 * Description:
 * This is the `CTASection` component used in the UI.
 *
 * Props:
 *  * - None
 *
 * Usage:
 * ```tsx
 * <CTASection  />
 * ```
 */

export default function CTASection() {
    return (
        <section
            className="flex flex-col items-start w-full px-8 gap-8"
            aria-labelledby="cta-section"
        >
            <div className="flex flex-col items-center self-stretch">
                <h2 id="cta-heading" className="heading-lg-semibold text-center self-stretch">
                    Start your free trial
                </h2>
                <p className="mt-4 text-lg-medium">
                    Join over 500+ organizations already growing with us.
                </p>
                <div className="flex items-start mt-8 gap-4">
                    <Button className="button button-lg button-primary">
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    );
}
