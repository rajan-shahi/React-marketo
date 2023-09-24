import React from "react";
import { RiExpandLeftRightLine } from "react-icons/ri";
const PopularsProduct = () => {
  return (
    <div className=" flex justify-center py-10">
      <div className=" flex justify-between w-10/12">
        {/* popular product */}
        <div className=" flex flex-col border-b w-3/12 pb-4">
          <div className=" flex justify-between items-center">
            <h1 className=" text-2xl font-bold text-gray-700">Most Popular</h1>
            <span className=" cursor-pointer hover:text-blue-600 text-gray-500">
              <RiExpandLeftRightLine size={50} />
            </span>
          </div>
          <div></div>
        </div>
        {/* recent product */}
        <div className=" flex flex-col w-3/12 border-b pb-4">
          <div className=" flex justify-between items-center">
            <h1 className=" text-2xl font-bold text-gray-700">
              Recent Product
            </h1>
            <span className=" cursor-pointer hover:text-blue-600 text-gray-500">
              <RiExpandLeftRightLine size={50} />
            </span>
          </div>
          <div></div>
        </div>
        {/* selling product */}
        <div className=" flex flex-col w-3/12  border-b pb-4">
          <div className=" flex justify-between items-center">
            <h1 className=" text-2xl font-bold text-gray-700">Most Selling</h1>
            <span className=" cursor-pointer hover:text-blue-600 text-gray-500">
              <RiExpandLeftRightLine size={50} />
            </span>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularsProduct;
