import React from "react";
import canada from "../assets/canada-1.png";
import uk from "../assets/uk-1.png";
import saudi from "../assets/saudi-1.png";
import singapur from "../assets/singapore-1.png";
import usa from "../assets/usa-1.png";
import brazil from "../assets/brazil-1.png";
import { FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" flex  flex-col bg-gray-300 justify-center">
      <div className="  grid md:grid-cols-6 grid-cols-2 md:gap-0 gap-4 justify-center  bg-gray-200 top-0 py-8">
        <div className=" md:flex justify-center items-center px-16 py-2 md:border-r-2 border-gray-400 gap-2">
          <img src={canada} alt="" />
          <h1 className=" cursor-pointer">Canada</h1>
        </div>
        <div className=" md:flex justify-center items-center px-16 py-2 md:border-r-2 border-gray-400 gap-2">
          <img src={uk} alt="" />
          <h1 className=" cursor-pointer">Uk</h1>
        </div>
        <div className=" md:flex justify-center items-center px-16 py-2  md:border-r-2 border-gray-400 gap-2">
          <img src={singapur} alt="" />
          <h1 className=" cursor-pointer">Singapur</h1>
        </div>
        <div className=" md:flex justify-center items-center px-16 py-2  md:border-r-2 border-gray-400 gap-2">
          <img src={usa} alt="" />
          <h1 className=" cursor-pointer">USA</h1>
        </div>
        <div className=" md:flex justify-center items-center px-16 py-2  md:border-r-2 border-gray-400 gap-2">
          <img src={brazil} alt="" />
          <h1 className=" cursor-pointer">Brazil</h1>
        </div>
        <div className=" md:flex justify-center items-center px-16 py-2 gap-2">
          <img src={saudi} alt="" />
          <h1 className=" cursor-pointer">Saudi</h1>
        </div>
      </div>
      <div className=" grid md:grid-cols-4 gap-10  px-4 md:px-10 py-16 text-sm  text-gray-500">
        <div className=" flex-1 flex flex-col gap-4 md:px-4 ">
          <p>
            Company guarante secured transaction by signing a debt guarantee
            guarantee contract with Bank
          </p>
          <h1>for the amount of cash payment by the customer</h1>
          <h2 className=" pb-6">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </h2>
          <div className=" flex justify-center items-center gap-1 py-5  bg-gray-700 w-40     border-2 border-white hover:bg-green-400">
            <button className="  text-xs  text-white font-bold">
              View On Map
            </button>
            <span className=" flex items-center  text-white font-bold">
              <FaMapMarkerAlt />
            </span>
          </div>
        </div>
        <div className=" flex-1 flex flex-col gap-4">
          <h1 className=" text-lg  text-black font-bold">Our Stores</h1>
          <p>New York</p>
          <p>London SF</p>
          <p>Cockfosters BP</p>
          <p>Los Angeles</p>
          <p>Chicago</p>
          <p>Las Vegas</p>
          <p>Las Vegas Albarto</p>
        </div>
        <div className=" flex-1 flex flex-col gap-4">
          <h2 className=" text-lg text-black font-bold">Quick Links</h2>
          <p>Support Center</p>
          <p>Term & Conditions</p>
          <p>Shipping</p>
          <p>Privacy Policy</p>
          <p>Help</p>
          <p>Products Return</p>
          <p>FAQS</p>
        </div>
        <div className=" flex-1 flex flex-col gap-4">
          <h1 className=" text-lg font-bold text-black">Subscribe</h1>
          <p>
            Don’t miss to subscribe to our new feeds, kindly fill the form
            below.Company guarante secured transaction by signing a debt
            guarantee guarantee contract
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
