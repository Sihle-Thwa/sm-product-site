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
                    <h2 className="heading-lg-semibold md:heading-md-semibold sm:heading-sm-semibold xs:heading-xs-semibold">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg-regular md:text-md-regular sm:text-sm-regular xs:text-xs-regular">
                        Everything you need to know about the product and billing.
                    </p>
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
                                    <span className="text-lg-semibold lg:text-md-semibold md:text-sm-semibold sm:text-xs-semibold xs:text-xs-semibold">
                                        {faq.question}
                                    </span>
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
                                    <p className="text-sm-regular">{faq.answer}</p>
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