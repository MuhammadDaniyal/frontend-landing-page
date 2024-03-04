import React from "react";

const BlogCard = ({ img, date, description }) => {
  return (
    <div className=" flex flex-col gap-2 justify-start items-center md:w-full w-80 md:px-0 px-4">
      <img src={img} alt="img" className=" w-full h-72" />
      <div className=" flex flex-col justify-start gap-2 px-3 py-2">
        <span className=" text-lg font-semibold text-primaryColor">{date}</span>
        <p className=" text-sm leading-[26px] tracking-wider text-[#656565]">
          {description}
        </p>
        <button className=" flex text-base font-semibold text-[#656565] tracking-wide">
          <span className=" underline underline-offset-[3px]">Read More</span>
          {` ${">>"}`}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
