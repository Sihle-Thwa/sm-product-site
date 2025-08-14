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
                    width={360}
                    height={320}
                    alt={`Testimonial from ${name}`}
                    className="_testimonial-card-image"
                />
            )}
            <div className="_testimonial-card-content">
                <blockquote
                    className="italic lg:text-md-regular md:text-sm-regular sm:text-xs-regular"
                    aria-label={`Testimonial from ${name}`}
                >
                    “{testimonial}”
                </blockquote>
                {renderStars()}
                <figcaption className="space-y-1">
                    <div className="text-xl-semibold lg:text-lg-semibold md:text-md-semibold sm:text-sm-semibold">
                        {name}
                    </div>
                    <div className="text-md-medium md:text-sm-regular sm:text-xs-regular">
                        {role}
                    </div>
                    <div className="text-sm-regular md:text-sm-regular sm:text-xs-regular">
                        {organization}
                    </div>
                </figcaption>
            </div>
        </div>
    );
}
