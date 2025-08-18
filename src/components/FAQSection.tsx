"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="s_faq-wrap">
            <div className="c_faq-container">
                {/* Section Header */}
                <div className="faq-header">
                    <div className="_faq-heading">
                        Frequently Asked Questions
                    </div>
                    <div className="_faq-description">
                        Everything you need to know about the product and billing.
                    </div>
                </div>

                {/* FAQ List */}
                <div className="c_faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            {/* FAQ Trigger Button */}
                            <button
                                onClick={() => toggleItem(index)}
                                aria-expanded={openItem === index}
                                aria-controls={`faq-content-${index}`}
                                id={`faq-trigger-${index}`}
                                className="faq-trigger"
                                type="button"
                            >
                                <div className="faq-question">
                                    <div>
                                        {faq.question}
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`faq-chevron w-5 h-5 ${openItem === index ? "open" : ""
                                        }`}
                                    aria-hidden="true"
                                />
                            </button>

                            {/* FAQ Content */}
                            <div
                                id={`faq-content-${index}`}
                                className={`faq-content ${openItem === index ? "open" : "collapsed"
                                    }`}
                                aria-hidden={openItem !== index}
                                aria-labelledby={`faq-trigger-${index}`}
                            >
                                <div className="faq-answer">
                                    <div>{faq.answer}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;