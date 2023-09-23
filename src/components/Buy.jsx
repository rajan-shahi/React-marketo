import React from "react";
import red from "../assets/red_shoe-min-1-1.png";
const Buy = () => {
  return (
    <div className=" flex   h-[60vh] bg-[#1D1A39]">
      <div className=" md:flex justify-center items-center gap-6 md:px-20 px-4">
        <div className=" md:py-0 py-10">
          <img src={red} alt="" />
        </div>
        <div className=" flex flex-col  gap-4">
          <div>
            <h1 className=" md:text-5xl text-2xl text-white  font-bold">Join Now & earns 50% reward on every orders </h1>
            <p className=" text-2xl text-white py-4">$340.000</p>
          </div>
          <div className=" flex gap-5">
            <button className="  bg-red-500 px-7 py-3  text-white  font-bold">Buy Now</button>
            <button  className="  bg-black px-7 py-3  text-white  font-bold">VIEW COLLECTIONS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
