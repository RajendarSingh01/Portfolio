import React from "react";
import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
const Home = () => {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
