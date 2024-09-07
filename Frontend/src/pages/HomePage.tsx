import FeatureSection from "../components/Section/FeatureSection";
import HeroSection from "../components/Section/HeroSection";
import TestimonialsSection from "../components/Section/TestimonialsSection.js";
import WhyUsSection from "../components/Section/WhyUsSection.js";
import Navbar from "../components/Section/Navbar";

function HomePage() {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection />
      <FeatureSection />
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
}

export default HomePage;
