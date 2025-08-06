"use client";

import React from "react";

interface FooterItemProps {
    title: string;
    items: { label: string; href: string }[];
}

export default function FooterItem({ title, items }: FooterItemProps) {
    return (
        <div className="s_footer-item-wrap">
            <div className="c_footer-item-container">
                <h3 className="c_footer-item-header">{title}</h3>
                <ul className="c_footer-item-list">
                    {items.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="c_footer-item-link"
                                aria-label={`Navigate to ${item.label}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
