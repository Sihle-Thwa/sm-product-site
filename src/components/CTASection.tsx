"use client";
import React from "react";
import { Button } from "./ui/button";

export default function CTASection() {
    return (
        <section className="flex flex-col items-center self-stretch gap-8 bg-gray-500 py-8">
            <div className="flex flex-col items-start w-full px-8 gap-8">
                <div className="flex flex-col items-center self-stretch">
                    <h2 className="text-3xl font-bold">Start your free trial</h2>
                    <p className="mt-4 text-lg">Join over 500+ organizations already growing with us.</p>


                    <div className="flex items-start mt-8 gap-4">
                        <Button className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}