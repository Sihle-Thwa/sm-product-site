"use client";
import React from "react";
import { Button } from "./ui/button";
import { Testimonial } from "../data/types";
import TestimonialCard from "./TestimonialCard";
import Testimonials from "@/data/testimonial";
import { motion } from "framer-motion";

interface TestimonialsProps {
    testimonials: Testimonial[];
}
export default function TestimonialsSection({ testimonials }: TestimonialsProps) {
    return (
        <section className="bg-background flex flex-col items-center py-20 px-4 md:px-0">
            <div className="w-full max-w-5xl flex flex-col gap-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h2 className="text-3xl font-bold text-foreground text-center md:text-left">
                            Don’t just take our word for it
                        </h2>
                        <p className="text-lg text-muted-foreground text-center md:text-left">
                            Hear from our satisfied customers.
                        </p>
                    </div>
                    <div className="flex gap-2 justify-center md:justify-end">
                        <Button variant="default">Our Customers</Button>
                        <Button variant="outline">Get Started</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
                                    image={testimonial.image}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
