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
        <HeroSection key="hero" />,
        <SocialProofSection key="social-proof" />,
        <SectionDivider key="section-divider" />,
        <FeatureSection key="feature" />,
        <SectionDivider key="section-divider-2" />,
        <TestimonialsSection key="testimonials" />,
        <SectionDivider key="section-divider-3" />,
        <FAQSection key="faq" />,
        <SectionDivider key="section-divider-4" />,
        <PricingSection key="pricing" />,
        <SectionDivider key="section-divider-5" />,
        <MetricSection key="metric" />,
        <SectionDivider key="section-divider-6" />,
        <CTASection key="cta" />,
      </main>
      <Footer />
    </>
  );
}