"use client";
import React from "react";

export default function FooterItem({ title, items }: { title: string; items: { label: string; href: string }[] }) {
    return (
        <div className="flex flex-col items-start self-stretch gap-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex flex-col items-start self-stretch gap-2">
                {items.map((item) => (
                    <a key={item.label} href={item.href} className="text-sm text-gray-600 hover:underline">
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
}