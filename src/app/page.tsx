// app/page.tsx
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
  description: "A modern, responsive Product Marketing Website for the U-Organise Sports Management Platform",
  keywords: ["Sports", "Management", "Product Site", "Organise", "Platform"],
  authors: [{ name: "Siphesihle B. Mthethwa", url: "https://yourwebsite.com" }],
  creator: "Siphesihle B. Mthethwa",
  openGraph: {
    title: "U-Organise",
    description: "A modern, responsive Product Marketing Website for the U-Organise Sports Management Platform",
    url: "https://yourwebsite.com",
    siteName: "U-Organise",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <SectionDivider />
        <FeatureSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <MetricSection />
        <SectionDivider />
        <CTASection />
      </main>
      <SectionDivider />
      <Footer />
    </div>
  );
}
