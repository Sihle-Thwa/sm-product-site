"use client";
import React from "react";
import { Button } from "./ui/button";
import TestimonialCard from "./TestimonialCard";
import Testimonials from "@/data/testimonial";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
    return (
        //Testimonials Section
        <section className="flex flex-col items-center w-full py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
            {/* Testimonial Container */}
            <div className="container mx-auto flex flex-col items-center gap-8">
                {/* Testimonial Content*/}
                <div className="flex justify-between items-start self-stretch gap-12">
                    {/* Heading and Description */}
                    <div className="flex flex-row justify-between w-full gap-12">
                        {/* Heading and Sub Heading */}
                        <div className="flex flex-col gap-6 items-start">
                            {/* Main Heading and Subheading */}
                            <div className="heading-lg-semibold mb-6">
                                Don&apos;t just take our word for it
                            </div>
                            <div className="text-xl-regular mb-10">
                                Hear from some of our amazing customers.
                            </div>
                            <div className="text-sm-regular mb-10">
                                Our platform has transformed the way sports organizations operate, and our customers are thrilled with the results.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-start gap-4">
                        <Button className="button button-lg button-accent">Our Customers</Button>
                        <Button className="button button-lg button-primary">Create account</Button>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="w-full flex justify-center">
                    <div className="flex flex-row justify-center items-stretch gap-8 max-w-7xl">
                        {Testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0" // Prevents shrinking
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
            </div>
        </section>
    );
}