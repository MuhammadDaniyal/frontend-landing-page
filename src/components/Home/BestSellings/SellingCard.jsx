import React from "react";

const SellingCard = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-2 justify-start items-center">
      <img src={img} alt="img" className=" w-52 h-52" />
      <h2 className=" text-xl w-4/5 mx-auto text-center">{title}</h2>
      <span className=" text-base text-primaryColor">FROM</span>
    </div>
  );
};

export default SellingCard;
