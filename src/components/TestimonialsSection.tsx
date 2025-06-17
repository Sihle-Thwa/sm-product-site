"use client";
import React from "react";
import { Button } from "./ui/button";
import TestimonialCard from "./TestimonialCard";
import Testimonials from "@/data/testimonial";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
    return (
        //Testimonials Section
        <section className="flex flex-col pt-16 items-center gap-8 self-stretch">
            <div className="flex flex-col items-center gap-8 px-8 max-w-[1280px]">
                <div className="flex flex-col items-center self-stretch gap-12">
                    <div className="flex flex-col items-start gap-6">
                        <div className="heading-lg-semibold mb-6">
                            Don’t just take our word for it
                        </div>
                        <div className="text-xl-regular mb-10">
                            Hear from some of our amazing customers.
                        </div>
                    </div>
                    <div className="flex flex-1 items-end gap-4">
                        <Button >Our Customers</Button>
                        <Button >Create account</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center max-w-[1280px] gap-8 px-0 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Check row layout */}
                        {Testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className=""
                            >
                                <TestimonialCard
                                    name={testimonial.name}
                                    role={testimonial.role}
                                    testimonial={testimonial.testimonial}
                                    image={testimonial.image}
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
