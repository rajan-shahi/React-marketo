import React from "react";
import canada from "../assets/canada-1.png";
import uk from "../assets/uk-1.png";
import saudi from "../assets/saudi-1.png";
import singapur from "../assets/singapore-1.png";
import usa from "../assets/usa-1.png";
import brazil from "../assets/brazil-1.png";

const Footer = () => {
  return (
    <div className=" flex  flex-col bg-gray-300 justify-center">
      <div className=" flex justify-center bg-gray-200 top-0 py-8">
        <div>
          <h1>Canada</h1>
          <img src={canada} alt="" />
        </div>
        <div>
        <h1>Canada</h1>
          <img src={uk} alt="" />
        </div>
        <div>
        <h1>Canada</h1>
          <img src={singapur} alt="" />
        </div>
        <div>
        <h1>Canada</h1>
          <img src={usa} alt="" />
        </div>
        <div>
        <h1>Canada</h1>
          <img src={brazil} alt="" />
        </div>
        <div>
        <h1>Canada</h1>
          <img src={saudi} alt="" />
        </div>
      </div>
      <div className=" grid md:grid-cols-4 gap-10  px-4 md:px-10 py-16 text-sm  text-gray-500">
        <div className=" flex-1 flex flex-col gap-4 md:px-4 ">
          <p>
            Company guarante secured transaction by signing a debt guarantee
            guarantee contract with Bank
          </p>
          <h1>for the amount of cash payment by the customer</h1>
          <h2>17 Princess Road, London, Greater London NW1 8JR, UK</h2>
          <button className=" text-sm  bg-red-600 w-40  text-white font-bold py-4  rounded-lg hover:bg-green-400">
            View On Map
          </button>
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
