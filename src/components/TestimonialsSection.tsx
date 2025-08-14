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
            <div className="c_testimonial-container">
                {/* Heading + CTA */}
                <div id="testimonials-heading" className="_testimonial-content">
                    <div className="_testimonial-intro">
                        <h2 className="_testimonial-heading">
                            Don’t just take our word for it
                        </h2>
                        <p className="_testimonial-subheading">
                            Hear from some of our amazing customers.
                        </p>
                        <p className="_testimonial-subtitle">
                            Our platform has transformed the way sports organizations operate,
                            and our customers are thrilled with the results.
                        </p>
                    </div>

                    <div className="_testimonial-cta">
                        <div className="_testimonial-cta-buttons">
                            <Button className="button button-accent">Our Customers</Button>
                            <Button className="button button-primary">Create Account</Button>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <section className="s_testimonial-card-wrap">
                    {Testimonials.map((testimonial, index) => (
                        <motion.div
                            key={`testimonial-${testimonial.name}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <TestimonialCard
                                {...testimonial}
                                image={
                                    typeof testimonial.image === "string"
                                        ? testimonial.image
                                        : testimonial.image?.src
                                }
                            />
                        </motion.div>
                    ))}
                </section>
            </div>
        </section>
    );
}
