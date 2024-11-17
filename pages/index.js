import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Text1 from "./components/Text1";
import Cards from "./components/Cards";
import Banner from "./components/Banner";
import LocomotiveScroll from "locomotive-scroll";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Othersec from "./components/Othersec";
import Banner4 from "./components/Banner4";
import Text2 from "./components/Text2";
import Footer from "./components/Footer";
import Why from "./components/Why";
import Marquee from "react-fast-marquee";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
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
      {/* <Cursor /> */}
      <Navbar />
      <Home />
      <Banner />

      <Why />

      <Banner2 />
      <Cards />
      {/* <Banner3 /> */}
      <Othersec />
      {/* <Banner4 /> */}
      {/* <Text2 /> */}
      <Text1 />
      <Footer />
    </>
  );
};

export default Index;
