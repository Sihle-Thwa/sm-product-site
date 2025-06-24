"use client";
import React from "react";
import Image from "next/image";

interface TestimonialProps {
    name: string;
    role: string;
    testimonial: string;
    image?: string; // Image should be a string URL or path
    rating: number; // New property for rating stars
    organization: string; // New property for organization
}

export default function TestimonialCard({ name, role, testimonial, image, rating, organization }: TestimonialProps) {
    // Render star rating
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
                ★
            </span>
        ));
    };

    return (
        <div className="testimonial-card">
            {/* Only render Image if imageSrc is not null */}
            {image && (
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={name}
                    className="testimonial-card-image"
                />
            )}
            <div className="testimonial-card-content">
                <blockquote className="text-sm-regular italic">
                    {testimonial}
                </blockquote>
                <div className="flex justify-center mt-2">{renderStars()}</div>
                <div className="text-lg-semibold mt-2">{name}</div>
                <p className="text-sm-medium">{role}</p>
                <p className="text-sm-regular">{organization}</p>
            </div>
        </div>
    );
}