import React from "react";
import about from "../assets/about_us_img_11.png";
import { AiOutlineDoubleRight } from "react-icons/ai";
const AboutUS = () => {
  return (
    // navbar section
    <div>
      <div className=" flex  bg bg-gray-300 justify-center">
        <div className=" w-9/12 flex py-10 items-center text-sm text-gray-600 font-bold">
          <div className=" flex gap-4">
            <h1>Home</h1>
            <span className=" flex items-center justify-center  px-2 text-gray-500">
              <AiOutlineDoubleRight />
            </span>
          </div>
          <h2>About Us</h2>
        </div>
      </div>
      {/* history section */}
      <div className=" flex justify-center  py-28">
        <div className=" flex w-9/12  items-center ">
          {/* leftbar */}
          <div className=" flex flex-1 flex-col gap-6">
            <h1 className=" text-lg  text-blue-600">OUR HISTORY</h1>

            <h2 className="  text-4xl text-gray-700 font-bold">
              Creative and renovate fashion trends
            </h2>

            <p className=" text-md text-gray-500">
              Collaboratively administrate empowered markets via plug-and-play
              maintain networks. Dynamically usable procrastinate B2B users
              after installed base benefits. Dramatically visualize customer
              directed convergence without revolutionary ROI.
            </p>

            <div className=" flex justify-between">
              <div className=" flex  flex-col gap-1 ">
                <h1 className=" text-5xl text-blue-600">12</h1>
                <p className="  text-sm text-gray-500">Years Experience</p>
              </div>
              <div className=" flex  flex-col gap-1 ">
                <h1 className=" text-5xl text-blue-600">20K</h1>
                <p className="  text-sm text-gray-500">Happy Customers</p>
              </div>
              <div className=" flex  flex-col gap-1 ">
                <h1 className=" text-5xl text-blue-600">100%</h1>
                <p className="  text-sm text-gray-500">Clients Satisfaction</p>
              </div>
            </div>
          </div>
          {/* rightbar */}
          <div className="  flex flex-1 justify-end">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
