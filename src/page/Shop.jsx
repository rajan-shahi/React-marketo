import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { IoReorderFourOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";

const Shop = () => {
  return (
    <div className=" flex flex-col  justify-center">
      <div className=" flex gap-6 justify-center  items-center bg-gray-200 p-10">
        <Link to={"/"}>
          <h1 className=" font-bold text-gray-600 text-md cursor-pointer  hover:text-red-400 duration-300">
            Home
          </h1>
        </Link>
        <FaAngleRight size={20} />
        <h1 className=" font-bold text-gray-600 text-md cursor-pointer hover:text-red-400 duration-300">
          Shop
        </h1>
      </div>
      <div className=" flex justify-center items-center py-10">
        <div className=" md:flex  justify-center  gap-10 md:w-10/12  w-full">
          {/* left */}
          <div className=" flex  flex-col gap-10 w-full  md:px-0 px-4  md:w-3/12">
            <div className="  flex flex-col gap-4 border rounded-sm py-8 px-10">
              <h1 className="  border-l-4 px-3 border-red-500  text-gray-600 font-bold text-md">
                Filter:
              </h1>
              <input type="range"  />
              <h1 className=" text-gray-600 text-lg cursor-pointer ">
                price: $40 - $20,000
              </h1>
              <button className=" bg-red-500 full  rounded-md py-2  text-gray-100  text-lg hover:bg-green-600 duration-500">
                Filter
              </button>
            </div>
            <div className=" border  rounded-sm py-5 flex flex-col  px-5">
              <div className=" border-l-4 border-red-500 px-3 text-md text-gray-600 font-bold">
                Products By Rating
              </div>
              <div className=" py-8">
                {filters.map((filter, index) => (
                  <div
                    key={index}
                    className=" flex  justify-between border-b  border-gray-100 py-4"
                  >
                    <div className=" text-sm   text-gray-500  font-bold  flex flex-col gap-4">
                      <h1 className=" cursor-pointer">{filter.name}</h1>
                      <h2 className=" text-red-700  text-sm cursor-pointer">
                        {filter.price}
                      </h2>
                    </div>
                    <img
                      src={filter.img}
                      className=" h-10 cursor-pointer"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex flex-col gap-4 border rounded-sm px-6 py-8">
              <div>
                <h1 className=" border-l-4 border-red-500 px-3 text-md text-gray-600 font-bold">
                  Product categories
                </h1>
              </div>
              <div className=" flex flex-col gap-6">
                {categories.map((categorie, index) => (
                  <div key={index} className=" border-b  border-gray-100 py-2">
                    <h1 className=" text-sm text-gray-600 cursor-pointer hover:text-green-500 duration-500">
                      {categorie.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* right */}
          <div className=" flex  md:py-0 py-6 flex-col gap-8  w-full md:w-7/12">
            <div className=" flex bg-gray-100 px-5 py-8 justify-between">
              <div>
                <h1 className=" md:text-md  text-sm cursor-pointer  text-gray-700 font-bold">Shop</h1>{" "}
              </div>{" "}
              <div className=" flex  gap-5 md:gap-20">
                <h2 className=" md:text-md text-sm cursor-pointer  text-gray-700 font-bold">Sort by Sorting</h2>
                <span className=" flex items-center gap-4 md:text-md text-sm cursor-pointer  text-gray-700 font-bold">
                <FaAngleDown />
                  <h1>View</h1>
                  <BiSolidDashboard size={30} className="  text-red-500" />
                  <IoReorderFourOutline  size={30} className=" text-gray-400"/>
                </span>
              </div>
            </div>
            <div className="  md:px-0 px-4 grid md:grid-cols-4   gap-4">
              {shoes.map((shoe,index)=>(
                <div key={index} className=" border hover:shadow-md hover:shadow-slate-300 duration-500 flex flex-col gap-4 py-5 px-4  rounded-sm">
                  <img src={shoe.img} alt="" className=" cursor-pointer " />
                  <h1 className=" text-md text-gray-600 font-bold cursor-pointer  hover:text-red-700 hover:font-bold duration-500 ">{shoe.name}</h1>
                  <h1 className=" text-red-600 font-bold  text-md cursor-pointer ">{shoe.price}</h1>
                  <h2 className=" text-sm text-gray-500">{shoe.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

const filters = [
  {
    img: f1,
    name: "Mini 3D Glass",
    price: "$220.00",
  },
  {
    img: f2,
    name: "Notebook Blgscreen Z51-70 40K6958",
    price: "$219.00",
  },
  {
    img: f3,
    name: "Notebook Blgscreen Z51-70 40k1254",
    price: "$199.00",
  },
];

const categories = [
  {
    name: "3d Glass (4)",
  },
  {
    name: "Camera (2)",
  },
  {
    name: "chair (3)",
  },
  {
    name: "Drone (2)",
  },
  {
    name: "Featured Product (2)",
  },
  {
    name: "Future Product (1)",
  },
  {
    name: "Gamepad (5)",
  },
  {
    name: "Google Glass (2)",
  },
  {
    name: "Innovative Furnitures (4)",
  },
  {
    name: "Laptop (5)",
  },
  {
    name: "Mobile (7)",
  },
  {
    name: "Projector (1)",
  },
];



 const shoes =[
  {
    img: s1,
    name: "ASUS Laptop Inspire 2016 2QF-621XPL",
    price:"$4,000.00",
    desc:"About the product All Excusive Comes with Marketo Them. More Power With Extended Features.Multiple nice demo with huge extensive...."
  },
  {
    img: s2,
    name: "ASUS Laptop Inspire 2016 2QF-621XPL",
    price:"$110.00 – $240.00",
    desc:"About the product All Excusive Comes with Marketo Them. More Power With Extended Features.Multiple nice demo with huge extensive...."
  },
  {
    img: s3,
    name: "ASUS Laptop Inspire 2016 2QF-621XPL",
    price:"$1,500.00",
    desc:"About the product All Excusive Comes with Marketo Them. More Power With Extended Features.Multiple nice demo with huge extensive...."
  },
  {
    img: s4,
    name: "ASUS Laptop Inspire 2016 2QF-621XPL",
    price:"$220.00",
    desc:"About the product All Excusive Comes with Marketo Them. More Power With Extended Features.Multiple nice demo with huge extensive...."
  },
  {
    img: s5,
    name: "ASUS Laptop Inspire 2016 2QF-621XPL",
    price:"$2,800.00 – $3,400.00",
    desc:"About the product All Excusive Comes with Marketo Them. More Power With Extended Features.Multiple nice demo with huge extensive...."
  },
  {
    img: f2,
    name: "ASUS Laptop Inspire 2016 2QF-621XPL",
    price:"$199.00",
    desc:"About the product All Excusive Comes with Marketo Them. More Power With Extended Features.Multiple nice demo with huge extensive...."
  },
  {
    img: f3,
    name: "ASUS Laptop Inspire 2016 2QF-621XPL",
    price:"$568.00",
    desc:"About the product All Excusive Comes with Marketo Them. More Power With Extended Features.Multiple nice demo with huge extensive...."
  },
  {
    img: f1,
    name: "ASUS Laptop Inspire 2016 2QF-621XPL",
    price:"$1596.00",
    desc:"About the product All Excusive Comes with Marketo Them. More Power With Extended Features.Multiple nice demo with huge extensive...."
  },
 ]