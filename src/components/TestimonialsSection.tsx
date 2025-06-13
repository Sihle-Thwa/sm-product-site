"use client";
import React from "react";


export default function FeatureSection() {
    const customers = [
        { name: 'Michael Chen', role: 'Sports Coordinator', quote: 'This reduced our admin work by 75%!' },
        { name: 'Carlos Rodriguez', role: 'Head Coach', quote: 'Player tracking has never been easier.' },
        { name: 'Sarah Johnson', role: 'Athletics Director', quote: 'Game-changer for organizing competitions.' },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">Don’t just take our word for it</h2>
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
