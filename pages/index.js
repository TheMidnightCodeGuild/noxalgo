import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Text1 from "./components/Text1";
import Cards from "./components/Cards";
import Banner from "./components/Banner";
import LocomotiveScroll from "locomotive-scroll";
import Banner2 from "./components/Banner2";
import Othersec from "./components/Othersec";
import Footer from "./components/Footer";
import Why from "./components/Why";
import Mobiletest from "./components/Mobiletest";
import Loader from "./components/Loader";
const Index = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Home />
      <Banner />
      <Why />
      <Banner2 />
      <Cards />
      <Othersec />
      <div className="hidden md:block">
        <Text1 />
      </div>
      <Mobiletest />
      <Footer />
    </>
  );
};

export default Index;
