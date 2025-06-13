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
    const faqs = [
        {
            question: 'What types of organizations can use this platform?',
            answer: 'Schools, clubs, private academies, and district teams.',
        },
        {
            question: 'How difficult is it to implement?',
            answer: 'Most organizations are onboarded within 1–2 weeks with guided support.',
        },
        {
            question: 'Is my data secure?',
            answer: 'Yes. End-to-end encryption, secure hosting, and GDPR compliance are included.',
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-4xl px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">Frequently asked questions</h2>
                <dl className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i}>
                            <dt className="font-medium text-gray-800">{faq.question}</dt>
                            <dd className="mt-2 text-gray-600">{faq.answer}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
