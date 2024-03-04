import React from "react";

const ArticleCard = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-2 justify-start items-center md:w-full w-80 md:px-0 px-4">
      <img src={img} alt="img" className=" w-full h-60" />
      <h2 className=" md:text-xl text-base font-medium mx-auto text-center">{title}</h2>
      <span className=" md:text-base text-sm text-primaryColor">FROM</span>
    </div>
  );
};

export default ArticleCard;
