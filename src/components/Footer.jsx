import React from "react";

const Footer = () => {
  return (
    <div className=" flex  bg-gray-300 justify-center py-8 ">
      <div className=" grid md:grid-cols-4 gap-10  px-4 md:px-10 py-10 text-sm  text-gray-500">
        <div className=" flex-1 flex flex-col gap-4 md:px-4 ">
          <p>
            Company guarante secured transaction by signing a debt guarantee
            guarantee contract with Bank
          </p>
          <h1>for the amount of cash payment by the customer</h1>
          <h2>17 Princess Road, London, Greater London NW1 8JR, UK</h2>
          <button className=" text-sm  bg-red-600 w-40  text-white font-bold py-4  rounded-lg hover:bg-green-400">View On Map</button>
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
          <h2  className=" text-lg text-black font-bold">Quick Links</h2>
          <p>Support Center</p>
          <p>Term & Conditions</p>
          <p>Shipping</p>
          <p>Privacy Policy</p>
          <p>Help</p>
          <p>Products Return</p>
          <p>FAQS</p>
        </div>
        <div className=" flex-1 flex flex-col gap-4">
          <h1  className=" text-lg font-bold text-black">Subscribe</h1>
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
