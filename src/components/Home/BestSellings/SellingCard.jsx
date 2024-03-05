import React from "react";

const SellingCard = ({ img, title }) => {
  return (
    <div className=" flex flex-col gap-2 justify-start items-center md:w-full w-80 md:px-0 px-4">
      <div className=" sellingCard relative">
        <img src={img} alt="img" className=" w-full h-60" />
        <div className=" sellingCard-hover-div">
          <p className="w-full text-center text-sm font-semibold uppercase">Add To Cart</p>
        </div>
      </div>
      <h2 className=" md:text-xl text-base font-medium mx-auto text-center">
        {title}
      </h2>
      <span className=" md:text-base text-sm text-primaryColor">FROM</span>
    </div>
  );
};

export default SellingCard;
