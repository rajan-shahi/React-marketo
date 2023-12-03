import React from "react";
import news1 from "../assets/news-2.jpg";
import news2 from "../assets/news-3.jpg";
import news3 from "../assets/news-4-1.jpg";
import { BiMessage } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Blog = () => {
  return (
    <div className=" flex justify-center">
      <div className=" md:flex   justify-center gap-14   w-full md:w-10/12 ">
        {/* left Container */}
        <div className=" md:w-5/12  w-full  flex flex-col md:gap-10">
          {/* top Section */}
          <div className=" flex items-center  border w-full py-5 px-8">
          <span>
              <AiOutlineSearch size={20} />
            </span>
            <input
              className=" w-full outline-none"
              type="text"
              placeholder=" Search....."
            />
           
          </div>
          <div className="  bg-gray-200 w-full">
            <div>
              <img className=" w-full" src={news1} alt="" />
            </div>
            <div className=" flex flex-col  md:px-20 px-4 md:py-14 py-10  md:pt-24  gap-6">
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
          <div className=" w-full bg-gray-200">
            <div>
              <img className=" md:pt-0 pt-6 w-full" src={news2} alt="" />
            </div>
            <div className=" flex flex-col  md:px-20 px-4 md:py-14  py-10 md:pt-24   gap-6">
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
        </div>
        {/* right Container */}
        <div className=" flex flex-col w-full  md:w-5/12">
          <div className=" flex flex-col gap-16 bg-gray-200">
            <div>
              <img className=" md:pt-0 pt-6 w-full" src={news3} alt="" />
            </div>
            <div className=" flex flex-col  md:px-20 px-4 md:py-14  md:pt-24  gap-6">
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
            <div className=" bg-gray-200">
              <div>
                <img className=" md:pt-0 pt-6 w-full" src={news1} alt="" />
              </div>
              <div className=" flex flex-col  md:px-20 px-4 md:py-14   md:pt-16  pt-10 gap-6">
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
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem…
                </h2>
              </div>
            </div>
          </div>
          <Link to={"/"}>
            <div className=" bg-gray-100  py-10 flex  justify-end md:px-0 px-4">
              <div className=" flex  gap-2 bg-blue-600 hover:bg-green-600 px-6 py-2 items-center">
                <button className=" text-white hover:bg-green-600">
                  Home page
                </button>
                <span className="  text-black font-bold flex items-center">
                  <BsArrowRight size={20} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
