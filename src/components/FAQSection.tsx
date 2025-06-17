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

export default function FAQSection() {
    return (
        <section className="flex flex-col items-center self-stretch px-0 py-24 gap-16">
            {/* Container 1 */}
            <div className="flex flex-col items-start max-w-[1280px] gap-8 px-8">
                <div className="flex flex-col items-center self-stretch gap-12">
                    <div className="flex flex-col max-w-[768px] items-center gap-5">
                        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
                        <p className="text-lg text-center">Everything you need to know about the product and billing.</p>
                    </div>
                </div>
            </div>
            {/* Container 2 */}
            <div className="flex flex-col items-center max-w-[1280px] lg:w-[1280px] gap-16 px-8">
                <div className="flex flex-col max-w-[768px] lg:w-[768px] items-start gap-8 w-full">
                    <Accordion
                        type="single"
                        className="flex flex-col items-start self-stretch gap-6 w-full"
                        collapsible
                        defaultValue="item-0"
                    >
                        {faqs.map((faq, i) => (
                            <AccordionItem value={`item-${i}`} key={i} className="border-b border-gray-300">
                                <AccordionTrigger className="text-lg font-medium py-4 hover:text-blue-600 transition-colors">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-md text-gray-700 pb-4">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            {/* Container 3 */}
            <div className="flex flex-col items-center max-w-[1280px] lg:w-[1280px] gap-16 px-8">
                <div className="flex flex-col lg:w-full items-center justify-center w-full sm:w-fit self-stretch p-8 gap-8 bg-gray-100 rounded-md">
                    <div className="text-lg-semibold mb-2">Still have questions?</div>
                    <div className="text-sm-regular text-center">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</div>
                    <Button
                        className="mt-4 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
                        onClick={() => window.location.href = "mailto:support@example.com"}
                    >
                        Get in Touch
                    </Button>
                </div>
            </div>
        </section>
    );
}
