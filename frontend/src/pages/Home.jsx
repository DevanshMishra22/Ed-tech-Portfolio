import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import More from "../components/More";
import Swiper from "../components/Swiper";
import Midpage from "../components/midpage";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Midpage />
      <More />
      <Swiper />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
