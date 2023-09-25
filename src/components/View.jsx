import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import red from "../assets/red_shoe-min-1-1.png";
import blue from "../assets/blue_shoe-min.png";
import yellow from "../assets/yellow-shoe.png";
import Feat1 from "../assets/feature1-min-1.jpg";
import Feat2 from "../assets/feature2-min-1.jpg";
const View = () => {
  return (
    <div className=" flex flex-col items-center justify-center pt-20 py-10">
      <div className=" flex justify-center items-center h-[50vh] md:w-10/12 w-full  bg-[#ELCBD7] md:px-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div>
            {views.map((view, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className=" md:flex   items-center px-10  md:px-20 py-20"
                >
                  <div className=" flex flex-col gap-2">
                    <h1 className=" text-xl text-orange-700">{view.name}</h1>
                    <h2 className=" text-4xl md:text-6xl  text-black py-2">
                      {view.model}
                    </h2>
                    <p className=" text-gray-900 py-3">{view.desc}</p>
                    <button className="  flex  justify-center  text-xs items-center py-4   w-56 bg-black text-white hover:bg-orange-300">
                      {view.button}
                    </button>
                  </div>
                  <div className=" cursor-pointer">
                    <img  className="   md:animate-bounce   " src={view.image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))} 
          </div>
        </Swiper>
      </div>
      <div className="  grid gap-8 md:grid-cols-2  pt-28 md:px-0 md:pb-0 pb-8  px-4  ">
        <div className="  ">
          <img className=" hover:animate-pulse" src={Feat1} alt="" />
        </div>
        <div>
          <img className="  hover:animate-pulse " src={Feat2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default View;

const views = [
  {
    image: red,
    name: "Our exclusive",
    model: "Addidas Campus",
    desc: "we have all your auto parts neend!Are you looking for the best perfomances car parts and car accessories",
    button: "VIEW COLLECTIONS",
  },
  {
    image: blue,
    name: "Our exclusive",
    model: "Addidas Campus",
    desc: "we have all your auto parts neend!Are you looking for the best perfomances car parts and car accessories",
    button: "VIEW COLLECTIONS",
  },
  {
    image: yellow,
    name: "Our exclusive",
    model: "Addidas Campus",
    desc: "we have all your auto parts neend!Are you looking for the best perfomances car parts and car accessories",
    button: "VIEW COLLECTIONS",
  },
];
