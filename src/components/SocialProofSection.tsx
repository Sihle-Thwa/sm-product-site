// src/sections/SocialProofSection.tsx
"use client";
import React from "react";

export default function SocialProofSection() {
    return (
        // This section is designed to showcase the trust and credibility of the product by highlighting its use by various organizations.
        //Social Section
        <section className="flex flex-col items-center w-full py-16">
            { /* Section */}
            <div className="max-w-7xl mx-auto space-y-12">
                { /* Container */}
                <div className="container mx-auto flex flex-col items-center gap-8 px-8">
                    { /*Content*/}
                    <div className="flex flex-col items-center w-full gap-12">
                        { /* Text and Partner Logos */}
                        <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
                            { /* Text */}
                            <p className="text-sm-regular">
                                Trusted by schools, district teams, and national organizations to manage over 50,000 athletes worldwide.
                            </p>
                            { /* Logos: Add School, Districts, Organization logos here */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}