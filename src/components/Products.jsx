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
    <div className=" flex  py-10 justify-center ">
      <div className=" flex px-8 flex-col gap-3 w-10/12">
        <div>
          <h1 className=" text-3xl">Most Popular Products</h1>
        </div>
        <div className=" flex gap-4 ">
          {shows.map((show, index) => (
            <div
              key={index}
              className=" flex flex-col gap-1 border-2  border-gray-100 px-6 py-8"
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
                <p className=" text-2xl text-orange-400">{show.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex  py-8">
          <div className=" flex gap-4 justify-center items-center  border-2 border-r-0 border-gray-200 px-10 py-4">
            <span>
              <FaCarSide size={30} />
            </span>
            <div className=" flex flex-col">
              <h1 className=" text-lg text-black">Free Delivery</h1>
              <h2 className=" text-sm text-gray-600">From $78</h2>
            </div>
          </div>
          <div className=" flex gap-4 justify-center items-center  border-2  border-r-0 border-gray-200 px-10 py-4">
            <span>
              <BsFillPeopleFill size={30} />
            </span>
            <div className=" flex flex-col">
              <h1 className=" text-lg text-black">99% Customer</h1>
              <h2 className=" text-sm text-gray-600">Feedback</h2>
            </div>
          </div>
          <div className=" flex gap-4 justify-center items-center  border-2  border-r-0 border-gray-200 px-10 py-4">
            <span>
              <BsArrow90DegDown size={30} />
            </span>
            <div className=" flex flex-col">
              <h1 className=" text-lg text-black">10 Days</h1>
              <h2 className=" text-sm text-gray-600">for free return</h2>
            </div>
          </div>
          <div className=" flex gap-4 justify-center items-center  border-2  border-r-0 border-gray-200 px-10 py-4">
            <span>
              <RiSecurePaymentFill size={30} />
            </span>
            <div className=" flex flex-col">
              <h2 className=" text-lg text-black">Payments</h2>
              <h2 className=" text-sm text-gray-600">secure system</h2>
            </div>
          </div>
          <div className=" flex gap-4 justify-center items-center  border-2 border-gray-200 px-10 py-4">
            <span>
              <FiHeadphones size={30} />
            </span>
            <div className=" flex flex-col">
              <h1 className=" text-lg text-black">24/7</h1>
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
    price: "&42012.00",
  },
  {
    image: sho2,
    name: "Mobile Projector",
    model: "Notebook Blgscreen Z51-70",
    p: "70 40k60",
    price: "&49449.00",
  },
  {
    image: sho3,
    name: "Further Products",
    model: "Notebook Blgscreen Z51-70",
    p: "70k6",
    price: "&102362.00",
  },
  {
    image: sho4,
    name: "Featured Product Laptop",
    model: "Notebook Blgscreen Z51-70",
    p: "40k45",
    price: "&10,000.00",
  },
];
