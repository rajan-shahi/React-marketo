import React from "react";
import logo from "../assets/logo-1.png";
const Navbar = () => {
  return (
    <div className=" md:pb-10 pb-20">
      <div className=" fixed  left-0 right-0 top-0 bg-white z-30 flex items-center justify-between py-5 border-b-2 md:px-20 px-5 ">
        {/* left */}
        <div className=" md:border-r-2 md:pr-8  py-2 border-gray-300 cursor-pointer">
          <img src={logo} alt="" />
        </div>
        {/* right */}
        <div className=" md:flex  hidden gap-10">
          <h1 className=" text-lg text-gray-700 cursor-pointer">Home</h1>
          <h2 className=" text-lg text-gray-700 cursor-pointer">Shop</h2>
          <h2 className=" text-lg text-gray-700 cursor-pointer">Pages</h2>
          <h1 className=" text-lg text-gray-700 cursor-pointer">Blog</h1>
          <h1 className=" text-lg text-gray-700 cursor-pointer">Gallerys</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
