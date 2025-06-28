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
            className="flex flex-col items-center w-full py-16"
            aria-labelledby="cta-section"
        >
            <div className="container mx-auto flex flex-col items-center gap-8">
                <div className="space-y-8 max-w-4xl mx-auto">
                    <div id="cta-heading" className="heading-xl-medium">
                    Start your free trial
                    </div>
                    <div className="text-lg-medium self-stretch">
                    Join over 500+ organizations already growing with us.
                    </div>
                    <div className="flex justify-center gap-4">
                        <Button className="button button-lg button-primary">
                            Get Started
                        </Button>
                    </div>  
            </div>
            </div>

        </section>
    );
}
