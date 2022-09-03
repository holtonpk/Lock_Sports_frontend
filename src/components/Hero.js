import React from "react";
import heroImg from "../assets/betting-app.svg";
import mobile from "../assets/mobile.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  const Slide1 = () => {
    return (
      <div className="md:w-full w-full mx-auto flex flex-row  mb-0 rounded-[10px]  relative  items-center">
        <div className="flex flex-col  w-[60%]">
          <h1 className="md:w-[60%]   mb-2 text-xl text-left text-white md:text-3xl">
            App Coming Soon, Join the Waitlist
          </h1>
          <button className="p-2 font-bold text-white bg-c1 rounded-[10px] w-fit text-sm ">
            Join Waitlist
          </button>
        </div>
        <img
          src={mobile}
          alt="img"
          className="absolute  left-[80%] -translate-x-1/2 top-1/2 -translate-y-1/2 bottom-0 md:w-[100px] md:h-[280px]  h-[200px] "
        />
      </div>
    );
  };

  const Slide2 = () => {
    return (
      <div className="md:w-full w-full mx-auto flex flex-row overflow-hidden bg-white05 mb-0 rounded-[10px] p-8 relative  items-center">
        <h1 className="w-[50%] text-xl text-left text-white md:w-1/2 md:text-3xl capitalize">
          Climb the leaderboard and win cash prizes!
        </h1>
        <img
          src={heroImg}
          alt="img"
          className="absolute  left-[70%] bottom-0 -translate-x-1/2  md:w-[200px]  w-[170px] h-[170px] "
        />
      </div>
    );
  };

  return (
    <>
      <div className="md:w-[80%] w-[95%] max-w-[600px] mx-auto  mb-10 py-6">
        <Slide1 />

        {/* <Carousel
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={6000}
          showArrows={false}
          //   dynamicHeight={true}
        >
          <Slide2 />

        </Carousel> */}
      </div>
    </>
  );
};

export default Hero;
