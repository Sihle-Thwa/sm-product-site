"use client";
import React from "react";

import { Button } from "./ui/button";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
    return (
        // FAQ Section
        // This section contains frequently asked questions and answers.
        <section
            id="faq-section"
            className="flex flex-col items-center justify-center gap-8"
            aria-labelledby="faq-section"
        >
            {/*Container 1*/}
            <div className="flex justify-center items-center flex-col gap-8 p-8">
                {/*Content */}
                <div className="flex flex-wrap justify-center max-w-[1280px] w-full gap-8">
                    { /* Heading and Supporting Text */}
                    <div className="flex flex-col items-center max-w-[1280px] w-full gap-4">
                        <div className="heading-lg-medium ">
                            Frequently asked questions
                        </div>
                        <div className="text-lg-medium ">
                            Everything you need to know about the product and billing.
                        </div>
                    </div>
                </div>
            </div>
            {/*Container 2 */}

            <section className="flex flex-col items-center justify-center p-8">
                <FAQAccordion />
            </section>
            {/*Container 3*/}
            <div className="flex flex-col items-center max-w-[1280px] w-full gap-8 text-center">
                <div className="flex justify-center space-x-[-8px]">
                    { /* Avatar placeholders */}
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)] border-2 border-white" />
                    <div className="w-12 h-12 rounded-full bg-[var(--secondary)] border-2 border-white" />
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] border-2 border-white" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-lg-semibold">Still have questions?</div>
                    <div className="text-sm-medium">
                        Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                    </div>
                </div>
                <Button asChild className="button button-lg button-accent px-6 py-3">
                    <a href="mailto:sbcmthethwa79@gmail.com">Get in Touch</a>
                </Button>
            </div>
        </section>
    );
}