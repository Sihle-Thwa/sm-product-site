"use client";

import React from "react";
import Image from "next/image";

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
                            ? "text-lg-regular md:text-md-regular sm:text-sm-regular"
                            : "text-gray-400"
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
                    priority
                />
            )}
            <div className="_testimonial-card-content">
                <blockquote
                    className="italic lg:text-sm-regular text-xs-regular"
                    aria-label={`Testimonial from ${name}`}
                >
                    “{testimonial}”
                </blockquote>
                {renderStars()}
                <figcaption className="space-y-1">
                    <div className="text-lg-semibold md:text-md-semibold sm:text-sm-semibold">
                        {name}
                    </div>
                    <div className="text-sm-medium md:text-sm-regular sm:text-xs-regular">
                        {role}
                    </div>
                    <div className="text-sm-regular md:text-xs-regular sm:text-xs-regular">
                        {organization}
                    </div>
                </figcaption>
            </div>
        </div>
    );
}
