import React from "react";
import banner1 from "../../../assets/images/banner/banner-1.png";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[430px] ">
      <div className=" absolute w-[55%] h-[430px] bg-[#53483F] flex flex-col justify-center gap-2 px-14 text-white">
        <span className=" text-[#CD885F] text-lg">Stunning Jewels</span>
        <h3 className="text-5xl">For Precious Women</h3>
        <p className=" text-base w-[96%]">
          Mi Bibendum Neque Egestas Congue Quisque Egestas Diam. Ullamcorper Sit
          Amet Risus Nullam. Vehicula Ipsum A Arcu Cursus Vitae Congue Mauris.
        </p>
        <button>Shop Now</button>
      </div>
      <div className=" absolute w-1/2 h-[350px] right-0 top-10 flex ">
        <img src={banner1} alt="banner1" className="w-full" />
      </div>
    </section>
  );
};

export default BannerSection;
