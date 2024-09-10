import FeatureSection from "../components/Section/FeatureSection.js";
import HeroSection from "../components/Section/HeroSection.js";
import Navbar from "../components/Section/Navbar.js";
import TestimonialsSection from "../components/Section/TestimonialsSection.js";
import WhyUsSection from "../components/Section/WhyUsSection.js";

function LandingPage() {
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

export default LandingPage;
