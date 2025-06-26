"use client";
import React from "react";
import { Button } from "./ui/button";
import TestimonialCard from "./TestimonialCard";
import Testimonials from "@/data/testimonial";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
    return (
        <section
            className="w-full py-20 px-4 sm:px-6 lg:px-8"
            aria-labelledby="testimonials-section"
        >
            <div className="max-w-7xl mx-auto space-y-16">
                <header id="testimonials-heading" className="space-y-4 text-left">
                    <h2 className="text-lg-bold ">
                        Don’t just take our word for it
                    </h2>
                    <p className="text-lg-regular">
                        Hear from some of our amazing customers.
                    </p>
                    <p className="text-sm-regular max-w-xl">
                        Our platform has transformed the way sports organizations operate, and our customers are thrilled with the results.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <Button className="button button-lg button-accent">Our Customers</Button>
                        <Button className="button button-lg button-primary">Create account</Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
