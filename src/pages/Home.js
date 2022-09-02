import React from "react";
import AccountBalance from "../components/AccountBalance";
import PoolPreview from "../components/YourPools";
import stripes2 from "../assets/stripes3.svg";
import JoinPool from "../components/JoinPool.js";
import { IoMdSettings, IoMdMail } from "react-icons/io";
import { BsFillCalendarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import logo from "../assets/logo.png";
import heroImg from "../assets/betting-app.svg";
import { AiFillHome } from "react-icons/ai";
import profile from "../assets/profile.png";
import Notifications from "../components/Notifications.js";
import Navbar from "../components/Navbar";
const Home = () => {
  const name = "Patrick";
  return (
    <div className="bg-black homeGrid ">
      <Navbar />
      <div className="relative z-20 w-full p-4 bg- ">
        <div className="flex flex-row items-center justify-between w-full mb-4">
          <div className="flex flex-row">
            <h1 className="mr-1 text-xl font-thin text-white md:mr-3 md:text-4xl">
              Welcome back,
            </h1>
            <h1 className="text-xl font-bold text-white md:text-4xl">
              Patrick
            </h1>
          </div>
          <div className="flex flex-row items-center">
            <Link to="/Settings">
              <IoMdSettings className="w-6 h-6 mr-6 md:w-8 md:h-8 fill-white hover:fill-white2" />
            </Link>
            {/* <IoMdMail className="w-8 h-8 mr-6 fill-white hover:fill-white2" /> */}
            <img src={profile} alt="" className="w-10 h-10 md:w-14 md:h-14" />
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <div className="md:w-[60%] w-[90%] mt-6 mx-auto flex flex-row h-36 bg-white05 rounded-[10px] p-4 relative  items-center">
            <h1 className="w-1/2 text-xl font-bold text-white md:text-3xl ">
              Climb the leaderboard and win cash prizes!
            </h1>
            <img
              src={heroImg}
              alt="img"
              className="absolute w-[70%] left-[70%] -translate-x-1/2 bottom-0 md:w-[300px]"
            />
          </div>
          <div className="flex flex-row gap-2 mx-auto my-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-white2"></div>
            <div className="w-2 h-2 rounded-full bg-white2"></div>
          </div>
          <div className="flex flex-col items-center justify-between w-full gap-4 mb-6 md:flex-row">
            <AccountBalance />
            <Notifications />
          </div>
          <div className="flex flex-col justify-between gap-4 xl:flex-row ">
            <PoolPreview />

            <JoinPool />
          </div>
        </div>
      </div>
      {/* <img src={stripes2} className="absolute z-10 w-[120vw]  -top-40 " /> */}
    </div>
  );
};

export default Home;
