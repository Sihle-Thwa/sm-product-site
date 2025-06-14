"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import testimonials from "@/data/testimonial";
import TestimonialCard from "./TestimonialCard";

export default function FeatureSection() {

    return (
        <section className="bg-white flex flex-col items-center py-16 ">
            <div className="flex flex-col items-center justify-end w-full gap-16 px-16">
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
                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="flex items-start gap-4">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                role={testimonial.role}
                                testimonial={testimonial.testimonial}
                                image={testimonial.image}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
