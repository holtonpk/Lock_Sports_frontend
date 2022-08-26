import React from "react";
import textLogo from "../assets/textLogo.png";
import coin from "../assets/coin.png";
const Home = () => {
  const name = "Patrick";
  return (
    <div className="bg-[#151515] py-4">
      <img src={textLogo} className="mx-auto" />
      <div className="flex flex-row mx-auto w-[fit-content]">
        <h1 className="mx-auto mr-1 text-2xl text-white">Welcome back,</h1>
        <h1 className="mx-auto text-2xl font-bold text-white">{name}</h1>
      </div>
      <div className="w-full bg-white05 rounded-xl">
        <img src={coin} />
      </div>
    </div>
  );
};

export default Home;
