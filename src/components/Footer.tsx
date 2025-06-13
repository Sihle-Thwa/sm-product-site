"use client";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-10 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} SBM Concepts. All rights reserved.</p>
        </footer>
    );
}