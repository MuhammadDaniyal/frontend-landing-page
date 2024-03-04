import React from "react";
import ArticleCard from "./ArticleCard";
import { articles } from "../../../data/articles";
import MainBtn from "../../shared/MainBtn"

const ArticleSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-8 px-20 my-20">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">
        <h4 className=" text-base text-primaryColor uppercase">News & BLOGS</h4>
        <h3 className=" text-4xl text-headingColor capitalize">
          Jewelery Articles
        </h3>
      </div>

      {/* CARDS SECTION */}
      <div className=" grid grid-cols-4 gap-10">
        {articles.map((item, i) => (
          <ArticleCard key={i} {...item} />
        ))}pmain
      </div>
      <div>
        <MainBtn/>
      </div>
    </div>
  );
};

export default ArticleSection;
