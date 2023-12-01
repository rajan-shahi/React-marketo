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
        </h1></Link>
        <FaAngleRight size={20} />
        <h1 className=" font-bold text-gray-600 text-md cursor-pointer hover:text-red-400 duration-300">
          Shop
        </h1>
      </div>
      <div className=" flex justify-center items-center py-10">
        <div className=" flex  justify-center  gap-10 w-10/12">
          {/* left */}
          <div className=" flex  w-3/12">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellat, facilis animi! Explicabo inventore iusto quasi soluta
              mollitia asperiores at perspiciatis amet quis eaque porro, itaque
              placeat sit, aliquid veritatis eius sequi dignissimos voluptate
              nihil pariatur nemo architecto molestiae quam voluptatibus.
              Numquam eveniet quos culpa praesentium corporis voluptatum optio
              nesciunt veniam dolorum necessitatibus soluta suscipit
              voluptatibus sint impedit, eos dolore veritatis totam non ducimus
              dolorem, iure molestiae quod facilis? Quasi veritatis, sunt
              dolorum, nihil assumenda excepturi quisquam unde ratione alias
              corrupti amet, ducimus soluta tenetur aliquid eos nostrum hic
              doloribus itaque. Necessitatibus reiciendis in nisi. Tempore non
              laboriosam incidunt itaque sint.
            </h1>
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
