import React from "react";

import sho1 from "../assets/sho1.jpg";
import sho2 from "../assets/sho2.jpg";
import sho3 from "../assets/sho3.jpg";
import sho4 from "../assets/sho4.jpg";
const Items = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" flex flex-col  md:px-0 px-4 w-full md:w-10/12 py-10">
        <div className=" text-2xl text-gray-700 font-bold py-5">
          <h1>Most Viewed Items</h1>
        </div>
        {/* items card */}
        <div className=" md:flex gap-5">
          {items.map((item, index) => (
            <div key={index} className=" border flex flex-col justify-center px-6 py-6 pb-10 rounded  hover:shadow-md hover:shadow-slate-300 ">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className=" flex flex-col gap-1 justify-center md:items-start items-center">
                <h1 className=" text-sm text-gray-600">{item.name}</h1>
                <h2 className=" text-lg  text-gray-800 font-bold hover:text-blue-600 cursor-pointer">{item.model}</h2>
                <h1>{item.p}</h1>
                <p className=" text-orange-600 text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;

const items = [
  {
    image: sho1,
    name: "Head Phones",
    model: "Notebook Blgscreen Z51-70",
    p: "70",
    price: "&42012.00",
  },
  {
    image: sho2,
    name: "Mobile Projector",
    model: "Notebook Blgscreen Z51-70",
    p: "70 40k60",
    price: "&49449.00",
  },
  {
    image: sho3,
    name: "Further Products",
    model: "Notebook Blgscreen Z51-70",
    p: "70k6",
    price: "&102362.00",
  },
  {
    image: sho4,
    name: "Featured Product Laptop",
    model: "Notebook Blgscreen Z51-70",
    p: "40k45",
    price: "&10,000.00",
  },
];
