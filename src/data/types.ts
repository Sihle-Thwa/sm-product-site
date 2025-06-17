import { StaticImageData } from "next/image";


export interface Feature { 
    title: string;
    description: string;
}
export interface ProductPricing {
    name: string;
    price: number | string;
    features: string[];
}

export interface Metric { 
    title: string;
    value: string | number;
    description: string;
}

export interface FooterItem { 
    title: string;
    items: { label: string; href: string }[];
}

export interface Testimonial {
    name: string;
    role: string;
    testimonial: string;
    image?: string | StaticImageData; // ✅ supports both direct URLs and imported images
    rating: number; // New property for rating stars
    organization: string; // New property for organization
}

export interface FAQ { 
    question: string;
    answer: string;
}