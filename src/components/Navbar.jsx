import React, { useState } from "react";
import logo from "../assets/logo-1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNev] = useState(false);
  const handleClick = () => setNev(!nav);
  return (
    <div name="navbar" className=" md:pb-10 pb-20">
      <div className=" fixed  left-0 right-0 top-0 bg-white z-30 flex items-center justify-between py-4 border-b-2 md:px-20 px-4">
        {/* left */}
        <div className=" md:border-r-2 md:pr-8  py-2 border-gray-300 cursor-pointer">
          <img src={logo} alt="" />
        </div>
        {/* right */}
        <div className=" md:flex  hidden gap-10">
          <div className=" flex gap-1 items-center">
            <h1 className=" text-sm font-bold text-gray-600 cursor-pointer">
              Home
            </h1>
            <span className=" flex  items-center pt-2  text-gray-500 cursor-pointer">
              <BsChevronDown />
            </span>
          </div>
          <div className=" flex gap-1 items-center">
            <h2 className=" text-sm font-bold text-gray-600 cursor-pointer">
              Shop
            </h2>
            <span className=" flex  items-center pt-2  text-gray-500 cursor-pointer">
              <BsChevronDown />
            </span>
          </div>
          <div className=" flex gap-1 items-center">
            <h2 className=" text-sm font-bold text-gray-600 cursor-pointer">
              Pages
            </h2>
            <span className=" flex  items-center pt-2  text-gray-500 cursor-pointer">
              <BsChevronDown />
            </span>
          </div>
          <div className=" flex gap-1 items-center">
            <h1 className=" text-sm font-bold text-gray-600 cursor-pointer">
              Blog
            </h1>
            <span className=" flex  items-center pt-2  text-gray-500 cursor-pointer">
              <BsChevronDown />
            </span>
          </div>
          <div className=" flex gap-1 items-center">
            <h1 className=" text-sm font-bold text-gray-600 cursor-pointer">
              Gallerys
            </h1>
            <span className=" flex  items-center pt-2  text-gray-500 cursor-pointer">
              <BsChevronDown />
            </span>
          </div>
        </div>
        {/* mobile menu */}
        <div className=" flex  flex-col md:hidden">
          <div className="     flex items-center justify-between cursor-pointer ">
            <div onClick={handleClick} className=" px-4 ">
              {!nav ? (
                <AiOutlineMenu size={30} className=" text-black" />
              ) : (
                <AiOutlineClose size={30} className="  text-black" />
              )}
            </div>
          </div>
          <div className=" ">
            <ul
              className={
                !nav
                  ? "hidden"
                  : "   md:z-0 z-40  absolute    w-full py-6   flex flex-col  rounded-md   "
              }
            >
              {/* <li className="  px-10  hover:text-orange-400  cursor-pointer py-4  text-4xl  text-gray-200">
                {" "}
                Home
              </li>
              <li className="  hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">    Pages</li>
          
              <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl text-gray-200">
                Shop
              </li>
              <li className="   hover:text-orange-400 cursor-pointer py-4 text-4xl text-gray-200">
                Blog
              </li>
              <li className="   hover:text-orange-400  cursor-pointer py-4 text-4xl  text-gray-200">
                Gallerys
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
