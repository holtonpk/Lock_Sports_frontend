import React, { useState, useEffect } from "react";
import InfoBox from "../components/InfoBox";
import SliderMenu from "../components/SliderMenu";
import WeekSelect from "../components/WeekSelect";
import PickMenu from "../components/PickMenu";

import ProfileData from "../assets/data/ProfileData.json";
import Lottie from "react-lottie-player";
import lock3 from "../assets/lottie/lock3.json";
import logo from "../assets/logo.png";
import stripes2 from "../assets/stripes3.svg";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PickPreview from "../components/PickPreview";
import {
  BsFillPeopleFill,
  BsFillPersonFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import AccountBalance from "../components/AccountBalance.js";
import Notifications from "../components/Notifications.js";
import PoolPreview from "../components/YourPools.js";
import pools from "../assets/data/Pools.json";
import Navbar from "../components/Navbar.js";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Pool = () => {
  const [weekView, setWeekView] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedGameKey, setSelectedGameKey] = useState(undefined);
  const [selectedPick, setSelectedPick] = useState(undefined);
  const [Picks, setPicks] = useState(ProfileData.Picks);
  const [lockAnimation, showLockAnimation] = useState(false);
  const [showPickPreview, setShowPickPreview] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  let query = useQuery();
  let pool = undefined;

  pools.map((poolQ) => {
    if (poolQ.id == query.get("id")) {
      pool = poolQ;
      console.log(pool);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="top-0 w-screen bg-black border-2 border-black homeGrid">
      <PickPreview
        setShowPickPreview={setShowPickPreview}
        showPickPreview={showPickPreview}
        setShowMenu={setShowMenu}
        selectedGameKey={selectedGameKey}
        selectedPick={selectedPick}
        setPicks={setPicks}
        weekView={weekView}
        Picks={Picks}
        setSelectedPick={setSelectedPick}
      />
      {/* <img src={logo} className="w-[25%] ml-10 top-0 mt-4 z-40 absolute" /> */}
      {/* <img src={stripes2} className="fixed z-10 w-[120vw]   top-0" />
       */}

      <Navbar />
      <div className="w-full">
        <div className=" rounded-t-[10px]  relative mx-auto mb-2  pt-3 pb-0   flex flex-col items-center ">
          <Link to="/Home">
            <IoIosArrowRoundBack className="absolute left-0 z-50 top-2 md:w-20 md:h-20 h-14 w-14 fill-white hover:fill-white2" />
          </Link>
          <div className="flex flex-row items-center">
            <h1 className="mx-auto mr-2 text-4xl font-bold text-white md:text-5xl w-fit whitespace-nowrap">
              {pool.Name}
            </h1>
            <button
              onClick={() => setShowDetails((showDetails) => !showDetails)}
              className="relative"
            >
              <AiOutlineInfoCircle className="w-8 h-8 fill-c1" />
            </button>
          </div>
          {(() => {
            if (showDetails) {
              return (
                <div className="top-0 z-50 flex-col items-center justify-between w-full gap-6 p-4 mx-auto mt-3 md:flex-row bg-white05 flex-start md:items-center md:mx-auto ">
                  <div className="flex flex-row items-center md:flex-col w-fit">
                    <div className="flex flex-row items-center mr-2">
                      <MdOutlineAttachMoney className="w-6 h-6 p-1 mr-2 border-2 rounded-full md:w-8 md:h-8 bg-c1_20 border-c1 fill-c1" />
                      <h2 className="text-xl text-left text-white md:text-2xl whitespace-nowrap">
                        Pot Value:
                      </h2>
                    </div>
                    <h2 className="text-xl font-bold text-left md:text-2xl text-c5">
                      {pool.Pot}
                    </h2>
                  </div>
                  <div className="flex flex-row items-center md:mt-0 md:flex-col w-fit">
                    <div className="flex flex-row items-center mr-2">
                      <BsFillPeopleFill className="w-6 h-6 p-1 mr-2 border-2 rounded-full md:w-8 md:h-8 bg-c1_20 border-c1 fill-c1" />
                      <h2 className="text-xl text-left text-white md:text-2xl whitespace-nowrap">
                        Total Players:
                      </h2>
                    </div>
                    <h2 className="text-xl font-bold text-left md:text-2xl text-c5">
                      {pool.Payers}
                    </h2>
                  </div>
                  <div className="flex flex-row items-center md:flex-col w-fit">
                    <div className="flex flex-row items-center mr-2">
                      <BsFillPersonFill className="w-6 h-6 p-1 mr-2 border-2 rounded-full md:w-8 md:h-8 bg-c1_20 border-c1 fill-c1" />
                      <h2 className="text-xl text-left text-white md:text-2xl whitespace-nowrap">
                        Your Status:
                      </h2>
                    </div>
                    <h2 className="text-xl font-bold text-left md:text-2xl text-c5">
                      {pool.Status}
                    </h2>
                  </div>
                </div>
              );
            }
          })()}
        </div>
        <div className="w-[90%]  rounded-[20px] relative mx-auto mt-6 z-40 max-w-[1700px] bg-c3 mb-10 ">
          <PickMenu
            pool={pool}
            setShowPickPreview={setShowPickPreview}
            showPickPreview={showPickPreview}
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

export default Pool;
