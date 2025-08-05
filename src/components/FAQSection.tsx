"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <div className="s_faq_wrap">
            <div className="c_faq-container">
                <h2 className="heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold ">
                    Frequently Asked Questions
                </h2>
                <ul className="c_faq-list">
                    {faqs.map((faq, index) => (
                        <li key={index} className="faq-item">
                            <Button
                                onClick={() => toggleItem(index)}
                                aria-expanded={openItem === index}
                                aria-controls={`faq-content-${index}`}
                                id={`faq-trigger-${index}`}
                                className="faq-trigger"
                            >
                                <span className="faq-question text-md-semibold">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`faq-chevron w-5 h-5 ${openItem === index ? "rotate-180" : ""}`}
                                />
                            </Button>
                            <div
                                id={`faq-content-${index}`}
                                className={`faq-content ${openItem === index ? "open" : "max-h-0 overflow-hidden"}`}
                                aria-hidden={openItem !== index}
                                aria-labelledby={`faq-trigger-${index}`}
                            >
                                <div className="faq-answer text-sm-regular ">{faq.answer}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FAQSection;
