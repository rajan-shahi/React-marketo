import React from "react";
import red from "../assets/red_shoe-min-1-1.png";
const Buy = () => {
  return (
    <div className="">
      <div className=" flex    h-full md:h-[60vh] bg-[#1D1A39]">
        <div className=" md:flex justify-center items-center gap-6 md:px-20 px-4 md:pb-0 pb-20">
          <div className=" md:py-0 py-8">
            <img src={red} alt="" />
          </div>
          <div className=" flex flex-col  gap-4">
            <div>
              <h1 className=" md:text-4xl text-2xl   text-gray-200  font-bold">
                Join Now & earns 50% reward on every orders{" "}
              </h1>
              <p className=" text-xl   text-gray-200  font-bold py-4">$340.000</p>
            </div>
            <div className="  md:w-max    grid md:grid-cols-2 grid-cols-1 md:gap-1 gap-6">
              <button className=" flex justify-center   bg-red-700  w-full md:w-52 py-4  text-white   hover:bg-orange-400  font-bold">
                Buy Now
              </button>
              <button className="  flex justify-center bg-black w-full  md:w-60 py-4  text-white text-xs  font-bold border-2 border-white hover:border-orange-400 hover:bg-transparent">
                VIEW COLLECTIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
