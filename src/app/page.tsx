//app/page.tsx
import React from "react";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialProofSection from "@/components/SocialProofSection";
import MetricSection from "@/components/MetricSection";
import SectionDivider from "@/components/SectionDivider";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "U-Organise",
  description: "A sports management product site built with Next.js",
  keywords: ["Next.js", "React", "Product Site", "Sample"],
  authors: [{ name: "Siphesihle B. Mthethwa", url: "https://yourwebsite.com" }],
  creator: "Siphesihle B. Mthethwa",
  openGraph: {
    title: "SM Product Site",
    description: "A sports management product site built with Next.js",
    url: "https://yourwebsite.com",
    siteName: "U-Organise",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main >
        <HeroSection />,
        <SocialProofSection />,
        <SectionDivider />,
        <FeatureSection />,
        <SectionDivider />,
        <TestimonialsSection />,
        <SectionDivider />,
        <FAQSection />,
        <SectionDivider />,
        <PricingSection />,
        <SectionDivider />,
        <MetricSection />,
        <SectionDivider />,
        <CTASection />,
      </main>
      <Footer />
    </div>
  );
}