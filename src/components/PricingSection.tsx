"use client";
import React from "react";

export default function FeatureSection() {
    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Feature One</h3>
                    <p className="text-gray-600">
                        Description of feature one, highlighting its benefits and use cases.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
                    <p className="text-gray-600">
                        Description of feature two, emphasizing how it solves user problems.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
                    <p className="text-gray-600">
                        Description of feature three, showcasing its unique aspects.
                    </p>
                </div>
            </div>
        </section>
    );
}