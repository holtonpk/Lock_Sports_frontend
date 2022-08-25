import React from "react";
import loginHeader from "../assets/loginHeader.png";
import lock from "../assets/lock.png";
import stripes from "../assets/stripes.png";
import { TextField } from "@mui/material";
import twitterImg from "../assets/twitter.png";
import instagramImg from "../assets/instagram.png";
import googleImg from "../assets/google.png";
const Login = () => {
  const Login = () => {
    document.getElementById("lockLogo").classList.add("swirl-out-fwd");
  };

  return (
    <div className="py-4 bg-[#151515]">
      <div className="flex flex-row mx-auto w-[fit-content]">
        <h1 className="text-6xl font-bold text-white">Lock</h1>
        <h1 className="text-6xl font-thin text-white ">Sports</h1>
      </div>
      <div className="relative my-12">
        <img src={stripes} />
        <img
          id="lockLogo"
          src={lock}
          className="absolute h-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
        />
      </div>

      <div className="flex flex-col mx-auto w-[90%]">
        <h2 className="mb-3 ml-2 text-xl font-thin text-white">Email</h2>
        <input
          type="email"
          className="h-10 px-3 mb-3 text-white rounded-xl bg-white05 textarea"
        />

        <h2 className="mb-3 ml-2 text-xl font-thin text-white">Password</h2>
        <input
          type="password"
          className="h-10 px-3 mb-3 text-white rounded-xl bg-white05 textarea"
        />

        <button
          onClick={Login}
          className="bg-c1 w-full rounded-[10px] text-white font-bold text-xl my-8 py-2"
        >
          Sign In
        </button>

        <div className="relative w-full h-10">
          <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 border-t-2 border-white5 top-1/2 left-1/2"></div>
          <h3 className="text-lg whitespace-nowrap font-bold text-white5 w-[fit-content] px-5  bg-[#151515] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Or Sign in With
          </h3>
        </div>

        <div className="flex flex-row justify-between w-[90%] mx-auto mb-4">
          <div className="relative w-16 h-16 bg-white05 rounded-xl">
            <img
              src={googleImg}
              className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          <div className="relative w-16 h-16 bg-white05 rounded-xl">
            <img
              src={twitterImg}
              className="absolute w-12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          <div className="relative w-16 h-16 bg-white05 rounded-xl">
            <img
              src={instagramImg}
              className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
        <h2 className="mx-auto font-thin text-center text-white text-md w-fit">
          Don't have an account yet?
        </h2>
        <a className="mx-auto font-bold text-c5 text-md">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
