"use client";
import React from "react";
import { Button } from "./ui/button";
import TestimonialCard from "./TestimonialCard";
import Testimonials from "@/data/testimonial";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
    return (
        <section
            className="flex flex-col items-center w-full py-16"
            aria-labelledby="testimonials-section"
        >
            <div className="max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
                <div id="testimonials-heading"
                    className="container space-y-4 w-full">
                    {/*Content Heading SubHeading and CTA */}
                    <div className="flex justify-between items-start self-stretch">
                        { /* Content Heading SubHeading and CTA */}
                        <div className="flex flex-col items-start gap-5">
                            { /* Heading and Subheading and description */}
                            <div className="text-xl-semibold self-stretch ">
                                Don’t just take our word for it
                            </div>
                            <div className="text-lg-medium self-stretch">
                                Hear from some of our amazing customers.
                            </div>
                            <div className="text-sm-regular self-stretch">
                                Our platform has transformed the way sports organizations operate, and our customers are thrilled with the results.
                            </div>
                        </div>
                        { /* CTA Buttons */}
                        <div className="flex flex-end self-stretch">
                            <div className="flex flex-end gap-4">
                                <Button className="button button-lg button-accent">Our Customers</Button>
                                <Button className="button button-lg button-primary">Create account</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonials Cards */}
                <div className="flex flex-row justify-center items-center gap-8">
                    {Testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TestimonialCard
                                name={testimonial.name}
                                role={testimonial.role}
                                testimonial={testimonial.testimonial}
                                image={testimonial.image as string}
                                rating={testimonial.rating}
                                organization={testimonial.organization}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
