"use client";
// src/sections/HeroSection.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Manage Your Team, Raise the Bar
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        All the tools you need to run your sports club smoothly.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button className="px-6 py-3">Get Started Free</Button>
                        <Button variant="outline" className="px-6 py-3">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="flex-1 mt-10 lg:mt-0">
                    {/* Placeholder for an image or illustration */}
                </div>
            </div>
        </section>
    );
}
