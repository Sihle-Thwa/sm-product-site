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