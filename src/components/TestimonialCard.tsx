"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
    name: string;
    role: string;
    testimonial: string;
    image?: string | StaticImageData;
}

export default function TestimonialCard({ name, role, testimonial, image }: TestimonialProps) {
    // Debug: Log the image prop to see what we're getting
    if (process.env.NODE_ENV === 'development') {
        console.log('TestimonialCard image prop:', {
            type: typeof image,
            value: image,
            isString: typeof image === 'string',
            hasSourceProp: image && typeof image === 'object' && 'src' in image
        });
    }

    // Handle the image source properly
    const getImageSrc = (): string | null => {
        if (!image) return null;

        // If it's a string, ensure it starts with / or is absolute URL
        if (typeof image === 'string') {
            if (image.startsWith('/') || image.startsWith('http')) {
                return image;
            }
            // If it's a relative path, add leading slash
            return `/${image}`;
        }

        // If it's a StaticImageData object, get the src
        if (typeof image === 'object' && image !== null) {
            if ('src' in image && typeof image.src === 'string') {
                return image.src;
            }
            // Handle other possible object structures
            if ('default' in image && typeof image.default === 'string') {
                return image.default;
            }
        }

        return null;
    };

    const imageSrc = getImageSrc();

    return (
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full rounded-xl">
            <CardContent className="bg-white/80 backdrop-blur-sm p-6 rounded flex flex-col items-center">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 object-cover ring-2 ring-primary-500"
                    />
                ) : (
                    // Fallback: Display initials if no valid image
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4 ring-2 ring-primary-500">
                        <span className="text-xl font-semibold text-gray-600">
                            {name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </span>
                    </div>
                )}
                <h3 className="text-lg font-semibold text-center">{name}</h3>
                <p className="text-sm text-gray-500 text-center">{role}</p>
                <blockquote className="mt-4 italic text-center">"{testimonial}"</blockquote>
            </CardContent>
        </Card>
    );
}