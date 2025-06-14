// File: /src/components/FeatureSection.tsx
"use client";
import React from 'react';
import Image from "next/image";

export default function FeatureSection() {
    const features = [
        { title: 'Team Management', description: 'Sports management has evolved dramatically in the digital age. Organizations that embrace comprehensive platforms like this one gain a competitive advantage both on and off the field.' },
        { title: 'Player Development', description: 'Comprehensive player profiles. Performance tracking across multiple teams. Participation history. Health and fitness monitoring' },
        { title: 'Administrative Tools', description: 'Role-based dashboards. Custom reporting. Document management. Communication tools for coaches, players, and parents.' },
        { title: 'Technical Highlights', description: 'Cloud-based secure database. Mobile-responsive design. Real-time updates. API integration capabilities.' },
    ];

    return (
        <section className="bg-white flex flex-col pt-24 gap-16 items-center justify-center self-stretch">
            <div className="flex flex-col items-start gap-8 w-fit px-8 py-0">
                <h4>Features</h4>
                <h2 className=" font-semibold text-center text-gray-900 ">Overflowing with useful features</h2>
                <p>Sports management has evolved dramatically in the digital age. Organizations that embrace comprehensive platforms like this one gain a competitive advantage both on and off the field.</p>
            </div>
            <div className="flex w-full items-center py-0 px-8 gap-16">
                <div className="flex flex-col items-start flex-1 gap-16 w-full px-8 py-0">
                    <div>
                        {features.map((f) => (
                            <div key={f.title} className="text-center">
                                <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
                                <p className="mt-2 text-gray-600">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 px-0 py-8">
                    <Image src="/FeatureSection.png" alt="Feature Illustration" layout="responsive" width={500} height={500} />
                </div>

            </div>

        </section >
    );
}