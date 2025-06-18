import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";


export const metadata: Metadata = {
  title: "U-Organise - Product Site",
  description: "U-Organise is a powerful tool for managing your players and teams efficiently.",
};

export const viewport: Viewport = {
  maximumScale: 1
};
const inter = Inter({
  subsets: ["latin"],

});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body >
        <main>{children}</main>
      </body>
    </html>
  );
}
