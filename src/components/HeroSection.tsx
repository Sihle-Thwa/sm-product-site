"use client";
// src/sections/HeroSection.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="bg-white py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900">The Complete Sports Management Solution</h1>
            <p className="mt-4 text-lg text-gray-600">Streamline team management, player development, and operations in one platform.</p>
            <div className="mt-6 flex justify-center gap-4">
                <button className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">Book Demo</button>
                <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100">Sign up</button>
            </div>
        </section>
    );
}
