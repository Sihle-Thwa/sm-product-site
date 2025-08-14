"use client";

import React from "react";
import Image from "next/image";
import "../styles/tokens/testimonialcard.css";

interface TestimonialProps {
    name: string;
    role: string;
    testimonial: string;
    image?: string;
    rating: number;
    organization: string;
}

export default function TestimonialCard({
    name,
    role,
    testimonial,
    image,
    rating,
    organization,
}: TestimonialProps) {
    const renderStars = () => (
        <div
            role="img"
            aria-label={`${rating} out of 5 stars`}
            className="_testimonial-card-content-rate"
        >
            {Array.from({ length: 5 }, (_, index) => (
                <span
                    key={index}
                    className={
                        index < rating
                            ? "xl:text-xl-regular lg:text-lg-regular md:text-md-regular sm:text-sm-regular text-xs-regular text-yellow-500"
                            : "text-yellow-500"
                    }
                >
                    ★
                </span>
            ))}
        </div>
    );

    return (
        <div className="_testimonial-card">
            {image && (
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={`Testimonial from ${name}`}
                    className="_testimonial-card-image"
                />
            )}
            <div className="_testimonial-card-container">
                <div className="_testimonial-card-content">
                    <div className="_testimonial-card-content-customer">
                        <div
                            className="_customer-quote"
                            aria-label={`Testimonial from ${name}`}
                        >
                            “{testimonial}”
                        </div>
                        <div className="_customer-rating">{renderStars()}</div>
                        <div className="_customer-name">{name}</div>
                    </div>
                    <div className="_testimonial-card-content-info">
                        <div className="_customer-organisation">{organization}</div>
                        <div className="_customer-role">{role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
