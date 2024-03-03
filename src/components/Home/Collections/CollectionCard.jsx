import React from "react";
import bridalSet from "../../../assets/images/collections/bridal_set.jpg";

const CollectionCard = ({ title, img }) => {
  return (
    <>
      <div
        className={` relative xl:h-[400px] md:h-[320px] flex justify-center items-end`}
      >
        <img src={img} alt="img" className=" absolute h-full  w-full" />
        <h2 className="  relative xl:text-3xl md:text-2xl tracking-wide pb-4 text-white">{title}</h2>
      </div>
    </>
  );
};

export default CollectionCard;
