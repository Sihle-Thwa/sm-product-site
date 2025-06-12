"use client";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Error",
    description: "An error occurred",
};

export default function ErrorPage() {
    return (
        <main className={`${inter.className} flex min-h-screen flex-col items-center justify-center p-24`}>
            <h1 className="text-6xl font-bold">Error</h1>
            <p className="mt-4 text-lg">An unexpected error has occurred.</p>
        </main>
    );
}