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
                <div id="testimonials-heading"
                    className="c_testimonial-container">
                    {/*Content Heading SubHeading and CTA */}
                    <div className="_testimonial-content">
                        { /* Content Heading SubHeading and CTA */}
                        <div className="_testimonial-intro">
                            { /* Heading and Subheading and description */}
                            <div className="_testimonial_title text-xl-semibold sm:text-md-semibold md:text-lg-semibold">
                                Don’t just take our word for it
                            </div>
                            <div className="_testimonial_subtitle text-lg-medium md:text-md-medium sm:text-sm-medium">
                                Hear from some of our amazing customers.
                            </div>
                            <div className="_testimonial_description text-sm-regular md:text-xs-regular sm:text-xs-regular">
                                Our platform has transformed the way sports organizations operate, and our customers are thrilled with the results.
                            </div>
                        </div>
                        { /* CTA Buttons */}
                        <div className="_testimonial-cta">
                            <div className="_testimonial-cta-buttons">
                                <Button className="button button-lg md:button-md sm:button-sm button-accent">Our Customers</Button>
                                <Button className="button button-lg md:button-md sm:button-sm button-primary">Create account</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonials Cards */}
                <section className="s_testimonial-card-wrap">
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
                </section>
            </div>
        </section>
    );
}
