"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
    name: string;
    role: string;
    testimonial: string;
    image?: string | StaticImageData;
    rating: number; // New property for rating stars
    organization: string; // New property for organization
}

export default function TestimonialCard({ name, role, testimonial, image, rating, organization }: TestimonialProps) {
    // Debug: Log the image prop to see what we're getting
    if (process.env.NODE_ENV === 'development') {
        console.log('TestimonialCard image prop:', {
            type: typeof image,
            value: image,
            isString: typeof image === 'string',
            isStaticImageData: typeof image === 'object' && image !== null && 'src' in image,
        });
    }

    // Handle the image source properly
    const getImageSrc = (): string | null => {
        if (!image) return null;
        if (typeof image === 'string') {
            return image.startsWith('/') || image.startsWith('http') ? image : `/${image}`;
        }

        if ('src' in image) {
            return image.src;
        }
        return null;
    };
    const imageSrc = getImageSrc();

    // Render star rating
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
                ★
            </span>
        ));
    };

    return (
        <Card className="cardT ">

            <img
                src={imageSrc ?? undefined}
                alt={name}
                className="cardT-image"
            />

            <CardContent className="cardT-content">
                <blockquote className="mt-4 italic">
                    "{testimonial}"
                </blockquote>
                <div className="flex justify-center mt-2">{renderStars()}</div>
                <div className="text-lg-semibold mt-2">{name}</div>
                <p className="text-sm-medium">{role}</p>
                <p className="text-sm-regular">{organization}</p>
            </CardContent>
        </Card>
    );
}