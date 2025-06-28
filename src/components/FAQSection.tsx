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
        // FAQ Section
        // This section contains frequently asked questions and answers.
        <section
            className="flex flex-col py-24 items-center self-stretch gap-16"
            aria-labelledby="faq-section"
        >
            {/*Container 1*/}
            <div className="container max-w-[1280px] flex flex-col items-start gap-8">
                {/*Content */}
                <div className="flex flex-col items-center gap-12 self-stretch">
                    { /* Heading and Supporting Text */}
                    <div className="flex flex-col max-w-[768px] items-center gap-5">
                        <div className="heading-lg-medium self-stretch text-center">
                            Frequently asked questions
                        </div>
                        <div className="text-lg-medium self-stretch text-center">
                            Everything you need to know about the product and billing.
                        </div>
                    </div>
                </div>
            </div>
            {/*Container 2 */}
            <div className="container max-w-[1280px] flex flex-col items-center gap-8">
                {/* Content- Accordion for FAQs */}
                <Accordion
                    type="single"
                    className="w-full max-w-[768px] flex flex-col gap-8"
                    collapsible
                    defaultValue="item-0"
                >
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="border-b border-gray-200 flex flex-col gap-6"
                        >
                            <AccordionTrigger className="text-left text-lg-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                <span className="text-left">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pb-2 text-sm-regular leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            {/*Container 3*/}
            <div className="container max-w-[1280px] flex flex-col items-center gap-8 text-center">
                <div className="flex justify-center space-x-[-8px]">
                    { /* Avatar placeholders */}
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)] border-2 border-white" />
                    <div className="w-12 h-12 rounded-full bg-[var(--secondary)] border-2 border-white" />
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] border-2 border-white" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-lg-semibold">Still have questions?</div>
                    <p className="text-sm-medium">
                        Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                    </p>
                </div>
                <Button asChild className="button button-lg button-accent px-6 py-3">
                    <a href="mailto:sbcmthethwa79@gmail.com">Get in Touch</a>
                </Button>
            </div>
        </section>
    );
}