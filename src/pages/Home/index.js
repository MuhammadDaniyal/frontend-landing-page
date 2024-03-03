import React from "react";
import HeroSection from "../../components/Home/main/HeroSection";
import Navbar from "../../components/shared/Navbar";
import BannerSection from "../../components/Home/banner/BannerSection";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BannerSection />
    </>
  );
};

export default index;
