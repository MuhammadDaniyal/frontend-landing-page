import React from "react";
import SellingCard from "./SellingCard";
import { bestSelling } from "../../../data/BestSelling";

const BestSellingSection = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-8 px-20 my-20">
        {/* HEADINGS SECTION */}
        <div className=" flex flex-col gap-1 text-center">
          <h4 className=" text-base text-primaryColor uppercase">
            STUNNING DESIGN
          </h4>
          <h3 className=" text-4xl text-headingColor capitalize">
            Our Best Selling
          </h3>
        </div>

        {/* CARDS SECTION */}
        <div className=" grid grid-cols-4 gap-10">
          {bestSelling.map((item, i) => (
            <SellingCard key={i} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSellingSection;
