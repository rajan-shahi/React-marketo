import React, { useState } from "react";
import logo from "../assets/logo-1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNev] = useState(false);
  const handleClick = () => setNev(!nav);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div name="navbar" className=" md:pb-10 pb-20">
      <div className=" fixed  left-0 right-0 top-0 bg-white z-30 flex items-center justify-between py-3 border-b md:px-20 px-4">
        {/* left */}
        <Link to={"/"}>
          <div className=" md:border-r-2 md:pr-8  py-2 border-gray-300 cursor-pointer">
            <img src={logo} alt="" />
          </div>
        </Link>
        {/* right */}
        <div className=" md:flex  hidden gap-10">
          <Link to={"/"}>
            <div className=" flex gap-1 items-center">
              <h2
                className={`${
                  location.pathname === "/" ? " text-red-600 " : "text-gray-600"
                } text-sm font-bold cursor-pointe `}
              >
                Home
              </h2>
            </div>
          </Link>
          <Link to={"/aboutUs"}>
            <div className=" flex gap-1 items-center">
              <h2
                className={`${
                  location.pathname === "/aboutUs"
                    ? " text-red-600 "
                    : "text-gray-600"
                } text-sm font-bold cursor-pointe `}
              >
                About Us
              </h2>
            </div>
          </Link>
          <Link to={"/blog"}>
            <div className=" flex gap-1 items-center">
              <h2
                className={`${
                  location.pathname === "/blog"
                    ? " text-red-600 "
                    : "text-gray-600"
                } text-sm font-bold cursor-pointe `}
              >
                Blog
              </h2>
            </div>
          </Link>
          <Link to={"/shop"}>
            <div className=" flex gap-1 items-center">
              <h2
                className={`${
                  location.pathname === "/shop"
                    ? " text-red-600 "
                    : "text-gray-600"
                } text-sm font-bold cursor-pointe `}
              >
                Shop
              </h2>
            </div>
          </Link>
          <Link to={"/login"}>
            <div className=" flex gap-1 items-center">
              <h2
                className={`${
                  location.pathname === "/login"
                    ? " text-red-600 "
                    : "text-gray-600"
                } text-sm font-bold cursor-pointe `}
              >
                Login
              </h2>
            </div>
          </Link>
        </div>
        {/* mobile menu */}
        <div className=" flex  flex-col md:hidden">
          <div className=" flex  items-center justify-between cursor-pointer ">
            <div onClick={handleClick} className=" px-4 ">
              {!nav ? (
                <AiOutlineMenu size={30} className=" text-black" />
              ) : (
                <AiOutlineClose size={30} className="  text-black" />
              )}
            </div>
          </div>
          <div className="">
            <ul
              className={
                !nav
                  ? "hidden"
                  : "   md:z-0 z-40  absolute  bg-[#473E66]  top-20 py-10 left-0 right-0   flex flex-col items-center   rounded-md   "
              }
            >
              <Link to={"/"}>
                <li
                  onClick={handleClick}
                  className={`${
                    location.pathname === "/"
                      ? " text-red-600 "
                      : "text-gray-200"
                  } cursor-pointer py-4 text-2xl  `}
                >
                  {" "}
                  Home
                </li>
              </Link>
              <Link to={"/aboutUs"}>
                <li
                  onClick={handleClick}
                  className={`${
                    location.pathname === "/aboutUs"
                      ? "text-red-500"
                      : "text-gray-200"
                  } cursor-pointer py-4 text-2xl `}
                >
                  {" "}
                  About Us
                </li>
              </Link>
              <Link to={"/shop"}>
                <li
                  onClick={handleClick}
                  className={`${
                    location.pathname === "/shop"
                      ? "text-red-500"
                      : "text-gray-200"
                  } cursor-pointer py-4 text-2xl`}
                >
                  {" "}
                  Shop
                </li>
              </Link>
              <Link to={"/blog"}>
                <li
                  onClick={handleClick}
                  className={`${
                    location.pathname === "/blog"
                      ? "text-red-500"
                      : "text-gray-200"
                  } cursor-pointer py-4 text-2xl`}
                >
                  Blog
                </li>
              </Link>

              <Link to={"/login"}>
                <li
                  onClick={handleClick}
                  className={`${
                    location.pathname === "/login"
                      ? "text-red-500"
                      : "text-gray-200"
                  } cursor-pointer py-4 text-2xl`}
                >
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
