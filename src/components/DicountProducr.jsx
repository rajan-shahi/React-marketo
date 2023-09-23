import React from "react";
import admin from "../assets/ad-min.jpg";
import sho1 from "../assets/sho1.jpg";
import sho2 from "../assets/sho2.jpg";
import sho3 from "../assets/sho3.jpg";
import sho4 from "../assets/sho4.jpg";
import sho5 from "../assets/sho5.jpg";
import sho6 from "../assets/sho6.jpg";
const DicountProducr = () => {
  return (
    <div className=" flex justify-center pt-10 md:pb-20 md:px-0 px-4">
      <div className=" md:flex justify-center  gap-10 w-full md:w-10/12">
        {/* left */}
        <div className=" w-full md:w-3/12">
          <img  className="  w-full" src={admin} alt="" />
        </div>
        {/* right */}
        <div className=" flex flex-col w-full md:w-7/12">
          <div className=" md:flex justify-between  border-b-2 pb-4">
            <div className=" text-2xl text-gray-700 md:py-0 py-3 md:pt-0 pt-6 font-bold">
              <h1>Discount Product</h1>
            </div>
            <div className=" flex md:gap-8 justify-between text-xl text-gray-500">
              <h2 className=" cursor-pointer  hover:text-orange-400">
                40% Off
              </h2>
              <h2 className=" cursor-pointer  hover:text-orange-400">
                57% Off
              </h2>
              <h3 className=" cursor-pointer  hover:text-orange-400">
                75% Off
              </h3>
              <h2 className=" cursor-pointer  hover:text-orange-400">
                83% Off
              </h2>
            </div>
          </div>
          {/* card */}
          <div className=" grid md:grid-cols-3 md:justify-between  gap-5  py-6">
            {cardshows.map((cardshow, index) => (
              <div
                key={index}
                className=" flex flex-col justify-center   hover:shadow-lg hover:shadow-slate-200 px-4 pb-8"
              >
                <div>
                  <img className=" cursor-pointer" src={cardshow.image} alt="" />
                </div>
                <div className=" flex flex-col gap-1  items-center">
                  <h2 className=" text-gray-800   font-bold hover:text-blue-600 cursor-pointer">{cardshow.model}</h2>
                  <h2>{cardshow.p}</h2>
                  <p className=" text-orange-400 text-lg">{cardshow.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DicountProducr;

const cardshows = [
  {
    image: sho5,

    model: "Notebook screen Z51-",
    p: "2QF-621XLP",
    price: "$400-$130.00",
  },
  {
    image: sho6,
    name: "Notebook",
    model: "Notebook screen Z51-",
    p: "70 40k60",
    price: "&49449.00",
  },
  {
    image: sho1,
    name: "Head Phones",
    model: "Notebook screen Z51-",
    p: "JHTBUK",
    price: "&42012.00",
  },
  {
    image: sho2,

    model: "Notebook screen Z51-",
    p: "70 40k60",
    price: "&49449.00",
  },
  {
    image: sho3,

    model: "Notebook screen Z51-",
    p: "725lku-210k6",
    price: "&102362.00",
  },
  {
    image: sho4,

    model: "Notebook screen Z51-",
    p: "40klKPD45",
    price: "&10,000.00",
  },
];
