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
                <div id="testimonials-heading" className="c_testimonial-container">
                    {/* Section Heading + CTA */}
                    <div className="_testimonial-content">
                        <div className="_testimonial-intro">
                            <h2 className="_testimonial_title text-xl-semibold sm:text-md-semibold md:text-lg-semibold">
                                Don’t just take our word for it
                            </h2>
                            <p className="_testimonial_subtitle text-lg-medium md:text-md-medium sm:text-sm-medium">
                                Hear from some of our amazing customers.
                            </p>
                            <p className="_testimonial_description text-sm-regular md:text-xs-regular sm:text-xs-regular">
                                Our platform has transformed the way sports organizations
                                operate, and our customers are thrilled with the results.
                            </p>
                        </div>

                        <div className="_testimonial-cta">
                            <div className="_testimonial-cta-buttons">
                                <Button
                                    className="button button-lg md:button-md sm:button-sm button-accent"
                                    aria-label="See Our Customers"
                                >
                                    Our Customers
                                </Button>
                                <Button
                                    className="button button-lg md:button-md sm:button-sm button-primary"
                                    aria-label="Create Your Account"
                                >
                                    Create account
                                </Button>
                            </div>
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
