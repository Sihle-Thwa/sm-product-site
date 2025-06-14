
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
    image?: string; // Optional image URL
}