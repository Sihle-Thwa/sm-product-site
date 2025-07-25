"use client";

import React from "react";

interface FooterItemProps {
    title: string;
    items: { label: string; href: string }[];
}

export default function FooterItem({ title, items }: FooterItemProps) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="lg:text-sm-semibold md:text-sm-medium sm:text-xs-regular text-foreground">{title}</h3>
            <ul className="flex flex-col gap-2">
                {items.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="text-xs-regular text-muted-foreground hover:text-accent transition-colors duration-150"
                            aria-label={`Navigate to ${item.label}`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
