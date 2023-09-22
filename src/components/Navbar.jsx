import React from "react";
import logo from "../assets/logo-1.png";
const Navbar = () => {
  return (
    <div>
      <div className=" flex items-center justify-between py-5 border-b-2 px-20 ">
        <div className=" border-r-2 pr-8  py-2 border-gray-300 cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <div className=" flex gap-10">
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
