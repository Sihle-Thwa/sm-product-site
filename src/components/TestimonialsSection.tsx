"use client";
import React from "react";
import { Button } from "./ui/button";
import TestimonialCard from "./TestimonialCard";
import Testimonials from "@/data/testimonial";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
    return (
        <section
            className="s_testimonial-wrap"
            aria-labelledby="testimonials-section"
        >
            <div className="c_testimonial-wrap">
                <div id="testimonials-heading"
                    className="c_testimonial-container">
                    {/*Content Heading SubHeading and CTA */}
                    <div className="_testimonial-content">
                        { /* Content Heading SubHeading and CTA */}
                        <div className="_testimonial-intro">
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
                <div className="_testimonial-card-wrap">
                    {Testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.4 }}
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
