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
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
