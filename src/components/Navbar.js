import React from "react";
import { IoMdSettings, IoMdMail } from "react-icons/io";
import { BsFillCalendarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import logo from "../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="relative hidden w-full md:block">
      <div className="navGrid border-r-[.1px] border-white2 h-[100vh] fixed w-[20%]">
        <Link to="/Home">
          <img
            src={logo}
            className="relative top-0 z-40 w-40 mx-auto mt-6 md:w-36 md:h-12 lg:w-56 lg:h-16"
          />
        </Link>

        <div className="flex flex-col justify-start w-full mx-auto">
          <div className="w-[90%] mx-auto my-10 border-b-[.1px] border-white2"></div>
          <div className="flex flex-col h-[50%] justify-between mx-auto ">
            <Link
              to="/Home"
              className="flex flex-row items-center mb-10 hover:text-white hover:fill-white"
            >
              <AiFillHome className="mr-2 w-7 h-7 fill-white" />
              <h1 className="text-3xl text-white">Home</h1>
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center mb-10 hover:text-white hover:fill-white fill-white2 text-white2"
            >
              <BsFillCalendarFill className="mr-2 w-7 h-7 " />
              <h1 className="text-3xl ">Activity</h1>
            </Link>

            <Link
              to="/Settings"
              className="flex flex-row items-center mb-10 hover:text-white hover:fill-white fill-white2 text-white2"
            >
              <IoMdSettings className="mr-2 w-7 h-7 " />
              <h1 className="text-3xl ">Settings</h1>
            </Link>
          </div>
        </div>

        <div className="bottom-0 flex flex-col justify-start w-full mx-auto">
          <div className="w-[90%] mx-auto border-b-[.1px] border-white2 mb-4"></div>
          <div className="flex flex-col h-[70%] justify-between mx-auto ">
            <Link to="/" className="text-xl text-white hover:text-white2">
              Help
            </Link>
            <Link to="/" className="text-xl text-white hover:text-white2">
              Contact Us
            </Link>
            <Link
              to="/Login"
              className="flex flex-row items-center text-white fill-white hover:text-white2 hover:hover:fill-white2"
            >
              <BiLogOut className="w-6 h-6 mr-2 " />
              <h1 className="text-xl ">Logout</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
