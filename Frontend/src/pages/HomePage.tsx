import FeatureSection from "../components/Section/FeatureSection";
import HeroSection from "../components/Section/HeroSection";
import Navbar from "../components/Section/Navbar";
import TestimonialsSection from "../components/Section/TestimonialsSection.js";
import WhyUsSection from "../components/Section/WhyUsSection.js";

function HomePage() {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection />
      <HeroSection />
      <FeatureSection />
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
}

export default HomePage;
