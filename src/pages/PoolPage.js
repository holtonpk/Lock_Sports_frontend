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
import stripes2 from "../assets/stripes2.svg";
import AccountBalance from "../components/AccountBalance.js";
import Notifications from "../components/Notifications.js";
import PoolPreview from "../components/PoolPreview.js";
const PoolPage = () => {
  const [weekView, setWeekView] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedGameKey, setSelectedGameKey] = useState(undefined);
  const [selectedPick, setSelectedPick] = useState(undefined);
  const [Picks, setPicks] = useState(ProfileData.Picks);
  const [lockAnimation, showLockAnimation] = useState(false);

  return (
    <div className="w-screen h-[400vh] bg-black ">
      <img src={logo} className="w-[25%] ml-10 mt-5 z-40 absolute" />
      <div className="flex flex-row absolute left-[60%] top-14 z-40">
        <h1 className="mr-4 text-5xl text-white whitespace-nowrap">
          Welcome back,
        </h1>
        <h1 className="text-5xl font-bold text-white whitespace-nowrap">
          Patrick
        </h1>
      </div>

      <img src={stripes2} className="absolute z-30 w-[120vw]  top-0" />

      <div className="w-[90%] py-10 px-10 rounded-[20px] relative bg-[#151515] float-right mt-40 ml-40 z-40 ">
        <div className="flex flex-row justify-between mb-6">
          <AccountBalance />
          <Notifications />
        </div>
        <h1 className="mb-2 text-4xl font-bold text-white">Your Pools</h1>

        {/* <div id="lockAnimation" className=" w-full h-full  z-[80] hidden">
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
        </div> */}
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
          <PoolPreview />
          <h1 className="my-4 text-4xl font-bold text-white">Your Picks</h1>

          {/* <div className="flex flex-row w-[90%] justify-between mx-auto my-6">
            <InfoBox heading={"Your Streak"} data={"2 Weeks"} />
            <InfoBox heading={"Your Status"} data={"Alive"} />
            <InfoBox heading={"Pick Status"} data={"Locked"} />
          </div> */}
          {/* <div className="w-[95%] mx-auto  mb-4">
            <SliderMenu Options={["Make Picks", "Pool", "Chat"]} />
          </div> */}
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
            setPicks={setPicks}
          />
        </div>
      </div>
    </div>
  );
};

export default PoolPage;
