import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "U-Organise - Product Site",
  description: "U-Organise is a powerful tool for managing your players and teams efficiently.",
  viewport: { width: "device-width", initialScale: 1, maximumScale: 1 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
