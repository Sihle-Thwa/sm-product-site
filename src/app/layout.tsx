import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} `}>
      <body className="min-h-screen font-inter antialiased">
        <div className="relative flex min-h-screen px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
