import React, { useState } from "react";
import logo from "../assets/logo-1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

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
          <Link to={"/aboutUs"}>
            <div className=" flex gap-1 items-center">
              <h2 className=" text-sm font-bold text-gray-600 cursor-pointer hover:text-orange-400">
                About Us
              </h2>
            </div>
          </Link>
          <Link to={"/blog"}>
            <div className=" flex gap-1 items-center">
              <h1 className=" text-sm font-bold text-gray-600 cursor-pointer hover:text-orange-400">
                Blog
              </h1>
            </div>
          </Link>
          <Link to={"/shop"}>
            <div className=" flex gap-1 items-center">
              <h2 className=" text-sm font-bold text-gray-600 cursor-pointer hover:text-orange-400">
                Shop
              </h2>
            </div>
          </Link>
          <Link to={"/login"}>
            <div className=" flex gap-1 items-center">
              <h1 className=" text-sm font-bold text-gray-600 cursor-pointer hover:text-orange-400">
                Login
              </h1>
            </div>
          </Link>
        </div>
        {/* mobile menu */}
        <div className=" flex  flex-col md:hidden">
          <div className=" flex items-center justify-between cursor-pointer ">
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
                  : "   md:z-0 z-40  absolute  bg-[#473E66]    py-10 left-0 right-0   flex flex-col items-center   rounded-md   "
              }
            >
              <Link to={"/about"}>
                <li className="   hover:text-orange-400  cursor-pointer py-4   text-4xl  text-gray-200">
                  Home
                </li>
              </Link>
              <Link to={"/aboutUs"}>
                <li className="  hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
                  {" "}
                  About Us
                </li>
              </Link>
              <Link to={"/shop"}>
                <li className="  hover:text-orange-400 cursor-pointer py-4 text-4xl  text-gray-200">
                  {" "}
                  Shop
                </li>
              </Link>
              <Link to={"/blog"}>
                <li className=" hover:text-orange-400 cursor-pointer py-4 text-4xl text-gray-200">
                  Blog
                </li>
              </Link>

              <Link to={"/login"}>
                <li className="   hover:text-orange-400  cursor-pointer py-4 text-4xl  text-gray-200">
                  Login
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
