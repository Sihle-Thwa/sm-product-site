"use client";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { faqs } from "../data/faqs";

/**
 * FAQSection Component
 *
 * Description:
 * This is the `FAQSection` component used in the UI.
 *
 * Props:
 *  * - None
 *
 * Usage:
 * ```tsx
 * <FAQSection  />
 * ```
 */


export default function FAQSection() {
    return (
        //FAQ Section
        <section className="flex flex-col items-center w-full gap-16 pt-24">
            {/*Section */}
            <div className="flex flex-col items-center w-full gap-16 pt-24">
                {/*Container 1 */}
                <div className="container mx-auto flex flex-col items-center gap-8 px-8">
                    { /*Content */}
                    <div className="flex flex-col items-center w-full gap-12">
                        { /*Heading and Subheading */}
                        <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
                            <h2 className="heading-lg-medium">Frequently asked questions</h2>
                            <p className="text-lg-medium">Everything you need to know about the product and billing.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Container 2 */}
            <div className="container mx-auto flex flex-col items-center px-8 py-12">
                {/* FAQ Content */}
                <div className="w-full max-w-3xl">
                    <Accordion
                        type="single"
                        className="w-full"
                        collapsible
                        defaultValue="item-0"
                    >
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                value={`item-${i}`}
                                key={i}
                                className="border-b border-gray-200 py-6 pt-4"
                            >
                                <AccordionTrigger className="text-lg-medium hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm-regular pt-4 ">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            {/* Container 3 */}
            <div className="container mx-auto flex flex-col items-center px-8 pb-24">
                <div className="flex flex-col items-center justify-center w-full max-w-2xl p-12 gap-8 bg-gray-50 rounded-2xl">
                    {/* Avatar images placeholder - you'll need to add your actual images */}
                    <div className="flex space-x-2">
                        <div className="w-12 h-12 rounded-full bg-amber-300 border-2 border-white"></div>
                        <div className="w-12 h-12 rounded-full bg-amber-400 border-2 border-white"></div>
                        <div className="w-12 h-12 rounded-full bg-amber-500 border-2 border-white"></div>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <p className="text-lg-semibold">Still have questions?</p>
                        <p className="text-md-regular">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button
                        className="button button-lg button-primary px-6 py-3"
                        onClick={() => window.location.href = "mailto:sbcmthethwa79@gmail.com"}
                    >
                        Get in Touch
                    </Button>
                </div>
            </div>
        </section>
    );
}