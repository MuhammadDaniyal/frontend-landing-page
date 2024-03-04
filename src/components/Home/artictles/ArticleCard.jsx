import React from "react";

const ArticleCard = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-2 justify-start items-center">
      <img src={img} alt="img" className=" w-full h-60" />
      <h2 className=" text-xl font-medium w-3/5 mx-auto text-center">{title}</h2>
      <span className=" text-base text-primaryColor">FROM</span>
    </div>
  );
};

export default ArticleCard;
