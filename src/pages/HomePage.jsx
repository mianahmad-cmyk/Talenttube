import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Featured from "../components/Featured";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Featured />
      <WhyChoose />
      <Subscribe />
      <Footer />
    </>
  );
};

export default HomePage;
