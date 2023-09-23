import React from "react";
import { HiArrowUp } from "react-icons/hi";
import { Link } from "react-scroll";
const Copyright = () => {
  return (
    <div className=" flex justify-between py-6 px-4 md:px-20 bg-gray-200">
      <div className=" text-sm text-gray-500">
        <h1>Copyrights By rajan bahadur shahi - 2023</h1>
      </div>
      <div>
        <Link to="navbar" spy={true} smooth={true} duration={500}>
          <span  className=" cursor-pointer hover:text-orange-400">
            <HiArrowUp size={30} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
