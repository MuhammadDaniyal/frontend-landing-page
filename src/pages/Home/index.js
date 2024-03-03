import React from "react";
import HeroSection from "../../components/Home/main/HeroSection";
import Navbar from "../../components/shared/Navbar";
import BannerSection from "../../components/Home/banner/BannerSection";
import CollectionSection from "../../components/Home/Collections/CollectionSection";
import BestSellingSection from "../../components/Home/BestSellings/BestSellingSection";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BannerSection />
      <CollectionSection />
      <BestSellingSection />
    </>
  );
};

export default index;
