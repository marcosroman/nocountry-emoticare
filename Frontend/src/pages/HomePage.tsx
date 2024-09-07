import FeatureSection from "../components/Section/FeatureSection";
import HeroSection from "../components/Section/HeroSection";
import Navbar from "../components/Section/Navbar";

function HomePage() {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection />
      <FeatureSection />
    </>
  );
}

export default HomePage;
