// import React from 'react'
import Footer from "../../Components/Footer/Footer";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeChoose from "./HomeChoose";
import HomeClient from "./HomeClient";
import HomeService from "./HomeService";
import HomeStudio from "./HomeStudio";
import HomeSucess from "./HomeSucess";

const Home = () => {
  return (
    <>
      {/* Hero Section */}

      <Hero />

      {/* Home About Section */}

      <HomeAbout />

      {/* Home Choose Us */}

      <HomeChoose />

      {/* Home Client */}

      <HomeClient />

      {/* Home Service */}

      <HomeService />

      {/* Home Success */}

      <HomeSucess />

      {/* Home Studio */}

      <HomeStudio  />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Home;
