import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SlSocialFacebook } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" flex justify-center   ">
      <div className=" flex   flex-col gap-2 w-full md:w-3/12  ">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-2xl text-gray-600">Login</h1>
          <h2 className=" text-sm text-gray-500">
            Don't have an account ?{" "}
            <span className=" text-blue-500 cursor-pointer text-lg hover:text-orange-400">
              <Link to={"/signup"}> sign up</Link>
            </span>
          </h2>
        </div>
        <form className=" flex  md:px-4 flex-col md:gap-5  gap-6 justify-center items-center">
          <div className=" flex gap-1 flex-col">
            <span className=" text-md text-gray-600">Email</span>
            <input
              name="email"
              className=" w-[350px] border  border-gray-400 outline-orange-400 px-3 md:py-1 py-2 rounded-lg  placeholder:text-sm"
              type="email"
              placeholder="Enter Your email"
              required
            />
          </div>
          <div className=" flex gap-1 flex-col">
            <span className=" text-md text-gray-600 ">Password</span>
            <input
              name="password"
              className=" w-[350px] border  border-gray-400 outline-orange-400 px-3 md:py-1  py-2 rounded-lg  placeholder:text-sm"
              type="password"
              placeholder="Enter Your password"
              required
            />
          </div>
          <div>
            <button className=" w-[350px] border  border-gray-400 outline-orange-400 px-1 py-2 md:py-1 rounded-lg  bg-blue-400 text-white">
              Login
            </button>
          </div>
          <div>
            <h1>or</h1>
          </div>
          <div className="w-[350px] border  border-gray-400  py-3 rounded-lg  flex justify-center items-center">
            <span className=" px-1  cursor-pointer">
              <a href="https://www.google.com" target="-blank">
                {" "}
                <FcGoogle size={20} />
              </a>
            </span>
            <h1 className=" text-sm  text-gray-500  cursor-pointer">
              <a href="https://www.google.com" target="-blank">
                {" "}
                Sign in with Google{" "}
              </a>
            </h1>
          </div>
          <div className="w-[350px] border  border-gray-400   py-3 rounded-lg flex justify-center items-center">
            <span className="  text-blue-500 px-1 cursor-pointer">
              <a
                href="https://www.facebook.com
"
                target="-blank"
              >
                <SlSocialFacebook size={20} />
              </a>
            </span>
            <h1 className=" text-sm  text-gray-500  cursor-pointer">
              <a href="https://www.facebook.com" target="-blank">
                {" "}
                Sign in with Facebook{" "}
              </a>
            </h1>
          </div>
          <div className="w-[350px] border  border-gray-400  py-3 rounded-lg  flex justify-center  items-center">
            <span className=" text-blue-500 px-1 cursor-pointer">
              <a
                href="https://www.linkedin.com
"
                target="-blank"
              >
                {" "}
                <FaLinkedinIn size={20} />
              </a>
            </span>
            <h1 className=" text-sm  text-gray-500   cursor-pointer">
              <a
                href="https://www.linkedin.com"
                target="-blank"
              >
                {" "}
                Sign in with Linkedin{" "}
              </a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
