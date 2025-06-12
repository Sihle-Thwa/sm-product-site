import CTASection from "@/sections/CTASection";
import FAQSection from "@/sections/FAQSection";
import FeatureSection from "@/sections/FeatureSection";
import HeroSection from "@/sections/HeroSection";
import PricingSection from "@/sections/PricingSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </>
  );
}