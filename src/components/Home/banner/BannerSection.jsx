import React from "react";
import banner1 from "../../../assets/images/banner/banner-1.png";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[500px] ">
      <div className=" absolute w-[55%] h-[500px] bg-[#53483F] flex flex-col justify-center gap-2 px-14 text-white">
        <span className=" text-[#CD885F] xl:text-xl md:text-lg">Stunning Jewels</span>
        <h3 className="xl:text-6xl md:text-5xl">For Precious Women</h3>
        <p className=" xl:text-lg md:text-base w-[96%]">
          Mi Bibendum Neque Egestas Congue Quisque Egestas Diam. Ullamcorper Sit
          Amet Risus Nullam. Vehicula Ipsum A Arcu Cursus Vitae Congue Mauris.
        </p>
        <button>Shop Now</button>
      </div>
      <div className=" absolute w-1/2 h-[400px] right-0 top-12 flex ">
        <img src={banner1} alt="banner1" className="w-full" />
      </div>
    </section>
  );
};

export default BannerSection;
