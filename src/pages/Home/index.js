import React from "react";
import HeroSection from "../../components/Home/main/HeroSection";
import Navbar from "../../components/shared/Navbar";
import BannerSection from "../../components/Home/banner/BannerSection";
import CollectionSection from "../../components/Home/Collections/CollectionSection";
import BestSellingSection from "../../components/Home/BestSellings/BestSellingSection";
import BlogSection from "../../components/Home/blogs/BlogSection";
import Footer from "../../components/shared/Footer";
import ArticleSection from "../../components/Home/artictles/ArticleSection";
import ShopSection from "../../components/Home/shop/ShopSection";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <BestSellingSection />
      <BannerSection />
      <ArticleSection />
      <ShopSection />
      <BlogSection />
      <Footer />
    </>
  );
};

export default index;
