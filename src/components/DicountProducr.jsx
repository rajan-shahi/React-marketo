import React, { useState } from "react";
import admin from "../assets/ad-min.jpg";
import { discounts40, discounts57, discounts75, discounts83 } from './../data/Data';
const DicountProducr = () => {
  const [list,setList]=useState(discounts40)
  return (
    <div className=" flex justify-center pt-10 md:pb-20 md:px-0 px-4">
      <div className=" md:flex justify-center  gap-10 w-full md:w-10/12">
        {/* left */}
        <div className=" w-full md:w-3/12">
          <img  className="  w-full  md:pb-0 pb-6" src={admin} alt="" />
        </div>
        {/* right */}
        <div className=" flex flex-col w-full md:w-7/12">
          <div className=" md:flex justify-between  border-b-2 pb-4">
            <div className="  text-2xl text-gray-700 md:py-0 py-3 md:pt-0 pt-8 font-bold">
              <h1>Discount Product</h1>
            </div>
            <div className="  md:pt-0 pt-2 flex md:gap-8 justify-between text-lg text-gray-500">
              <h2  onClick={()=> setList(discounts40)} className=" cursor-pointer font-bold  hover:text-red-700 ">
                40% Off
              </h2>
              <h2   onClick={()=> setList(discounts57)}  className=" cursor-pointer  font-bold  hover:text-red-700 ">
                57% Off
              </h2>
              <h3  onClick={()=> setList(discounts75)} className=" cursor-pointer  font-bold  hover:text-red-700 ">
                75% Off
              </h3>
              <h2  onClick={()=> setList(discounts83)} className=" cursor-pointer  font-bold  hover:text-red-700 ">
                83% Off
              </h2>
            </div>
          </div>
          {/* card */}
          <div className=" grid md:grid-cols-3 md:justify-between  gap-5  py-6">
            {list.map((discounts40, index) => (
              <div
                key={index}
                className=" flex flex-col justify-center   hover:shadow-lg hover:shadow-slate-200 px-4 pb-8"
              >
                <div>
                  <img className=" cursor-pointer" src={discounts40.image} alt="" />
                </div>
                <div className=" flex flex-col gap-1  items-center">
                  <h2 className=" text-gray-800   font-bold hover:text-blue-600 cursor-pointer">{discounts40.model}</h2>
                  <h2>{discounts40.p}</h2>
                  <p className=" text-orange-700  font-bold text-lg">{discounts40.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DicountProducr;

