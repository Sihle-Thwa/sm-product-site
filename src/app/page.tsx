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


export const metadata = {
  title: "U-Organise - Product Site",
  description: "U-Organise is a powerful tool for managing your players and teams efficiently.",
  viewport: { width: "device-width", initialScale: 1, maximumScale: 1 },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {[<HeroSection key="hero" />,
          <SocialProofSection key="social-proof" />,
          <FeatureSection key="feature" />,
          <TestimonialsSection key="testimonials" />,
          <FAQSection key="faq" />,
          <PricingSection key="pricing" />,
          <MetricSection key="metric" />,
          <CTASection key="cta" />,
        ].flatMap((Component, i, arr) => (
          i < arr.length - 1
            ? [Component, <SectionDivider key={`divider-${i}`} />]
            : [Component]
        ))}
      </main>
      <Footer />
    </>
  );
}