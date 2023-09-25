import React from "react";
import sho1 from "../assets/sho1.jpg";
import sho2 from "../assets/sho2.jpg";
import sho3 from "../assets/sho3.jpg";
import sho4 from "../assets/sho4.jpg";
import { FaCarSide } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsArrow90DegDown } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FiHeadphones } from "react-icons/fi";
const Products = () => {
  return (
    <div className=" flex  md:py-10 justify-center ">
      <div className=" flex  md:px-0 px-4 justify-center  flex-col gap-3 w-full md:w-10/12">
        <div className=" flex   pb-4">
          <h1 className=" text-3xl">Most Popular Products</h1>
        </div>
        <div className=" md:flex justify-center  gap-4 ">
          {shows.map((show, index) => (
            <div
              key={index}
              className=" flex md:justify-start justify-center md:items-start items-center  flex-col gap-1 border-2  border-gray-100 px-6 py-8"
            >
              <div className=" cursor-pointer">
                <img src={show.image} alt="" />
              </div>
              <div className=" text-gray-400 text-sm">
                <h1>{show.name}</h1>
              </div>
              <div>
                <h1 className=" text-lg text-black  hover:text-blue-500 cursor-pointer">
                  {show.model}
                </h1>
              </div>
              <div>
                <h1>{show.p}</h1>
              </div>
              <div>
                <p className=" text-xl text-orange-700  font-bold">{show.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" md:flex   justify-between py-8">
          <div className=" md:flex md:gap-4  gap-10 justify-center items-center  border-2 md:border-b-2 border-b-0  border-gray-100 px-10 md:py-4 py-10">
            <span className="  flex justify-center text-red-600 font-bold ">
              <FaCarSide size={30} />
            </span>
            <div className=" justify-center items-center flex flex-col">
              <h1 className=" md:text-lg  text-2xl text-black">
                Free Delivery
              </h1>
              <h2 className=" text-sm text-gray-600">From $78</h2>
            </div>
          </div>
          <div className=" md:flex md:gap-4  gap-10 justify-center items-center  border-2 md:border-b-2 border-b-0  border-gray-100 px-10 md:py-4 py-10">
            <span className="  flex justify-center text-red-600 font-bold ">
              <BsFillPeopleFill size={30} />
            </span>
            <div className=" justify-center items-center flex flex-col">
              <h1 className=" md:text-lg  text-2xl text-black">99% Customer</h1>
              <h2 className=" text-sm text-gray-600">Feedback</h2>
            </div>
          </div>
          <div className=" md:flex md:gap-4  gap-10 justify-center items-center  border-2 md:border-b-2 border-b-0  border-gray-100 px-10 md:py-4 py-10">
            <span className="  flex justify-center text-red-600 font-bold ">
              <BsArrow90DegDown size={30} />
            </span>
            <div className=" justify-center items-center flex flex-col">
              <h1 className=" md:text-lg  text-2xl text-black">10 Days</h1>
              <h2 className=" text-sm text-gray-600">for free return</h2>
            </div>
          </div>
          <div className=" md:flex md:gap-4  gap-10 justify-center items-center  border-2    md:border-b-2 border-b-0 border-gray-100 px-10 md:py-4 py-10">
            <span className="  flex justify-center text-red-600 font-bold">
              <RiSecurePaymentFill size={30} />
            </span>
            <div className=" justify-center items-center flex flex-col">
              <h2 className=" md:text-lg  text-2xl text-black">Payments</h2>
              <h2 className=" text-sm text-gray-600">secure system</h2>
            </div>
          </div>
          <div className=" md:flex md:gap-4  gap-10 justify-center items-center  border-2  border-gray-100 px-10 md:py-4 py-10">
            <span className="  flex justify-center text-red-600 font-bold">
              <FiHeadphones size={30} />
            </span>
            <div className=" justify-center items-center flex flex-col">
              <h1 className=" md:text-lg  text-2xl text-black">24/7</h1>
              <p className=" text-sm text-gray-600">online supports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

const shows = [
  {
    image: sho1,
    name: "Head Phones",
    model: "Notebook Blgscreen Z51-70",
    p: "70",
    price: "$42012.00",
  },
  {
    image: sho2,
    name: "Mobile Projector",
    model: "Notebook Blgscreen Z51-70",
    p: "70 40k60",
    price: "$49449.00",
  },
  {
    image: sho3,
    name: "Further Products",
    model: "Notebook Blgscreen Z51-70",
    p: "70k6",
    price: "$102362.00",
  },
  {
    image: sho4,
    name: "Featured Product Laptop",
    model: "Notebook Blgscreen Z51-70",
    p: "40k45",
    price: "$10,000.00",
  },
];
