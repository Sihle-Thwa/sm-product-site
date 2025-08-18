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
            aria-labelledby="testimonials-section" id="testimonials"
        >
            <div className="c_testimonial-container">
                {/* Heading + CTA */}
                <div className="_testimonial-content">
                    <div className="_testimonial-intro">
                        <div className="_testimonial-heading">
                            Don’t just take our word for it
                        </div>
                        <div className="_testimonial-subheading">
                            Hear from some of our amazing customers.
                        </div>
                        <div className="_testimonial-subtitle">
                            Our platform has transformed the way sports organizations operate,
                            and our customers are thrilled with the results.
                        </div>
                    </div>

                    <div className="_testimonial-cta">

                        <Button className="button button-accent">Join Us</Button>
                        <Button className="button button-primary">Demo</Button>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="_testimonial-content-card">
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
                </div>
            </div>
        </section>
    );
}
