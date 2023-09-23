import React from "react";
import admin from "../assets/ad-min.jpg";
const DicountProducr = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex gap-10  w-10/12  py-5">
        {/* left */}
        <div className=" w-3/12">
          <img src={admin} alt="" />
        </div>
        {/* right */}
        <div className=" flex  w-7/12">
          <div className=" flex flex-col ">
            <div className=" flex justify-between items-center border-b-2  pb-4">
              <div className=" text-2xl">
                <h1>Discount Product</h1>
              </div>
              <div className=" flex text-xl  gap-10 text-gray-500">
                <span className=" hover:text-orange-400 cursor-pointer">
                  40% Off
                </span>
                <span className=" hover:text-orange-400 cursor-pointer">
                  57% Off
                </span>
                <span className=" hover:text-orange-400 cursor-pointer">
                  75% Off
                </span>
                <span className=" hover:text-orange-400 cursor-pointer">
                  83% Off
                </span>
              </div>
            </div>
            {/* card */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DicountProducr;
