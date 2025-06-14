"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Testimonial } from "../data/types"; // Adjust the import path as necessary

interface TestimonialProps {
    name: string;
    role: string;
    testimonial: string;
    image?: string;
}

export default function TestimonialCard({ name, role, testimonial, image }: TestimonialProps) {
    return (
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full">
            <CardContent className="bg-white/80 backdrop-blur-sm p-4 rounded flex flex-col items-center">
                {image && (
                    <Image
                        src={image}
                        alt={name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 object-cover"
                    />
                )}
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
                <blockquote className="mt-4 italic">{testimonial}</blockquote>
            </CardContent>
        </Card>
    );
};

