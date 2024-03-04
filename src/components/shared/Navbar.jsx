import React from "react";
import logo from "../../assets/images/logo.png";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const navLinks = [
  {
    id: 1,
    title: "Bridal Sets",
  },
  {
    id: 2,
    title: "Necklace Sets",
  },
  {
    id: 3,
    title: "American Diamond",
  },
  {
    id: 4,
    title: "Earings",
  },
  {
    id: 5,
    title: "Bangles",
  },
  {
    id: 6,
    title: "Scarves/Hijab",
  },
];

const Navbar = () => {
  return (
    <header className=" h-48">
      <div className=" h-1/5 bg-primaryColor"></div>
      <nav className=" h-4/5 flex w-full px-8" style={{ background: "white" }}>
        <img src={logo} alt="logo" className="" />
        <div className=" flex flex-col items-center justify-center gap-4 mt-2 w-full">
          <div className=" flex w-full">
            <div className=" w-4/5 flex justify-center">
              <div className=" flex  border rounded-3xl h-9  pl-4">
                <input
                  placeholder="Search"
                  id="search"
                  className=" w-64 focus:outline-none rounded-3xl px-2"
                />
                <span className=" flex items-center rounded-e-3xl px-3 bg-primaryColor">
                  <IoSearch className=" text-white text-xl" />
                </span>
              </div>
            </div>
            <div className=" w-1/5 flex gap-3 justify-center">
              <GoPerson className=" text-3xl text-primaryColor" />
              <FiShoppingCart className=" text-3xl text-primaryColor" />
            </div>
          </div>
          <ul className=" w-full flex justify-between items-center px-10">
            {navLinks.map((item, i) => (
              <li key={i} className=" text-xl cursor-pointer">
                {item.title}
              </li>
            ))}
            <button
              className={` px-3 py-[10px] rounded-md text-xl font-medium tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu`}
            >
              More Collection
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
