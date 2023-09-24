import React from "react";

const About = () => {
  return (
    <div className=" flex justify-center  md:py-10">
      <div className=" w-full md:w-max shadow-lg  shadow-slate-300 grid md:grid-cols-5  grid-cols-2 gap-4 border px-10 py-20">
        {homes.map((home,index)=>(
            <div key={index} className=" border shadow-lg flex  items-center py-8 md:px-10  px-2 justify-center cursor-pointer hover:text-orange-400  hover:scale-110 duration-500">
                <h1>{home.name}</h1>
            </div>
        ))}
      </div>
   
    </div>
  );
};

export default About;

const homes = [
  {
    name: "Home 01",
  },
  {
    name: "Home 02",
  },
  {
    name: "Home 03",
  },
  {
    name: "Home 04",
  },
  {
    name: "Home 05",
  },
  {
    name: "Wc Marketplace",
  },
  {
    name: "Marketplace",
  },
  {
    name: "Auto Parts",
  },
  {
    name: "Eye Glass",
  },
  {
    name: "Furniture",
  },
];
