import React from "react";
import about from "../assets/about_us_img_11.png";
import about21 from "../assets/about_us_img_21.png";
import team11 from "../assets/team_11.png";
import team21 from "../assets/team_21.png";
import team31 from "../assets/team_31.png";
import team41 from "../assets/team_41.png";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const AboutUS = () => {
  return (
    
    <div >
      {/*  navbar section */}
      <div className=" flex  md:px-0 px-4  bg-gray-100 justify-center">
        <div className=" w-full md:w-9/12 flex  py-6 md:py-10 items-center text-sm text-gray-600 font-bold">
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
      <div className=" flex md:px-0 px-4 justify-center  py-14  md:py-28">
        <div className=" md:flex   w-full md:w-9/12  items-center  ">
          {/* leftbar */}
          <div className=" flex md:flex-1 flex-col gap-6">
            <h1 className=" md:text-lg  text-sm text-blue-700">OUR HISTORY</h1>

            <h2 className="  md:text-4xl  text-2xl text-gray-700 font-bold">
              Creative and renovate fashion trends
            </h2>

            <p className=" text-md text-gray-500">
              Collaboratively administrate empowered markets via plug-and-play
              maintain networks. Dynamically usable procrastinate B2B users
              after installed base benefits. Dramatically visualize customer
              directed convergence without revolutionary ROI.
            </p>

            <div className="  grid md:grid-cols-3 grid-cols-2 md:gap-10  gap-6 md:pt-12 pt-5">
              <div className=" flex  flex-col gap-1 ">
                <h1 className=" md:text-5xl text-3xl  text-blue-600 font-bold">12</h1>
                <p className="  text-sm text-gray-500">Years Experience</p>
              </div>
              <div className=" flex  flex-col gap-1 ">
                <h1 className=" md:text-5xl  text-3xl text-blue-600 font-bold">20K</h1>
                <p className="  text-sm text-gray-500">Happy Customers</p>
              </div>
              <div className=" flex  flex-col gap-1 ">
                <h1 className=" md:text-5xl  text-3xl text-blue-600 font-bold">100%</h1>
                <p className="  text-sm text-gray-500">Clients Satisfaction</p>
              </div>
            </div>
          </div>
          {/* rightbar */}
          <div className="  md:pt-0 pt-8  md:pb-0 pb-8 flex md:flex-1 justify-start  md:justify-end">
            <img src={about} alt="" />
          </div>
        </div>
      </div>

      {/* VISION SECTION */}
      <div className=" py-10  md:px-0 px-4 bg-gray-100 flex justify-center">
        <div className=" md:flex  md:py-12 w-full md:w-9/12">
          {/* left */}
          <div className="  md:flex-1 md:pb-0 pb-5">
            <img src={about21} alt="" />
          </div>
          {/* right */}
          <div className=" flex flex-col md:flex-1  md:gap-6   gap-4">
            <h1 className=" md:text-lg text-blue-700">Our vision</h1>
            <h2 className=" md:text-4xl text-2xl text-gray-700  font-bold">
              We are marketpress
            </h2>
            <p className=" md:text-md  text-sm text-gray-500">
              Dynamically procrastinate B2C users after installed base benefits.
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </p>
            <div className=" flex flex-col gap-3 md:py-10 py-6 text-md  text-black   ">
              <h1>Credibly innovate granular internal</h1>
              <h1>Grantedly underconstructions reloaded</h1>
              <h1>Interactively procrastinate high-payoff</h1>
              <h1>Completely synergize resource taxing relationships</h1>
            </div>
          </div>
        </div>
      </div>
      {/* MEET SECTIONS */}
      <div className=" md:px-0 px-4 flex py-16 justify-center">
        <div className=" flex  flex-col justify-center w-full md:w-9/12">
          <div className=" flex flex-col gap-1">
            <h1 className=" md:text-md text-sm text-blue-700">ANGELS</h1>
            <h2 className=" md:text-3xl  text-2xl text-gray-700 font-bold">
              Meet with our Team
            </h2>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-4  gap-4 py-4">
            {teams.map((team, index) => (
              <div key={index} className=" flex group  flex-col gap-5  py-6 md:py-8">
                <div>
                  <img className=" flex w-full" src={team.image} alt="" />
                </div>
                <div className=" opacity-0 group-hover:opacity-100  duration-1000 absolute flex gap-4  pl-20 py-36 text-black font-bold text-2xl  ">
                  <span className=" cursor-pointer">
                    <FaFacebookF />
                  </span>
                  <span className=" cursor-pointer">
                    <FaTwitterSquare />
                  </span>
                  <span className=" cursor-pointer">
                    <FaInstagramSquare />
                  </span>
                </div>
                <div className=" flex flex-col gap-1 items-center">
                  <h1 className=" text-sm text-blue-700 font-bold">
                    {team.post}
                  </h1>
                  <h2 className=" text-xl text-gray-800 font-bold">
                    {team.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FOOTER SECTION */}
      <div className=" bg-gray-100 flex justify-center md:px-0 px-4">
        <div className=" md:flex  pt-20  py-8  w-full md:w-9/12">
          {/* left */}
          <div className=" flex flex-col gap-2 md:flex-1">
            <h1  className=" md:text-3xl text-2xl text-gray-700 font-bold md:pb-0 pb-3">Newsletter & Get Updates</h1>
            <h2 className=" md:pb-0 pb-4">Sign up for our newsletter to get up-to-date from us</h2>
          </div>
          {/* right */}
          <div className=" flex  md:flex-1">
            <input
              className=" py-3  px-4  outline-none border-2  border-r-0 border-gray-300   bg-white w-[500px] placeholder:text-sm placeholder:text-gray-600"
              type="email"
              placeholder=" Enter your email here"
            />
            <button className=" py-3 px-8   bg-blue-600 hover:bg-green-600 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Link to={"/"}>
      <div  className=" bg-gray-100 pb-12 flex  justify-end md:px-20 px-4">
        <div className=" flex  gap-2 bg-blue-600 hover:bg-green-600 px-6 py-2 items-center">
        <button className=" text-white hover:bg-green-600">Home page</button>
        <span className="  text-black font-bold flex items-center"><BsArrowRight size={20}/></span></div>
      </div>
      </Link>
    </div>
  );
};

export default AboutUS;

const teams = [
  {
    image: team11,
    post: "FOUNDER",
    name: "Tony Williamson",
  },
  {
    image: team21,
    post: "CEO",
    name: "William Hanah",
  },

  {
    image: team31,
    post: "ADVISOR",
    name: "JInglo Jelian",
  },
  {
    image: team41,
    post: "DESIGNER",
    name: "Jony Smith",
  },

  {
    image: team31,
    post: "FOUNDER",
    name: "Tony Williamson",
  },
  {
    image: team41,
    post: "CEO",
    name: "William Hanah",
  },

  {
    image: team11,
    post: "ADVISOR",
    name: "JInglo Jelian",
  },
  {
    image: team21,
    post: "DESIGNER",
    name: "Jony Smith",
  },
];