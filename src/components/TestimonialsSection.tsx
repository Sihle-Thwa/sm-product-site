"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function FeatureSection() {
    const customers = [
        { name: 'Michael Chen', role: 'Sports Coordinator', quote: 'This reduced our admin work by 75%!' },
        { name: 'Carlos Rodriguez', role: 'Head Coach', quote: 'Player tracking has never been easier.' },
        { name: 'Sarah Johnson', role: 'Athletics Director', quote: 'Game-changer for organizing competitions.' },
    ];

    return (
        <section className="bg-white flex flex-col items-center py-16">
            <div className="flex flex-col items-center max-w-4xl px-4">
                <div className="flex items-start self-stretch justify-between">
                    <div className="flex flex-col items-start gap-5">
                        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">Don’t just take our word for it</h2>
                        <p className="text-lg text-gray-700 text-center mb-6">
                            Hear from our satisfied customers.
                        </p>
                    </div>

                    <div className="flex items-start gap-2">
                        <Button className="bg-blue-500 text-white hover:bg-blue-600">Our Customers</Button>
                        <Button className="border border-gray-300 text-gray-700 hover:bg-gray-100">Get Started</Button>
                    </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    {customers.map((c) => (
                        <div key={c.name} className="rounded-xl border p-6 shadow-sm">
                            <blockquote className="text-gray-700">“{c.quote}”</blockquote>
                            <p className="mt-4 font-semibold text-gray-900">{c.name}</p>
                            <p className="text-sm text-gray-500">{c.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
