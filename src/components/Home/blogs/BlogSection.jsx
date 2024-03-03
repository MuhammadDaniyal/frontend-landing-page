import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "../../../data/Blogs";

const BlogSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4 my-10">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">
        <h4 className=" text-base text-primaryColor uppercase">News & BLOGS</h4>
        <h3 className=" text-4xl text-headingColor capitalize">
          Jewelery Articles
        </h3>
      </div>

      {/* CARDS SECTION */}
      <div className=" flex gap-4">
        {blogs.map((item, i) => (
          <BlogCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
