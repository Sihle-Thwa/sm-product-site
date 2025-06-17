import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";



export const metadata: Metadata = {
  title: "U-Organise - Product Site",
  description: "U-Organise is a powerful tool for managing your players and teams efficiently.",
};

export const viewport: Viewport = {
  maximumScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
