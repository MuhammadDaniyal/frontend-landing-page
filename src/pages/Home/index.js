import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import Navbar from "../../components/shared/Navbar";
import CollectionSection from "../../components/Home/Collections/CollectionSection";
import BestSellingSection from "../../components/Home/BestSellings/BestSellingSection";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <BestSellingSection />
    </>
  );
};

export default index;
