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
        <span role="img" aria-label={`${rating} out of 5 stars`} className="">
            {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < rating ? "text-lg-regular" : "text-gray-400"}>
                    ★
                </span>
            ))}
        </span>
    );

    return (
        <div className="testimonial-card">
            {image && (
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={`Photo of ${name}`}
                    className="testimonial-card-image"
                />
            )}
            <div className="testimonial-card-content">
                <blockquote className="italic text-sm-regular">“{testimonial}”</blockquote>
                <div className="flex justify-center">{renderStars()}</div>
                <figcaption className="space-y-1">
                    <div className="text-lg-semibold">{name}</div>
                    <p className="text-sm-medium">{role}</p>
                    <p className="text-sm-regular">{organization}</p>
                </figcaption>
            </div>
        </div>
    );
}
