import React from "react";
import CollectionCard from "./CollectionCard";
import { Collections } from "../../../data/Collections";
import MainBtn from "../../shared/MainBtn";

const CollectionSection = () => {
  return (
    <div className=" flex flex-col gap-4 my-10">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">
        <h4 className=" text-base text-primaryColor uppercase">
          ATTRACTIVE JEWELLERY
        </h4>
        <h3 className=" text-4xl text-headingColor capitalize">
          Gorgeous Collections
        </h3>
      </div>

      {/* CARDS SECTION */}
      <div className=" grid grid-cols-3">
        {Collections.map((item, i) => (
          <CollectionCard key={i} {...item} />
        ))}
      </div>
      <div className=" flex justify-center items-center">
      <MainBtn />
      </div>
    </div>
  );
};

export default CollectionSection;
