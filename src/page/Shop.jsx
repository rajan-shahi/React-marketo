import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
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
        <div className=" flex  justify-cente  gap-10 w-10/12">
          {/* left */}
          <div className=" flex  flex-col gap-10  w-3/12">
            <div className="  flex flex-col gap-4 border rounded-sm py-8 px-10">
              <h1 className="  border-l-4 px-3 border-red-500  text-gray-600 font-bold text-md">
                Filter:
              </h1>
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
                      <h2 className=" text-red-700  text-sm cursor-pointer">{filter.price}</h2>
                    </div>
                    <img src={filter.img}  className=" h-10 cursor-pointer"  alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex flex-col gap-4 border rounded-sm px-6 py-8">
              <div>
                <h1 className=" border-l-4 border-red-500 px-3 text-md text-gray-600 font-bold">Product categories</h1>
              </div>
              <div className=" flex flex-col gap-6">
                {categories.map((categorie,index)=>(
                  <div key={index} className=" border-b  border-gray-100 py-2" >
                    <h1 className=" text-sm text-gray-600 cursor-pointer hover:text-green-500 duration-500">{categorie.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* right */}
          <div className=" flex justify-center w-7/12">
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              pariatur repellendus. Ea corrupti harum animi, dolor esse iure
              doloremque voluptatum est, doloribus deserunt expedita dolorum.
              Corporis totam dolorum quos neque labore, corrupti blanditiis quod
              error aut, libero quaerat quasi soluta deleniti cum iure veritatis
              deserunt quam? Earum eligendi nihil est modi, accusantium facilis
              rerum quia voluptate laboriosam voluptas minima quod in corporis
              similique fuga maxime alias nobis quas deserunt sequi facere!
              Officia, consectetur maxime. Fugit labore, maiores mollitia quas
              pariatur ut vitae sit est obcaecati nihil, praesentium fugiat
              architecto nemo quasi optio repellendus cum, rem hic blanditiis.
              Consectetur, dolores magnam!
            </h1>
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
    price: "$299.00",
  },
  {
    img: f3,
    name: "Notebook Blgscreen Z51-70 40k1254",
    price: "$199.00",
  },
];



const categories =[
  {
    name:"3d Glass (4)"
  },
  {
    name:"Camera (2)"
  },
  {
    name:"chair (3)"
  },
  {
    name:"Drone (2)"
  },
  {
    name:"Featured Product (2)"
  },
  {
    name:"Future Product (1)"
  },
  {
    name:"Gamepad (5)"
  },
  {
    name:"Google Glass (2)"
  },
  {
    name:"Innovative Furnitures (4)"
  },
  {
    name:"Laptop (5)"
  },
  {
    name:"Mobile (7)"
  },
  {
    name:"Projector (1)"
  },
]