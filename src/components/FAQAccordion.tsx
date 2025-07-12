'use client';
import React, { useState } from 'react';
import { faqs } from '@/data/faqs';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = () => {
    const [openItem, setOpenItem] = useState(0);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? -1 : index);
    };

    return (
        <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
                <div key={index} className="flex flex-row w-full items-flex-start gap-4 text-left">
                    <div className="w-full gap-4">
                        <button
                            onClick={() => toggleItem(index)}
                            className="flex flex-row items-center justify-between cursor-pointer w-full text-left p-5"
                        >
                            <div className="flex items-center justify-between max-w-[calc(100%-64px)] w-full">
                                <span className="text-sm-semibold">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-200 ${openItem === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="w-full gap-4 p-5">
                                <div className="text-sm-regular">{faq.answer}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;