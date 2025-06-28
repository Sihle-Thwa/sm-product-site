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


export default function Home() {
  return (
    <>
      <Header />
      <main>
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
    </>
  );
}