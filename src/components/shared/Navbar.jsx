import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch, IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const navLinks = [
  {
    id: 1,
    title: "Bridal Sets",
  },
  {
    id: 2,
    title: "Necklace Sets",
    sublinks: ["All Necklace Sets", "Polki Sets", "Reverse AD Sets", "Kundan Sets"]
  },
  {
    id: 3,
    title: "American Diamond",
    sublinks: ["Necklace Sets", "Earrings", "Rings", "Tikka", "Bangles"]
  },
  {
    id: 4,
    title: "Earings",
  },
  {
    id: 5,
    title: "Bangles",
    sublinks: ["Stone Bangles", "Polki Bangles", "Gold Polish", "Choora Sets", "Mehendi Bangles", "Plain Bangles"]
  },
  {
    id: 6,
    title: "Scarves/Hijab",
  },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);
  const [subLinks, setSubLinks] = useState([]);

  const handleMouseEnter = (id) => {
    setHoveredLinkId(id);
  };

  const handleMouseLeave = () => {
    setHoveredLinkId(null);
  };

  useEffect(() => {
    const sub = navLinks.filter((item) => item.id === hoveredLinkId && hoveredLinkId);
    console.log(sub);
    setSubLinks(sub.sublinks)
  }, [hoveredLinkId])


  return (
    <>
      {/* DESKTOP */}
      <header className="md:block hidden h-48">
        <div className=" h-1/5 bg-primaryColor"></div>
        <nav
          className=" h-4/5 flex w-full px-8"
          style={{ background: "white" }}
        >
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
            <hr className="w-full" />
            <ul className=" w-full flex justify-between items-center xl:px-10 md:px-4">
              {navLinks.map((item, i) => (
                <li key={i} className=" xl:text-xl md:text-base cursor-pointer" onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}>
                  {item.title}
                </li>
              ))}
              <button
                className={`px-3 py-[10px] rounded-md xl:text-xl md:text-base font-medium tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu`}
              >
                More Collection
              </button>
            </ul>
          </div>
        </nav>
        {hoveredLinkId &&
          <div className="absolute z-50 bg-[#fff] w-full h-11 py-2">
            <ul className=" flex justify-center items-center gap-16">
              {
                subLinks && subLinks.map((item, i) => {
                  return (
                    <li key={i} className=" text-[#000]">{item}</li>
                  )
                })
              }
            </ul>
          </div>}
      </header>


      {/* Mobile */}
      <header className="block md:hidden">
        <div className=" h-9 bg-primaryColor flex items-center">
          <span className=" px-3 text-white text-sm tracking-wide font-light">Delivery Accross UK</span>
        </div>
        <nav className=" absolute z-50 w-full bg-white  flex justify-between items-center px-4">
          <div
            className={` ${isMobileOpen ? "hidden" : "flex"
              }  justify-between w-full py-3`}
          >
            <FiMenu
              className=" text-3xl text-primaryColor"
              onClick={() => setIsMobileOpen((prev) => !prev)}
            />
            <FiShoppingCart className=" text-3xl text-primaryColor" />
          </div>
          <div
            className={` ${isMobileOpen ? "flex" : "hidden"
              }  justify-between w-full py-3`}
          >
            <div className=" flex flex-col w-full gap-3">
              <div className="flex justify-between w-full">
                <div>
                  <h3 className=" text-lg">Categories</h3>
                  <hr
                    className=" w-16 mx-auto text-primaryColor opacity-90"
                    style={{ borderTopWidth: "2px" }}
                  />
                </div>
                <IoClose
                  className=" text-2xl"
                  onClick={() => setIsMobileOpen((prev) => !prev)}
                />
              </div>
              <ul className="flex flex-col gap-[6px]">
                {navLinks.map((item, i) => (
                  <li key={i} className="flex justify-between w-full">
                    <span className=" text-sm text-slate-500">
                      {item.title}
                    </span>
                    <IoIosArrowForward className=" text-sm text-slate-500" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
