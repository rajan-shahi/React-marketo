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
import { CiHeart } from "react-icons/ci";

const Products = () => {
  return (
    <div className=" flex  md:py-10 justify-center ">
      <div className=" flex  md:px-0 px-4 justify-center  flex-col gap-3 w-full md:w-10/12">
        <div className=" flex   pb-4">
          <h1 className=" text-2xl text-gray-700 font-bold">
            Most Popular Products
          </h1>
        </div>
        <div className="   grid md:grid-cols-4 justify-center gap-4 ">
          {shows.map((show, index) => (
            <div
              key={index}
              className=" group hover:border-gray-200 flex md:justify-start justify-center md:items-start items-center  flex-col gap-1 border-2  border-gray-100 px-6 py-8"
            >
              <div className=" flex">
                <img src={show.image} alt="" />
                <div className="  opacity-0 group-hover:opacity-100  duration-1000">
                  <h1 className=" text-red-700 font-bold flex justify-start">
                    <CiHeart size={20} />
                  </h1>
                </div>{" "}
              </div>

              <div className=" text-gray-400 text-sm">
                <h1>{show.name}</h1>
              </div>
              <div>
                <h1 className="  text-sm  text-gray-800 font-bold  hover:text-blue-500 cursor-pointer">
                  {show.model}
                </h1>
              </div>
              <div>
                <h1>{show.p}</h1>
              </div>
              <div>
                <p className=" text-xl text-orange-700  font-bold">
                  {show.price}
                </p>
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
    name: "Nike Shoes-2023",
    model: "New Branded-Shoes-2023 to 2025",
    price: "$199",
  },
  {
    image: sho2,
    name: "Goldstar-Shoes",
    model: "Latest-Shoes-2022 to 2024",
    price: "$590",
  },
  {
    image: sho3,
    name: "Air-shoes-2022",
    model: "New-Air-Shoes 2022 to 2026",
    price: "$423",
  },
  {
    image: sho4,
    name: "New-Latest-Shoes-2024",
    model: "New Models Shoes-2024 to 2025",
    price: "$261",
  },
];
