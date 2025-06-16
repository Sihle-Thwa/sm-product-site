import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialProofSection from "@/components/SocialProofSection";
import MetricSection from "@/components/MetricSection";
import React from "react";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Head>
        <title>U-Organise - Product Site</title>
        <meta name="description" content="U-Organise is a powerful tool for managing your players and teams efficiently." />
      </Head>
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
      <Footer />
    </>
  );
}