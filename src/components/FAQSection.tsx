"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="s_faq-wrap">
            <div className="c_faq-container">
                <h2 className="heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold ">
                    Frequently Asked Questions
                </h2>
                <div className="c_faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <Button
                                onClick={() => toggleItem(index)}
                                aria-expanded={openItem === index}
                                className="faq-trigger"
                            >
                                <span className="faq-question text-md-semibold md:text-sm-semibold sm:text-xs-semibold ">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`faq-chevron w-5 h-5 shrink-0 transition-transform duration-300 ${openItem === index ? "rotate-180" : ""}`}
                                />
                            </Button>
                            <div className={`faq-content ${openItem === index ? "open" : ""}`}>
                                <div className="faq-answer text-sm-regular sm:text-xs-regular">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
