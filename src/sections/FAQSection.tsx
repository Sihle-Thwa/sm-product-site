// src/sections/FAQSection.tsx
"use client";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="q1">
                    <AccordionTrigger>What does the free trial include?</AccordionTrigger>
                    <AccordionContent>
                        You get 14 days of access to all premium features, with no credit card required.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                    <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
                    <AccordionContent>
                        Yes, you can upgrade or downgrade at any time from your account settings.
                    </AccordionContent>
                </AccordionItem>
                {/* Add more items as needed */}
            </Accordion>
        </section>
    );
}
