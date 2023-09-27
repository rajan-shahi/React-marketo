import React from "react";
import news1 from "../assets/news-2.jpg";
import news2 from "../assets/news-3.jpg";
import news3 from "../assets/news-4-1.jpg";
import { BiMessage } from "react-icons/bi";
import { AiOutlineSearch } from 'react-icons/ai';
const Blog = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex gap-5 py-10 w-9/12 ">
        {/* left Container */}
        <div className=" w-8/12  flex flex-col gap-20">
          {/* top Section */}
          <div className=" bg-gray-200">
            <div>
              <img className=" w-full" src={news1} alt="" />
            </div>
            <div className=" flex flex-col  px-20 py-14  pt-24  gap-6">
              <div className=" flex items-center gap-1">
                <span className=" text-gray-800 font-bold">
                  <BiMessage />
                </span>
                <h1 className=" text-sm text-gray-500 hover:text-blue-600 cursor-pointer">
                  Electronics
                </h1>
              </div>
              <h2 className="  text-lg text-gray-700 font-bold  hover:text-orange-700 cursor-pointer">
                Seating Collection Inspiration Is Not Enough For People
              </h2>
              <h2 className=" text-md text-gray-700 ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem…
              </h2>
              <button className=" flex justify-start bg-blue-600  items-center px-7 py-3 w-[200px] text-white font-bold hover:bg-green-500 rounded-md">
                Continue Reading
              </button>
            </div>
          </div>
          {/* mid section */}
          <div className=" bg-gray-200">
            <div>
              <img className=" w-full" src={news2} alt="" />
            </div>
            <div className=" flex flex-col  px-20 py-14  pt-24  gap-6">
              <div className=" flex items-center gap-1">
                <span className=" text-gray-800 font-bold">
                  <BiMessage />
                </span>
                <h1 className=" text-sm text-gray-500 hover:text-blue-600 cursor-pointer">
                Speaker
                </h1>
              </div>
              <h2 className="  text-lg text-gray-700 font-bold  hover:text-orange-700 cursor-pointer">
              Creative Water Features And Exterior Design
              </h2>
              <h2 className=" text-md text-gray-700 ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem…
              </h2>
              <button className=" flex justify-start bg-blue-600  items-center px-7 py-3 w-[200px] text-white font-bold hover:bg-green-500 rounded-md">
                Continue Reading
              </button>
            </div>
          </div>
          {/* footer Section */}
          <div className=" bg-gray-200">
            <div>
              <img className=" w-full" src={news3} alt="" />
            </div>
            <div className=" flex flex-col  px-20 py-14  pt-24  gap-6">
              <div className=" flex items-center gap-1">
                <span className=" text-gray-800 font-bold">
                  <BiMessage />
                </span>
                <h1 className=" text-sm text-gray-500 hover:text-blue-600 cursor-pointer">
                Electronics
                </h1>
              </div>
              <h2 className="  text-lg text-gray-700 font-bold  hover:text-orange-700 cursor-pointer">
              Creative Water Features And Exterior Design
              </h2>
              <h2 className=" text-md text-gray-700 ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem…
              </h2>
              <button className=" flex justify-start bg-blue-600  items-center px-7 py-3 w-[200px] text-white font-bold hover:bg-green-500 rounded-md">
                Continue Reading
              </button>
            </div>
          </div>
        </div>
        {/* right Container */}
        <div className=" flex flex-col w-1/12">
          <div>
            <div>
              <input type="text" placeholder="Search" />
              <span><AiOutlineSearch/></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
