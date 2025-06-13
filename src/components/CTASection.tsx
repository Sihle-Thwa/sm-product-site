"use client";
import React from "react";

export default function CTASection() {
    return (
        <section className="bg-navy py-20 text-center">
            <h2 className="text-3xl font-bold">Start your free trial</h2>
            <p className="mt-4 text-lg">Join over 500+ organizations already growing with us.</p>
            <div className="mt-6">
                <button className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">Get Started</button>
            </div>
        </section>
    );
}