import React, { useState } from "react";
import InfoBox from "../components/InfoBox";
import SliderMenu from "../components/SliderMenu";
import WeekSelect from "../components/WeekSelect";
import PickMenu from "../components/PickMenu";
import LockPreview from "../components/LockPreview.js";
import ProfileData from "../assets/data/ProfileData.json";
import Lottie from "react-lottie-player";
import lock3 from "../assets/lottie/lock3.json";
import logo from "../assets/logo.png";

const PoolPage = () => {
  const pool = {
    Name: "OU Sig Ep Pool",
    Description:
      "Predict 1 NFL game every week to stay alive and win the pot every week to stay alive and win the pot",
    Payers: 20,
    Pot: "$2,000.00",
    Entry: "$10",
  };
  const [weekView, setWeekView] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedGameKey, setSelectedGameKey] = useState(undefined);
  const [selectedPick, setSelectedPick] = useState(undefined);
  const [Picks, setPicks] = useState(ProfileData.Picks);
  const [lockAnimation, showLockAnimation] = useState(false);

  return (
    <div className="bg-[#151515] w-screen py-4">
      <div
        id="lockAnimation"
        className="fixed w-full h-full  bg-back60 z-[80] top-0 hidden"
      >
        {(() => {
          if (lockAnimation) {
            return (
              <div className="w-[250px] h-[250px] top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                <Lottie
                  loop
                  animationData={lock3}
                  play
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            );
          }
        })()}
      </div>
      <img src={logo} className="w-[50%] mx-auto " />
      <div className="flex flex-col">
        <LockPreview
          showLockAnimation={showLockAnimation}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          selectedGameKey={selectedGameKey}
          selectedPick={selectedPick}
          setPicks={setPicks}
          weekView={weekView}
          Picks={Picks}
          setSelectedPick={setSelectedPick}
        />
        <div className="bg-white20 shadow-lg w-[80%]  mx-auto rounded-[10px] flex flex-col p-3 mt-4">
          <h1 className="mb-2 text-2xl text-white">{pool.Name}</h1>
          <h2 className="mb-2 text-lg text-white ">Pot Value</h2>
          <h1 className="text-5xl font-bold text-c5">{pool.Pot}</h1>

          <div className="flex flex-row justify-between mt-2">
            <div className="flex flex-col ">
              <h2 className="text-base text-left text-white">Total win</h2>
              <h2 className="text-lg font-bold text-left text-c1">$438.00</h2>
            </div>
            <div className="flex flex-col ">
              <h2 className="text-base text-left text-white">Players</h2>
              <h2 className="text-lg font-bold text-left text-c1">52</h2>
            </div>
            <div className="flex flex-col ">
              <h2 className="text-base text-left text-white">Players Alive</h2>
              <h2 className="text-lg font-bold text-left text-c1">50</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[90%] justify-between mx-auto my-6">
          <InfoBox heading={"Your Streak"} data={"2 Weeks"} />
          <InfoBox heading={"Your Status"} data={"Alive"} />
          <InfoBox heading={"Pick Status"} data={"Locked"} />
        </div>
        <div className="w-[95%] mx-auto  mb-4">
          <SliderMenu Options={["Make Picks", "Pool", "Chat"]} />
        </div>
        {/* <h1 className="mb-2 ml-4 text-lg font-bold text-c1 w-fit ">
        Week Select
      </h1> */}
        {/* <WeekSelect weekView={weekView} setWeekView={setWeekView} /> */}
        <PickMenu
          Picks={Picks}
          setSelectedGameKey={setSelectedGameKey}
          selectedGameKey={selectedGameKey}
          selectedPick={selectedPick}
          setSelectedPick={setSelectedPick}
          weekView={weekView}
          setWeekView={setWeekView}
          setShowMenu={setShowMenu}
        />
      </div>
    </div>
  );
};

export default PoolPage;
