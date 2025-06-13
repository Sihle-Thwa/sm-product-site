import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <FeatureSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}