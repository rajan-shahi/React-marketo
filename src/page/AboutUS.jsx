import React from "react";
import about from "../assets/about_us_img_11.png";
import about21 from "../assets/about_us_img_21.png";
import { AiOutlineDoubleRight } from "react-icons/ai";
const AboutUS = () => {
  return (
    // navbar section
    <div className="  py-20">
      <div className=" flex    bg bg-[#FBE4D8] justify-center">
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

            <div className=" flex justify-between pt-14">
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

      {/* VISION SECTION */}
      <div className=" py-10 bg-gray-200 flex justify-center">
        <div className=" flex  py-12 w-9/12">
        {/* left */}
        <div className="  flex-1">
          <img src={about21} alt="" />
        </div>
        {/* right */}
        <div className=" flex flex-col flex-1  gap-6">
          <h1 className=" text-lg text-blue-600">Our vision</h1>
          <h2 className=" text-4xl text-gray-700  font-bold">We are marketpress</h2>
          <p  className=" text-md text-gray-500">
            Dynamically procrastinate B2C users after installed base benefits.
            Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </p>
          <div className=" flex flex-col gap-3 py-10 text-md text-gray-800 font-bold">
            <h1>Credibly innovate granular internal</h1>
            <h1>Grantedly underconstructions reloaded</h1>
            <h1>Interactively procrastinate high-payoff</h1>
            <h1>Completely synergize resource taxing relationships</h1>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
