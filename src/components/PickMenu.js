import React, { useState } from "react";
import nflTimeFrames from "../assets/data/nflTimeFrames.json";
import nflSchedule from "../assets/data/nflSchedule.json";
import TeamButton from "./TeamButton.js";
import { getTeamData } from "../logic.js";
import { BiRightArrow } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import WeekSelect from "./WeekSelect.js";
import PickPreview from "./PickPreview.js";
import { BiLockAlt } from "react-icons/bi";
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
  setShowPickPreview,
  showPickPreview,
  pool,
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

  const WeekSelector = (direction) => {
    if (weekView + direction <= 1) {
      setWeekView(1);
      document.getElementById("weekViewMinus").classList.add("invisible");
    } else if (weekView + direction >= nflTimeFrames.length) {
      setWeekView(nflTimeFrames.length);
      document.getElementById("weekViewPlus").classList.add("invisible");
    } else {
      setWeekView(weekView + direction);
      document.getElementById("weekViewPlus").classList.remove("invisible");
      document.getElementById("weekViewMinus").classList.remove("invisible");
    }
  };
  return (
    <>
      {(() => {
        if (pool.Status == "Not Joined") {
          return (
            <div
              id="lockPool"
              className="absolute z-50 flex flex-col items-center w-full h-[90%] bg-back60 "
            >
              <BiLockAlt className="mx-auto mt-10 w-60 h-60 fill-c1" />
              <button className="bg-c5 rounded-[10px] text-white w-fit p-4 text-3xl  font-bold mx-auto hover:bg-c2 ">
                Join Pool
              </button>
            </div>
          );
        }
      })()}

      <div className="ml-4 max-w-[1500px] hidden md:block">
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
      <div className="flex flex-col    w-full    rounded-[10px]  h-fit mt-4 relative max-w-[1500px] bg-white02">
        <div className="flex flex-col items-center justify-between w-[90%] mx-auto lg:flex-row md:mb-4 ">
          <div className="flex flex-row items-center justify-between w-full">
            <button
              className="block md:hidden"
              id="weekViewMinus"
              onClick={() => WeekSelector(-1)}
            >
              <BiRightArrow className="w-6 h-6 rotate-180 fill-c5" />
            </button>
            <h1 className="text-c1 text-7xl font-bold mr-4 whitespace-nowrap mb-1 w-[fit-content]  ">
              {"Week " + weekView}
            </h1>
            <button
              className="block md:hidden"
              id="weekViewPlus"
              onClick={() => WeekSelector(1)}
            >
              <BiRightArrow className="w-6 h-6 fill-c5" />
            </button>
          </div>
          {(() => {
            if (thisWeeksPrediction) {
              let Team = getTeamData(thisWeeksPrediction.selectedWinner);
              return (
                <div className="flex flex-row items-center w-fit">
                  <div className="text-base font-bold text-white sm:text-lg md:text-2xl whitespace-nowrap">
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
                        className="w-8 h-8 mr-4 md:w-14 md:h-14"
                      />

                      <div className="flex flex-row items-center">
                        <h1 className="mr-1 text-base sm:text-2xl whitespace-nowrap text-c1 ">
                          {Team.City}
                        </h1>
                        <h1 className="mr-2 text-base font-bold sm:text-2xl text-c1 ">
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
                <>
                  <div className="flex w-[fit-content] xl:mr-6 flex-row mt-2  items-center  text-c5  border-c5 border-2 bg-c5_20 rounded-b-[5px]  px-2  top-0 mx-auto md:left-[50%]">
                    <h1 className="mr-2 text-[16px] md:text-xl whitespace-nowrap">
                      Pick deadline
                    </h1>
                    <h1 className=" rounded-[5px]  whitespace-nowrap text-[16px] md:text-xl px-1">
                      {date.toLocaleString("en-US", {
                        day: "numeric",
                        month: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      }) + " ET"}
                    </h1>
                  </div>

                  <div className="flex flex-row items-center w-full my-4">
                    <div className="relative p-4 mr-2 border-2 rounded-full bg-blue-20 border-c1">
                      <BsFillHandIndexFill className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 fill-c1 left-1/2 top-1/2" />
                    </div>
                    <h1 className="text-2xl font-thin text-white whitespace-nowrap">
                      Pick a Team Below
                    </h1>
                  </div>
                </>
              );
            }
          })()}
        </div>
        <div className="w-[100%] border-t-[.5px] border-c1"></div>
        <div className="w-full px-3">
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
