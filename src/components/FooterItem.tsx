"use client";
import React from "react";

interface FooterItemProps {
    title: string;
    items: { label: string; href: string }[];
}

export default function FooterItem({ title, items }: FooterItemProps) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-sm-semibold">{title}</h3>
            <div className="flex flex-col gap-2">
                {items.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-xs-regular"
                        aria-label={`Navigate to ${item.label}`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
