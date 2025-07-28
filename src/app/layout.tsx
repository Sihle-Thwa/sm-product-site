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
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen font-inter antialiased">
        <div className="min-h-screen relative ">
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            {children}

          </div>

        </div>
      </body>
    </html>
  );
}
