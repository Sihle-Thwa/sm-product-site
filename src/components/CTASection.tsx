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
            className="w-full bg-[--surface-primary] py-12 px-4 text-center"
            aria-labelledby="cta-heading"
        >
            <div className="mx-auto max-w-3xl">
                <h2 id="cta-heading" className="heading-xl-medium">
                    Start your free trial
                </h2>
                <p className="mt-4 text-lg-medium">
                    Join over 500+ organizations already growing with us.
                </p>
                <div className="mt-8 flex justify-center">
                    <Button className="button button-md button-primary">
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    );
}
