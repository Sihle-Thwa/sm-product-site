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
          <div className="flex flex-col min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
