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
        <section
            className="w-full px-4 py-24"
            aria-labelledby="faq-section"
        >
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 id="faq-heading" className="heading-lg-medium">
                    Frequently asked questions
                </h2>
                <p className="text-lg-medium">
                    Everything you need to know about the product and billing.
                </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
                <Accordion
                    type="single"
                    className="w-full"
                    collapsible
                    defaultValue="item-0"
                >
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="border-b border-b-gray-500 py-6"
                        >
                            <AccordionTrigger className="text-lg-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 text-sm-regular">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className="mt-16 max-w-2xl mx-auto p-12 text-center space-y-6">
                <div className="flex justify-center space-x-2">
                    { /* Avatar placeholders */}
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)] border-2 border-[var(--border-muted)]" />
                    <div className="w-12 h-12 rounded-full bg-[var(--secondary)] border-2 border-[var(--border-muted)]" />
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] border-2 border-[var(--border-muted)]" />
                </div>
                <div>
                    <div className="text-lg-semibold">Still have questions?</div>
                    <p className="text-sm-medium text-[--text-muted]">
                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </p>
                </div>
                <Button asChild className="button button-lg button-accent px-6 py-3">
                    <a href="mailto:sbcmthethwa79@gmail.com">Get in Touch</a>
                </Button>
            </div>
        </section>
    );
}
