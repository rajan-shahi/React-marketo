import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <div className="  flex flex-col gap-4 border rounded-sm py-6 px-10">
              <h1 className="  border-l-2 px-3 border-red-500  text-gray-600 font-bold text-md">Filter:</h1>
              <h1 className=" text-gray-600 text-lg cursor-pointer ">price: $40 - $20,000</h1>
              <button className=" bg-red-500 full  rounded-md py-2  text-gray-100  text-lg hover:bg-green-600 duration-500">
                Filter
              </button>

            </div>
            <div>middle</div>
            <div>buttom</div>
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
