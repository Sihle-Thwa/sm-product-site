"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? -1 : index);
    };

    return (
        <section className="s_faq-wrap">
            <div className="flex flex-col w-full gap-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg border-border w-full">
                        <Button
                            onClick={() => toggleItem(index)}
                            aria-expanded={openItem === index}
                            className="flex items-center justify-between w-full text-left p-5 cursor-pointer"
                        >
                            <span className="text-sm-semibold">{faq.question}</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-200 ${openItem === index ? "rotate-180" : ""}`}
                            />
                        </Button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <div className="p-5 text-sm-regular">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
