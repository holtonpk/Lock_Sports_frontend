import React, { useState } from "react";
import InfoBox from "../components/InfoBox";
import SliderMenu from "../components/SliderMenu";
import WeekSelect from "../components/WeekSelect";
import PickMenu from "../components/PickMenu";
import LockPreview from "../components/LockPreview.js";
import ProfileData from "../assets/data/ProfileData.json";

const PoolPage = ({ showLockAnimation }) => {
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

  return (
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
        <h1 className="text-white text-2xl  mb-2">{pool.Name}</h1>
        <h2 className="text-lg text-white mb-2 ">Pot Value</h2>
        <h1 className="text-5xl font-bold text-c5">{pool.Pot}</h1>

        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-col ">
            <h2 className="text-base text-white text-left">Total win</h2>
            <h2 className="text-lg font-bold text-c1 text-left">$438.00</h2>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-base text-white text-left">Players</h2>
            <h2 className="text-lg font-bold text-c1 text-left">52</h2>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-base text-white text-left">Players Alive</h2>
            <h2 className="text-lg font-bold text-c1 text-left">50</h2>
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
      {/* <h1 className="text-lg text-c1 font-bold w-fit ml-4 mb-2 ">
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
  );
};

export default PoolPage;
