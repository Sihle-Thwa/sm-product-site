import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full flex justify-center`}>
        <div className="w-full max-w-[1024px] px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
