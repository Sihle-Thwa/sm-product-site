// src/sections/FAQSection.tsx
"use client";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

export default function FAQSection() {
    const faqs = [
        {
            question: 'What types of organizations can use this platform?',
            answer: 'Our platform is designed to serve schools, district teams, national organizations, and private sports clubs of all sizes.',
        },
        {
            question: 'How difficult is it to implement?',
            answer: 'The average implementation takes just 2 weeks, with dedicated support throughout the process. Our system is designed to be intuitive for users at all technical levels.',
        },
        {
            question: 'Is my data secure?',
            answer: "Yes. We implement industry-leading security protocols including data encryption, role-based access control, and regular security audits to protect your organization's sensitive information.",
        },
        {
            question: 'Is training provided?',
            answer: "Yes. We offer comprehensive training packages including live webinars, documentation, and one-on-one support to ensure your staff can maximize the platform's capabilities.",
        },
        {
            question: 'Can the system grow with our organization?',
            answer: "Yes. Absolutely! Our scalable architecture allows you to add teams, players, and features as your organization expands.",
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-4xl px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">Frequently asked questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem value={`item-${i}`} key={i}>
                            <AccordionTrigger className="font-medium text-gray-800">{faq.question}</AccordionTrigger>
                            <AccordionContent className="mt-2 text-gray-600">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="flex flex-col items-start py-8 border border-gray-200 rounded-md mt-10 bg-white shadow-md">
                    <div className=" flex flex-col p-4 items-center self-stretch gap-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h3>
                        <p className="text-gray-600">Reach out to our support team for more information.</p>
                        <Button className="mt-4 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                            Get in Touch
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
