import React, { useState } from "react";
import nflTimeFrames from "../assets/data/nflTimeFrames.json";
import nflSchedule from "../assets/data/nflSchedule.json";
import TeamButton from "./TeamButton.js";
import { getTeamData } from "../logic.js";
import { FaLock } from "react-icons/fa";
import WeekSelect from "./WeekSelect.js";
import PickPreview from "./PickPreview.js";

import { BsCalendarFill, BsFillHandIndexFill } from "react-icons/bs";
const PickMenu = ({
  weekView,
  setWeekView,
  setShowMenu,
  setSelectedGameKey,
  selectedGameKey,
  selectedPick,
  setSelectedPick,
  Picks,
  setPicks,
}) => {
  let week = undefined;
  let matchUps = [];
  nflTimeFrames.map((weekData) => {
    if (weekData.Week == weekView) {
      week = weekData;
    }
  });

  nflSchedule.map((matchup) => {
    if (matchup.Week == weekView) {
      matchUps.push(matchup);
    }
  });

  let date = new Date(week.FirstGameStart);

  let thisWeeksPrediction = undefined;

  Picks.map((week) => {
    if (week.week == weekView) {
      thisWeeksPrediction = week;
    }
  });

  const [showPickPreview, setShowPickPreview] = useState(false);

  return (
    <>
      <div className="ml-4">
        <div className="flex flex-row items-center mb-4">
          <div className="relative p-4 mr-2 border-2 rounded-full bg-blue-20 border-c1">
            <BsCalendarFill className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 fill-c1 left-1/2 top-1/2" />
          </div>
          <h1 className="text-2xl font-thin text-white whitespace-nowrap">
            Select a week
          </h1>
        </div>
        <WeekSelect
          weekView={weekView}
          setWeekView={setWeekView}
          thisWeeksPrediction={thisWeeksPrediction}
          Picks={Picks}
        />
      </div>
      <div className="flex flex-col bg-white20 mx-auto w-full  rounded-[10px] p-8 h-fit mt-4 relative">
        <div className="flex flex-row items-center justify-between w-[fit-content] mb-4 ">
          <h1 className="text-c1 text-7xl font-bold mr-4 whitespace-nowrap mb-1 w-[fit-content] ">
            {"Week " + weekView}
          </h1>
          <div className="flex w-[fit-content] flex-row items-center  text-c5  border-c5 rounded-b-[5px]  px-2 absolute top-0 left-[75%]">
            <h1 className="mr-2 text-xl whitespace-nowrap">Pick deadline</h1>
            <h1 className=" rounded-[5px]  whitespace-nowrap text-xl px-1">
              {date.toLocaleString("en-US", {
                day: "numeric",
                month: "numeric",
                hour: "numeric",
                minute: "numeric",
              }) + " ET"}
            </h1>
          </div>
          {(() => {
            if (thisWeeksPrediction) {
              let Team = getTeamData(thisWeeksPrediction.selectedWinner);
              return (
                <div className="flex flex-row w-[80%] ml-4 items-center">
                  <div className="mr-6 text-3xl font-bold text-white whitespace-nowrap">
                    Your Pick :
                  </div>

                  <div
                    className={
                      "flex flex-row items-center   px-4  rounded-[10px] w-[fit-content]  py-2  box-border  "
                    }
                  >
                    <div className="flex flex-row mx-auto">
                      <img
                        src={Team.WikipediaLogoUrl}
                        alt="no logo"
                        className="mr-4 w-14 h-14"
                      />

                      <div className="flex flex-row items-center">
                        <h1 className="mr-1 text-3xl text-c1 ">{Team.City}</h1>
                        <h1 className="mr-2 text-3xl font-bold text-c1 ">
                          {Team.Name}
                        </h1>
                        {/* <FaLock className="w-5 h-5 fill-c1" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="flex flex-row items-center w-full my-4">
                  <div className="relative p-4 mr-2 border-2 rounded-full bg-blue-20 border-c1">
                    <BsFillHandIndexFill className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 fill-c1 left-1/2 top-1/2" />
                  </div>
                  <h1 className="text-2xl font-thin text-white whitespace-nowrap">
                    Pick a Team Below
                  </h1>
                </div>
              );
            }
          })()}
        </div>
        <div className="w-[100%] border-t-[.5px] border-c1"></div>
        <div className="relative w-full ">
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

          <div className="flex flex-col w-full mt-3 md:grid md:grid-cols-2 ">
            {matchUps.map((matchup, i) => {
              let gameDate = new Date(matchup.Date);

              return (
                <div
                  key={i}
                  className="flex flex-col w-full md:w-[90%] pb-2 mx-auto mb-2 border-b-2 border-c1"
                >
                  <div className="flex flex-row">
                    <h1 className="mr-1 text-lg font-bold text-c1">
                      {gameDate
                        .toLocaleString("en-US", {
                          weekday: "short",
                        })
                        .replace(",", "")}
                    </h1>
                    <h1 className="mr-2 text-lg text-c1">
                      {" "}
                      {(
                        gameDate.toLocaleString("en-US", {
                          day: "numeric",
                          month: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        }) + " ET"
                      ).replace(",", "")}
                    </h1>
                    {(() => {
                      if (!(matchup.Channel == "null")) {
                        return (
                          <h1 className="text-lg text-c2 ">
                            {matchup.Channel}
                          </h1>
                        );
                      }
                    })()}
                  </div>
                  <TeamButton
                    setShowPickPreview={setShowPickPreview}
                    gameKey={matchup.GameKey}
                    teamKey={matchup.HomeTeam}
                    selectedPick={selectedPick}
                    setSelectedPick={setSelectedPick}
                    setShowMenu={setShowMenu}
                    setSelectedGameKey={setSelectedGameKey}
                  />
                  <TeamButton
                    setShowPickPreview={setShowPickPreview}
                    gameKey={matchup.GameKey}
                    teamKey={matchup.AwayTeam}
                    selectedPick={selectedPick}
                    setSelectedPick={setSelectedPick}
                    setShowMenu={setShowMenu}
                    setSelectedGameKey={setSelectedGameKey}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PickMenu;
