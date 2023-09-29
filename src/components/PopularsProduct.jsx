import React from "react";
import { RiExpandLeftRightLine } from "react-icons/ri";
import sho1 from "../assets/sho1.jpg";
import sho2 from "../assets/sho2.jpg";
import sho3 from "../assets/sho3.jpg";
import sho4 from "../assets/sho4.jpg";
import sho5 from "../assets/sho5.jpg";
import sho6 from "../assets/sho6.jpg";
const PopularsProduct = () => {
  return (
    <div className=" md:px-0 px-4 flex justify-center pb-20">
      <div className="  md:flex justify-between  w-full md:w-10/12">
        {/* popular product */}
        <div className=" flex flex-col  w-full  md:w-3/12 md:pt-0 pt-10 ">
          <div className=" flex border-b pb-4 justify-between items-center">
            <h1 className=" text-2xl font-bold text-gray-700">Most Popular</h1>
            <span className=" cursor-pointer hover:text-blue-600 text-gray-500">
              <RiExpandLeftRightLine size={50} />
            </span>
          </div>
    loki
    rajan
    git

          <div className=" flex flex-col gap-8 pt-4">
            {populars.map((popular,index)=>(
                <div key={index} className="  flex  gap-3 items-center">
                    <div>
                        <img className=" h-16  cursor-pointer" src={popular.image} alt="" />
                    </div>
                    <div className=" flex flex-col gap-1">
                        <h1 className="text-sm  text-gray-800 font-bold  cursor-pointer hover:text-blue-600  hover:font-bold">{popular.model}</h1>
                        <p className=" text-sm text-orange-600 font-bold">{popular.price}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
        
        {/* recent product */}
        <div className=" flex flex-col w-full md:w-3/12 md:pt-0  pt-14 ">
          <div className=" flex border-b pb-4 justify-between items-center">
            <h1 className=" text-2xl font-bold text-gray-700">
              Recent Product
            </h1>
            <span className=" cursor-pointer hover:text-blue-600 text-gray-500">
              <RiExpandLeftRightLine size={50} />
            </span>
          </div>
          <div className=" flex flex-col gap-8 pt-4">
            {recents.map((recent,index)=>(
                <div key={index} className=" flex  gap-3 items-center">
                    <div>
                        <img className="  h-16  cursor-pointer" src={recent.image} alt="" />
                    </div>
                    <div className=" flex flex-col gap-1">
                        <h1 className=" text-sm text-gray-950    cursor-pointer hover:text-blue-600  hover:font-bold">{recent.model}</h1>
                        <p className=" text-sm text-orange-600 font-bold">{recent.price}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
        {/* selling product */}
        <div className=" flex flex-col w-full md:w-3/12   md:pt-0 pt-14">
          <div className=" flex justify-between border-b pb-4 items-center">
            <h1 className=" text-2xl font-bold text-gray-700">Most Selling</h1>
            <span className=" cursor-pointer hover:text-blue-600 text-gray-500">
              <RiExpandLeftRightLine size={50} />
            </span>
          </div>
          <div className="flex flex-col gap-8 pt-4">
            {sellings.map((selling,index)=>(
                <div key={index} className=" flex  gap-3 items-center">
                    <div>
                        <img className=" h-16  cursor-pointer" src={selling.image} alt="" />
                    </div>
                    <div className=" flex flex-col gap-1">
                        <h1 className=" text-sm text-gray-950   cursor-pointer hover:text-blue-600  hover:font-bold">{selling.model}</h1>
                        <p className=" text-sm text-orange-600 font-bold">{selling.price}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularsProduct;



const populars = [
    {
      image: sho5,
      model: " ASUS laptop inspire 2016 2QF-621XPL",
      price: "$110.00-$240.00",
    },
    {
      image: sho6,
      model: "Notebook blgscreen Z51-70 40K6009",
      price: "$1,500.00",
    },
    
    {
      image: sho4,
      model: "Notebook blgscreen Z51-70 40K6004",
      price: "$4,000.00",
    },
  ];
  

  
const recents = [
    {
      image: sho1,
      model: " ASUS laptop inspire 2016 2QF-621XPL",
      price: "$110.00-$240.00",
    },
    {
      image: sho5,
      model: "Notebook blgscreen Z51-70 40K6009",
      price: "$1,500.00",
    },
    
    {
      image: sho3,
      model: "Notebook blgscreen Z51-70 40K6004",
      price: "$4,000.00",
    },
  ];
  

  
const sellings = [
    {
      image: sho4,
      model: " ASUS laptop inspire 2016 2QF-621XPL",
      price: "$110.00-$240.00",
    },
    {
      image: sho2,
      model: "Notebook blgscreen Z51-70 40K6009",
      price: "$1,500.00",
    },
    
    {
      image: sho6,
      model: "Notebook blgscreen Z51-70 40K6004",
      price: "$4,000.00",
    },
  ];